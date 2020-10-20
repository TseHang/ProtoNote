import React, { useCallback } from 'react';
import styled from 'styled-components';

import { EditorMode } from '@/constants';
import { editorModeVar, setEditorMode } from '@/gql/editorModeCache';
import { GetNotes_notes } from '@/typings/gql';
import { useReactiveVar } from '@apollo/client';

import ContentBottomBar from './ContentBottomBar';
import ContentView from './ContentView';

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-left: solid 1px;
  background: white;
`;

const Title = styled.div`
  padding: 0.5em 1em;
  border-bottom: solid 3px;
  font-weight: bold;
  font-size: 1.2em;
  background: ${p => p.theme.colors.lightMain};
`;

type Props = { note: GetNotes_notes };

const Content: React.FC<Props> = ({ note }) => {
  const editorMode = useReactiveVar(editorModeVar);

  const onEdit = useCallback(() => setEditorMode(EditorMode.Edit), []);
  const onCancel = useCallback(() => setEditorMode(EditorMode.Edit), []);
  return (
    <Wrapper>
      <Title>{note.name}</Title>
      <div style={{ flex: 1, padding: '.5em', overflowY: 'scroll' }}>
        {/* key for re-render when noteId changed */}
        <ContentView key={note.id} content={note.content} mode={editorMode} />
      </div>
      <ContentBottomBar
        mode={editorMode}
        onEdit={onEdit}
        onCancel={onCancel}
        onSave={() => alert('save')}
        onDelete={() => alert('delete')}
      />
    </Wrapper>
  );
};

export default Content;
