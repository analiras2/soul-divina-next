import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { TabsValue } from '~components/layout/types';
import { useHomeTabMenu } from '~context/HomeTabMenu';

const About = (props) => {
  const { setCurrentMenu } = useHomeTabMenu();

  useEffect(() => {
    setCurrentMenu(TabsValue.About);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <Avatar
              alt="Analira Scalabrini"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 180, height: 180 }}
            />
            <Typography variant="h4" gutterBottom component="div">
              Analira Scalabrini
            </Typography>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <Avatar
              alt="Mário Lopes"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 180, height: 180 }}
            />
            <Typography variant="h4" gutterBottom component="div">
              Mário Lopes
            </Typography>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
export default About;
