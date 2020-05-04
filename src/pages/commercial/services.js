import React from 'react';
import Layout from '../../components/layout';
import CommServicesPage from '../../components/PageComponents/Services/commservicesPage';
import {  Helmet } from 'react-helmet'




const CommServices = () => (
  <Layout>
    <Helmet title={'Commercial Services'} />
    <CommServicesPage />
  </Layout>
);

export default CommServices
