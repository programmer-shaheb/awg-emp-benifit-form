import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Add, RemoveCircle, KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import RadioBtn from '../input/radio';
import Note from '../note';
import './add.scss';

const AddMember = ({ item }) => {
  return (
    <>
    <Note text={item?.note} />
    <div className='member mt4'>
        <div className='question mb2 mt3'><b>{item?.num}</b>{item?.question}</div>
        <RadioBtn />
        <h3 className='mb3 mt2 font-20-bold arial text-black' >Kindly provide the following details:</h3>
       <div className='table mb4'>
       <TableContainer className='w-100'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className='w-100'>
            <TableHead>
            <TableRow>
                <TableCell >S/N</TableCell>
                <TableCell ># OF MEMBERS / AGE</TableCell>
                <TableCell > REASON OF HOSPITALISATION / NATURE OF ILLNESS</TableCell>
                <TableCell > TOTAL SUM INSURED / PLAN</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell > 
                    Data
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
                <TableCell > 
                Data
                </TableCell>
                <TableCell > 
                Data
                </TableCell>
                <TableCell className='border-btm-0'> 
                <RemoveCircle color="error"/>
                </TableCell>
            
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        <Button className="btn-add" variant="contained" startIcon={<Add />}>
        Add Member
      </Button>
       </div>
    </div>
    </>
  )
}

export default AddMember