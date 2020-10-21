import Link, { LinkProps } from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { EditorMode } from '@/constants';
import { editorModeVar } from '@/gql/editorModeCache';
import { GetNotes_notes } from '@/typings/gql';
import { useReactiveVar } from '@apollo/client';

const Item = styled.a`
  display: flex;
  margin: 0.5rem 1rem;
  padding: 0.5rem 1rem;
  background: white;
  height: 50px;
  align-items: center;
  text-decoration: none;

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

const EmptyWrapper: React.FC = ({ children }) => <>{children}</>;
const LinkWrapper: React.FC<React.PropsWithChildren<LinkProps>> = ({
  href,
  children,
  ...props
}) => (
  <Link href={href} {...props}>
    {children}
  </Link>
);

const NotesList: React.FC<Props> = ({ notes }) => {
  const editorMode = useReactiveVar(editorModeVar);
  const isEditorEditMode = editorMode === EditorMode.Edit;
  const ItemWrapper = isEditorEditMode ? EmptyWrapper : LinkWrapper;
  return (
    <div style={{ flex: 1, overflow: 'scroll' }}>
      {notes.map(note => (
        <ItemWrapper key={note.id} href={`/?noteId=${note.id}`} passHref>
          <Item style={{ cursor: isEditorEditMode ? 'default' : 'pointer' }}>
            <p>{note.name}</p>
          </Item>
        </ItemWrapper>
      ))}
    </div>
  );
};

export default NotesList;
