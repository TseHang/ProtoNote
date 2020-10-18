import React from 'react';
import styled from 'styled-components';

import TopBar from '@/components/TopBar';
import { TOPBAR_HEIGHT } from '@/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  height: calc(100% -  ${TOPBAR_HEIGHT});
  background: ${p => p.theme.colors.bg};
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
