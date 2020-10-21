import React, { ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  icon: ReactElement;
  name: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Wrapper = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  background: none;

  &:hover {
    color: ${p => (p.disabled ? 'initial' : p.theme.colors.main)};
  }
`;

const ContentIcon: React.FC<Props> = ({ icon, name, className, onClick }) => {
  return (
    <Wrapper className={className} onClick={onClick} disabled={!onClick}>
      {icon}
      <span>{name}</span>
    </Wrapper>
  );
};

export default ContentIcon;
