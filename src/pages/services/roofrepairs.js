import React from 'react';
import Layout from '../../components/layout';

import RRPage from '../../components/PageComponents/RoofRepair/roofrepairPage'
import {  Helmet } from 'react-helmet'
<Helmet title={'About Page'} />


const RoofRepair = () => (
  <Layout>
<Helmet title={'Roofing Repairs'} />
      <RRPage />
  </Layout>
);

export default RoofRepair
