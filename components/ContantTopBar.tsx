import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  border-bottom: solid 3px;
  font-weight: bold;
  font-size: 1.2em;
  background: ${p => p.theme.colors.lightMain};

  > p {
    margin: 0;
  }
`;

type Props = { name: string };

const ContentTopBar: React.FC<Props> = ({ name }) => {
  return <Title>{name}</Title>;
};

export default React.memo(ContentTopBar);
