import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Add, RemoveCircle, DateRange } from '@mui/icons-material';
import './form3.scss';

const DataTable = ({ item }) => {
  return (
    <>
   
    <div className='member mt4'>
        <div className='question mb2 mt3'>{item?.question}</div>
       <div className='table mb4'>
       <TableContainer className='w-100'>
        <Table sx={{ minWidth: 650 }} className='w-100'>
            <TableHead>
            <TableRow>
                <TableCell >DATE OF DISABILITY</TableCell>
                <TableCell >CAUSE OF DISABILITY / NATURE OF ILLNESS</TableCell>
                <TableCell colSpan={2}> 
                <Table>
                  <TableRow>
                    <TableCell colSpan={2} align="center">CLAIMS AMOUNT (S$)</TableCell>
                  </TableRow>
                  <TableRow align="center" className='w-100'>
                    <TableCell align="center" className="border-btm-0 w-50">PAID</TableCell>
                    <TableCell align="center" className="border-btm-0 w-50">OUTSTANDING</TableCell>
                  </TableRow>
            </Table> 
                </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell className="relative">
                <div className="flex justify-between items-center">
                      Data
                      <div className="arrows">
                            <DateRange />
                          </div>
                    </div>
                </TableCell>
                <TableCell>  Data  </TableCell>
                <TableCell>  Data </TableCell>
                <TableCell>  Data  </TableCell>
                <TableCell className='border-btm-0'> 
                <RemoveCircle color="error"/>
                </TableCell>
            
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        <Button className="btn-add" variant="contained" startIcon={<Add />}>
        Add Claims
      </Button>
       </div>
    </div>
    </>
  )
}

export default DataTable