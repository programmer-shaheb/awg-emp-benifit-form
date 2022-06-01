import React, { useReducer } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Grid, Checkbox } from '@mui/material';
import { Add, KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import SkeletonDiv from "../../components/skeleton";
import Inputs from '../../components/input';
import DataTable from './table';
import './form5.scss';

const Outpatient = () => {

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
     data:'DEPENDANT (WHERE APPLICABLE)', 
    },
    {
      data:'# OF HEADCOUNT', 
     }
  ];

  const category2 = [
    {
      data:'CLINICAL GP', 
    },
    {
      data:'SPECIALIST', 
    },
    {
      data:'DIAGNOSTIC X-RAY/ LAB TESTS', 
    },
    {
     data:'DENTAL', 
    },
    {
      data:'OTHERS', 
     }
  ];

  const category3 = [
    {data:'Directors', num:'1' },
    {data:'Senior Management', num:'2' },
    {data:'Executives', num:'3' },
    {data:'Data', num:'4' },
  ];

  const category4 = [
    {data:'Benefits' },
    {data:'Normal Delivery' },
    {data:'Caesarian Delivery' },
    {data:'Others:' },
  ];

  const category5 = [
    {data:'Cover for Outpatient Medical expenses' },
    {data:'Cover for Hospital & Surgical expenses' },
    {data:'Cover for Dental expenses' },
    {data:'Cover for Dread Disease (e.g. cancer, kidney failure, etc.)' },
    {data:'Cover for loss of income due to sickness or accident' },
    {data:'Cover for long term medical treatment' },
  ];

  const tabledata = [
    { note:'* inclusive of visits to non-panel clinics. Note: The insurer reserves the right to request for more information', question:'Paid Claims'},
    { note:'* inclusive of visits to non-panel clinics. Note: The insurer reserves the right to request for more information', question:'Outstanding Claims'}
  ];

  const tabledata2 = [
    { note:'Note: The insurer reserves the right to request for more information.', question:'Claims Experience for past 3 years'},
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

  const userForm = [
    {
      id: 'name',
      label: 'Name',
    },
    {
      id: 'nric',
      label: 'NRIC/ Fin No.',
    },
    {
      id: 'org',
      label: 'Designation',
    },
  ];

  const initialState = { name:'', nric:'', org: '' };
  const [state, setState] = useReducer((oldProps, newProps) => ({...oldProps, ...newProps}));

  return (
    <SkeletonDiv activeStep={4}>
      <div class="content mt4">
        <h1 className="font-20-bold text-black">GROUP OUTPATIENT INSURANCE</h1>
        <div className="font-20-bold text-black arial">Category of Employees to be insured (please tick as appropriate)</div>

        
        <div className='table mt4'>
          <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
          <TableRow>
            <TableCell align="center">CATEGORY OF EMPLOYEES/OCCUPATION</TableCell>
            <TableCell align="center">CLINICAL GP</TableCell>
            <TableCell align="center">SPECIALIST</TableCell>
            <TableCell align="center">DIAG X-RAY/LAB TESTS</TableCell>
            <TableCell align="center">DENTAL</TableCell>
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
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
          </div>

          <div className='font-20-bold text-black arial mt4 mb3'>Age Profile of Employees</div>
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
            </Table> 
            </TableCell>
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

        <div className='question mt4 mb3'>Claims Experience for the past 3 years</div>
        <div className='mt4'>
        {tabledata?.map(item => (<DataTable item={item} />))}
        </div>

        <div className='question mt4 mb2'>Kindly attach a copy of the Schedule of Benefits if the benefits are on insured basis.</div>
        <Button className="pink-btn" variant="contained" startIcon={<Add />}>
        Attach Document
      </Button>

      <div className='question mt4 mb2'>
       If currently self-insured, kindly provide the following details:
      </div>
      <div className='question mt4 mb2'>
       Please indicate <b>“Unlimited”</b> if there is no cap and <b>“NA”</b> if it is not applicable.
      </div>


      <div className='table mt4'>
          <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
          <TableRow>
            <TableCell align="center">BENEFITS</TableCell>
            <TableCell align="center" colSpan={2}>
            <Table>
              <TableRow>
                <TableCell colSpan={2} align="center">MAXIMUM LIMIT PER VISIT (S$)</TableCell>
              </TableRow>
              <TableRow align="center" className='w-100'>
                 <TableCell align="center" className="border-btm-0 w-50">CLINIC ON COMPANY’S PANEL</TableCell>
                 <TableCell align="center" className="border-btm-0 w-50">NON-PANEL CLINIC</TableCell>
              </TableRow>
            </Table> 
            </TableCell>
            <TableCell align="center" colSpan={2}>
            <Table>
              <TableRow>
                <TableCell colSpan={2} align="center">MAXIMUM LIMIT PER POLICY YEAR (S$)</TableCell>
              </TableRow>
              <TableRow align="center" className='w-100'>
                 <TableCell align="center" className="border-btm-0 w-50">CLINIC ON COMPANY’S PANEL</TableCell>
                 <TableCell align="center" className="border-btm-0 w-50">NON-PANEL CLINIC</TableCell>
              </TableRow>
            </Table> 
            </TableCell>
            <TableCell align="center" colSpan={2}>
            <Table>
              <TableRow>
                <TableCell colSpan={2} align="center">C0-PAYMENT (S$) / CO - INSURANCE (%)</TableCell>
              </TableRow>
              <TableRow align="center" className='w-100'>
                 <TableCell align="center" className="border-btm-0 w-50">CLINIC ON COMPANY’S PANEL</TableCell>
                 <TableCell align="center" className="border-btm-0 w-50">NON-PANEL CLINIC</TableCell>
              </TableRow>
            </Table> 
            </TableCell>
           
          </TableRow>
          </TableHead>
            <TableBody>
              {category2.map((row) => (
                <TableRow >
                  <TableCell>
                    <Table>
                      <TableRow>
                        <TableCell className=' border-btm-0 text-tbl-blue'>{row.data}</TableCell>
                      </TableRow>
                    </Table>
                  </TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
      </div>

          <div className='question mt4 mb3'>BENEFIT: MATERNITY INSURANCE</div>
          <div className='font-20-bold text-black arial'>Basis of Coverage</div>

          <div className='table mt4'>
          <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
          <TableRow>
            <TableCell align="center">CATEGORY OF EMPLOYEES/OCCUPATION</TableCell>
            <TableCell align="center"># OF HEADCOUNT</TableCell>
          </TableRow>
          </TableHead>
            <TableBody>
              {category3.map((row) => (
                <TableRow >
                  <TableCell>
                    <Table>
                      <TableRow>
                        <TableCell className='border-btm-0 w-10'>{row.num}</TableCell>
                        <TableCell className=' border-btm-0 text-tbl-blue'>{row.data}</TableCell>
                      </TableRow>
                    </Table>
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
        {tabledata2?.map(item => (<DataTable item={item} />))}
        </div>

        <div className='question mt4 mb2'>Kindly attach a copy of the Schedule of Benefits if the benefits are on insured basis.</div>
        <Button className="pink-btn" variant="contained" startIcon={<Add />}>
        Attach Document
      </Button>

      <div className='question mt4 mb2'>
       If currently self-insured, kindly provide the following details:
      </div>
      <div className='question mt4 mb2'>
       Please indicate <b>“Unlimited”</b> if there is no cap and <b>“NA”</b> if it is not applicable.
      </div>


      <div className='table mt4'>
          <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
          <TableRow>
            <TableCell align="center">BENEFITS</TableCell>
            <TableCell align="center" colSpan={2}>MAXIMUM LIMIT PER POLICY YEAR (S$)</TableCell>
            <TableCell align="center" colSpan={2}>DEDUCTIBLE / CO-INSURANCE (S$)</TableCell>
          </TableRow>
          </TableHead>
            <TableBody>
              {category4.map((row) => (
                <TableRow >
                  <TableCell>
                    <Table>
                      <TableRow>
                        <TableCell className=' border-btm-0 text-tbl-blue'>{row.data}</TableCell>
                      </TableRow>
                    </Table>
                  </TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Data</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
      </div>

      <div className='font-20-bold text-black arial mt3'>NEEDS ANALYSIS & PRODUCT RECOMMENDATION</div>
      <div className='question mt4 mb2'>
      Please tick the appropriate box to indicate the priority of your company’s needs :
      </div>

      <div className='table mt4'>
          <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
          <TableRow>
            <TableCell align="center">COMPANY’S PRIORITIES</TableCell>
            <TableCell align="center">LOW</TableCell>
            <TableCell align="center">MED</TableCell>
            <TableCell align="center">HIGH</TableCell>
            <TableCell align="center">ADVISER’S RECOMMENDATION</TableCell>
          </TableRow>
          </TableHead>
            <TableBody>
              {category5.map((row) => (
                <TableRow >
                  <TableCell>
                    <Table>
                      <TableRow>
                        <TableCell className=' border-btm-0'>{row.data}</TableCell>
                      </TableRow>
                    </Table>
                  </TableCell>
                  <TableCell  align="center"> <Checkbox  /></TableCell>
                  <TableCell  align="center"> <Checkbox  /></TableCell>
                  <TableCell  align="center"> <Checkbox  /></TableCell>
                  <TableCell>Data</TableCell>
                </TableRow>
              ))}

                <TableRow >
                  <TableCell> Others </TableCell>
                  <TableCell colSpan={4}>Data</TableCell>
                </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
      </div>

      
      <form className="mt4 form">
      <div className='font-20-bold text-black arial mt3 mb3'>DECLARATION</div>
         <Grid container spacing={1}>
           <Grid item xs={2} sm={1} md={1} lg={1} className="tc">
             <Checkbox  />
           </Grid>
           <Grid item xs={10} sm={11} md={11} lg={11}>
             <div className='question'>I / We hereby declare that, to the best of my / our knowledge and belief, the information given here are true and complete, and agree that if a contract of insurance is effected, all information submitted in connection with this application shall form the basis of such contract between the Company and the Insurer.</div>
           </Grid>
         
           <Grid item xs={6} sm={6} md={6} lg={6}>  
        <div className="lg-input">
        {userForm?.map(item => ( 
              <Inputs 
                key={item.key}
                onChange={e => setState({ [item.id]: e.target.value })}
                label={item.label}
              />
            ) )} 
            </div>
          </Grid> 
         </Grid>

         <Grid container spacing={1}>
           <Grid item xs={2} sm={1} md={1} lg={1} className="tc">
             <Checkbox  />
           </Grid>
           <Grid item xs={10} sm={11} md={11} lg={11}>
             <div className='question'>I / We hereby declare that, to the best of my / our knowledge and belief, the information given here are true and complete, and agree that if a contract of insurance is effected, all information submitted in connection with this application shall form the basis of such contract between the Company and the Insurer.</div>
           </Grid>
         
           <Grid item xs={6} sm={6} md={6} lg={6}>  
        <div className="lg-input">
        {userForm?.map(item => ( 
              <Inputs 
                key={item.key}
                onChange={e => setState({ [item.id]: e.target.value })}
                label={item.label}
              />
            ) )} 
            </div>
          </Grid> 
         </Grid>
      </form>
      </div>
    </SkeletonDiv>
  )
}

export default Outpatient