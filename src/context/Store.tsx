import React, { createContext, useReducer, useContext } from 'react';
import * as THERAPY_ACTIONS from '~store/actions/therapy';
import * as BATH_ACTIONS from '~store/actions/bath';
import * as TherapyReducer from '~store/reducers/therapyReducer';
import * as BathReducer from '~store/reducers/bathReducer';
import { ITherapy } from '@therapy';
import { ITherapyState, IOptionsState } from '../@types/therapyAction';
import { IBath } from '@bath';
import { IBathState } from '../@types/bathAction';

type StoreProps = {
  therapyState: ITherapyState;
  setTherapies: (data: ITherapy[]) => void;
  setTherapyOptions: (data: IOptionsState) => void;
  setCurrent: (id: string) => void;
  bathState: IBathState;
  setBaths: (data: IBath[]) => void;
};

type StoreProviderProps = {
  children: React.ReactNode;
};

const StoreContext = createContext<StoreProps>({
  therapyState: { therapies: [], current: undefined },
  setTherapies: () => {},
  setTherapyOptions: () => {},
  setCurrent: () => {},
  bathState: { baths: [] },
  setBaths: () => {},
});

const StoreProvider = ({ children }: StoreProviderProps): JSX.Element => {
  const [stateTherapyReducer, dispatchTherapyReducer] = useReducer(
    TherapyReducer.TherapyReducer,
    TherapyReducer.initialState
  );

  const [stateBathReducer, dispatchBathReducer] = useReducer(
    BathReducer.BathReducer,
    BathReducer.initialState
  );

  const handleSetTherapies = (data: ITherapy[]) => {
    dispatchTherapyReducer(THERAPY_ACTIONS.setTherapies(data));
  };

  const handleSetTherapyOptions = (data: IOptionsState) => {
    dispatchTherapyReducer(THERAPY_ACTIONS.setTherapiesOptions(data));
  };

  const handleSetCurrent = (id: string) => {
    dispatchTherapyReducer(THERAPY_ACTIONS.setCurrent(id));
  };

  const handleSetBaths = (data: IBath[]) => {
    dispatchBathReducer(BATH_ACTIONS.setBaths(data));
  };

  return (
    <StoreContext.Provider
      value={{
        therapyState: stateTherapyReducer,
        setTherapies: (data: ITherapy[]) => handleSetTherapies(data),
        setTherapyOptions: (data: IOptionsState) =>
          handleSetTherapyOptions(data),
        setCurrent: (id: string) => handleSetCurrent(id),
        bathState: stateBathReducer,
        setBaths: (data: IBath[]) => handleSetBaths(data),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');

  return context;
};

export default StoreProvider;
