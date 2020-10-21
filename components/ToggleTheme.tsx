import styled from 'styled-components';

import { ColorMode } from '@/constants';
import { globalConfigVar, setColorMode } from '@/gql/globalConfigCache';
import { useReactiveVar } from '@apollo/client';

const ToggleTheme = () => {
  const { colorMode } = useReactiveVar(globalConfigVar);
  const isLight = colorMode === ColorMode.Light;

  return (
    <ToggleContainer
      isLight={isLight}
      onClick={() => setColorMode(isLight ? ColorMode.Dark : ColorMode.Light)}
    >
      <img src="https://image.flaticon.com/icons/svg/1164/1164954.svg" />
      <img src="https://image.flaticon.com/icons/svg/2033/2033921.svg" />
    </ToggleContainer>
  );
};

export default ToggleTheme;

const ToggleContainer = styled.button<{ isLight: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${p => p.theme.colors.gradient};
  width: 6rem;
  border-radius: 30px;
  border: 2px solid ${p => p.theme.colors.border};
  overflow: hidden;
  cursor: pointer;

  img {
    max-width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ isLight }) =>
        isLight ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ isLight }) =>
        isLight ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;
