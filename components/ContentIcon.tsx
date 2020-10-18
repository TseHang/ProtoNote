import React, { ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  icon: ReactElement;
  name: string;
  className?: string;
};

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .8rem;

  &:hover {
    color: ${p => p.theme.colors.main};
  }
`;

const ContentIcon: React.FC<Props> = ({ icon, name, className }) => {
  return (
    <Wrapper className={className}>
      {icon}
      <span>{name}</span>
    </Wrapper>
  );
};

export default ContentIcon;