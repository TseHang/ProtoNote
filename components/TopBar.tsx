import React from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20%;
  max-height: 60px;
  border-bottom: solid 2px;
  padding: 0 2em;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  max-width: 250px;
  padding: 0.5em 1em;
  color: white;
  background: ${p => p.theme.colors.main};
  cursor: pointer;
`;

const TopBar: React.FC = () => {
  return (
    <Wrapper>
      <Button>
        <BiPlusMedical size="20px" style={{ marginRight: '10px' }}/>
        New note
      </Button>
    </Wrapper>
  );
};

export default TopBar;
