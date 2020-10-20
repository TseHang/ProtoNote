import { v4 as uuidv4 } from 'uuid';

interface Note {
  id: string;
  name: string;
  content: string;
  createdAt: number;
}

export const notes: Note[] = [
  {
    id: uuidv4(),
    name: 'My first note',
    content: '# Hello, *world*!',
    createdAt: (new Date()).getTime(),
  },
  {
    id: uuidv4(),
    name: 'My second note',
    content: '# Hello, *second*!',
    createdAt: (new Date('2020-10-20')).getTime(),
  },
  {
    id: uuidv4(),
    name: 'My third note',
    content: '# Hello, *third*!',
    createdAt: (new Date('2020-10-19')).getTime(),
  },
]


// export const createNote = (name: string) => {
//   const newNote = {
//     id: uuidv4(),
//     name,
//     content: 'encrypt:',
//     createdAt: new Date(),
//   };
//   // notesVar([...notesVar(), newNote]);
// };

// export const updateNote = async (id: string, content: string) => {
//   const idx = notes.findIndex(n => n.id === id);
//   const updated = { ...notes[idx], content: await encrypt(content) };
//   return notesVar(notes.splice(idx, 1, updated));
// };
