import { useState, useEffect } from 'react';

export enum Type {
  DESKTOP,
  TABLET,
  MOBILE,
}

const useViewport = (): Type => {
  const [viewport, setViewport] = useState<Type>(Type.DESKTOP);

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 600
        ? setViewport(Type.MOBILE)
        : window.innerWidth > 1025
        ? setViewport(Type.DESKTOP)
        : setViewport(Type.TABLET);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};

export default useViewport;
