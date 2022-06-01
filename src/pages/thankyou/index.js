import React from 'react';
import { useNavigate } from 'react-router';
import SkeletonDiv from "../../components/skeleton";
import './thankyou.scss';

const ThankYou = () => {

  const navigate = useNavigate();

  return (
   <>
   <div className='relative thank-page h-100 w-100'>
     <img src="/images/thankyou.jpg" onClick={() => navigate('/')}/>
   </div>
  </>
  )
}

export default ThankYou