import React, { createContext, useState, useContext } from 'react';
import { TabsValue } from '~components/layout/types';

type HomeTabMenuProps = {
  currentMenu: string;
  setCurrentMenu: (c: string) => void;
};

type HomeTabMenuProviderProps = {
  children: React.ReactNode;
};

const HomeTabMenuContext = createContext<HomeTabMenuProps>({
  currentMenu: 'therapies',
  setCurrentMenu: () => {},
});

const HomeTabMenuProvider = ({
  children,
}: HomeTabMenuProviderProps): JSX.Element => {
  const [currentMenu, setCurrentMenu] = useState<string>(TabsValue.Therapies);

  return (
    <HomeTabMenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
      {children}
    </HomeTabMenuContext.Provider>
  );
};

export const useHomeTabMenu = () => {
  const context = useContext(HomeTabMenuContext);
  if (!context)
    throw new Error('useHomeTabMenu must be used within a HomeTabMenuProvider');
  const { currentMenu, setCurrentMenu } = context;

  return { currentMenu, setCurrentMenu };
};

export default HomeTabMenuProvider;
