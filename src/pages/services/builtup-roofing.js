import React from 'react';
import Layout from '../../components/layout';
import BURPage from '../../components/PageComponents/Services/BUR/Page';
import {  Helmet } from 'react-helmet'




const BUR = () => (
  <Layout>
    <Helmet title={'BUR'} />
    <BURPage />
  </Layout>
);

export default BUR
