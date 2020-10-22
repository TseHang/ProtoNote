import { gql } from '@apollo/client';

export const NoteFragments = {
  newNote: gql`
    fragment NewNote on Note {
      id
      name
      content
      createdAt
    }
  `,
};
