import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { GetNotes_notes } from '@/typings/gql';

const ItemWrapper = styled.a`
  display: flex;
  margin: 0.5rem 1rem;
  padding: 0.5rem 1rem;
  background: white;
  height: 50px;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.lightMain};
  }

  &:first-child {
    margin-top: 1rem;
  }

  &:last-child {
    margin-bottom: 1rem;
  }
`;

type Props = {
  notes: GetNotes_notes[];
};

const NotesList: React.FC<Props> = ({ notes }) => {
  return (
    <div style={{ flex: 1, overflow: 'scroll' }}>
      {notes.map(note => (
        <Link key={note.id} href={`/?noteId=${note.id}`}>
          <ItemWrapper>
            <p>{note.name}</p>
          </ItemWrapper>
        </Link>
      ))}
    </div>
  );
};

export default NotesList;
