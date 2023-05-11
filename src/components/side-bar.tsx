import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronLeftOutlined, LocalFlorist } from '@mui/icons-material';
import { Box, Divider, List, useTheme } from '@mui/material';
import SideBarButton from './helpers/side-bar-button';
import { groupes, groups, navMenu, pages } from '../common/moks';
import uuid from 'react-uuid';

const SideBar: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const theme = useTheme();

  return (
    // <IconButton onClick={() => setIsOpen(!isOpen)} sx={{ m: 'auto' }}>
    //   <ChevronLeftOutlined />
    // </IconButton>

    <List
      sx={{
        bgcolor: theme.palette.action.hover,
        borderRadius: 2,
        width: '100%',
      }}
    >
      {groupes.map((item) => (
        <SideBarButton
          key={uuid()}
          pathname={pathname}
          path={item.path}
          // icon={<LocalFlorist />}
          name={item.name}
          click={() => localStorage.removeItem('token')}
        />
      ))}
      <Divider sx={{ m: 2 }} />
      {navMenu.map((item) => (
        <SideBarButton
          key={uuid()}
          pathname={pathname}
          path={item.path}
          // icon={item.icon}
          name={item.name}
          click={() => localStorage.removeItem('token')}
        />
      ))}
      {/* <SideBarButton
              pathname={pathname}
              path={logout.path}
              icon={logout.icon}
              name={logout.name}
              click={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('name');
              }}
            /> */}
    </List>
  );
};

export default SideBar;
