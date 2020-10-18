import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  padding: .5em 1em;
  border-bottom: solid 1px;
`;

type Props = {
  notes: any[];
}

const NotesList: React.FC<Props> = ({ notes }) => {
  return (
    <div style={{ flex: 1, overflow: 'scroll' }}>
      {notes.map(d => (
        <ItemWrapper key={d.id} >{d.name}</ItemWrapper>
      ))}
    </div>
  );
};

export default NotesList;
