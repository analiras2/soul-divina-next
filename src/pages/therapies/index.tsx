import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { getTherapies } from '../../service/therapiesService';
import CircularListItem from '~components/circularListItem';
import { TabsValue } from '~components/layout/types';
import { useHomeTabMenu } from '~context/HomeTabMenu';
import { useStore } from '~context/Store';
import { useRouter } from 'next/router';

const Therapies = () => {
  const router = useRouter();
  const { setCurrentMenu } = useHomeTabMenu();
  const { therapyState, setTherapies } = useStore();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getTherapies();

        setTherapies(data.data[0].items);
      } catch (error) {
        // TODO exibir msg
        console.log('Aqui error', error);
      } finally {
        // setLoading(false);
      }
    })();
    setCurrentMenu(TabsValue.Therapies);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {therapyState.therapies.map((item) => (
          <Grid item xs={12} sm={4} key={item._id}>
            <CircularListItem
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
