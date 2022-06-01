import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Stack, Switch, FormGroup } from '@mui/material';
import './switcher.scss';


const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 30,
  height: 18,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fcfcfc',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#fcfcfc' : '#fcfcfc',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 14,
    height: 14,
    backgroundColor: '#F4136B',
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    borderRadius: 18 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#fcfcfc' : '#fcfcfc',
    boxSizing: 'border-box',
  },
}));

const Switches = () => {
  return (
    <FormGroup>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>YES</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography className="text-grey-7">NO</Typography>
      </Stack>
    </FormGroup>
  );
}

export default Switches