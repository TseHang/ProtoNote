export const TOPBAR_HEIGHT = '66px';

export enum EditorMode {
  Edit = 'EDIT',
  View = 'VIEW',
}

export const isServer = typeof window === 'undefined';

export const isDev = process.env.NODE_ENV === 'development';

export enum ColorMode {
  Light = 'light',
  Dark = 'dark',
}