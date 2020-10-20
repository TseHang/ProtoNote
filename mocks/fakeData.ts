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
    id: 'f7d398a9-8e66-4965-a1a2-1448b4c6f058',
    name: 'My first note',
    content: 'encrypt:# Hello, *world*!',
    createdAt: new Date().getTime(),
  },
  {
    __typename: 'Note',
    id: 'a7868be4-9e35-4a8e-9264-dc7dda3aa2ab',
    name: 'My second note',
    content: 'encrypt:# Hello, *second*!',
    createdAt: new Date('2020-10-20').getTime(),
  },
  {
    __typename: 'Note',
    id: '508d6f17-2684-41c7-b2f3-ea10f8386dcb',
    name: 'My third note',
    content: 'encrypt:# Hello, *third*!',
    createdAt: new Date('2020-10-19').getTime(),
  },
];
