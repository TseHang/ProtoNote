import React from 'react';
import { BiEditAlt, BiSave, BiTrash, BiX } from 'react-icons/bi';
import styled from 'styled-components';

import { EditorMode } from '@/constants';

import ContentIcon from './ContentIcon';

const Wrapper = styled.div<{ mode: EditorMode }>`
  display: flex;
  justify-content: ${p =>p.mode === EditorMode.View ? 'flex-end' : 'space-between'};
  border-top: solid 1px;
  padding: 0.5em 1em;
`;

const SaveIcon = styled(ContentIcon)`
  margin-left: auto;
  margin-right: 2em;
`;

type Props = {
  mode: EditorMode;
};

const ContentBottomBar: React.FC<Props> = ({ mode }) => {
  return (
    <Wrapper mode={mode}>
      {mode === EditorMode.View ? (
        <ContentIcon icon={<BiEditAlt size="30px" />} name="Edit" />
      ) : (
        <>
          <ContentIcon icon={<BiX size="30px" />} name="Cancel" />
          <SaveIcon icon={<BiSave size="30px" />} name="Save" />
          <ContentIcon icon={<BiTrash size="30px" />} name="Delete" />
        </>
      )}
    </Wrapper>
  );
};

export default ContentBottomBar;
