import {
  AdminPanelSettingsSharp,
  HowToReg,
  LockPerson,
  Logout,
  ManageAccounts,
  Person,
  PersonRemove,
} from '@mui/icons-material';
import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import { yellow } from '@mui/material/colors';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ILoginButton } from '../../types/nav-bar';
import LogButton from './log-button';
import { useAuthAdminOrSU } from '../../utils/hooks';

const LoginButton: FC<ILoginButton> = ({ text }): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      {useAuthAdminOrSU() ? (
        <PopupState variant='popover'>
          {(popupState: any) => (
            <>
              {text ? (
                <IconButton
                  sx={{ color: yellow[500] }}
                  {...bindTrigger(popupState)}
                >
                  <Person />
                </IconButton>
              ) : (
                <LogButton
                  icon={<Person fontSize='small' />}
                  text={'Вихід'}
                  trigger={bindTrigger(popupState)}
                />
              )}
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>
                  <Logout sx={{ pr: 1 }} /> Вийти з аккаунту
                </MenuItem>
                <Divider />
                <MenuItem onClick={popupState.close}>
                  <ManageAccounts sx={{ pr: 1 }} /> Змінити особисті дані
                </MenuItem>
                <Divider />
                <MenuItem onClick={popupState.close}>
                  <PersonRemove sx={{ pr: 1 }} /> Видалити аккаунт
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => {
                    popupState.close();
                    navigate('/admin');
                  }}
                >
                  <AdminPanelSettingsSharp sx={{ pr: 1 }} /> Адмін панель
                </MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
      ) : (
        <PopupState variant='popover'>
          {(popupState: any) => (
            <>
              {text ? (
                <IconButton
                  sx={{ color: yellow[500] }}
                  {...bindTrigger(popupState)}
                >
                  <Person />
                </IconButton>
              ) : (
                <LogButton
                  icon={<Person fontSize='small' />}
                  text={'Вхід'}
                  trigger={bindTrigger(popupState)}
                />
              )}
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  onClick={() => {
                    navigate('/register');
                    popupState.close();
                  }}
                >
                  <HowToReg sx={{ pr: 1 }} />
                  Реєстрація
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => {
                    navigate('/login');
                    popupState.close();
                  }}
                >
                  <LockPerson sx={{ pr: 1 }} /> Авторизація
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => {
                    navigate('/order_data');
                    popupState.close();
                  }}
                >
                  <AdminPanelSettingsSharp sx={{ pr: 1 }} /> Дані для замовлення
                </MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
      )}
    </>
  );
};

export default LoginButton;
