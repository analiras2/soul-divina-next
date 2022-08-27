/* eslint-disable no-nested-ternary */
import React from 'react';
import * as St from './styles';
import Lottie from 'react-lottie';
import * as animationData from '~res/assets/animation/loading.json';

type Props = {
  isCircular?: boolean;
};

const Loading: React.FC<Props> = ({ isCircular }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const Loading = () => (
    <Lottie
      options={defaultOptions}
      height={80}
      width={80}
      style={{ marginTop: '30%' }}
    />
  );

  return isCircular ? (
    <St.CircularContainer>
      <Loading />
    </St.CircularContainer>
  ) : (
    <St.Container>
      <Loading />
    </St.Container>
  );
};

export default Loading;
