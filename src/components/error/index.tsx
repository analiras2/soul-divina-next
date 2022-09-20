import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '~res/assets/animation/error.json';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

type Props = {
  message?: string;
};

const Error: React.FC<Props> = ({ message }): JSX.Element => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box>
      <Lottie options={defaultOptions} width="40%" speed={0.6} />
      <Typography variant="h5" align="center" marginTop={4}>
        {message || 'Algo deu errado, tente novamente mais tarde...'}
      </Typography>
    </Box>
  );
};

export default Error;
