import React from 'react';
import Layout from '../components/layout';
import HomeIndex from '../components/PageComponents/Home/HomeIndex';
import {  Helmet } from 'react-helmet'


const Home = () => (
  <Layout>
    <Helmet title={'Zenith Roofing Services | Roof Repair & Roof Replacement Services'} />

    <HomeIndex />
  </Layout>
);

export default Home
