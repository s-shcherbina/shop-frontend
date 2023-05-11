import { FC } from 'react';
import PhoneFormat from './helpers/phone-format';
import { TextField } from '@mui/material';
import { IPropsCustomerData } from '../types/auth';
import Delivery from './delivery';

const CustomerData: FC<IPropsCustomerData> = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  delivery,
  setDelivery,
  locality,
  setLocality,
  department,
  setDepartment,
  values,
  setValues,
  formPhone,
}): JSX.Element => {
  return (
    <>
      <PhoneFormat values={values} setValues={setValues} />
      {formPhone && (
        <>
          <TextField
            value={firstName}
            size='small'
            variant='standard'
            label='Ім`я'
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            value={lastName}
            size='small'
            variant='standard'
            label='Прізвище'
            onChange={(e) => setLastName(e.target.value)}
          />
          <Delivery
            delivery={delivery}
            setDelivery={setDelivery}
            locality={locality}
            setLocality={setLocality}
            department={department}
            setDepartment={setDepartment}
          />
        </>
      )}
    </>
  );
};

export default CustomerData;
