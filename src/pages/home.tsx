import { Box } from '@mui/material';

import { FC, useEffect } from 'react';

import { items } from '../common/moks';
import SliderFade from '../components/sliders/slider-fade';
import { checkAuth } from '../App';

const HomePage: FC = (): JSX.Element => {
  useEffect(() => {
    if (localStorage.getItem('token')) checkAuth();
  }, []);

  console.log();

  return (
    <Box>
      <SliderFade items={items} />
    </Box>
  );
};

export default HomePage;
