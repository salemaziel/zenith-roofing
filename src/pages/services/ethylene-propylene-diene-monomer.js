import React from 'react';
import Layout from '../../components/layout';
import EPDMPage from '../../components/PageComponents/Services/EPDM/Page';
import {  Helmet } from 'react-helmet'




const EPDM = () => (
  <Layout>
    <Helmet title={'EPDM'} />
    <EPDMPage />
  </Layout>
);

export default EPDM
