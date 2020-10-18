import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import AppLayout from '@/layouts/App';

const StyledLink = styled.a`
  color: ${p => p.theme.colors.main};
  text-decoration: underline;
`;

const App = () => {
  return (
    <AppLayout>
      123
      <Link href="/test">
        <StyledLink>go test</StyledLink>
      </Link>
    </AppLayout>
  );
};

export default App;
