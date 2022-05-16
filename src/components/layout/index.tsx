import React from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Logo from '~res/assets/logo-s.svg';
import Strings from '~res/strings';
import Link from 'next/link';

interface Props {
  children: JSX.Element;
}

interface LinkTabProps {
  label?: string;
  href: string;
}

const LinkTab = ({ href, ...props }: LinkTabProps) => (
  <Link href={href}>
    <Tab component="a" {...props} />
  </Link>
);

const Layout = ({ children }: Props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 2,
        }}
      >
        <Logo style={{ height: 80, width: 80, marginRight: 16 }} />
        <Typography
          fontWeight="bold"
          fontSize={48}
          color="primary"
          align="center"
        >
          {Strings.appName}
        </Typography>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          centered
        >
          <LinkTab label={Strings.therapy.title} href="/therapies" />
          <LinkTab label={Strings.bath.title} href="/baths" />
          <LinkTab label={Strings.about.title} href="/about" />
        </Tabs>
      </Box>
      <Box sx={{ padding: '32px' }}>{children}</Box>
    </Box>
  );
};

export default Layout;
