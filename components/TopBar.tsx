import React from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import styled from 'styled-components';

import { TOPBAR_HEIGHT } from '@/constants';
import { CREATE_NOTE } from '@/gql/mutation';
import { GET_NOTES } from '@/gql/queries';
import { CreateNote, CreateNoteVariables } from '@/typings/gql';
import { useMutation } from '@apollo/client';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${TOPBAR_HEIGHT};
  border-bottom: solid 2px;
  padding: 0 2em;
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
  cursor: pointer;
`;

const TopBar: React.FC = () => {
  const [createNote] = useMutation<CreateNote, CreateNoteVariables>(
    CREATE_NOTE,
    {
      variables: { name: 'NEW NOTE!!!' },
      refetchQueries: [{ query: GET_NOTES }],
    },
  );
  return (
    <Wrapper>
      <Button onClick={() => createNote()}>
        <BiPlusMedical size="20px" style={{ marginRight: '10px' }} />
        New note
      </Button>
    </Wrapper>
  );
};

export default TopBar;
