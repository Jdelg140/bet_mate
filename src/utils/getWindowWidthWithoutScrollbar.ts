export const getWindowWidthWithoutScrollbar = () => {
  if (typeof window !== 'undefined') {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const windowWidthWithoutScrollbar = window.innerWidth - scrollbarWidth;
    return windowWidthWithoutScrollbar;
  }
  return 0;
};
