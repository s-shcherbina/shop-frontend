import { FC, useState } from 'react';
import {
  AppBar,
  Box,
  Typography,
  Badge,
  IconButton,
  ClickAwayListener,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import {
  Grass,
  Phone,
  ShoppingBasket,
  Search,
  Telegram,
  WhatsApp,
} from '@mui/icons-material';
import { blue, yellow } from '@mui/material/colors';
import SearchInput from '../helpers/search-input';
import { useNavigate } from 'react-router-dom';
import { Between, Flex } from '../helpers';

const SearchBar: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchVisible, setSearchVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  return (
    <AppBar
      position='static'
      sx={{ p: 1, bgcolor: yellow[500], color: blue[700] }}
    >
      <Between sx={{ px: { sm: 1, lg: 2 }, height: '2.4rem' }}>
        <Flex sx={{ overflow: 'hidden' }}>
          <IconButton onClick={() => navigate('/')}>
            <Grass fontSize='large' sx={{ color: blue[700] }} />
          </IconButton>
          <Typography
            noWrap
            variant='h6'
            sx={{
              mt: 0.7,
              ml: 1,
              fontFamily: "'Lobster', cursive",
            }}
          >
            РАЙСЬКИЙ САД
          </Typography>
        </Flex>
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
            },
          }}
        >
          <IconButton color='primary' onClick={() => navigate('/contacts')}>
            <Telegram sx={{ color: blue[700] }} />
          </IconButton>
          <IconButton color='primary' onClick={() => navigate('/contacts')}>
            <WhatsApp sx={{ color: blue[700] }} />
          </IconButton>
          {/* <IconButton color='primary'>
            <img src={viber} alt='viber' width={21} />
          </IconButton> */}
          <IconButton color='primary' onClick={() => navigate('/contacts')}>
            <Phone fontSize='small' sx={{ color: blue[700] }} />
          </IconButton>
          <ListItemButton
            sx={{ ml: -1.5, borderRadius: 5 }}
            onClick={() => navigate('/contacts')}
          >
            <Typography variant='h6' noWrap sx={{ ml: 0.5 }}>
              (066) 611 74 29
            </Typography>
          </ListItemButton>
        </Box>
        <Typography
          noWrap
          variant='h6'
          sx={{ mt: 0.5, display: { xs: 'none', lg: 'flex' } }}
        >
          Працюємо 8:00 - 21:00
        </Typography>
        <Flex>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            {buttonVisible && (
              <IconButton
                color='primary'
                onClick={() => {
                  setButtonVisible(false);
                  setSearchVisible(true);
                }}
              >
                <Search sx={{ color: blue[700] }} />
              </IconButton>
            )}
            {searchVisible && (
              <ClickAwayListener
                onClickAway={() => {
                  setSearchVisible(false);
                  setButtonVisible(true);
                }}
              >
                <Box>
                  <SearchInput />
                </Box>
              </ClickAwayListener>
            )}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <SearchInput />
          </Box>
          <ListItemButton
            sx={{
              height: '2.4rem',
              borderRadius: 5,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Badge badgeContent={2} color='warning'>
              <ShoppingBasket sx={{ color: blue[700] }} />
            </Badge>
            <ListItemText
              primary={`${1000}${'\u00A0'}грн`}
              sx={{ ml: 1, display: { xs: 'none', md: 'flex' } }}
            />
          </ListItemButton>
        </Flex>
      </Between>
    </AppBar>
  );
};

export default SearchBar;
