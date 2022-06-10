import styled from '@emotion/styled';
import colors from '~res/colors';

export const Container = styled.div`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CircularContainer = styled.div`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.shadow};
  border-radius: 120px;
  overflow: hidden;
  width: 240px;
  height: 240px;
`;
