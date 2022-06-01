import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';


const TableData = () => {
  return (
   
    <TableContainer className='w-100'>
      <Table sx={{ minWidth: 650 }} className='w-100'>
        <TableHead>
          <TableRow>
            <TableCell className='w-20' align="center">BENEFITS</TableCell>
            <TableCell align="center">INSURANCE COVERAGE</TableCell>
            <TableCell className='w-30' align="center">
            <Table>
              <TableRow>
                <TableCell colSpan={2} align="center">PARTICIPATION</TableCell>
              </TableRow>
              <TableRow align="center" className='w-100'>
                 <TableCell align="center" className="border-btm-0 w-50">COMPULSORY</TableCell>
                 <TableCell align="center" className="border-btm-0 w-50">VOLUNTARY</TableCell>
              </TableRow>
            </Table> 
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell align="center" className='light-blue-bg'> 
                Life Insurance
              </TableCell>
              <TableCell align="center" className='tb-pasding'>
              <Table className="inner-table">
                <TableRow className='pa0'>
                    <TableCell align="center"  className="border-btm-0">1</TableCell>
                    <TableCell className="border-btm-0" align="center" >
                        <Table>
                        <TableRow align="center" className='w-100 add-border'>
                            <TableCell className=" text-tbl-blue w-50">Group Term Life (GTL)</TableCell>
                        </TableRow>
                        <TableRow align="center" className='w-100 add-border'>
                            <TableCell className=" text-tbl-blue w-50">Group Personal Accident (GPA)</TableCell>
                        </TableRow>
                        </Table>
                    </TableCell>
                </TableRow>
           
                <TableRow>
                    <TableCell align="center"  className="border-btm-0">2</TableCell>
                    <TableCell className="border-btm-0" align="center" >
                        <Table>
                        <TableRow align="center" className='w-100 add-border'>
                            <TableCell className="border-btm-0 text-tbl-blue w-50">Group Critical Illness (GCI)</TableCell>
                        </TableRow>
                        </Table>
                    </TableCell>
                </TableRow>
        
                <TableRow>
                    <TableCell align="center"  className="border-btm-0">3</TableCell>
                    <TableCell className="border-btm-0" align="center" >
                        <Table>
                        <TableRow align="center" className='w-100'>
                            <TableCell className="border-btm-0 text-tbl-blue w-50">Group Disability Income (GDI)</TableCell>
                        </TableRow>
                        </Table>
                    </TableCell>
                </TableRow>
                </Table> 
              </TableCell>
              <TableCell align="center" className='tb-pasding checkbox-border'>
              <Table className="inner-table">
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                </Table> 
              </TableCell>
            </TableRow>

            <TableRow >
              <TableCell align="center" className='light-blue-bg'> 
              Medical
              </TableCell>
              <TableCell align="center" className='tb-pasding'>
              <Table className="inner-table">
                <TableRow>
                    <TableCell align="center"  className="border-btm-0">3</TableCell>
                    <TableCell className="border-btm-0 tb-pasding" align="center">
                        <Table>
                        <TableRow align="center" className='w-100 add-border'>
                            <TableCell className="w-30 light-blue-bg">Group Hospital & Surgical (GHS)</TableCell>
                            <TableCell className="text-tbl-blue w-70">
                            <Table>
                            <TableRow>
                                <TableCell className="text-tbl-blue"> Employee only</TableCell> </TableRow> 
                                <TableRow >  <TableCell className="border-btm-0 text-tbl-blue">  Dependant (Spouse and/or Children)</TableCell></TableRow> 
                           
                            </Table>  
                            </TableCell>
                        </TableRow>
                        <TableRow align="center" className='w-100  border-btm-0'>
                            <TableCell className="w-30 light-blue-bg border-btm-0">Group Major Medical (GMM)</TableCell>
                            <TableCell className="text-tbl-blue w-70 border-btm-0">
                            <Table className="border-btm-0">
                            <TableRow >
                                <TableCell className="text-tbl-blue"> Employee only</TableCell>
                             </TableRow> 
                                <TableRow> 
                                     <TableCell className="text-tbl-blue border-btm-0">  Dependant (Spouse and/or Children)</TableCell>
                                </TableRow> 
                           
                            </Table>  
                            </TableCell>
                        </TableRow>
                        </Table>
                    </TableCell>
                </TableRow>
                </Table>
              </TableCell>
              <TableCell align="center" className='tb-pasding checkbox-border'>
              <Table className="inner-table checkbox-border">
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                </Table> 
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center" className='light-blue-bg'> 
              Others
              </TableCell>
              <TableCell align="center" className='tb-pasding'>
              <Table className="inner-table">
                <TableRow>
                    <TableCell align="center" >4</TableCell>
                    <TableCell className=" tb-pasding" align="center">
                        <Table>
                        <TableRow align="center" className='w-100 add-border'>
                            <TableCell className="w-30 light-blue-bg">Group Outpatient</TableCell>
                            <TableCell className="text-tbl-blue w-70">
                            <Table>
                            <TableRow>
                                <TableCell className="text-tbl-blue"> Employee only</TableCell> </TableRow> 
                                <TableRow >  <TableCell className="border-btm-0 text-tbl-blue">  Dependant (Spouse and/or Children)</TableCell></TableRow> 
                           
                            </Table>  
                            </TableCell>
                        </TableRow>
                        <TableRow align="center" className='w-100  border-btm-0'>
                            <TableCell className="w-30 light-blue-bg border-btm-0">Dental</TableCell>
                            <TableCell className="text-tbl-blue w-70 border-btm-0">
                            <Table>
                            <TableRow >
                                <TableCell className="text-tbl-blue"> Employee only</TableCell>
                             </TableRow> 
                                <TableRow> 
                                     <TableCell className="text-tbl-blue border-btm-0">  Dependant (Spouse and/or Children)</TableCell>
                                </TableRow> 
                           
                            </Table>  
                            </TableCell>
                        </TableRow>
                        </Table>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center"  className="border-btm-0">5</TableCell>
                    <TableCell className="border-btm-0 tb-pasding" align="center">
                        <Table>
                        <TableRow align="center" className='w-100'>
                            <TableCell className="w-30 light-blue-bg border-btm-0">Group Outpatient</TableCell>
                            <TableCell className="text-tbl-blue w-70 border-btm-0">
                            <Table>
                            <TableRow className="border-btm-0">
                                <TableCell className="text-tbl-blue"> Maternity</TableCell> </TableRow> 
                                <TableRow >  <TableCell className="border-btm-0 text-tbl-blue">  Dependant (Spouse and/or Children)</TableCell></TableRow> 
                           
                            </Table>  
                            </TableCell>
                        </TableRow>
                        </Table>
                    </TableCell>
                </TableRow>
                </Table>
              </TableCell>
              <TableCell align="center" className='tb-pasding checkbox-border'>
              <Table className="inner-table checkbox-border">
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                <TableRow className='pa0'>
                    <TableCell align="center"> <Checkbox /></TableCell>
                    <TableCell align="center" ><Checkbox /> </TableCell>
                </TableRow>
                </Table> 
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  
  )
}

export default TableData