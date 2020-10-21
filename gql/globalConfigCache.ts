import { ColorMode } from '@/constants';
import { makeVar } from '@apollo/client';

export const globalConfigVar = makeVar({ colorMode: ColorMode.Dark });

export const setColorMode = (colorMode: ColorMode) =>
  globalConfigVar({
    ...globalConfigVar(),
    colorMode,
  });
