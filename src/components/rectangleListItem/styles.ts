import styled from '@emotion/styled';
import { Box } from '@mui/material';
import colors from '~res/colors';

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grey};
  border-radius: 4px;
  box-shadow: 1.95px 1.95px 2.6px ${colors.shadow}};
`;

export const Pressable = styled.div`
  width: 100%;
  text-align: center;
  &:hover {
    background-color: ${colors.hover};
  }
`;
