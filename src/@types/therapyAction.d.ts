import { Option } from './therapy';

declare module '@therapyAction' {
  export interface ITherapyAction {
    therapyId: string;
    options: Option;
  }
}
