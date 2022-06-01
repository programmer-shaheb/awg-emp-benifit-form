import React from 'react';
import { Info } from '@mui/icons-material';
import './note.scss';

const Note = ({ text, text2, text3 }) => {
  return (
    <>
        <div className='note flex justify-center'>
            <div className='icon'><Info /></div>
            <div className="note-text flex items-center">
              <div>
              {text}
              <div>{text2}</div>
              <div>{text3}</div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Note