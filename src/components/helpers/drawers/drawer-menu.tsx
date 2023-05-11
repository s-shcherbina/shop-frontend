import {
  Box,
  ClickAwayListener,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { blue, yellow } from '@mui/material/colors';
import { FC } from 'react';
import uuid from 'react-uuid';
import { navMenu } from '../../../common/moks';
import { IDrawerMenu } from '../../../types/nav-bar';

const DrawerMenu: FC<IDrawerMenu> = ({
  menuOpen,
  menuToggle,
  page,
  setPage,
  navigate,
}): JSX.Element => {
  const drawerMenu = (
    <ClickAwayListener onClickAway={menuToggle}>
      <List sx={{ bgcolor: blue[500] }}>
        {navMenu.concat(navMenu).map((item) => (
          <Box key={uuid()}>
            <ListItemButton
              sx={{
                background: page === item.path ? blue[600] : '',
              }}
              onClick={() => {
                navigate(item.path);
                setPage(item.path);
                menuToggle();
              }}
            >
              <ListItemIcon sx={{ color: yellow[500] }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText sx={{ color: yellow[500] }} primary={item.name} />
            </ListItemButton>
            <Divider />
          </Box>
        ))}
      </List>
    </ClickAwayListener>
  );
  return (
    <Box component='nav'>
      <Drawer
        variant='temporary'
        open={menuOpen}
        onClose={menuToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: '60%' },
          },
        }}
      >
        {drawerMenu}
      </Drawer>
    </Box>
  );
};

export default DrawerMenu;
