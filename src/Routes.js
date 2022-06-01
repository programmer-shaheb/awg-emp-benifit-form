import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {shallowEqual, useSelector} from 'react-redux';
import General from './pages/general';
import Group from './pages/form2';
import Insurance from './pages/form3';
import HealthInsurence from './pages/form4';
import Outpatient from './pages/form5';
import ThankYou from './pages/thankyou';


const Main = (props) => {
  const user = useSelector(store => ({
    user: store.auth.user
  }), shallowEqual);

  return (
    <div>
      <Router history={props.history}>
        <div>
          <Routes>
            <Route exact path="/" element={<General />} />
            <Route path="/group" element={<Group />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/health" element={<HealthInsurence />} />
            <Route path="/outpatient" element={<Outpatient />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Main;
