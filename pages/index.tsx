import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${p => p.theme.colors.main};
  text-decoration: underline;
`;

const App = () => {
  return (
    <div>
      123
      <Link href="/test">
        <StyledLink>go test</StyledLink>
      </Link>
    </div>
  );
};

export default App;
