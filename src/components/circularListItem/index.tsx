/* eslint-disable no-nested-ternary */
import HideImageIcon from '@mui/icons-material/HideImage';
import Image from 'next/image';
import React from 'react';
import * as St from './styles';
import Loading from '~components/loading';
import * as animationData from '~res/assets/animation/loading.json';

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
  return (
    <St.Container onClick={onPress}>
      <St.CircleContainer>
        <St.ImageContainer>
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
        </St.ImageContainer>
      </St.CircleContainer>
      {title && (
        <St.Title variant="h6" mt={1}>
          {title}
        </St.Title>
      )}
      {loading && <Loading isCircular />}
    </St.Container>
  );
};

export default CircularListItem;
