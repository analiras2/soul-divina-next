import styled from '@emotion/styled';
import { Box } from '@mui/material';

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

export const Pressable = styled.div`
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  border-radius: 120px;
  overflow: hidden;
  width: 240px;
  height: 240px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.04);
`;
