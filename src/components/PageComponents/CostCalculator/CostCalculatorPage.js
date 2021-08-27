import React from "react"

const CostCalculatorPage = (props) => {
  return (
    <>
      <div>
        <title>Roofing Calculator</title>
        <meta
          name="description"
          content="This free roofing calculator estimates the area of a roof and the amount of materials required to replace or build said roof. Explore a number of housing related calculators, as well as hundreds of other calculators covering topics such as finance, math, health, fitness, and more."
        />
        <link
          rel="stylesheet"
          href="//d26tpo4cm8sb6k.cloudfront.net/style2.css"
        />{" "}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="//d26tpo4cm8sb6k.cloudfront.net/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="//d26tpo4cm8sb6k.cloudfront.net/icon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="//d26tpo4cm8sb6k.cloudfront.net/icon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <div id="headerout">
          <div id="header">
            <div id="logo">
              <a href="/">
                <img
                  src="//d26tpo4cm8sb6k.cloudfront.net/img/svg/calculator-white.svg"
                  width={208}
                  height={22}
                />
              </a>
            </div>
          </div>
        </div>
        <div id="clear" />
        <div id="contentout">
          <div id="content">
            <div
              id="breadcrumbs"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <span
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <a href="/" itemProp="item">
                  <span itemProp="name">home</span>
                </a>
                <meta itemProp="position" content={1} />
              </span>{" "}
              /{" "}
              <span
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <a href="/other-calculator.html" itemProp="item">
                  <span itemProp="name">other</span>
                </a>
                <meta itemProp="position" content={2} />
              </span>{" "}
              /{" "}
              <span
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <a href="/roofing-calculator.html" itemProp="item">
                  <span itemProp="name">roofing calculator</span>
                </a>
                <meta itemProp="position" content={3} />
              </span>
            </div>{" "}
            <h1>Roofing Calculator</h1>
            <p>
              The following tools estimate the area of a roof, as well as the
              amount of materials necessary to construct a roof of a given area.
              The "House Base Area" is the area of land that the house covers,
              and for more complex shapes, can be estimated using the{" "}
              <a href="/area-calculator.html">Area Calculator</a>.
            </p>
            <div id="insmdc">
              <img loading="lazy" src="//d26tpo4cm8sb6k.cloudfront.net/img/svg/insm.svg" />
            </div>
            <h2>Roofing Area Calculator</h2>
            <table width="100%" cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr>
                  <td>
                    <table cellPadding={0} cellSpacing={0}>
                      <tbody>
                        <tr>
                          <td>
                            <div id="topmenu">
                              <ul>
                                <li id="menuon">
                                  <a href="#" onclick="popMenu('pitch');">
                                    Roof Pitch
                                  </a>
                                </li>{" "}
                                <li>
                                  <a href="#" onclick="popMenu('angle');">
                                    Roof Angle
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <table className="panel2">
                              <form
                                action="/roofing-calculator.html"
                                name="calform"
                              />
                              <tbody>
                                <tr>
                                  <td align="right">House Base Area</td>
                                  <td nowrap>
                                    {" "}
                                    <input
                                      type="text"
                                      name="acarea"
                                      defaultValue={2000}
                                      className="inhalf"
                                      onkeyup="iptfieldCheck(this, 'r', 'pn');"
                                    />
                                    <select name="acareaunit">
                                      <option value="feet" selected>
                                        square feet
                                      </option>
                                      <option value="meters">
                                        square meters
                                      </option>
                                      <option value="yards">
                                        square yards
                                      </option>
                                      <option value="inches">
                                        square inches
                                      </option>
                                      <option value="centimeters">
                                        square cm
                                      </option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="right">
                                    <div id="labelpitch">Roof Pitch</div>
                                  </td>
                                  <td>
                                    {" "}
                                    <div id="inputpitch">
                                      <select
                                        name="roofpitch"
                                        className="inhalf"
                                      >
                                        <option value={1}>1/12</option>
                                        <option value={2}>2/12</option>
                                        <option value={3}>3/12</option>
                                        <option value={4}>4/12</option>
                                        <option value={5}>5/12</option>
                                        <option value={6} selected>
                                          6/12
                                        </option>
                                        <option value={7}>7/12</option>
                                        <option value={8}>8/12</option>
                                        <option value={9}>9/12</option>
                                        <option value={10}>10/12</option>
                                        <option value={11}>11/12</option>
                                        <option value={12}>12/12</option>
                                        <option value={13}>13/12</option>
                                        <option value={14}>14/12</option>
                                        <option value={15}>15/12</option>
                                        <option value={16}>16/12</option>
                                        <option value={17}>17/12</option>
                                        <option value={18}>18/12</option>
                                        <option value={19}>19/12</option>
                                        <option value={20}>20/12</option>
                                        <option value={21}>21/12</option>
                                        <option value={22}>22/12</option>
                                        <option value={23}>23/12</option>
                                        <option value={24}>24/12</option>
                                      </select>
                                    </div>
                                    <div
                                      id="inputangel"
                                      style={{ display: "none" }}
                                    >
                                      <input
                                        type="text"
                                        name="angle"
                                        defaultValue={25}
                                        className="inhalf inui1c"
                                        onkeyup="iptfieldCheck(this, '', 'pzn');"
                                      />
                                      <span className="inui1cspan">°</span>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="right">Eaves Stick Out</td>
                                  <td>
                                    {" "}
                                    <input
                                      type="text"
                                      name="eaves"
                                      defaultValue={1}
                                      className="inhalf"
                                      onkeyup="iptfieldCheck(this, 'r', 'pzn');"
                                    />
                                    <select name="eavesunit">
                                      <option value="feet" selected>
                                        feet
                                      </option>
                                      <option value="meters">meters</option>
                                      <option value="yards">yards</option>
                                      <option value="inches">inches</option>
                                      <option value="centimeters">
                                        centimeters
                                      </option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="right">Price (optional)</td>
                                  <td nowrap>
                                    {" "}
                                    <input
                                      type="text"
                                      name="price"
                                      defaultValue
                                      className="inhalf indollar"
                                      onkeyup="iptfieldCheck(this, '', 'pzn');"
                                    />
                                    <select name="priceunit">
                                      <option value="feet" selected>
                                        per square foot
                                      </option>
                                      <option value="meters">
                                        per square meter
                                      </option>
                                      <option value="yards">
                                        per square yard
                                      </option>
                                      <option value="inches">
                                        per square inch
                                      </option>
                                      <option value="centimeters">
                                        per square cm
                                      </option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    colSpan={2}
                                    align="center"
                                    style={{ paddingTop: 10 }}
                                  >
                                    <input
                                      type="hidden"
                                      name="ctype"
                                      id="ctype"
                                      defaultValue="pitch"
                                    />
                                    <input
                                      type="hidden"
                                      name="tp"
                                      defaultValue="ar"
                                    />
                                    <input
                                      type="image"
                                      src="//d26tpo4cm8sb6k.cloudfront.net/img/svg/calculate.svg"
                                      defaultValue="Calculate"
                                      alt="Calculate"
                                    />{" "}
                                    <img
                                      src="//d26tpo4cm8sb6k.cloudfront.net/img/svg/clear.svg"
                                      onclick="clearForm(document.calform);"
                                      className="clearbtn"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td align="right">
                    <img loading="lazy" src="//d26tpo4cm8sb6k.cloudfront.net/img/roofing.png" />
                  </td>
                </tr>
              </tbody>
            </table>
            <a name="roofingmaterial" />
            <br />
            <h2>Roofing Material Calculator</h2>
            <table className="panel">
              <form
                action="/roofing-calculator.html#roofingmaterial"
                name="calform2"
              />
              <tbody>
                <tr>
                  <td align="center" valign="middle">
                    <table>
                      <tbody>
                        <tr>
                          <td align="right">Roof Area</td>
                          <td>
                            {" "}
                            <input
                              type="text"
                              name="mcarea"
                              defaultValue={2000}
                              className="inhalf"
                              onkeyup="iptfieldCheck(this, 'r', 'pn');"
                            />
                            <select name="mcareaunit">
                              <option value="feet" selected>
                                square feet
                              </option>
                              <option value="meters">square meters</option>
                              <option value="yards">square yards</option>
                              <option value="inches">square inches</option>
                              <option value="centimeters">
                                square centimeters
                              </option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            align="center"
                            style={{ paddingTop: 10 }}
                          >
                            <input type="hidden" name="tp" defaultValue="mt" />
                            <input
                              type="image"
                              src="//d26tpo4cm8sb6k.cloudfront.net/img/svg/calculate.svg"
                              defaultValue="Calculate"
                              alt="Calculate"
                            />{" "}
                            <img
                              src="//d26tpo4cm8sb6k.cloudfront.net/img/svg/clear.svg"
                              onclick="clearForm(document.calform2);"
                              className="clearbtn"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>
              <img
                src="//d26tpo4cm8sb6k.cloudfront.net/img/typical-roof.png"
                width={300}
                height={185}
                align="right"
              />
            </p>
            <p>
              The calculated area is only an estimation. In cases where a roof
              has a complex shape, such as in the image to the right, measuring
              the dimensions and areas of each part of the roof to calculate
              total area will result in a more accurate measurement of area. The
              calculator cannot account for complex shapes based on a
              measurement of square footage alone.{" "}
              <a href="/area-calculator.html">The Area Calculator</a> can be
              used to calculate the area of a variety of simple shapes that
              together can comprise the area of the roof. Using the aggregate
              area of these simple shapes can yield a more accurate roof area to
              be used with the Roofing Material Calculator.
            </p>
            <p>
              The most common roofing materials used in the United States
              include shingles, membrane roofing, and ceramic tile, all of which
              have different life spans. Shingle roofs typically have a life
              span of 15-30 years, while membrane roofs usually last 5-15 years.
              Although ceramic tile roofs are expensive, they can have a life
              span of over 100 years.
            </p>
            <a name="RootPitch" />
            <h3>Roof Pitch</h3>
            <p>
              Roof pitch is the measurement of a roof's vertical rise divided by
              its horizontal run. It is often compared to slope, but is not
              exactly the same. In the United States, a run of 12 inches (1
              foot) is used, and pitch is measured as the rise of the roof over
              12 inches. For instance, a 7/12 roof pitch means that the roof
              rises 7 inches for every 12 horizontal inches. Outside of the
              U.S., a degree angle is typically used.
            </p>
            <p>
              Roof pitch is a determining factor for cost of the roof, as well
              as the roof area, and the type of materials used. It affects
              walkability as well as drainage, and roofs in areas of high rain
              or snowfall tend to have steeper pitches.
            </p>
            <p style={{ textAlign: "center" }}>
              <img
                src="//d26tpo4cm8sb6k.cloudfront.net/img/roof-pitch.png"
                className="scaleimg"
              />
            </p>
            <br />
            <p>
              Roof pitch affects the actual area of the roof. Depending whether
              the roof area is measured horizontally (possibly from a drawing or
              photograph), a correction factor is necessary to determine the
              actual area of the roof. Given pitch and a horizontal area
              measurement, multiply the horizontal area by a correction factor
              corresponding to pitch, provided in the table below, to determine
              the actual area of the roof to be used in the Roofing Material
              Calculator. While it is possible to estimate the amount of
              necessary materials using only the total roof area measurement, as
              can be seen from the table, depending how large the pitch of the
              roof, the actual area of the roof can differ by up to 2.236 from
              the measured total area at a pitch of 24/12. As such, while it can
              be cumbersome, measuring the area and pitch of each part of the
              roof and multiplying by the corresponding correction factor will
              result in the most accurate estimate of necessary roofing
              materials.
            </p>
            <p style={{ textAlign: "center" }}>
              <b>Typical Slope Correction Factors:</b>
            </p>
            <table className="cinfoT" align="center">
              <tbody>
                <tr>
                  <td className="cinfoHd">Pitch</td>
                  <td className="cinfoHdL">Angle</td>
                  <td className="cinfoHdL">Multiply By</td>
                  <td className="cinfoHdL">&nbsp;</td>
                  <td className="cinfoHdL">Pitch</td>
                  <td className="cinfoHdL">Angle</td>
                  <td className="cinfoHdL">Multiply By</td>
                </tr>
                <tr align="right">
                  <td>
                    <b>1/12</b>
                  </td>
                  <td className="cinfoBodL">4.8°</td>
                  <td className="cinfoBodL">1.003</td>
                  <td className="cinfoBodL" rowSpan={12}>
                    &nbsp;
                  </td>
                  <td className="cinfoBodL">
                    <b>2/12</b>
                  </td>
                  <td className="cinfoBodL">9.5°</td>
                  <td className="cinfoBodL">1.014</td>
                </tr>
                <tr align="right">
                  <td>
                    <b>3/12</b>
                  </td>
                  <td className="cinfoBodL">14.0°</td>
                  <td className="cinfoBodL">1.031</td>
                  <td className="cinfoBodL">
                    <b>4/12</b>
                  </td>
                  <td className="cinfoBodL">18.4°</td>
                  <td className="cinfoBodL">1.054</td>
                </tr>
                <tr align="right">
                  <td>
                    <b>5/12</b>
                  </td>
                  <td className="cinfoBodL">22.6°</td>
                  <td className="cinfoBodL">1.083</td>
                  <td className="cinfoBodL">
                    <b>6/12</b>
                  </td>
                  <td className="cinfoBodL">26.6°</td>
                  <td className="cinfoBodL">1.118</td>
                </tr>
                <tr align="right">
                  <td>
                    <b>7/12</b>
                  </td>
                  <td className="cinfoBodL">30.3°</td>
                  <td className="cinfoBodL">1.158</td>
                  <td className="cinfoBodL">
                    <b>8/12</b>
                  </td>
                  <td className="cinfoBodL">33.7°</td>
                  <td className="cinfoBodL">1.202</td>
                </tr>
                <tr align="right">
                  <td>
                    <b>9/12</b>
                  </td>
                  <td className="cinfoBodL">36.9°</td>
                  <td className="cinfoBodL">1.250</td>
                  <td className="cinfoBodL">
                    <b>10/12</b>
                  </td>
                  <td className="cinfoBodL">39.8°</td>
                  <td className="cinfoBodL">1.302</td>
                </tr>
                <tr align="right">
                  <td>
                    <b>11/12</b>
                  </td>
                  <td className="cinfoBodL">42.5°</td>
                  <td className="cinfoBodL">1.357</td>
                  <td className="cinfoBodL">
                    <b>12/12</b>
                  </td>
                  <td className="cinfoBodL">45.0°</td>
                  <td className="cinfoBodL">1.414</td>
                </tr>
                <tr align="right">
                  <td>
                    <b>13/12</b>
                  </td>
                  <td className="cinfoBodL">47.3°</td>
                  <td className="cinfoBodL">1.474</td>
                  <td className="cinfoBodL">
                    <b>14/12</b>
                  </td>
                  <td className="cinfoBodL">49.4°</td>
                  <td className="cinfoBodL">1.537</td>
                </tr>
                <tr align="right">
                  <td>
                    <b>15/12</b>
                  </td>
                  <td className="cinfoBodL">51.3°</td>
                  <td className="cinfoBodL">1.601</td>
                  <td className="cinfoBodL">
                    <b>16/12</b>
                  </td>
                  <td className="cinfoBodL">53.1°</td>
                  <td className="cinfoBodL">1.667</td>
                </tr>
                <tr align="right">
                  <td>
                    <b>17/12</b>
                  </td>
                  <td className="cinfoBodL">54.8°</td>
                  <td className="cinfoBodL">1.734</td>
                  <td className="cinfoBodL">
                    <b>18/12</b>
                  </td>
                  <td className="cinfoBodL">56.3°</td>
                  <td className="cinfoBodL">1.803</td>
                </tr>
                <tr align="right">
                  <td>
                    <b>19/12</b>
                  </td>
                  <td className="cinfoBodL">57.7°</td>
                  <td className="cinfoBodL">1.873</td>
                  <td className="cinfoBodL">
                    <b>20/12</b>
                  </td>
                  <td className="cinfoBodL">59.0°</td>
                  <td className="cinfoBodL">1.944</td>
                </tr>
                <tr align="right">
                  <td>
                    <b>21/12</b>
                  </td>
                  <td className="cinfoBodL">60.3°</td>
                  <td className="cinfoBodL">2.016</td>
                  <td className="cinfoBodL">
                    <b>22/12</b>
                  </td>
                  <td className="cinfoBodL">61.4°</td>
                  <td className="cinfoBodL">2.088</td>
                </tr>
                <tr align="right">
                  <td>
                    <b>23/12</b>
                  </td>
                  <td className="cinfoBodL">62.4°</td>
                  <td className="cinfoBodL">2.162</td>
                  <td className="cinfoBodL">
                    <b>24/12</b>
                  </td>
                  <td className="cinfoBodL">63.4°</td>
                  <td className="cinfoBodL">2.236</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="right">
            <div
              style={{ paddingTop: 10, minHeight: 280, textAlign: "center" }}
            >
              {/* /1057446/Calculator-Top-Right-Desktop */}
              <div id="div-gpt-ad-1589567013929-0"></div>
            </div>
            <table align="center" id="searchbox">
              <form
                name="calcSearchForm"
                onsubmit="calcSearch(); return false;"
                autoComplete="off"
              />
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="calcSearchTerm"
                      id="calcSearchTerm"
                      className="inlongest"
                      onkeyup="return calcSearch();"
                    />
                  </td>
                  <td>
                    <span id="bluebtn" onclick="return calcSearch();">
                      Search
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div id="calcSearchOut" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div id="othercalc">
              <div id="octitle">
                <a href="/other-calculator.html">Other Calculators</a>
              </div>
              <div id="occontent">
                <a href="/age-calculator.html">Age</a>
                <a href="/date-calculator.html">Date</a>
                <a href="/time-calculator.html">Time</a>
                <a href="/hours-calculator.html">Hours</a>
                <a href="/gpa-calculator.html">GPA</a>
                <a href="/grade-calculator.html">Grade</a>
                <a href="/height-calculator.html">Height</a>
                <a href="/concrete-calculator.html">Concrete</a>
                <a href="/ip-subnet-calculator.html">IP Subnet</a>
                <a href="/bra-size-calculator.html">Bra Size</a>
                <a href="/password-generator.html">Password Generator</a>
                <a href="/dice-roller.html">Dice Roller</a>
                <a href="/conversion-calculator.html">Conversion</a>
                <a href="/other-calculator.html">More Other Calculators</a>
              </div>
              <div id="ocother">
                <a href="/financial-calculator.html">Financial</a> |{" "}
                <a href="/fitness-and-health-calculator.html">
                  Fitness and Health
                </a>{" "}
                | <a href="/math-calculator.html">Math</a> |{" "}
                <a href="/other-calculator.html">Other</a>
              </div>
            </div>{" "}
          </div>
        </div>
        <div id="clear" />
        <div id="footer">
          <div id="footerin">
            <div id="footernav">
              <a href="/about-us.html">about us</a> |{" "}
              <a href="/sitemap.html">sitemap</a> |{" "}
              <a href="/about-us.html#terms">terms of use</a> |{" "}
              <a href="/about-us.html#privacy">privacy policy</a> &nbsp; © 2008
              - 2021 <a href="//www.calculator.net">calculator.net</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CostCalculatorPage
