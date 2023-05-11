import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { blue, yellow } from '@mui/material/colors';
import { FC } from 'react';
import { AlignCenter } from '.';
import { ILogButton } from '../../types/nav-bar';

const LogButton: FC<ILogButton> = ({ icon, text, trigger }): JSX.Element => {
  return (
    <ListItemButton
      sx={{
        borderRadius: 5,
        display: 'flex',
        '&:hover': {
          color: '#FFF !important',
          '& .MuiSvgIcon-root': {
            color: '#FFF !important',
          },
        },
      }}
      {...trigger}
    >
      <AlignCenter>
        <ListItemIcon sx={{ color: yellow[500] }}>{icon}</ListItemIcon>
        <ListItemText primary={text} sx={{ ml: -4 }} />
      </AlignCenter>
    </ListItemButton>
  );
};

export default LogButton;
