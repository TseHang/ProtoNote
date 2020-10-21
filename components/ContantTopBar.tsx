import Link from 'next/link';
import React from 'react';
import { BiX } from 'react-icons/bi';
import styled from 'styled-components';

import { EditorMode } from '@/constants';
import { editorModeVar } from '@/gql/editorModeCache';
import { colors } from '@/styles/theme';
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

type Props = { name: string };

const ContentTopBar: React.FC<Props> = ({ name }) => {
  const editorMode = useReactiveVar(editorModeVar);
  return (
    <Title>
      <p>{name}</p>
      <Link href="/">
        <StyledButton disabled={editorMode === EditorMode.Edit}>
          <BiX size="30px" />
        </StyledButton>
      </Link>
    </Title>
  );
};

export default React.memo(ContentTopBar);
