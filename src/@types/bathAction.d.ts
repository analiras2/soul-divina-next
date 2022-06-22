import { IBath } from 'models/Bath';

declare module '@bathAction' {
  export interface IBathState {
    baths: IBath[];
  }

  export type IBathAction = {
    type: ActionKind;
    payload: any;
  };
}