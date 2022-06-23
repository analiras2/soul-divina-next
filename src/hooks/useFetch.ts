import { useState, useEffect } from 'react';
import { getTherapies, getOptions } from '~service/therapiesService';
import { getBaths } from '~service/bathService';
import { useStore } from '~context/Store';

export enum FetchTypes {
  getTherapies,
  getOptions,
  getBaths,
}

const useFetch = (type: FetchTypes, payload?: any): boolean[] => {
  const [isLoading, setLoading] = useState(false);
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
      console.log('Aqui getTherapies error', error);
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
      console.log('Aqui getOptions error', error);
    }
  };

  const handleBaths = async () => {
    try {
      const { data } = await getBaths();

      setBaths(data.data[0].items);
    } catch (error) {
      console.log('Aqui getBaths error', error);
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

  return [isLoading];
};

export default useFetch;
