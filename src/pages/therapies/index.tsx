import { Box, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CircularListItem, Loading } from '~components/index';
import { TabsValue } from '~components/layout/types';
import { useHomeTabMenu } from '~context/HomeTabMenu';
import { useStore } from '~context/Store';
import { getTherapies } from '../../service/therapiesService';

const Therapies = () => {
  const router = useRouter();
  const { setCurrentMenu } = useHomeTabMenu();
  const { therapyState, setTherapies } = useStore();

  const [isLoading, setLoading] = useState(true);
  const [isOptionsLoading, setOptionsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getTherapies();

        setTherapies(data.data[0].items);
      } catch (error) {
        // TODO exibir msg
        console.log('Aqui error', error);
      } finally {
        setLoading(false);
      }
    })();
    setCurrentMenu(TabsValue.Therapies);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {therapyState.therapies.map((item) => (
          <Grid item xs={12} sm={4} key={item._id}>
            <CircularListItem
              loading={isOptionsLoading}
              title={item.title}
              uri={item.image}
              onPress={() => {
                router.push(`/therapies/options/${item._id}`);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Therapies;
