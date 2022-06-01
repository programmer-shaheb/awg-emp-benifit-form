import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import Inputs from '../../components/input';
import DataTable from './table';
import SkeletonDiv from "../../components/skeleton";
import './form2.scss';

const rows = [
  {class: 'CLASS 1', info: 'Clerical, administrative or other similar non-hazardous occupations'},
  {class: 'CLASS 2', info:'Occupations where some degree of risk is involved, e.g. supervision of manual workers, totally administrative job in an industrial environment'},
  {class: 'CLASS 3', info:'Occupations involving regular light to medium manual work but no substantial hazard which may increase the risk of sickness or accident'},
  {class: 'CLASS 4', info:'High risk occupations involving heavy manual work including hot works'},
];

const tabledata = [
  {num:'e) ', question:'Claims Experience for the past 3 years', note:'Note: The insurer reserves the right to request for more information.'},
  { question:'Outstanding Claims', note:'Note: The insurer reserves the right to request for more information.'}
];

const data = [
  {age: '16 - 30'},
  {age: '31 - 35'},
  {age: '36 - 40'},
  {age: '41 - 45'},
  {age: '46 - 50'},
  {age: '51 - 55'},
  {age: '56 - 60'},
  {age: '61 - 65'},
  {age: '61 - 65'}
];

const category = [
  {catogery: 'GTL',
   detail: [ 
     { num: '1', data1:'Directors' },
     { num: '2', data1:'Senior Management' },
     { num: '3', data1:'Executives' },
     { num: '4', data1:'Data' } ], 
  data2: ['Data', 'Data', 'Data', 'Data'], 
  data3: ['Data', 'Data', 'Data', 'Data'] },
  {catogery: 'GPA',
   detail: [ 
     { num: '1', data1:'Directors' },
     { num: '2', data1:'Senior Management' },
     { num: '3', data1:'Executives' },
     { num: '4', data1:'Data' } ], 
  data2: ['Data', 'Data', 'Data', 'Data'], 
  data3: ['Data', 'Data', 'Data', 'Data'] },
  {catogery: 'GCI',
   detail: [ 
     { num: '1', data1:'Directors' },
     { num: '2', data1:'Senior Management' },
     { num: '3', data1:'Executives' },
     { num: '4', data1:'Data' } ], 
  data2: ['Data', 'Data', 'Data', 'Data'], 
  data3: ['Data', 'Data', 'Data', 'Data'] },
];

const Group = () => {

  const [value, setValue] = React.useState('qu1');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <SkeletonDiv activeStep={1}>
      <div class="content mt4">
        <h1 className='font-20-bold text-black'>GROUP TERM LIFE / GROUP PERSONAL ACCIDENT / GROUP CRITICAL ILLNESS INSURANCE</h1>
        <h3 className='font-20-bold arial mt3 text-black'>Occupational Classifications</h3>
        <div className='width-85'>
          <div className='pink-table mt4'>
          <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small"> 
            <TableBody>
              {rows.map((row) => (
                <TableRow >
                  <TableCell component="th" className="w-30" scope="row">
                    {row.class}
                  </TableCell>
                  <TableCell>{row.info}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
          </div>
        </div>
        <div className='table mt4'>
          <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
          <TableRow>
            <TableCell className="w-20"></TableCell>
            <TableCell align="center">CATEGORY OF EMPLOYEES/OCCUPATION (REFER TO THE EXAMPLES)</TableCell>
            <TableCell align="center">BASIS OF COVERAGE - SUM INSURED (REFER TO THE EXAMPLES)</TableCell>
            <TableCell className="w-20" align="center"># OF EMPLOYEES</TableCell>
          </TableRow>
        </TableHead>
           <TableBody>
              {category.map((row) => (
                <TableRow >
                  <TableCell component="th" scope="row" className="light-blue-bg w-20">
                    {row.catogery}
                  </TableCell>
                  <TableCell className="inner-tbl">
                    <Table>
                    {row.detail.map(detail => (
                      <TableRow>
                        <TableCell className="w-20">{detail.num}</TableCell>
                        <TableCell className='text-tbl-blue'>{detail.data1}</TableCell>
                      </TableRow>
                      ))}
                    </Table>
                  </TableCell>
                  
                  <TableCell className="inner-tbl">
                  <Table>
                    {row.data2.map(data2 => (
                       <TableRow>
                        <TableCell>{data2}</TableCell>
                        </TableRow>
                      ))}
                      </Table>
                  </TableCell>
                  <TableCell className="inner-tbl">
                  <Table>
                    {row.data3.map(data3 => (
                       <TableRow>
                        <TableCell>
                          <div className="flex justify-between items-center relative">
                          {data3} 
                          <div className="arrows">
                            <KeyboardArrowUp />
                            <KeyboardArrowDown />
                          </div>
                          </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      </Table>
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
          </div>

          <div className='width-85'>
          <div className='pink-table-normal mt4'>
          <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small">
          <TableRow>
            <TableCell component="th">Category of Employees / Occupation</TableCell>
            <TableCell component="th">Basis of Coverage</TableCell>
          </TableRow>
            
            <TableBody>
                <TableRow >
                  <TableCell scope="row">
                      <div className='examples mb3'>
                        <h5 className="font-14-bold text-pink">EXAMPLE 1</h5>
                        <div className='list'>
                          <div className='list-item'>
                           (i) Senior Management (Director, General Manager, Senior Manager) 
                          </div>
                          <div className='list-item'>
                           (ii) Manager & Executive 
                          </div>
                          <div className='list-item'>
                           (iii) All Others
                          </div>
                        </div>
                      </div>

                      <div className='examples'>
                        <h5 className="font-14-bold text-pink">EXAMPLE 2</h5>
                        <div className='list'>
                          <div className='list-item'>
                          (i) All Employees
                          </div>
                        </div>
                      </div>
                  </TableCell>
                  <TableCell>
                  <div className='examples mb3'>
                        <div className='list'>
                          <div className='list-item'>
                          100,000
                          </div>
                          <div className='list-item'>
                          50,000
                          </div>
                          <div className='list-item'>
                          25,000
                          </div>
                        </div>
                      </div>
                         
                      <div className='examples'>
                          <div className='list-item'>
                          24 X Basic Monthly Salary*
                          </div>
                        </div>
                         
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} className="btm-dashed"  scope="row">
                    <div className='text-pink para-14 italic'>* Please provide salary information if the basis of coverage is in terms of basic monthly salary.</div>
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
          </div>
        </div>

        <div className='mt4'>
          <div className='question mb2 mt3'><b>b)</b> Please provide Current Non-Medical Limit (if applicable)</div>
        </div>

        <form className="mt4 form">
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>  
            <Inputs labelName='GROUP TERM LIFE:' label='Group Term Life'/>
        </Grid>  
        <Grid item xs={12} sm={12} md={6} lg={6}>  
            <Inputs labelName='UP TO AGE' label='Up To Age'/>
        </Grid>   
        <Grid item xs={12} sm={12} md={6} lg={6}>  
            <Inputs labelName='GROUP CRITICAL ILLNESS' label='Group Critical Illness'/>
        </Grid>  
        <Grid item xs={12} sm={12} md={6} lg={6}>  
            <Inputs labelName='UP TO AGE' label='Up To Age'/>
        </Grid> 
        </Grid>   
        </form>
        <div className='mt4'>
          <div className='question mb2 mt3'><b>c)</b>  Group Critical Illness: Basis of Coverage</div>
        </div>
        <form className="mt4 form">
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>  
              <Inputs labelName='IS THIS BENEFIT AN ADVANCE OF OR AN ADDITIONAL AMOUNT TO THE TERM LIFE?' label='Is This Benefit An Advance Of Or An Additional Amount To The Term Life?'/>
          </Grid>  
        </Grid>   
        </form>

        <div className='question mb2 mt3'>If it is an advance benefit, what percentage on the Term Life sum insured you want us to quote? Please circle as appropriate:</div>

        <RadioGroup
        row
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
        >
        <FormControlLabel value="qu1" control={<Radio />} label="25%" />
        <FormControlLabel value="qu2" control={<Radio />} label="50%" />
        <FormControlLabel value="qu3" control={<Radio />} label="100%" />
        </RadioGroup>

        <div className='question mb2 mt3'>Please provide a list of critical illnesses covered (if currently insured).</div>
        <div className='mt4'>
          <div className='question mb2 mt3'><b>d)</b> Details of Employees</div>
        </div>

        <div className='table mt4'>
        <TableContainer className='w-100'>
      <Table sx={{ minWidth: 650 }} className='w-100 relative'>
        <TableHead>

        <TableRow>
          <TableCell  align="center"></TableCell>
            <TableCell colSpan={4}  align="center">GTL</TableCell>
            <TableCell colSpan={4} align="center">GCI</TableCell>
  
          </TableRow>

          <TableRow>
          <TableCell  align="center"></TableCell>
            <TableCell colSpan={2}  align="center"># OF EMPLOYEES</TableCell>
            <TableCell colSpan={2} align="center">TOTAL SUM INSURED (S$)</TableCell>
            <TableCell colSpan={2}  align="center"> # OF EMPLOYEES </TableCell>
            <TableCell colSpan={2}  align="center"> TOTAL SUM INSURED (S$) </TableCell>
          </TableRow>
          

          <TableRow>
            <TableCell align="center" rowSpan={2}>
              AGE BAND
             <div className='text-small'>(AGE NEXT BIRTHDAY)</div>
            </TableCell>
            <TableCell align="center">MALE</TableCell>
            <TableCell align="center"> FEMALE </TableCell>
            <TableCell align="center">MALE</TableCell>
            <TableCell align="center"> FEMALE </TableCell>
            <TableCell align="center">MALE</TableCell>
            <TableCell align="center"> FEMALE </TableCell>
            <TableCell align="center">MALE</TableCell>
            <TableCell align="center"> FEMALE </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {data.map((row) => (
                <TableRow >
                  <TableCell align="center" className="text-tbl-blue">
                    {row.age}
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

export default Group