import React from 'react';
import Layout from '../../components/layout';
import TilePage from '../../components/PageComponents/Services/Tile/Page';
import {  Helmet } from 'react-helmet'




const Tile = () => (
  <Layout>
    <Helmet title={'Tile'} />
    <TilePage />
  </Layout>
);

export default Tile
