import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import useViewport, { Type } from 'hooks/useViewport';
import React from 'react';
import { strings, colors } from '~res/index';
import { Container } from './styles';
import { Props } from './types';

const BathCard = ({ title, description, onPress }: Props): JSX.Element => {
  const type = useViewport();

  return (
    <Container>
      <Card
        variant="outlined"
        style={{
          backgroundColor: colors.white,
          height: type === Type.MOBILE ? 'auto' : '224px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h5">{title}</Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
              }}
            >
              {description}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onPress}>
            {strings.bath.knowMore}
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default BathCard;
