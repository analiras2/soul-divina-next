import api from './api';
import { PaginationResponse } from '@types';
import { IBath } from '@bath';

const { API_BATH } = process.env;

export const getBaths = () =>
  api.get<PaginationResponse<IBath>>(API_BATH as string);
