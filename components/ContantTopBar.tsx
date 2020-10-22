import Link from 'next/link';
import React, { useState } from 'react';
import { BiPencil, BiX } from 'react-icons/bi';
import styled from 'styled-components';

import { EditorMode } from '@/constants';
import { editorModeVar } from '@/gql/editorModeCache';
import { colors } from '@/styles/theme';
import { media } from '@/utils/theme';
import { useReactiveVar } from '@apollo/client';

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  border-bottom: solid 3px ${p => p.theme.colors.border};
  font-weight: bold;
  font-size: 1.2em;
  background: ${p => p.theme.colors.lightMain};

  > p {
    margin: 0;
  }
`;

const StyledButton = styled.button`
  color: ${p => (p.disabled ? colors.gray[500] : p.theme.colors.documentColor)};
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
`;

const StyledInput = styled.input<{ isFocus?: boolean }>`
  margin-left: 5px;
  margin-right: auto;
  color: ${p => p.theme.colors.documentColor};
  border-bottom: ${p =>
    p.isFocus ? `solid 1.5px ${p.theme.colors.main}` : 'none'};
  width: 60%;
  ${media('pad')} {
    width: 80%;
  }
`;

type Props = { name: string; onChangeName: (name: string) => void };

const ContentTopBar: React.FC<Props> = ({ name, onChangeName }) => {
  const editorMode = useReactiveVar(editorModeVar);
  const [focused, setFocused] = useState(false);

  const isEditMode = editorMode === EditorMode.Edit;
  return (
    <Title>
      {isEditMode && <BiPencil size="20px" />}
      {isEditMode ? (
        <StyledInput
          isFocus={focused}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={name}
          onChange={e => onChangeName(e.target.value)}
        />
      ) : (
        <p>{name}</p>
      )}
      <Link href="/">
        <StyledButton disabled={editorMode === EditorMode.Edit}>
          <BiX size="30px" />
        </StyledButton>
      </Link>
    </Title>
  );
};

export default React.memo(ContentTopBar);
