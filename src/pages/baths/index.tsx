import React, { useState, useEffect } from 'react';
import { BathCard, Loading, LayoutTypes, Error } from '~components/index';
import { useHomeTabMenu } from '~context/HomeTabMenu';
import { Box, Grid } from '@mui/material';
import { useStore } from '~context/Store';
import { IBath } from '@bath';
import useFetch, { FetchTypes } from '~hooks/useFetch';

const Baths = () => {
  const { setCurrentMenu } = useHomeTabMenu();
  const { bathState } = useStore();
  const [isLoading, errorData] = useFetch(FetchTypes.getBaths);

  setCurrentMenu(LayoutTypes.TabsValue.Baths);

  return isLoading ? (
    <Loading />
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      {errorData.error ? (
        <Error />
      ) : (
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
      )}
    </Box>
  );
};

export default Baths;
