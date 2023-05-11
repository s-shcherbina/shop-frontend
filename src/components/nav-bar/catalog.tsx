import { AppBar, Button } from '@mui/material';
import { FC, useState } from 'react';
import { groups } from '../../common/moks';
import { Between } from '../helpers';
import uuid from 'react-uuid';

const Catalog: FC = (): JSX.Element => {
  const [color, setColor] = useState({});
  // useEffect(() => {
  //   getGroups().then((data) => store.setGroups(data));
  // }, [store]);

  return (
    <AppBar
      position='static'
      color='default'
      sx={{
        p: 0.5,
        display: {
          xs: 'none',
          lg: 'flex',
          overflowX: 'auto',
        },
      }}
    >
      <Between>
        {groups.map((group) => (
          <Button
            color={color === group ? 'warning' : 'primary'}
            key={uuid()}
            sx={{
              borderRadius: 5,
              p: 'auto',
              '&:hover': { color: 'darkorange !important' },
            }}
            onClick={() => setColor(group)}
          >
            {group.name}
          </Button>
        ))}
      </Between>
    </AppBar>
  );
};

export default Catalog;
