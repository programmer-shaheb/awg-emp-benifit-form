import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import './steps.scss';

const steps = [
    'GENERAL INFORMATION',
    'GROUP TERM LIFE / GROUP PERSONAL ACCIDENT / GROUP CRITICAL ILLNESS INSURANCE',
    'GROUP DISABILITY INCOME INSURANCE',
    'GROUP HOSPITAL & SURGICAL INSURANCE / MAJOR MEDICAL INSURANCE',
    'GROUP OUTPATIENT INSURANCE',
  ];

const Steps = ({ activeStep }) => {
  return (
    <div className='steppers mt4'>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>
  )
}

export default Steps