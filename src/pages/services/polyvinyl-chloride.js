import React from 'react';
import Layout from '../../components/layout';
import OwensCorningPage from '../../components/PageComponents/Services/PVC/Page';
import {  Helmet } from 'react-helmet'




const OwensCorning = () => (
  <Layout>
    <Helmet title={'OwensCorning'} />
    <OwensCorningPage />
  </Layout>
);

export default OwensCorning
