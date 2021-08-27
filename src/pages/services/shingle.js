import React from 'react';
import Layout from '../../components/layout';
import ShinglePage from '../../components/PageComponents/Services/Shingle/Page';
import {  Helmet } from 'react-helmet'




const Shingle = () => (
  <Layout>
    <Helmet title={'Shingle'} />
    <ShinglePage />
  </Layout>
);

export default Shingle
