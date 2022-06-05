import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import CircularListItem from '~components/circularListItem';
import { TabsValue } from '~components/layout/types';
import { useHomeTabMenu } from '~context/HomeTabMenu';

const MOCK = {
  success: true,
  data: [
    {
      items: [
        {
          _id: '62042674c418966663d64b41',
          title: 'Item I',
          image:
            'https://www.eusemfronteiras.com.br/wp-content/uploads/2020/06/110034235_m-1.jpg',
        },
        {
          _id: '62042674c418966663d64b41',
          title: 'Item II',
          image:
            'https://www.eusemfronteiras.com.br/wp-content/uploads/2020/06/110034235_m-1.jpg',
        },
        {
          _id: '62042674c418966663d64b41',
          title: 'Item III',
          image:
            'https://www.eusemfronteiras.com.br/wp-content/uploads/2020/06/110034235_m-1.jpg',
        },
        {
          _id: '62042674c418966663d64b41',
          title: 'Item IV',
          image:
            'https://www.eusemfronteiras.com.br/wp-content/uploads/2020/06/110034235_m-1.jpg',
        },
        {
          _id: '62042674c418966663d64b41',
          title: 'Item V',
          image:
            'https://www.eusemfronteiras.com.br/wp-content/uploads/2020/06/110034235_m-1.jpg',
        },
      ],
      pageIndex: 1,
      hasNextPage: false,
      totalPages: 1,
      totalItems: 6,
    },
  ],
};

const Therapies = (props) => {
  const { setCurrentMenu } = useHomeTabMenu();

  useEffect(() => {
    setCurrentMenu(TabsValue.Therapies);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {MOCK.data[0].items.map((item) => (
          <Grid item xs={12} sm={4} key={item._id}>
            <CircularListItem
              id={item._id}
              title={item.title}
              uri={item.image}
              onPress={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Therapies;
