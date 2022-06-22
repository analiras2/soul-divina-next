import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { strings, colors } from '~res/index';
import { Container } from './styles';
import { Props } from './types';

const BathCard = ({ title, description, howToUse }: Props): JSX.Element => {
  return (
    <Container>
      <Card variant="outlined" style={{ backgroundColor: colors.white, height: '380px' }}>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {description}
            </Typography>
            <Box>
              <Typography variant="body2">Modo de uso:</Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                dangerouslySetInnerHTML={{ __html: howToUse }}
              />
            </Box>
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="small">{strings.bath.knowMore}</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default BathCard;
