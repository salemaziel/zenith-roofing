import React from 'react';
import Layout from '../../components/layout';

import RRPage from '../../components/PageComponents/Services/RoofRepair/roofrepairPage'
import {  Helmet } from 'react-helmet'


const RoofRepair = () => (
  <Layout>
<Helmet title={'Roofing Repairs'} />
      <RRPage />
  </Layout>
);

export default RoofRepair
