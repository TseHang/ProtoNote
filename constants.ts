export const TOPBAR_HEIGHT = '66px';

export enum EditorMode {
  Edit = 'EDIT',
  View = 'VIEW',
}

export const isServer = typeof window === 'undefined';

export enum ColorMode {
  Light = 'light',
  Dark = 'dark',
}