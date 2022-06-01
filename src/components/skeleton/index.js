import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import TopNav from '../header';
import Steps from '../steps';
import FixedFooter from '../fixed';
import './skeleton.scss';

const SkeletonDiv = (props) => {
  return (
    <>
    <div className="outer-space relative">  
    <ErrorBoundary>
      <div>
        <div className="child-wrapper">
        <TopNav />
        <div class="content mt3">
          <hr/>
        </div>
        <Steps activeStep={props.activeStep} />
          {props.children}
        </div>
      </div>
    </ErrorBoundary>
    </div>
    <FixedFooter />
    </>
  );
};

export default SkeletonDiv;
