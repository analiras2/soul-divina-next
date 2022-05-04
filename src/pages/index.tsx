import type { NextPage } from 'next';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Home: NextPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography fontWeight="400" fontSize={48} color="primary" align="center">
        Soul Divina
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
          centered
        >
          <Tab label="Ervas" />
          <Tab label="Banhos" />
          <Tab label="Quem somos" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Ervas
      </TabPanel>
      <TabPanel value={value} index={1}>
        Banhos
      </TabPanel>
      <TabPanel value={value} index={2}>
        Soul Divina
      </TabPanel>
    </Box>
  );
};

export default Home;
