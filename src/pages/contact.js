import React from 'react';
import Layout from '../components/layout';

import ContactPage from '../components/PageComponents/Contact/contactpage'
import {  Helmet } from 'react-helmet'

const Contact = () => (
  <Layout>
<Helmet title={'Contact Zenith Roofing Services'} />
      <ContactPage />
  </Layout>
);

export default Contact
