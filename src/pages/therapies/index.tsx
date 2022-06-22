import { Box, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CircularListItem, Loading, LayoutTypes } from '~components/index';
import { useHomeTabMenu } from '~context/HomeTabMenu';
import { useStore } from '~context/Store';
import { getTherapies, getOptions } from '../../service/therapiesService';

const Therapies = () => {
  const router = useRouter();
  const { setCurrentMenu } = useHomeTabMenu();
  const { therapyState, setTherapies, setTherapyOptions, setCurrent } = useStore();

  const [isLoading, setLoading] = useState(true);
  const [isOptionsLoading, setOptionsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getTherapies();

        setTherapies(data.data[0].items);
      } catch (error) {
        // TODO exibir msg
        console.log('Aqui getTherapies error', error);
      } finally {
        setLoading(false);
      }
    })();
    setCurrentMenu(LayoutTypes.TabsValue.Therapies);
  }, []);

  const fetchOptions = async (id: string) => {
    setOptionsLoading(true);
    try {
      const { data } = await getOptions(id);
      setTherapyOptions({ id, options: data.data });
      setCurrent(id);

      router.push(`/therapies/options/${id}`);
    } catch (error) {
      // TODO exibir msg
      console.log('Aqui getOptions error', error);
    } finally {
      setOptionsLoading(false);
    }
  };

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
              onPress={() => fetchOptions(item._id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Therapies;
