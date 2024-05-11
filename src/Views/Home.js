import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "reactstrap";
import "swiper/css";

import Slider from "../Components/Slider";
import Getintouch from "../Components/Getintouch";
import MultipleTab from "../Components/MultipleTab";
import Narrow from "../Components/Common/Narrow";
import ShowcaseSlider from "../Components/ShowcaseSlider";

function Home() {
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  return (
    <>
      <Narrow>
        <div className="home1 max-xl:mb-20">
          <Row>
            <Col md="6" className="">
              <p className="home1para">EMPOWERMENT</p>
              <h1 className="homepara2">
                Seamless IT for your business, boosting your growth.
              </h1>
              <p className="homepara3">
                We provide the expertise and support to propel your business
                forward in the digital landscape.
              </p>
              <Row className="btnsectionrow" style={{ marginTop: "35px" }}>
                <Col className="btnsection">
                  <Link to="/contactus">
                    <Button className="contactusbtnhome">Contact Us</Button>
                  </Link>
                  <Link to="/contactus">
                    <Button className="letstalkbtnhome flex gap-1 align-items-center justify-center">
                      Let's Talk{" "}
                      <img
                        src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/home%20arrow.svg?updatedAt=1713423053103"
                        alt=""
                        className="letstalkarrow"
                      />{" "}
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <img
                src="https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="frontimg"
              />
            </Col>
          </Row>
        </div>
      </Narrow>

      <div className=" mt-28 max-xl:mt-0">
        <Slider />
      </div>

      <Narrow>
        <div className="howedo p-20 max-xl:p-5 max-xl:py-10 max-xl:rounded-none mt-36 max-xl:mt-20 mx-auto">
          <Row>
            <Col style={{ marginRight: "0vw" }} md="3">
              <h6 className="ourmodeltext">OUR MODEL</h6>
              <h1 className="howedotext">How we do</h1>
              <h5 className="savetimetext">
                Save time and money with our powerful method.
              </h5>
              <Link to="/contactus">
                <Button className="contactusbtncard">Contact Us</Button>
              </Link>
            </Col>

            <Col md="9">
              <Row className="hwdcon">
                <Col md="3" style={{ padding: "0px" }}>
                  <Card className="howedocard1">
                    <div className="howedocard" style={{ display: "flex" }}>
                      <div>
                        <img
                          src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/brain-svgrepo-com.svg?updatedAt=1710937497361"
                          alt=""
                          className="ourmodelimg"
                        />
                      </div>
                      <div className="navcardtext">
                        <h6>Brainstroming</h6>
                        <p>Ideas</p>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md="3" style={{ padding: "0px" }}>
                  <Card className="howedocard1">
                    <div className="howedocard" style={{ display: "flex" }}>
                      <div>
                        <img
                          src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519"
                          alt=""
                          className="ourmodelimg"
                        />
                      </div>
                      <div className="navcardtext">
                        <h6>Product</h6>
                        <p>Design</p>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md="3" style={{ padding: "0px" }}>
                  <Card className="howedocard1">
                    <div className="howedocard" style={{ display: "flex" }}>
                      <div>
                        <img
                          src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/graphic-design.png?updatedAt=1711008512725"
                          alt=""
                          className="ourmodelimg"
                        />
                      </div>
                      <div className="navcardtext">
                        <h6>Front-End</h6>
                        <p>Development</p>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>

              <Row className="hwdcon2">
                <Col md="4" style={{ padding: "0px" }}>
                  <Card className="howedocard1">
                    <div className="howedocard">
                      <div>
                        <img
                          src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519"
                          alt=""
                          className="ourmodelimg"
                        />
                      </div>
                      <div className="navcardtext">
                        <h6>SEO</h6>
                        <p>Optimization</p>
                      </div>
                    </div>
                  </Card>
                </Col>

                <Col md="4" style={{ padding: "0px" }}>
                  <Card className="howedocard1 ">
                    <div className="howedocard" style={{ display: "flex" }}>
                      <div>
                        <img
                          src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519"
                          alt=""
                          className="ourmodelimg"
                        />
                      </div>
                      <div className="navcardtext ">
                        <h6>Back-End</h6>
                        <p>Development</p>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col className="last11">
                  <Card className="howedocard1 last">
                    <div className="howedocard " style={{ display: "flex" }}>
                      <div>
                        <img
                          src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519"
                          alt=""
                          className="ourmodelimg"
                        />
                      </div>
                      <div className="navcardtext">
                        <h6>Digital</h6>
                        <p>Marketing</p>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Narrow>

      <Narrow>
        <div className="whatweoffering mt-36 max-xl:mt-10">
          <Row>
            <Col md="6" className="homaepara2">
              <p className="delinglogheading">WHAT WE’RE OFFERING</p>
              <h1 className="delingheading">
                Dealing in all professional <br />
                IT services.
              </h1>
            </Col>
            <Col md="6">
              <h6 className="delingcontent">
                One fundamental aspect of IT services is infrastructure
                management. This involves the design, implementation, and
                maintenance of the hardware, software, networks, and servers.
              </h6>
            </Col>
          </Row>
        </div>
      </Narrow>

      <Narrow>
        <div className="professionalservicescontainer">
          <Row className="professionalservicesrow space-x-12">
            <Col sm="1" md="2">
              <Card className="professionalservicescard ">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg"
                  alt=""
                  className="services5"
                />
                <div className="text-xl font-bold">Development</div>
                <p>Our development is pixel perfect in all ways.</p>
              </Card>
            </Col>
            <Col sm="1" md="2">
              <Card className="professionalservicescard">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-2-2.svg"
                  alt=""
                  className="services5"
                />
                <div className="text-xl font-bold">Woo Commerce</div>
                <p>Our development is pixel perfect in all ways.</p>
              </Card>
            </Col>
            <Col sm="1" md="2">
              <Card className="professionalservicescard">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-3-2.svg"
                  alt=""
                  className="services5"
                />
                <div className="text-xl font-bold">CRM Solutions</div>
                <p>Our development is pixel perfect in all ways.</p>
              </Card>
            </Col>
            <Col sm="1" md="2">
              <Card className="professionalservicescard">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-4-2.svg"
                  alt=""
                  className="services5"
                />
                <div className="text-xl font-bold">Web Design</div>
                <p>Our development is pixel perfect in all ways.</p>
              </Card>
            </Col>
            <Col sm="1" md="2">
              <Card className="professionalservicescard">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-5-2.svg"
                  alt=""
                  className="services5"
                />
                <div className="text-xl font-bold">IT Support</div>
                <p>Our development is pixel perfect in all ways.</p>
              </Card>
            </Col>
          </Row>
        </div>
      </Narrow>

      {/* <div className="background p-3">
        <Narrow>
          <MultipleTab />
        </Narrow>
      </div> */}

      <div>
        <Narrow>
          <Row className="p-3 mb-28 max-xl:mt-0 max-xl:mb-0">
            <Col md="4" style={{ marginTop: "10vh" }}>
              <p className="home1para">CONSULTING EXCELLENCE</p>
              <h1 className="delingheading">Best pathway to our clients.</h1>
              <p className="homepara3">
                Our consulting process begins with a thorough assessment of your
                current IT infrastructure, workflows, and pain points.
              </p>
              <div className=" mt-5">
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>24/7 Full Service Support</p>
                </div>
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>Immediate Response</p>
                </div>
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>Easy to Approach us</p>
                </div>
              </div>
            </Col>
            <Col md="8" style={{}}>
              <div
                className=" ml-auto max-xl:ml-0 max-xl:mt-5"
                style={{
                  backgroundColor: "#ebf5ff",
                  padding: "2rem",
                  width: "320px",
                  borderRadius: "15px",
                }}
              >
                <div className="text-xl font-bold">Discovery and Analysis</div>
                <div className=" text-lg text-gray-500 mt-2">
                  Perform an analysis of the client's existing IT systems.
                </div>
              </div>
              <div
                className=" ml-36 max-xl:ml-0"
                style={{
                  backgroundColor: "#ebf5ff",
                  padding: "2rem",
                  width: "320px",
                  borderRadius: "15px",
                  marginTop: "3vh",
                }}
              >
                <div className="text-xl font-bold">Discovery and Analysis</div>
                <div className=" text-lg text-gray-500 mt-2">
                  Perform an analysis of the client's existing IT systems.
                </div>
              </div>
              <div
                className=" ml-auto max-xl:ml-0"
                style={{
                  backgroundColor: "#ebf5ff",
                  padding: "2rem",
                  width: "320px",
                  borderRadius: "15px",
                  marginTop: "3vh",
                }}
              >
                <div className="text-xl font-bold">Discovery and Analysis</div>
                <div className="text-lg text-gray-500 mt-2">
                  Perform an analysis of the client's existing IT systems.
                </div>
              </div>
            </Col>
          </Row>
        </Narrow>
      </div>

      <div className="p-3 background">
        <Narrow>
          <Row>
            <Col md="4" className="mt-28 max-xl:mt-5">
              <p className="home1para">PROJECTS</p>
              <h1 className="empowermentHeading">
                Showcase of our recognized work.
              </h1>
              <p className="homepara3">
                Our collaborative approach ensures that we truly understand our
                clients unique requirements and challenges.
              </p>
              <div className=" mt-5">
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    Managed Services and Products
                  </p>
                </div>
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    Flexibility and Adaptability
                  </p>
                </div>
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>Competitive Advantage</p>
                </div>
              </div>
            </Col>
            <Col
              md="8"
              style={{
                padding: "3rem",
              }}
            >
              <ShowcaseSlider></ShowcaseSlider>
            </Col>
          </Row>
        </Narrow>
      </div>

      {/* <Container className="articlebox">
        <Row>
          <Col>
            <p className="articleboxabout">INTERESTING ARTICLES</p>
            <h1 className="articleboxabouthead">
              Read daily news about startup companies
            </h1>
          </Col>
          <Col>
            <h5>
              In today's rapidly evolving world, technology is constantly
              shaping the way we live and interact. From artificial intelligence
              and automation to virtual reality, the pace of technological
              advancements is staggering.
            </h5>
          </Col>
        </Row>
        <Row className="articlecard">
          <Col md="6" className="articlecardimg">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-1.png"
              alt=""
              className="interestingimg"
            />
          </Col>
          <Col md="6" className="articletextbox">
            <p>INTERESTING ARTICLES</p>
            <h4>
              OpenAI launches new alignment division to tackle risks of
              superintelligent AI
            </h4>

            <h5 style={{ marginTop: "35px" }}>
              Small UK merchants, businesses, and other enterprises can now use
              Tap to Pay on service to replace payment terminals at point of
              sale.
            </h5>
          </Col>
        </Row>
      </Container> */}

      {/* <Container>
        <Row className="productcard">
          <Col md="5" className="product">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-2.jpg"
              alt=""
            />
            <h6 className="spacingunique">WEB DEVELOPMENT</h6>
            <h3 className="articlecardhead">
              Bluebase launches Tap to Pay on smartphone for international and
              domestic business
            </h3>
            <h style={{ marginTop: "23px" }}>
              Small UK merchants, businesses, and other enterprises can now use
              Tap to Pay on service to replace payment terminals at point of
              sale.
            </h>{" "}
            <br />
            <hr />
            <Row>
              <Col md="6" className="tasksign">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=""
                  style={{ width: "28px", objectFit: "contain" }}
                />
                <h5>Collaboration Tools </h5>
              </Col>
              <Col md="6" className="tasksign">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=""
                  style={{ width: "28px", objectFit: "contain" }}
                />
                <h5>Smart Reminders </h5>
              </Col>
            </Row>
            <Row>
              <Col md="6" className="tasksign">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=""
                  style={{ width: "28px", objectFit: "contain" }}
                />
                <h5>Requirement </h5>
              </Col>
              <Col md="6" className="tasksign">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=""
                  style={{ width: "28px", objectFit: "contain" }}
                />
                <h5>Task Management </h5>
              </Col>
            </Row>
          </Col>

          <Col md="5" className="product">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-3.jpg"
              alt=""
            />
            <h6>CLOUD COMPUTING</h6>

            <h3 className="articlecardhead">
              Google Bard launches in EU, overcoming data privacy concerns in
              the region
            </h3>

            <p>
              Small UK merchants, businesses, and other enterprises can now use
              Tap to Pay on service to replace payment terminals at point of
              sale.
            </p>

            <hr />

            <Row>
              <Col md="6" className="tasksign">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=""
                  style={{ width: "28px", objectFit: "contain" }}
                />
                <h5>Collaboration Tools </h5>
              </Col>
              <Col md="6" className="tasksign">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=""
                  style={{ width: "28px", objectFit: "contain" }}
                />
                <h5>Smart Reminders </h5>
              </Col>
            </Row>
            <Row>
              <Col md="6" className="tasksign">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=""
                  style={{ width: "28px", objectFit: "contain" }}
                />
                <h5>Requirement </h5>
              </Col>
              <Col md="6" className="tasksign">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=""
                  style={{ width: "28px", objectFit: "contain" }}
                />
                <h5>Task Management </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> */}

      <div className="productivity">
        <Narrow>
          <Row className="py-32 max-xl:py-5">
            <Col md="7" className="productivitycard1">
              <Col md="5" className="productivitycardtype">
                <div class="feature-img-card">
                  <div className="text-2xl font-bold"
                    style={{
                      position: "absolute",
                      paddingLeft: "20px",
                      paddingTop: "20px",
                    }}
                  >
                    Start your <br /> project from <br />
                    your pocket.
                  </div>
                  <img
                    decoding="async"
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/feature-img-1.png"
                  />
                </div>
              </Col>
              <Col md="5" className="productivitycardtype">
                <div class="feature-img-card">
                  <div className="text-2xl font-bold"
                    style={{
                      position: "absolute",
                      paddingLeft: "20px",
                      paddingTop: "20px",
                    }}
                  >
                    Available on <br />
                    all responsive <br />
                    devices.
                  </div>
                  <img
                    decoding="async"
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/feature-img-2.png"
                  />
                </div>
              </Col>
            </Col>

            <Col md="5" className="fetureproductbox section-title">
              <Row>
                <Col>
                  <h6 className="inhow">FEATURED PRODUCT</h6>
                  <h1 className="fetureproducthead">
                    Seamless productivity <br /> with our new app
                  </h1>
                  <h4 className="fetureproductabout mt-3">
                    Download Slack and experience a new era of organization{" "}
                    <br /> and accomplishment.
                  </h4>
                </Col>
              </Row>

              <Row className="tasksign">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize"
                />
                <h5 className="fetureproductabout">PPD Development </h5>
              </Row>
              <Row className="tasksign">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize"
                />
                <h5 className="fetureproductabout">Easy to use </h5>
              </Row>

              <Row className="productivitybutton">
                <Col md="3">
                  <Link to="/contactus"></Link>{" "}
                  <Button className="productivitybtn">Get Started Now!</Button>
                </Col>
                <Col>
                  <Link to="/contactus">
                    <Button className="productivitybtn">Learn More</Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Narrow>
      </div>

      <Getintouch />
    </>
  );
}

export default Home;
