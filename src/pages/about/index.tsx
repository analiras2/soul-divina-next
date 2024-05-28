import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { TabsValue } from '~components/layout/types';
import { useHomeTabMenu } from '~context/HomeTabMenu';

const About = () => {
  const { setCurrentMenu } = useHomeTabMenu();

  useEffect(() => {
    setCurrentMenu(TabsValue.About);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom component="div">
            Soul Divina
          </Typography>
          <Typography variant="body1" gutterBottom>
            É uma aplicação com o projeto de informar e auxiliar pessoas que
            gostam de Reiki e entendem que somos feitos também de energia.
            Idealizado pelos reikianos Analira Scalabrini e Mário Henrique.A
            junção desses dois profissionais é o Soul Divina, onde cada um em
            sua área de atuação irá contribuir para o desenvolvimento deste APP.
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
              Programadora Front End Sênior, Reikiana 
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
              Professor Mestre em Letras, Reikiano
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
export default About;
