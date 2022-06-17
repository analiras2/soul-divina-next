import React, { createContext, useReducer, useContext } from 'react';
import * as THERAPY_ACTIONS from '~store/actions/therapy';
import * as TherapyReducer from '~store/reducers/therapyReducer';
import { ITherapy } from '@therapy';
import { IOptionsState } from '@therapyAction';

type StoreProps = {
  therapyState: { therapies: ITherapy[]; current?: ITherapy };
  setTherapies: (data: ITherapy[]) => void;
  setTherapyOptions: (data: IOptionsState) => void;
  setCurrent: (id: string) => void;
};

type StoreProviderProps = {
  children: React.ReactNode;
};

const StoreContext = createContext<StoreProps>({
  therapyState: { therapies: [], current: undefined },
  setTherapies: () => {},
  setTherapyOptions: () => {},
  setCurrent: () => {},
});

const StoreProvider = ({ children }: StoreProviderProps): JSX.Element => {
  const [stateTherapyReducer, dispatchTherapyReducer] = useReducer(
    TherapyReducer.TherapyReducer,
    TherapyReducer.initialState
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

  return (
    <StoreContext.Provider
      value={{
        therapyState: stateTherapyReducer,
        setTherapies: (data: ITherapy[]) => handleSetTherapies(data),
        setTherapyOptions: (data: IOptionsState) =>
          handleSetTherapyOptions(data),
        setCurrent: (id: string) => handleSetCurrent(id),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');
  const { therapyState, setTherapies, setTherapyOptions, setCurrent } = context;

  return { therapyState, setTherapies, setTherapyOptions, setCurrent };
};

export default StoreProvider;
