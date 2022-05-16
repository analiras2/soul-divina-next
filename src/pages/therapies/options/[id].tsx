import { Box, Grid } from '@mui/material';
import React from 'react';
import RectangleItemList from '~components/rectangleListItem';

const MOCK = {
  success: true,
  data: [
    {
      items: [
        {
          _id: '62042674c418966663d64b41',
          title: 'Item I',
        },
        {
          _id: '62042674c418966663d64b41',
          title: 'Item II',
        },
        {
          _id: '62042674c418966663d64b41',
          title: 'Item III',
        },
        {
          _id: '62042674c418966663d64b41',
          title: 'Item IV',
        },
        {
          _id: '62042674c418966663d64b41',
          title: 'Item V',
        },
      ],
      pageIndex: 1,
      hasNextPage: false,
      totalPages: 1,
      totalItems: 6,
    },
  ],
};

const Options = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>Reike</h1>
      <Grid container spacing={3}>
        {MOCK.data[0].items.map((item) => (
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
