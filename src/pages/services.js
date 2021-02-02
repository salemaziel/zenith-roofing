import React from 'react';
import Layout from '../components/layout';
import ServicesPage from '../components/PageComponents/Services/servicesPage';

import {  Helmet } from 'react-helmet'




const Services = () => (
  <Layout>
        <Helmet title={'Roofing Services Offered by Zenith Roofing'} />

    <ServicesPage />
  </Layout>
);

export default Services
