import { BATH_ACTIONS } from './actionTypes';
import { IBath } from '@bath';

export const setBaths = (data: IBath[]) => {
  return {
    type: BATH_ACTIONS.SET_BATHS,
    payload: data,
  };
};
