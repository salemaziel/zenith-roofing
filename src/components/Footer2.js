import React from "react"
import Container from 'react-bootstrap/Container'
//import { FooterRow, ColNoMobile, CenterFooter, LogoStyle, SocialIcon, Icon, Middle, Spacer, LinkBox, QuickLinks } from "./footer.module.css"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
//import { Logo } from "../images/index"
import {Link} from 'gatsby'

const Footer2 = (props) => {
  return (
    <footer className="py-4 my-auto mx-auto py-5 ">
      <Container className="text-center text-lg-left ">
        <div className="row d-flex justify-content-between flex-column flex-lg-row align-items-center align-items-lg-start">
          <div className="d-flex flex-column col-10 col-lg-5 pl-0">
          {/*<div className={LogoStyle}>
              <img loading="lazy" src={Logo} className="" alt="" />
  </div>*/}
            <h4 className="text-warning">
              Zenith Roofing Services
            </h4>
            <p className="text-white">
              Zenith Roofing Services provides service to Escondido, San Marcos,
              Vista, Oceanside, Rancho Bernardo, Poway, Temecula, Leucadia,
              Encinitas, Rancho Penasquitos, Carlsbad, Mira Mesa, downtown San
              Diego, and the rest of the Greater County of San Diego.
            </p>
            <ul className="list-inline d-flex mb-3 justify-content-center justify-content-lg-start">
              <li className="px-2">
              <a href="https://www.facebook.com/zenithroofingservicesca/" target="_blank" rel="noreferrer noopener">
                    <FaFacebook size="2rem" color="white"/>
                  </a>
              </li>
              <li className="px-2">
              <a href="https://www.instagram.com/zenithroofingservices_ca/"                 target="_blank" rel="noreferrer noopener">
                    <FaInstagram size="2rem" color="white" />
                  </a>
              </li>
              <li className="px-2">
              <a href="https://www.youtube.com/channel/UC4XWWL-_WfuIrokcD3KkuFQ/videos" target="_blank" rel="noreferrer noopener">
                <FaYoutube size="2rem" color="white"
                />
              </a>{" "}
              </li>
            </ul>
          </div>
          {/*<div>
            <h6>Products</h6>
            <ul className="list-inline ml-0">
              <li className="py-1">
                <a href="#">Features</a>
              </li>
              <li className="py-1">
                <a href="#">Enterprise</a>
              </li>
              <li className="py-1">
                <a href="#">Support</a>
              </li>
              <li className="py-1">
                <a href="#">ICO</a>
              </li>
            </ul>
          </div>*/}
          <div>
            <h6 className="text-warning">About Zenith <br />Roofing Services</h6>
            <ul className="list-inline ml-">
              <li className="py-1">
              <Link
                        rel="preload"
                        to="/about"
                        style={{ color: "white" }}
                      >About Us</Link>
              </li>
              <li className="py-1">
              <Link
                        rel="preload"
                        to="/services"
                        style={{ color: "white" }}
                      >Commercial Services</Link>
              </li>
              <li className="py-1">
              <Link
                        rel="preload"
                        to="/services"
                        style={{ color: "white" }}
                      >Residential Services</Link>
              </li>
              <li className="py-1">
              <a
                        rel="noreferrer noopener"
                        href="https://referrals.zenithroofingservices.com"
                        target="_blank"
                        style={{ color: "white" }}
                      >Referrals</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-warning">Contact</h6>
            <ul className="list-inline ml-0">
              <li className="py-1">
                <a href="mailto:admin@zenithroofingca.com" className="text-white">
                  admin@zenithroofingca.com
                </a>
              </li>
              <li className="py-1">
                <a href="tel:8589006163" className="text-white">(858) 900-6163</a>
              </li>
              <li className="py-1">
                <a href="https://g.page/zenith-roofing-services" className="text-white"
                rel="noreferrer noopener"
                target="_blank"
                >
                 <span className="text-warning"> Zenith Roofing Services </span> <br /> 1537 Simpson Way <br />Escondido, CA 92029
                </a>
              </li>
            </ul>
          </div>
          <div className="w-100 border-top my-3" />
        </div>
        <div className="flex-column flex-sm-row align-items-center justify-content-sm-between">
          {/*<a href="#">Terms and conditions</a>*/}
          <p className="mb-0 small text-muted">
            © {new Date().getFullYear()} Zenith Roofing Services. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer2
