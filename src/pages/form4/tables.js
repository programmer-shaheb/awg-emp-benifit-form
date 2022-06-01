import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import './form4.scss';

const DataTable = ({ item }) => {

    const tabledata = [
        {emp: 'Employee Only'},
        {emp: 'Employee & Spouse'},
        {emp: 'Employee & Child(ren)'},
        {emp: 'Employee & Family'},
    ];
    
  return (
    <>
    
    <div className='member mt4'>
       <div className='table mb4'>
       <TableContainer className='w-100'>
        <Table sx={{ minWidth: 650 }} className='w-100'>
            <TableHead>
            <TableRow>
            <TableCell ></TableCell>
                <TableCell colSpan={4}> 
                <Table>
                  <TableRow>
                    <TableCell colSpan={4} align="center"># OF EMPLOYEES (SINGAPOREANS & SPRS*)</TableCell>
                  </TableRow>
                  <TableRow align="center" className='w-100'>
                    <TableCell align="center" className="border-btm-0 ">PLAN 1</TableCell>
                    <TableCell align="center" className="border-btm-0 ">PLAN 2</TableCell>
                    <TableCell align="center" className="border-btm-0 ">PLAN 3</TableCell>
                    <TableCell align="center" className="border-btm-0 ">PLAN 4</TableCell>
                  </TableRow>
            </Table> 
                </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {tabledata.map((row) => (
                <TableRow>
                <TableCell  className='text-tbl-blue'> {row.emp}</TableCell>
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
            </TableBody>
        </Table>
        </TableContainer>
       </div>
    </div>
    </>
  )
}

export default DataTable