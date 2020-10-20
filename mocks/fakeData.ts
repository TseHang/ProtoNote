import { v4 as uuidv4 } from 'uuid';

export interface Note {
  __typename: 'Note';
  id: string;
  name: string;
  content: string;
  createdAt: number;
}

export const notes: Note[] = [
  {
    __typename: 'Note',
    id: uuidv4(),
    name: 'My first note',
    content: 'encrypt:# Hello, *world*!',
    createdAt: new Date().getTime(),
  },
  {
    __typename: 'Note',
    id: uuidv4(),
    name: 'My second note',
    content: 'encrypt:# Hello, *second*!',
    createdAt: new Date('2020-10-20').getTime(),
  },
  {
    __typename: 'Note',
    id: uuidv4(),
    name: 'My third note',
    content: 'encrypt:# Hello, *third*!',
    createdAt: new Date('2020-10-19').getTime(),
  },
];
