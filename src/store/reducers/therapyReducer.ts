import * as ACTION_TYPES from '../actions/actionTypes';
import { IAction } from '@therapyAction';

export const initialState = {
  therapies: [],
};

export const TherapyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.SET_THERAPY:
      return {
        therapies: action.therapies,
      };
    case ACTION_TYPES.SET_THERAPY_OPTIONS:
      const oldTherapies = state.therapies;
      const therapies = oldTherapies.map((item: IAction) => {
        if (item._id === action.therapyId) {
          item.options = action.options;
        }
        return item;
      });

      return {
        ...state,
        therapies,
      };
    default:
      return state;
  }
};
