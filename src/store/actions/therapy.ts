import { THERAPY_ACTIONS } from './actionTypes';
import { ITherapy } from '@therapy';
import { IOptionsState } from '@therapyAction';

export const setTherapies = (data: ITherapy[]) => {
  return {
    type: THERAPY_ACTIONS.SET_THERAPIES,
    payload: data,
  };
};

export const setTherapiesOptions = (data: IOptionsState) => {
  return {
    type: THERAPY_ACTIONS.SET_THERAPY_OPTIONS,
    payload: { id: data.id, options: data.options },
  };
};

export const setCurrent = (id: string) => {
  return {
    type: THERAPY_ACTIONS.SET_CURRENT_THERAPY,
    payload: id,
  };
};
