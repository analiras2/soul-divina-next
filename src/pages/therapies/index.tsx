import { Box, Grid } from '@mui/material';
import { ITherapy } from '@therapy';
import { useRouter } from 'next/router';
import {
  CircularListItem,
  LayoutTypes,
  Loading,
  Error,
} from '~components/index';
import { useHomeTabMenu } from '~context/HomeTabMenu';
import { useStore } from '~context/Store';
import useFetch, { FetchTypes } from '~hooks/useFetch';

const Therapies = () => {
  const router = useRouter();
  const { setCurrentMenu } = useHomeTabMenu();
  const { therapyState } = useStore();
  const [isLoading, errorData] = useFetch(FetchTypes.getTherapies);

  setCurrentMenu(LayoutTypes.TabsValue.Therapies);

  return isLoading ? (
    <Loading />
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      {errorData.error ? (
        <Error />
      ) : (
        <Grid container spacing={4}>
          {therapyState.therapies.map((item: ITherapy) => (
            <Grid item xs={12} sm={4} key={item._id}>
              <CircularListItem
                title={item.title}
                uri={item.image}
                onPress={() => router.push(`/therapies/options/${item._id}`)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
export default Therapies;
