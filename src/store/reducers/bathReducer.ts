import { BATH_ACTIONS } from '../actions/actionTypes';
import { IBathState, IBathAction } from '@bathAction';

export const initialState = {
  baths: [],
};

export const BathReducer = (state: IBathState, action: IBathAction) => {
  const { type, payload } = action;

  switch (type) {
    case BATH_ACTIONS.SET_BATHS:
      return {
        baths: payload,
      };
    default:
      return state;
  }
};
