import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Pressable = styled.div`
  width: 100%;
  text-align: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
