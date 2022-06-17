import * as ACTION_TYPES from '../actions/actionTypes';
import { ITherapy, ITherapyState, ITherapyAction } from '@therapyAction';

export const initialState = {
  therapies: [],
  current: {},
};

export const TherapyReducer = (
  state: ITherapyState,
  action: ITherapyAction
) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SET_THERAPY:
      return {
        therapies: payload,
      };
    case ACTION_TYPES.SET_THERAPY_OPTIONS: {
      const oldTherapies = state.therapies;
      const therapies = oldTherapies.map((item: ITherapy) => {
        if (item._id === payload.id) {
          item.options = payload.options;
        }
        return item;
      });

      return {
        ...state,
        therapies,
      };
    }
    case ACTION_TYPES.SET_CURRENT_THERAPY:
      return {
        ...state,
        current: state.therapies.find((item: ITherapy) => item._id === payload),
      };
    default:
      return state;
  }
};
