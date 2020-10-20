import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { EditorMode } from '@/constants';
import { GetNotes_notes } from '@/typings/gql';
import { decrypt } from '@/utils/security';

import ContentBottomBar from './ContentBottomBar';

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
  const [mode, setMode] = useState<EditorMode>(EditorMode.View);
  const [clearContent, setClearContent] = useState<string | null>(null);

  useEffect(() => {
    async function decryptContent() {
      setClearContent(null);
      setClearContent(await decrypt(note.content));
    }
    decryptContent();
  }, [note]);

  return (
    <Wrapper>
      <Title>{note.name}</Title>
      <div style={{ flex: 1, padding: '.5em' }}>
        {clearContent ? (
          <ReactMarkdown>{clearContent}</ReactMarkdown>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <ContentBottomBar
        mode={mode}
        onEdit={() => setMode(EditorMode.Edit)}
        onCancel={() => setMode(EditorMode.View)}
        onSave={() => alert('save')}
        onDelete={() => alert('delete')}
      />
    </Wrapper>
  );
};

export default Content;
