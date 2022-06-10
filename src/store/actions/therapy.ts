import * as ACTION_TYPES from './actionTypes';
import { ITherapy } from '@therapy';
import { ITherapyAction } from '@therapyAction';

export const setTherapies = (data: ITherapy[]) => {
  return {
    type: ACTION_TYPES.SET_THERAPY,
    therapies: data,
  };
};

export const setTherapiesOptions = (data: ITherapyAction) => {
  return {
    type: ACTION_TYPES.SET_THERAPY_OPTIONS,
    therapyId: data.therapyId,
    options: data.options,
  };
};
