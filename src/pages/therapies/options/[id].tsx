import { Box, Grid } from '@mui/material';
import { IOption } from '@therapy';
import React from 'react';
import RectangleItemList from '~components/rectangleListItem';
import { useStore } from '~context/Store';

const Options = () => {
  const { current } = useStore().therapyState;
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>{current?.title}</h1>
      <Grid container spacing={3}>
        {current?.options?.map((item: IOption) => (
          <Grid item xs={12} sm={4} key={item._id}>
            <RectangleItemList
              id={item._id}
              onPress={() => {}}
              title={item.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Options;
