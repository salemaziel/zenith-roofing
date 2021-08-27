import React from "react"

import Header from '../Services/Header'
import ActionBanner from "../../actionBanner"
import Grid from '../Services/grid'
import {Link} from 'gatsby'

import { Service18 } from '../../../images/index'

import { blogPostBG } from "../../../templates/blogPost.module.css"

const BlogPage = (props) => (
  <>
      <section
      className="inner-page-banner servicesBanner"
      >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumbs-area">
              <h1>Blog</h1>
              <ul>
                <li>
                  <Link to="/" rel="preload">Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={blogPostBG}>
    <Grid
        items={[
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },
            {
                title:"Blog Post",
                image:Service18,
                link:"",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                buttonText:"READ MORE",
            },

        ]} />



    </section>
    <ActionBanner />
  </>
)

export default BlogPage
