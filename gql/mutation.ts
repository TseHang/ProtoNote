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

export const UPDATE_NOTE = gql`
  mutation UpdateNote($id: ID!, $content: String!) {
    updateNote(id: $id, content: $content) {
      id
      content
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;
