import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent, Stack, Typography
} from '@mui/material';
import React from 'react';
import colors from '~res/colors';
import { Container } from './styles';
import { Props } from './types';

const BathCard = ({ title, description }: Props): JSX.Element => {
  return (
    <Container>
      <Card variant="outlined" style={{ backgroundColor: colors.white }}>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {description}
            </Typography>
            <Box>
              <Typography variant="body2">Modo de uso:</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                HSuahs uiaihsi uahsiuahsiuahsiuah siuhaiushiuh
              </Typography>
            </Box>
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="small">Saiba mais</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default BathCard;
