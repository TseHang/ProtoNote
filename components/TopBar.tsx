import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import styled from 'styled-components';

import { EditorMode, TOPBAR_HEIGHT } from '@/constants';
import { editorModeVar, setEditorMode } from '@/gql/editorModeCache';
import { NoteFragments } from '@/gql/fragments';
import { CREATE_NOTE } from '@/gql/mutation';
import { CreateNote, CreateNoteVariables } from '@/typings/gql';
import { media } from '@/utils/theme';
import { useMutation, useReactiveVar } from '@apollo/client';

import ToggleTheme from './ToggleTheme';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${TOPBAR_HEIGHT};
  border-bottom: solid 2px ${p => p.theme.colors.border};
  padding: 0 2em;
  background-color: ${p => p.theme.colors.contentBackground};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  max-width: 250px;
  padding: 0.5em 1em;
  color: white;
  font-size: 1.2rem;
  background: ${p => p.theme.colors.main};
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};

  ${media('pad')} {
    width: 50%;
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const StyledPlus = styled(BiPlusMedical)`
  margin-right: 10px;
  ${media('pad')} {
    margin-right: 5px;
  }
`;

const TopBar: React.FC = () => {
  const { push } = useRouter();
  const editorMode = useReactiveVar(editorModeVar);
  const [createNote] = useMutation<CreateNote, CreateNoteVariables>(
    CREATE_NOTE,
    {
      variables: { name: 'NEW NOTE!!!' },
      update: (cache, res) => {
        if (res.data?.createNote) {
          const newNote = res.data.createNote;
          cache.modify({
            fields: {
              notes(existingRefs = []) {
                const newNoteRef = cache.writeFragment({
                  data: newNote,
                  fragment: NoteFragments.newNote,
                });
                return [...existingRefs, newNoteRef];
              },
            },
          });
        }
      },
      onCompleted: data => {
        push(`/?noteId=${data.createNote.id}`);
        setEditorMode(EditorMode.Edit);
      },
    },
  );
  return (
    <Wrapper>
      <Button
        onClick={() => createNote()}
        disabled={editorMode === EditorMode.Edit}
      >
        <StyledPlus size="20px" />
        New note
      </Button>
      <ToggleTheme />
    </Wrapper>
  );
};

export default TopBar;
