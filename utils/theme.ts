export const breakpoints = {
  phone: '380',
  pad: '720',
  desktop: '992',
  largeDesktop: '1440',
};

/**
 * @param {string} threshold
 * @param {string} displayWay 'max' or 'min'
 */
export const media = (
  threshold: 'phone' | 'pad' | 'desktop' | 'largeDesktop',
  displayWay: 'max' | 'min' = 'max',
) => {
  const breakpoint = breakpoints[threshold];
  return `@media (${displayWay}-width: ${breakpoint}px)`;
};
