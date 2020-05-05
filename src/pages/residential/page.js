import React from 'react';
import Layout from '../../components/layout';
import Page from '../../components/PageComponents/singleService/Page';
import {  Helmet } from 'react-helmet'




const ResPage = () => (
  <Layout>
    <Helmet title={'Residential Page'} />
    <Page />
  </Layout>
);

export default ResPage
