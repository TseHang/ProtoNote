import React from 'react';
import { BiEditAlt, BiSave, BiTrash, BiX } from 'react-icons/bi';
import styled from 'styled-components';

import { EditorMode } from '@/constants';
import { editorModeVar } from '@/gql/editorModeCache';
import { useReactiveVar } from '@apollo/client';

import ContentIcon from './ContentIcon';

const Wrapper = styled.div<{ mode: EditorMode }>`
  display: flex;
  justify-content: ${p =>
    p.mode === EditorMode.View ? 'flex-end' : 'space-between'};
  border-top: solid 3px;
  padding: 0.5em 1em;
`;

const SaveIcon = styled(ContentIcon)`
  margin-left: auto;
  margin-right: 2em;
`;

type Props = {
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
};

const ContentBottomBar: React.FC<Props> = ({
  onDelete,
  onSave,
  onEdit,
  onCancel,
}) => {
  const editorMode = useReactiveVar(editorModeVar);
  return (
    <Wrapper mode={editorMode}>
      {editorMode === EditorMode.View ? (
        <ContentIcon
          icon={<BiEditAlt size="30px" />}
          name="Edit"
          onClick={onEdit}
        />
      ) : (
        <>
          <ContentIcon
            icon={<BiX size="30px" />}
            name="Cancel"
            onClick={onCancel}
          />
          <SaveIcon
            icon={<BiSave size="30px" />}
            name="Save"
            onClick={onSave}
          />
          <ContentIcon
            icon={<BiTrash size="30px" />}
            name="Delete"
            onClick={onDelete}
          />
        </>
      )}
    </Wrapper>
  );
};

export default React.memo(ContentBottomBar);
