import React from "react"
import Container from "react-bootstrap/Container"
import {Link} from 'gatsby'

import gridStyle from "./services.module.css"

const Grid = (props) => {
  return (
    <>
        <Container className={gridStyle.ContainerServices}>
          <div className="row">
            {props.items.map((item, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className={gridStyle.ServiceBox}>
                  <div className={gridStyle.ServiceImgBox}>
                    <Link rel="preload" to={item.link}>
                      <img
                        src={item.image}
                        alt="Service"
                        className={gridStyle.ServiceImg}
                      />
                    </Link>
                  </div>
                  <div className="item-content">
                    <h3 className={gridStyle.ServiceTitle}>
                      <Link rel="preload" to={item.link}>
                        {item.title}
                      </Link>
                    </h3>
                    <p>{item.description}</p>
                    <Link
                      rel="preload"
                      to={item.link}
                      className={gridStyle.ReadMore}
                    >
                      {item.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
    </>
  )
}

export default Grid
