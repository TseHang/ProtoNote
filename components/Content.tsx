import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { EditorMode } from '@/constants';
import fakeData from '@/fakeData';

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

const Content: React.FC = () => {
  const data = fakeData[0];
  return (
    <Wrapper>
      <Title>{data.name}</Title>
      <div style={{ flex: 1, padding: '.5em' }}>
        <ReactMarkdown>{data.content}</ReactMarkdown>
      </div>
      <ContentBottomBar mode={EditorMode.Edit}/>
    </Wrapper>
  );
};

export default Content;
