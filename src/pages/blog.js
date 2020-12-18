import React from 'react'
import Layout from '../components/layout'
import BlogImageExample from '../images/new/RooferOnSlant.jpg'
import BlogPostTemplate from '../templates/blogPostTemplate'
import BlogPage from '../components/PageComponents/Blog/blog'
import {Helmet} from 'react-helmet'

const Blog = () => (
    <Layout>
            <Helmet title={'Zenith Roofing Services Blog'} />

        <BlogPage />

    </Layout>

)

export default Blog