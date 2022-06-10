import React, { createContext, useReducer, useContext } from 'react';
import * as THERAPY_ACTIONS from '~store/actions/therapy';
import * as TherapyReducer from '~store/reducers/therapyReducer';
import { ITherapy } from '@therapy';
import { ITherapyAction } from '@therapyAction';

type StoreProps = {
  therapyState: { therapies: ITherapy[] };
  setTherapies: (data: ITherapy[]) => void;
  setTherapyOptions: (data: ITherapyAction) => void;
};

type StoreProviderProps = {
  children: React.ReactNode;
};

const StoreContext = createContext<StoreProps>({
  therapyState: { therapies: [] },
  setTherapies: () => {},
  setTherapyOptions: () => {},
});

const StoreProvider = ({ children }: StoreProviderProps): JSX.Element => {
  const [stateTherapyReducer, dispatchTherapyReducer] = useReducer(
    TherapyReducer.TherapyReducer,
    TherapyReducer.initialState
  );

  const handleSetTherapies = (data: ITherapy[]) => {
    dispatchTherapyReducer(THERAPY_ACTIONS.setTherapies(data));
  };

  const handleSetTherapyOptions = (data: ITherapyAction) => {
    dispatchTherapyReducer(THERAPY_ACTIONS.setTherapiesOptions(data));
  };

  return (
    <StoreContext.Provider
      value={{
        therapyState: stateTherapyReducer,
        setTherapies: (data: ITherapy[]) => handleSetTherapies(data),
        setTherapyOptions: (data: ITherapyAction) =>
          handleSetTherapyOptions(data),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');
  const { therapyState, setTherapies, setTherapyOptions } = context;

  return { therapyState, setTherapies, setTherapyOptions };
};

export default StoreProvider;
