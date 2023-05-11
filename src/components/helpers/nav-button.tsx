import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { FC } from 'react';
import { AlignCenter } from '.';
import { INavButton } from '../../types/nav-bar';

const NavButton: FC<INavButton> = ({
  navigate,
  page,
  setPage,
  currentPage,
  icon,
  text,
  index,
}): JSX.Element => {
  return (
    <ListItemButton
      sx={{
        borderRadius: 5,
        display: index && index > 2 ? { sm: 'none', md: 'flex' } : 'flex',
        color: page === currentPage ? '#FFFF' : '',
        // bgcolor: page === currentPage ? blue[600] : '',
        '&:hover': {
          color: '#FFF !important',
          '& .MuiSvgIcon-root': {
            color: '#FFF !important',
          },
        },
      }}
      onClick={() => {
        if (currentPage) {
          setPage(currentPage);
          navigate(currentPage);
        }
      }}
    >
      <AlignCenter>
        <ListItemIcon
          sx={{ color: page === currentPage ? '#FFF' : yellow[500] }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ ml: -4 }} />
      </AlignCenter>
    </ListItemButton>
  );
};

export default NavButton;
