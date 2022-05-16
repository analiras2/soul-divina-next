/* eslint-disable no-nested-ternary */
import HideImageIcon from '@mui/icons-material/HideImage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  CircleContainer,
  Container,
  ImageContainer,
  Pressable,
} from './styles';

export type Props = {
  id?: string;
  onPress?: (event: any) => void;
  title?: string;
  uri?: string;
  loading?: boolean;
};

const CircularListItem: React.FC<Props> = ({
  id,
  title,
  uri,
  onPress,
  loading,
}) => {
  const Component = (
    <Container>
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
      {title && <p>{title}</p>}
    </Container>
  );

  return onPress ? (
    <Pressable>
      <Link href={`/therapies/options/${id}`}>
        <a style={{ textDecoration: 'none' }}>{Component}</a>
      </Link>
    </Pressable>
  ) : (
    Component
  );
};

export default CircularListItem;
