import { useState, useEffect } from 'react';
import { getTherapies, getOptions } from '~service/therapiesService';
import { getBaths } from '~service/bathService';
import { useStore } from '~context/Store';
import { AxiosError } from 'axios';

export enum FetchTypes {
  getTherapies,
  getOptions,
  getBaths,
}

interface Error {
  error: boolean;
  code?: string;
  message?: string;
}

const useFetch = (type: FetchTypes, payload?: any): [boolean, Error] => {
  const [isLoading, setLoading] = useState(false);
  const [errorData, setErrorData] = useState<Error>({error: false});
  const {
    therapyState,
    setTherapies,
    setTherapyOptions,
    setCurrent,
    setBaths,
  } = useStore();

  const handleTherapies = async () => {
    try {
      const { data } = await getTherapies();

      setTherapies(data.data[0].items);
    } catch (error) {
      console.log('ERROR - getTherapies');
      const mError = error as AxiosError;
      setErrorData({
        error: true,
        code: mError.code,
        message: mError.message,
      })
    }
  };

  const handleOptions = async (id: string) => {
    try {
      if (!therapyState.therapies.length) {
        await handleTherapies();
      }

      const { data } = await getOptions(id);

      setTherapyOptions({ id, options: data.data });
      setCurrent(id);
    } catch (error) {
      console.log('ERROR - getOptions');
      const mError = error as AxiosError;
      
      setErrorData({
        error: true,
        code: mError.code,
        message: mError.message,
      })
    }
  };

  const handleBaths = async () => {
    try {
      const { data } = await getBaths();

      setBaths(data.data[0].items);
    } catch (error) {
      console.log('ERROR - getBaths');
      const mError = error as AxiosError;
      
      setErrorData({
        error: true,
        code: mError.code,
        message: mError.message,
      })
    }
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      switch (type) {
        case FetchTypes.getTherapies:
          await handleTherapies();
          break;
        case FetchTypes.getOptions:
          if (payload?.id) await handleOptions(payload?.id);
          break;
        case FetchTypes.getBaths:
          await handleBaths();
          break;
      }
      setLoading(false);
    })();
  }, [type, payload?.id]);

  return [isLoading, errorData];
};

export default useFetch;
