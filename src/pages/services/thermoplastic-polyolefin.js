import React from 'react';
import Layout from '../../components/layout';
import TPOPage from '../../components/PageComponents/Services/TPO/Page';
import {  Helmet } from 'react-helmet'




const TPO = () => (
  <Layout>
    <Helmet title={'TPO'} />
    <TPOPage />
  </Layout>
);

export default TPO
