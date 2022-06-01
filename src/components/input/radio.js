import React from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import './input.scss';

const RadioBtn = ( 
  {
  labelName,
  onChange = () => {}
  } ) => {

    const [value, setValue] = React.useState('yes');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

  return (
    <div>
      <label className='input-label'>{labelName}</label>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
        >
        <FormControlLabel onChange={onChange} value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel onChange={onChange} value="no" control={<Radio />} label="No" />
        </RadioGroup>
    </div>
  )
}

export default RadioBtn










