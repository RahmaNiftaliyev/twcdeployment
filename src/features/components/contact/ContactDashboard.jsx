import React from 'react';
import Contact from './Contact';
import ContactHeaderDash from './ContactHeaderDash';
import Footer from './../../footer/Footer';

const ContactDashboard = () => {
  return (
    <div>
      <ContactHeaderDash />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactDashboard;
