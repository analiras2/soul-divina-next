import { Box, Grid } from '@mui/material';
import { IOption } from '@therapy';
import { useRouter } from 'next/router';
import { Loading, RectangleItemList, Error } from '~components/index';
import { useStore } from '~context/Store';
import useFetch, { FetchTypes } from '~hooks/useFetch';

const Options = () => {
  const id = useRouter().query.id as string | undefined;
  const { therapyState } = useStore();

  const [isLoading, errorData] = useFetch(FetchTypes.getOptions, { id });

  return isLoading ? (
    <Loading />
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <h1>{therapyState.current?.title}</h1>
      {errorData.error ? (
        <Error />
      ) : (
        <Grid container spacing={3}>
          {therapyState.current?.options?.map((item: IOption) => (
            <Grid item xs={12} sm={4} key={item._id}>
              <RectangleItemList
                id={item._id}
                onPress={() => {}}
                title={item.title}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
export default Options;
