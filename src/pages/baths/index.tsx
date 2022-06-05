import React, { useEffect } from 'react';
import BathCard from '~components/bathCard';
import { TabsValue } from '~components/layout/types';
import { useHomeTabMenu } from '~context/HomeTabMenu';
import { Box, Grid } from '@mui/material';

const MOCK = [
  {
    id: 'protection',
    title: 'Banho de Proteção',
    description:
      'HAh khaks dkh ksjhdkahskdj khdkashdkjashd khdkjah djkahdkjah dkjhakjd akjsdhjkahda sdioewur sniashivo dnvjknadkjv dasdjfiohdjgoiahjf oaisdhf',
  },
  {
    id: 'energy',
    title: 'Banho de Energização',
    description:
      'HAh khaks dkh ksjhdkahskdj khdkashdkjashd khdkjah djkahdkjah dkjhakjd akjsdhjkahda sdioewur sniashivo dnvjknadkjv dasdjfiohdjgoiahjf oaisdhf',
  },
];

const Baths = () => {
  const { setCurrentMenu } = useHomeTabMenu();

  useEffect(() => {
    setCurrentMenu(TabsValue.Baths);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {MOCK.map((item) => (
          <Grid key={item.id} item xs={12} md={12} lg={6}>
            <BathCard title={item.title} description={item.description} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Baths;
