import { gql } from '@apollo/client';

export const CREATE_NOTE = gql`
  mutation CreateNote($name: String!) {
    createNote(name: $name) {
      id
      name
      content
      createdAt
    }
  }
`;
