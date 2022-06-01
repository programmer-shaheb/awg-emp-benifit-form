import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid } from '@mui/material';
import { Add, KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import SkeletonDiv from "../../components/skeleton";
import Switches from '../../components/switcher';
import Note from '../../components/note';
import AddClaim from './min-table';
import DataTable from './tables';
import './form4.scss';

const HealthInsurence = () => {

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

  const tabledata = [
    { note:'Note: The insurer reserves the right to request for more information.'}
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
    {data: '66 - 70'}
  ];

  return (
    <SkeletonDiv activeStep={3}>
      <div class="content mt4">
        <h1 className='font-20-bold text-black'>GROUP HOSPITAL & SURGICAL INSURANCE / MAJOR MEDICAL INSURANCE</h1>
        <div className='question mt3 mb2'>Basis of Coverage</div>

        <div className='table mt4'>
          <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
          <TableRow>
            <TableCell align="center">CATEGORY OF EMPLOYEES/OCCUPATION</TableCell>
            <TableCell align="center"> ROOM & BOARD BENEFIT PLAN(S$) </TableCell>
            <TableCell align="center">CURRENTLY WITH TMIS YES/NO</TableCell>
            <TableCell align="center">PROPOSAL WITH TMIS YES/NO</TableCell>

            
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
                  <TableCell>  Data</TableCell>
                  <TableCell> <Switches /></TableCell>
                  <TableCell><Switches /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
          </div>
          <div className='mt4 mb3'>
            <Note text="Important Note:"
             text2="(1) Dependants can be covered under Group Hospital & Surgical Plan. Their cover should be the same as the employee’s cover. " 
            text3="(2) Please provide the Deductible /Co-insurance for respective employee category or occupation, if applicable."
            />
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
                  <TableCell scope="row" className="btm-dashed">
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
                  </TableCell>
                  <TableCell scope="row" className="btm-dashed">
                      <div className='examples'>
                        <div className='list'>
                          <div className='list-item'>
                          360 
                          </div>
                          <div className='list-item'>200 </div>
                          <div className='list-item'> 100  </div>
                        </div>
                      </div>
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
          </div>
        </div>
          
        <div className='question mt4 mb3'>Age Profile of Employees</div>
        <div className='table'>
          <TableContainer>
          <Table sx={{ minWidth: 650 }}>
          <TableHead>
          <TableRow>
            <TableCell align="center" className='w-30'>AGE BAND <div className='text-small'>(AGE NEXT BIRTHDAY)</div></TableCell>
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
                </TableRow>
              ))}
              <TableRow className="table-footer">
                  <TableCell align="center" className="footer-text">
                    Total
                  </TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
          </div>

          <div className='question mt4 mb3'>Details of Insured Members</div>
          <h4 className='mt3 mb2 font-20-bold arial'>For GHS and GMM:</h4>
          
          <div className='mt3'>
           <DataTable />
           <DataTable />
          </div>

          <h4 className='mt3 mb2 font-20-bold arial'>For GMM (if the basis of coverage differs from GHS):</h4>
          <div className='mt3'>
           <DataTable />
           <DataTable />
          </div>

          <h4 className='mt3 mb2 font-20-bold arial'>Claims Experience for the past 3 years</h4>

          <div className='mt4'>
      {tabledata?.map(item => (<AddClaim item={item} />))}
      </div>

      <div className='question mt4 mb2'>Kindly attach a copy of the Schedule of Benefits, if the benefits are on insured basis (i.e. currently insured).</div>
        <Button className="pink-btn" variant="contained" startIcon={<Add />}>
        Attach Document
      </Button>

      </div>
    </SkeletonDiv>
  )
}

export default HealthInsurence