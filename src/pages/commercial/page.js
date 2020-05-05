import React from 'react';
import Layout from '../../components/layout';
import Page from '../../components/PageComponents/singleService/Page';
import {  Helmet } from 'react-helmet'




const CommPage = () => (
  <Layout>
    <Helmet title={'Commercial Page'} />
    <Page />
  </Layout>
);

export default CommPage
