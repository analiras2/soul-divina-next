import React, { useEffect } from 'react';
import { TabsValue } from '~components/layout/types';
import { useHomeTabMenu } from '~context/HomeTabMenu';

const Baths = (props) => {
  const { setCurrentMenu } = useHomeTabMenu();

  useEffect(() => {
    setCurrentMenu(TabsValue.Baths);
  }, []);

  return <p>Baths</p>;
};
export default Baths;
