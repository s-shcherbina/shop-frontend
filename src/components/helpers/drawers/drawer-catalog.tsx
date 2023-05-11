import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import {
  Box,
  ClickAwayListener,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';
import { blue, yellow } from '@mui/material/colors';
import { FC, Fragment, useState } from 'react';
import uuid from 'react-uuid';
import { groups } from '../../../common/moks';
import { Flex } from '..';
import { IDrawerCatalog } from '../../../types/nav-bar';

const DrawerCatalog: FC<IDrawerCatalog> = ({
  catalogOpen,
  catalogToggle,
  setPage,
  navigate,
}): JSX.Element => {
  const [subGroupVisible, setSubGroupVisible] = useState(false);

  const subGroups = [
    { name: 'Троянди', path: '', id: 'Троянди' },
    { name: 'Багаторічникі', path: '', id: 'Троянди' },
    { name: 'Багаторічник', path: '', id: 'Троянди' },
    { name: 'Багаторічн', path: '', id: 'Троянди' },
  ];
  const drawerCatalog = (
    <ClickAwayListener onClickAway={catalogToggle}>
      <List sx={{ bgcolor: blue[500] }}>
        {groups.map((group) => (
          <Box key={group.name}>
            <Stack>
              {/* <Stack
                direction={'row'} divider={<Divider orientation='vertical' flexItem />}*/}
              <Flex>
                <ListItemButton
                  // sx={{
                  //   background: page === group ? blue[600] : '',
                  // }}
                  onClick={() => {
                    navigate(group.path);
                    setPage(group.path);
                    catalogToggle();
                  }}
                >
                  <ListItemText
                    sx={{ color: yellow[500] }}
                    primary={group.name}
                  />
                </ListItemButton>
                <Divider orientation='vertical' flexItem />
                <IconButton
                  sx={{ color: yellow[500], m: 1 }}
                  onClick={() => {
                    setSubGroupVisible(!subGroupVisible);
                  }}
                >
                  {subGroupVisible && group.name === 'Троянди' ? (
                    <KeyboardArrowUp />
                  ) : (
                    <KeyboardArrowDown />
                  )}
                </IconButton>
              </Flex>
              <Divider />
              {subGroupVisible && group.name === 'Троянди' && (
                <List sx={{ bgcolor: blue[400] }}>
                  {subGroups.map((subGroup) => (
                    <Fragment key={uuid()}>
                      <ListItemButton
                        sx={{ ml: 3 }}
                        onClick={() => {
                          catalogToggle();
                        }}
                      >
                        <ListItemText
                          sx={{ color: yellow[500] }}
                          primary={subGroup.name}
                        />
                      </ListItemButton>
                      <Divider />
                    </Fragment>
                  ))}
                </List>
              )}
            </Stack>
          </Box>
        ))}
      </List>
    </ClickAwayListener>
  );

  return (
    <Box component='nav'>
      <Drawer
        anchor={'top'}
        variant='temporary'
        open={catalogOpen}
        onClose={catalogToggle}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            // width: { xs: '100%', sm: '60%' },
            width: { xs: '100%', sm: '60%', lg: '40%' },
            height: '100%',
          },
        }}
      >
        {drawerCatalog}
      </Drawer>
    </Box>
  );
};

export default DrawerCatalog;
