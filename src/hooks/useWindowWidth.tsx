import { useState, useEffect } from 'react';

import { getWindowWidthWithoutScrollbar } from '../utils/getWindowWidthWithoutScrollbar';

export const useWindowWidth = (): number => {
  const [width, setWidth] = useState(getWindowWidthWithoutScrollbar());

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWindowWidthWithoutScrollbar());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};
