import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import './input.scss';

const Inputs = ( 
  {
  showIcon = true,
  icon = null,
  labelName,
  label,
  inputBtm,
  onChange = () => {}
  } ) => {
  return (
    <div>
      <label className='input-label'>{labelName}</label>
      <TextField className='input' fullWidth onChange={onChange} placeholder={label} 
        InputProps={{
          endAdornment: <InputAdornment position="end">{showIcon && <span>{icon}</span>}</InputAdornment>,
        }}
      />
      <div className="input-btm mb3">{inputBtm}</div>
    </div>
  )
}

export default Inputs
