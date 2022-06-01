import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Add, RemoveCircle, KeyboardArrowUp, KeyboardArrowDown, DateRange } from '@mui/icons-material';
import Note from '../../components/note';
import './form5.scss';

const DataTable = ({ item }) => {

const datatable = [
  {data:'Data', icon1:<DateRange />},
  {data:'Data', icon1:<DateRange />},
  {data:'Data', icon1:<KeyboardArrowUp />, icon2:<KeyboardArrowDown />},
  {data:'Data', icon1:<DateRange />},
  {data:'Data', icon1:<KeyboardArrowUp />, icon2:<KeyboardArrowDown />},
  {data:'Data'},
  {data:'Data', icon1:<KeyboardArrowUp />, icon2:<KeyboardArrowDown />},
  {data:'Data'},
  {data:'Data', icon1:<KeyboardArrowUp />, icon2:<KeyboardArrowDown />},
  {data:'Data'},
]

  return (
    <>
   
    <div className='member mt4'>
        <div className='font-20-bold text-black arial mb2 mt3'><b>{item?.num}</b>{item?.question}</div>
       <div className='table mb4'>
       <TableContainer className='w-100'>
        <Table sx={{ minWidth: 650 }} className='w-100'>
            <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell alight="center" colSpan={2}> GTL</TableCell>
                <TableCell alight="center" colSpan={2}> GAP</TableCell>
                <TableCell alight="center" colSpan={2}> GCI</TableCell>
            </TableRow>
            
            <TableRow>
                <TableCell >PERIOD OF COVERAGE FROM</TableCell>
                <TableCell >PERIOD OF COVERAGE TO</TableCell>
                <TableCell > # OF INSURED</TableCell>
                <TableCell > CLAIM DATE</TableCell>
                <TableCell > # OF CLAIMS</TableCell>
                <TableCell > AMOUNT (S$)</TableCell>
                <TableCell > # OF CLAIMS</TableCell>
                <TableCell > AMOUNT (S$)</TableCell>
                <TableCell > # OF CLAIMS</TableCell>
                <TableCell > AMOUNT (S$)</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                {datatable.map((row) => (
                <TableCell className="relative"> 
                    <div className="flex justify-between items-center">
                     {row.data}
                      <div className="arrows">
                            {row.icon1}
                            {row.icon2}
                          </div>
                    </div>
                </TableCell>
              ))}
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
    <Note text={item?.note} />
    </>
  )
}

export default DataTable