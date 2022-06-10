import styled from '@emotion/styled';
import { Box } from '@mui/material';
import colors from '~res/colors';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CircleContainer = styled(Box)`
  display: flex;
  width: 240px;
  height: 240px;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  border-radius: 120px;
  overflow: hidden;
  width: 240px;
  height: 240px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grey};
  box-shadow: 1.95px 1.95px 2.6px ${colors.shadow};
  transition: 0.3s;
`;
