import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { EditorMode } from '@/constants';
import { setEditorMode } from '@/gql/editorModeCache';
import { DELETE_NOTE, UPDATE_NOTE } from '@/gql/mutation';
import {
  DeleteNote,
  DeleteNoteVariables,
  GetNotes_notes,
  UpdateNote,
  UpdateNoteVariables,
} from '@/typings/gql';
import { decrypt, encrypt } from '@/utils/security';
import { useMutation } from '@apollo/client';

import ContentTopBar from './ContantTopBar';
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

type Props = { note: GetNotes_notes };

const Content: React.FC<Props> = ({ note }) => {
  const [clearContent, setClearContent] = useState<string | null>(null);
  const [isEncrypting, setIsEncrypting] = useState<boolean>(false);

  // decrypt dirty content
  useEffect(() => {
    async function decryptContent() {
      setClearContent(await decrypt(note.content));
    }
    decryptContent();
  }, [note.content]);

  const onEdit = useCallback(() => setEditorMode(EditorMode.Edit), []);
  const onCancel = useCallback(() => setEditorMode(EditorMode.View), []);

  const [deleteNote] = useMutation<DeleteNote, DeleteNoteVariables>(
    DELETE_NOTE,
    {
      variables: { id: note.id },
      onCompleted: () => setEditorMode(EditorMode.View),
      update: (cache, result) => {
        if (result.data?.deleteNote) {
          cache.modify({
            fields: {
              notes(existingRefs = [], { readField }) {
                return existingRefs.filter(
                  (ref: any) => note.id !== readField('id', ref),
                );
              },
              note(_, { DELETE }) {
                return DELETE;
              },
            },
          });
        }
      },
    },
  );

  const [updateNote, { loading }] = useMutation<
    UpdateNote,
    UpdateNoteVariables
  >(UPDATE_NOTE, {
    onCompleted: () => setEditorMode(EditorMode.View),
  });

  const onSave = useCallback(async () => {
    if (clearContent !== null) {
      // encrypt clear data to dirty format
      setIsEncrypting(true);
      const encryptedContent = await encrypt(clearContent);
      updateNote({
        variables: { id: note.id, content: encryptedContent },
      });
      setIsEncrypting(false);
    }
  }, [updateNote, clearContent]);

  return (
    <Wrapper>
      <ContentTopBar name={note.name} />
      <div style={{ flex: 1, padding: '.5em', overflowY: 'scroll' }}>
        <ContentView
          content={clearContent}
          onChangeContent={setClearContent}
          isLoading={loading || isEncrypting}
        />
      </div>
      <ContentBottomBar
        isLoading={!clearContent || loading || isEncrypting}
        onEdit={onEdit}
        onCancel={onCancel}
        onSave={onSave}
        onDelete={deleteNote}
      />
    </Wrapper>
  );
};

export default Content;
