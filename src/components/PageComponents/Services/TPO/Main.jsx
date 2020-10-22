import React from 'react'

import pageStyle from './page.module.css'

const Main = (props) => {
    return(
        <>
        <Container>
        <Row className={pageStyle.HistoryRow}>
            <Col>
            <div className={pageStyle.Header}>
                <h2 className={pageStyle.Title}>Thermoplastic Polyolefin (TPO)</h2>
            <div className="">
              <img src={Climbing} alt="Roof Repairs" className="img-fluid"/>
            </div>
            <div className="">
                <p>
                -Thermoplastic polyolefin (TPO) is single ply membrane that is typically used on low slopes roofs. It is a nice clean look and usually comes in white or tan colors. It is an energy efficient membrane because of its ability to reflect (Ultra Violet) UV rays. It will help reduce energy cost and also complies with Title 24 requirements.
                </p>

                {/*<p>
                  2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                <p>
                  3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </p>*/}
                </div>
              </div>
            </Col>

            </Row>
          </Container>


        </>
    )
}

export default Main