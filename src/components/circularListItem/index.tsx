/* eslint-disable no-nested-ternary */
import HideImageIcon from '@mui/icons-material/HideImage';
import Image from 'next/image';
import React from 'react';
import { Typography } from '@mui/material';
import { CircleContainer, Container, ImageContainer } from './styles';

export type Props = {
  id?: string;
  onPress?: (event: any) => void;
  title?: string;
  uri?: string;
  loading?: boolean;
};

const CircularListItem: React.FC<Props> = ({
  title,
  uri,
  onPress,
  loading,
}) => {
  const Component = () => (
    <Container onClick={onPress}>
      <CircleContainer>
        <ImageContainer>
          {uri ? (
            <Image
              alt={`${title} imagem`}
              src={uri}
              width="240px"
              height="240px"
            />
          ) : (
            <HideImageIcon fontSize="large" />
          )}
        </ImageContainer>
      </CircleContainer>
      {title && (
        <Typography variant="h6" mt={1}>
          {title}
        </Typography>
      )}
    </Container>
  );

  return <Component />;
};

export default CircularListItem;
