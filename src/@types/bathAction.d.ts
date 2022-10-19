import { IBath } from '~models/Bath';

export interface IBathState {
baths: IBath[];
}

export type IBathAction = {
type: ActionKind;
payload: any;
};
