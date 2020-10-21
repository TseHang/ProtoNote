import { ColorMode } from '@/constants';
import { makeVar } from '@apollo/client';

export const globalConfigVar = makeVar({ colorMode: ColorMode.Light });
