import React from 'react';
import Layout from '../../components/layout';

import Page from '../../components/PageComponents/Services/Solar/Page'
import {  Helmet } from 'react-helmet'


const Solar = () => (
  <Layout>
<Helmet title={'Solar Installation'} />
      <Page />
  </Layout>
);

export default Solar
