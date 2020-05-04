import React from 'react';
import Layout from '../../components/layout';
import ResServicesPage from '../../components/PageComponents/Services/resservicesPage';
import {  Helmet } from 'react-helmet'




const ResServices = () => (
  <Layout>
    <Helmet title={'Residential Services'} />
    <ResServicesPage />
  </Layout>
);

export default ResServices
