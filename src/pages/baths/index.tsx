import React, { useState, useEffect } from 'react';
import { BathCard, Loading, LayoutTypes } from '~components/index';
import { useHomeTabMenu } from '~context/HomeTabMenu';
import { Box, Grid } from '@mui/material';
import { getBaths } from '~service/bathService';
import { useStore } from '~context/Store';
import { IBath } from '@bath';

const Baths = () => {
  const { setCurrentMenu } = useHomeTabMenu();
  const { bathState, setBaths } = useStore();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getBaths();

        setBaths(data.data[0].items);
      } catch (error) {
        // TODO exibir msg
        console.log('Aqui getBaths error', error);
      } finally {
        setLoading(false);
      }
    })();
    setCurrentMenu(LayoutTypes.TabsValue.Baths);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {bathState.baths.map((item: IBath) => (
          <Grid key={item._id} item xs={12} md={12} lg={6}>
            <BathCard
              title={item.title}
              description={item.description}
              howToUse={item.howToUse}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Baths;
