import api from './api';
import { PaginationResponse, DataResponse } from '@types';
import { ITherapy, IOption } from '@therapy';

const { API_THERAPY } = process.env;
const { API_THERAPY_OPTIONS } = process.env;

export const getTherapies = () =>
  api.get<PaginationResponse<ITherapy>>(API_THERAPY as string);

export const getOptions = (id: string) =>
  api.get<DataResponse<IOption>>(`${API_THERAPY_OPTIONS}/${id}`);

export const getOptionData = (id: string) =>
  api.get<ITherapy>(`${API_THERAPY_OPTIONS}/${id}?isDetails=true`);
