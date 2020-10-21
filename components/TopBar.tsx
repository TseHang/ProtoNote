import React from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import styled from 'styled-components';

import { EditorMode, TOPBAR_HEIGHT } from '@/constants';
import { editorModeVar } from '@/gql/editorModeCache';
import { CREATE_NOTE } from '@/gql/mutation';
import { GET_NOTES } from '@/gql/queries';
import { CreateNote, CreateNoteVariables } from '@/typings/gql';
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
`;

const TopBar: React.FC = () => {
  const editorMode = useReactiveVar(editorModeVar);
  const [createNote] = useMutation<CreateNote, CreateNoteVariables>(
    CREATE_NOTE,
    {
      variables: { name: 'NEW NOTE!!!' },
      refetchQueries: [{ query: GET_NOTES }],
    },
  );
  return (
    <Wrapper>
      <Button
        onClick={() => createNote()}
        disabled={editorMode === EditorMode.Edit}
      >
        <BiPlusMedical size="20px" style={{ marginRight: '10px' }} />
        New note
      </Button>
      <ToggleTheme />
    </Wrapper>
  );
};

export default TopBar;
