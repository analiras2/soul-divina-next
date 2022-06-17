import * as ACTION_TYPES from './actionTypes';
import { ITherapy, IOption } from '@therapy';
import { IOptionsState } from '@therapyAction';

export const setTherapies = (data: ITherapy[]) => {
  return {
    type: ACTION_TYPES.SET_THERAPY,
    payload: data,
  };
};

export const setTherapiesOptions = (data: IOptionsState) => {
  return {
    type: ACTION_TYPES.SET_THERAPY_OPTIONS,
    payload: { id: data.id, options: data.options },
  };
};

export const setCurrent = (id: string) => {
  return {
    type: ACTION_TYPES.SET_CURRENT_THERAPY,
    payload: id,
  };
};
