import React from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Logo from '~res/assets/logo-s.svg';
import Strings from '~res/strings';
import Link from 'next/link';
import { LinkTabProps, Props, TabsValue } from './types';
import { useHomeTabMenu } from '~context/HomeTabMenu';

const LinkTab = ({ href, ...props }: LinkTabProps) => (
  <Link href={href}>
    <Tab component="a" {...props} />
  </Link>
);

const Layout = ({ children }: Props) => {
  const { currentMenu, setCurrentMenu } = useHomeTabMenu();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentMenu(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 1,
        }}
      >
        <Logo style={{ height: '60px', width: '60px', marginRight: 16 }} />
        <Typography
          fontWeight="bold"
          fontSize={40}
          color="primary"
          align="center"
        >
          {Strings.appName}
        </Typography>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={currentMenu}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          centered
        >
          <LinkTab
            label={Strings.therapy.title}
            href="/therapies"
            value={TabsValue.Therapies}
          />
          <LinkTab
            label={Strings.bath.title}
            href="/baths"
            value={TabsValue.Baths}
          />
          <LinkTab
            label={Strings.about.title}
            href="/about"
            value={TabsValue.About}
          />
        </Tabs>
      </Box>
      <Box sx={{ padding: '50px 100px' }}>{children}</Box>
    </Box>
  );
};

export default Layout;
