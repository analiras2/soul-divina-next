import { ITherapy } from 'models/Therapy';
import { IOption } from './therapy';

export interface ITherapyState {
  therapies: ITherapy[];
  current?: ITherapy;
}

export interface IOptionsState {
  id: string;
  options: IOption[];
}

export type ITherapyAction = {
  type: ActionKind;
  payload: any;
};
