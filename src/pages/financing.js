import React from 'react';
import Layout from '../components/layout';

import FinancingPage from '../components/PageComponents/Financing/FinancingPage'
import {  Helmet } from 'react-helmet'

const Financing = () => (
  <Layout hideFooter>
<Helmet title={'Financing With Zenith Roofing Services'} />
      <FinancingPage />
  </Layout>
);

export default Financing
