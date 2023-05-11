import {
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISideBarButton } from '../../types/side-bar';
import { blue } from '@mui/material/colors';

const SideBarButton: FC<ISideBarButton> = ({
  pathname,
  path,
  name,
  click,
}): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <ListItem>
      <ListItemButton
        sx={{
          height: '2.4rem',
          textAlign: 'center !important',
          borderRadius: 5,
          bgcolor: pathname === path ? `${blue[500]} !important` : '',
          color:
            pathname === path
              ? '#FFF !important'
              : theme.palette.text.secondary,
          '&:hover': {
            bgcolor: `${blue[500]} !important`,
            color: '#FFF',
            // '& .MuiSvgIcon-root': {
            //   color: '#FFF !important',
            // },
          },
        }}
        onClick={() => {
          navigate(path);
          click();
        }}
      >
        {/* <ListItemIcon
          sx={{
            color: pathname === path ? '#FFF' : theme.palette.text.secondary,
          }}
        >
          {icon}
        </ListItemIcon> */}
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default SideBarButton;
