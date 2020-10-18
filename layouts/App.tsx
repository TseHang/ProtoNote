import React from 'react';
import styled from 'styled-components';

import TopBar from '@/components/TopBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  background: gray;
  height: 100%;
`;

const AppLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <TopBar />
      <MainContainer>{children}</MainContainer>
    </Container>
  );
};

export default AppLayout;
