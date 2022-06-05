import styled from '@emotion/styled';
import { Box } from '@mui/material';
import colors from '~res/colors';

export const Container = styled(Box)`
  min-width: 275;
  background-color: ${colors.transparent};
  box-shadow: 1.95px 1.95px 2.6px ${colors.shadow};
  transition: 0.3s;
`;
