import React, { useReducer } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { Add } from '@mui/icons-material';
import Inputs from '../../components/input';
import Radio from '../../components/input/radio';
import Note from '../../components/note';
import DataTable from './table';
import SkeletonDiv from "../../components/skeleton";
import './form3.scss';

const Insurance = () => {

  const userForm = [  
    {
      id: 'waiting',
      labelName: 'WHAT IS THE WAITING PERIOD REQUIRED? PLEASE CIRCLE AS APPROPRIATE: 3 OR 6 MONTHS OR',
      label: 'What Is The Waiting Period Required? Please Circle As Appropriate: 3 Or 6 Months Or'
    },
    {
      id: 'benifit',
      labelName:'WHAT THE BENEFIT DURATION REQUIRED?',
      inputBtm:'(ie. 2 years, or 5 years, or up to retirement age 60 or 62, or 65)', 
      label:'What The Benefit Duration Required?'
    },
    {
      id: 'benifit2',
      labelName:'WHAT IS THE ESCALATION BENEFIT REQUIRED? PLEASE CIRCLE AS APPROPRIATE: 0% OR 3% OR 5% OR',
      label:'WHAT IS THE ESCALATION BENEFIT REQUIRED? PLEASE CIRCLE AS APPROPRIATE: 0% OR 3% OR 5% OR'
    }
  ];

  const category = [
    {
      num:'1', data:'Directors', 
    },
    {
      num:'2', data:'Senior Management', 
    },
    {
      num:'3', data:'Executives', 
    },
    {
      num:'4', data:'Data', 
    }
  ];

  const datatable = [
    {data: '16 - 30'},
    {data: '31 - 35'},
    {data: '36 - 40'},
    {data: '41 - 45'},
    {data: '46 - 50'},
    {data: '51 - 55'},
    {data: '56 - 60'},
    {data: '61 - 65'},
    {data: '61 - 65'}
  ];

  const tabledata = [
    {question:'Claims Experience for the past 3 years'}
  ];

  const initialState = { waiting:'', benifit:'', benifit2:'' };
  const [state, setState] = useReducer((oldProps, newProps) => ({...oldProps, ...newProps}));

  return (
    <SkeletonDiv activeStep={2}>
      <div class="content mt4">
        <h1 className='font-20-bold text-black'>GROUP DISABILITY INCOME INSURANCE</h1>
        <div className='question mt3 mb2'>If currently insured, please attach a copy of the definition of Disability.</div>
        <Button className="pink-btn" variant="contained" startIcon={<Add />}>
        Attach Document
      </Button>

      <form className="mt4 form">
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12}> 
      <div className="lg-input mb2">
        {userForm?.map(item => ( 
              <Inputs 
                key={item.key}
                icon={item.icon}
                onChange={e => setState({ [item.id]: e.target.value })}
                label={item.label}
                inputBtm={item.inputBtm}
                labelName={item.labelName}
              />
            ) )} 
            </div>
         </Grid>   
       
        </Grid> 
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>  
         <div className='question mt3 mb2'>Please provide Current Non-Medical Limit (if applicable):  </div>
         </Grid>  
        <Grid item xs={12} sm={12} md={6} lg={6}>  
            <Inputs labelName='S$' />
        </Grid>  
        <Grid item xs={12} sm={12} md={6} lg={6}>  
            <Inputs labelName='UP TO AGE' label='Up To Age'/>
        </Grid> 
        <Grid item xs={12} sm={12} md={12} lg={12}>  
        <div className='question mt3 mb2'>Any requirement for partial disability benefits? </div>
        <Radio />
         </Grid> 
        </Grid>
        
        </form>
        <div className='question mt3 mb2'>Details of Employees </div>
        <div className='table mt4'>
          <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
          <TableRow>
            <TableCell align="center">CATEGORY OF EMPLOYEES/OCCUPATION</TableCell>
            <TableCell align="center" colSpan={2}>
            <Table>
              <TableRow>
                <TableCell colSpan={2} align="center">MONTHLY SALARY (S$)</TableCell>
              </TableRow>
              <TableRow align="center" className='w-100'>
                 <TableCell align="center" className="border-btm-0 w-50">COMPULSORY</TableCell>
                 <TableCell align="center" className="border-btm-0 w-50">VOLUNTARY</TableCell>
              </TableRow>
            </Table> </TableCell>
            <TableCell align="center" colSpan={2} className="w-30">BASIS OF COVERAGE I.E. % (E.G. 50%) OF MONTHLY SALARY</TableCell>
          </TableRow>
          </TableHead>
            <TableBody>
              {category.map((row) => (
                <TableRow >
                  <TableCell>
                    <Table>
                      <TableRow>
                        <TableCell className="border-btm-0 w-20">{row.num}</TableCell>
                        <TableCell className=' border-btm-0 text-tbl-blue'>{row.data}</TableCell>
                      </TableRow>
                    </Table>
                  </TableCell>
                  <TableCell>  data</TableCell>
                  <TableCell>  data</TableCell>
                  <TableCell className="relative"> 
                    <div className="flex justify-between items-center">
                      Data%
                      <div className="arrows">
                            <KeyboardArrowUp />
                            <KeyboardArrowDown />
                          </div>
                    </div>
                </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
          </div>
          <div className='mt3 mb4'>
          <Note text="Note: * Applicable to the category of employees as stated. Monthly salary will be basic pay + fixed bonus if any. It excludes variable bonus, commissions, etc."/>
          </div>

          <div className='table mt4'>
          <TableContainer>
          <Table sx={{ minWidth: 650 }}>
          <TableHead>
          <TableRow>
            <TableCell align="center" className='w-30'>AGE BAND (AGE NEXT BIRTHDAY)</TableCell>
            <TableCell align="center" colSpan={2}>
            <Table>
              <TableRow>
                <TableCell colSpan={2} align="center"># OF EMPLOYEES</TableCell>
              </TableRow>
              <TableRow align="center" className='w-100'>
                 <TableCell align="center" className="border-btm-0 w-50">MALE</TableCell>
                 <TableCell align="center" className="border-btm-0 w-50">FEMALE</TableCell>
              </TableRow>
            </Table> </TableCell>
            <TableCell align="center" colSpan={2}>
            <Table>
              <TableRow>
                <TableCell colSpan={2} align="center">SUM INSURED (S$)</TableCell>
              </TableRow>
              <TableRow align="center" className='w-100'>
              <TableCell align="center" className="border-btm-0 w-50">MALE</TableCell>
                 <TableCell align="center" className="border-btm-0 w-50">FEMALE</TableCell>
              </TableRow>
            </Table> </TableCell>
          </TableRow>
        </TableHead>
            <TableBody>
              {datatable.map((row) => (
                <TableRow >
                  <TableCell align="center" className='text-tbl-blue'>{row.data}</TableCell>
                  <TableCell className="relative"> 
                    <div className="flex justify-between items-center">
                      Data
                      <div className="arrows">
                            <KeyboardArrowUp />
                            <KeyboardArrowDown />
                          </div>
                    </div>
                </TableCell>
                <TableCell className="relative"> 
                    <div className="flex justify-between items-center">
                      Data
                      <div className="arrows">
                            <KeyboardArrowUp />
                            <KeyboardArrowDown />
                          </div>
                    </div>
                </TableCell>
                <TableCell className="relative"> 
                    <div className="flex justify-between items-center">
                      Data
                      <div className="arrows">
                            <KeyboardArrowUp />
                            <KeyboardArrowDown />
                          </div>
                    </div>
                </TableCell>
                <TableCell className="relative"> 
                    <div className="flex justify-between items-center">
                      Data
                      <div className="arrows">
                            <KeyboardArrowUp />
                            <KeyboardArrowDown />
                          </div>
                    </div>
                </TableCell>
                </TableRow>
              ))}
              <TableRow className="table-footer">
                  <TableCell align="center" className="footer-text">
                    Total
                  </TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
          </div>
          <div className='mt4'>
            {tabledata?.map(item => (<DataTable item={item} />))}
          </div>
      </div>
    </SkeletonDiv>
  )
}

export default Insurance