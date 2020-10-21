import { graphql } from 'msw';
import { v4 as uuidv4 } from 'uuid';

import { Note, notes } from './fakeData';

export const handlers = [
  graphql.query('GetNotes', (req, res, ctx) => {
    return res(ctx.data({ notes }));
  }),

  graphql.query('GetNote', (req, res, ctx) => {
    const { id } = req.variables;
    const match = notes.find(note => note.id === id);
    return res(ctx.data({ note: match ?? null }));
  }),

  graphql.mutation('CreateNote', (req, res, ctx) => {
    const { name } = req.variables;
    const newNote: Note = {
      __typename: 'Note',
      id: uuidv4(),
      name,
      content: 'encrypt:',
      createdAt: new Date().getTime(),
    };
    notes.push(newNote);
    return res(ctx.data({ createNote: newNote }));
  }),

  graphql.mutation('UpdateNote', (req, res, ctx) => {
    const { id, content } = req.variables;
    const idx = notes.findIndex(n => n.id === id);
    if (idx < 0) {
      return res(
        ctx.errors([
          {
            message: 'Note not found',
            extensions: { id },
          },
        ]),
      );
    }

    notes[idx].content = content; // update note
    return res(ctx.data({ updateNote: notes[idx] }));
  }),

  graphql.mutation('DeleteNote', (req, res, ctx) => {
    const { id } = req.variables;
    const idx = notes.findIndex(n => n.id === id);
    if (idx < 0) {
      return res(
        ctx.errors([
          {
            message: 'Note not found',
            extensions: { id },
          },
        ]),
      );
    }
    notes.splice(idx, 1); // delete note
    return res(ctx.data({ deleteNote: true }));
  }),
];
