import React from 'react';
import Footer from '../../footer/Footer';
import Home from './Home';
import HomeHeaderDash from './HomeHeaderDash';
const HomeDashboard = ({ homeProps }) => {
  return (
    <div>
      <HomeHeaderDash />
      <Home homeProps={homeProps} />
      <Footer />
    </div>
  );
};

export default HomeDashboard;
