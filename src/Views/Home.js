import React from 'react'
import IndexNavbar from '../Components/IndexNavbar'
import { Container, Row, Col, Button, Card } from 'reactstrap'
import 'swiper/css';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../Components/Footer';

function Home() {
    return (
        <>
            <IndexNavbar />
            <Container style={{ marginTop: "85px" }} >
                <Row>
                    <Col md='6'>
                        <p style={{ color: 'blue' }} >EMPOWERMENT</p>
                        <h1 style={{ fontSize: '65px' }} >Seamless IT for your  business, boosting your growth.</h1>
                        <p style={{ marginTop: '35px', fontSize: '22px' }} >We provide the expertise and support to propel your business forward in the digital landscape.</p>
                        <Row style={{ marginTop: '35px' }}>
                            <Col md='3'>
                                <Button className='contactusbtn'>Contact Us</Button>

                            </Col>
                            <Col md='3' >
                                <Button className='letstalkbtn'>Let's Talk </Button>

                            </Col>
                        </Row>

                    </Col>
                    <Col md='6'>
                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg1-1-1.png" alt="" />
                    </Col>
                </Row>
                <br /><br />

                <hr />
            </Container>
            <Swiper style={{ paddingTop: "0", paddingBottom: "5em" }}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={6}
                // pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo2-1.svg" alt="" style={{ height: '128px', width: '148px', objectFit: 'contain' }} /></SwiperSlide>
                <SwiperSlide><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo3-1.svg" alt="" style={{ height: '108px', width: '108px' }} /></SwiperSlide>
                <SwiperSlide><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo5-1.svg" alt="" style={{ height: '108px', width: '148px' }} /></SwiperSlide>
                <SwiperSlide><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo4-1.svg" alt="" style={{ height: '128px', width: '148px', }} /></SwiperSlide>
                <SwiperSlide><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo1-1.svg" alt="" style={{ height: '108px', width: '108px', }} /></SwiperSlide>
                <SwiperSlide><img className="home-slider-img" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-icon.png" alt="" style={{ height: '108px', width: '148px', }} /></SwiperSlide>
                <SwiperSlide><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo2-1.svg" alt="" style={{ height: '128px', width: '148px', objectFit: 'contain' }} /></SwiperSlide>
                <SwiperSlide><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo3-1.svg" alt="" style={{ height: '108px', width: '108px' }} /></SwiperSlide>
                <SwiperSlide><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo5-1.svg" alt="" style={{ height: '108px', width: '148px' }} /></SwiperSlide>
                <SwiperSlide><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo4-1.svg" alt="" style={{ height: '128px', width: '148px', }} /></SwiperSlide>
                <SwiperSlide><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo1-1.svg" alt="" style={{ height: '108px', width: '108px', }} /></SwiperSlide>
                <SwiperSlide><img className="home-slider-img" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-icon.png" alt="" style={{ height: '108px', width: '148px', }} /></SwiperSlide>

            </Swiper>

            <Container className='howedo' >
                <Row>
                    <Col md='3' >
                        <h6 className='ourmodeltext' >OUR MODEL</h6>
                        <h1 className='howedotext' >How we do</h1>
                        <h5 className='savetimetext' >Save time and money with our powerful method.</h5>
                        <Button className='contactusbtn' >Contact Us</Button>
                    </Col>


                    <Col md='9' >

                        <Row style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }} >
                            <Col md="3">
                                <Card style={{ width: '250px' }} >
                                    <div className='howedocard' style={{ display: 'flex' }} >
                                        <div>
                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/brain-svgrepo-com.svg?updatedAt=1710937497361" alt="" height={50} width={50} />
                                        </div>
                                        <div className='navcardtext'>
                                            <h6>Brainstroming</h6>
                                            <p>Ideas</p>
                                        </div>
                                    </div>
                                </Card>

                            </Col>
                            <Col md="3">
                                <Card style={{ width: '250px', height: '300' }} >
                                    <div className='howedocard' style={{ display: 'flex' }} >
                                        <div>
                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519" alt="" height={50} width={50} />
                                        </div>
                                        <div className='navcardtext'>
                                            <h6>Product</h6>
                                            <p>Design</p>
                                        </div>
                                    </div>
                                </Card>

                            </Col>
                            <Col md="3">
                                <Card style={{ width: '250px', height: '300' }} >
                                    <div className='howedocard' style={{ display: 'flex' }} >
                                        <div>
                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/graphic-design.png?updatedAt=1711008512725" alt="" height={50} width={50} />
                                        </div>
                                        <div className='navcardtext'>
                                            <h6>Front-End</h6>
                                            <p>Development</p>
                                        </div>
                                    </div>
                                </Card>

                            </Col>


                        </Row>



                        <Row style={{ display: 'flex', justifyContent: 'center', padding: '20px', padding: '60px', gap: '60px' }} >
                            <Col md="4">
                                <Card style={{ width: '250px', height: '300' }} >
                                    <div className='howedocard' style={{ display: 'flex' }} >
                                        <div>
                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519" alt="" height={50} width={50} />
                                        </div>
                                        <div className='navcardtext'>
                                            <h6>SEO</h6>
                                            <p>Optimization</p>
                                        </div>
                                    </div>
                                </Card>

                            </Col>
                            <Col md="4">
                                <Card style={{ width: '250px', height: '300' }} >
                                    <div className='howedocard' style={{ display: 'flex' }} >
                                        <div>
                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519" alt="" height={50} width={50} />
                                        </div>
                                        <div className='navcardtext'>
                                            <h6>Back-End</h6>
                                            <p>Development</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>


                        <Row>
                            <Col style={{ display: 'flex', justifyContent: 'center' }} >
                                <Card style={{ width: '250px', height: '300' }} >
                                    <div className='howedocard' style={{ display: 'flex' }} >
                                        <div>
                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519" alt="" height={50} width={50} />
                                        </div>
                                        <div className='navcardtext'>
                                            <h6>Digital</h6>
                                            <p>Marketing</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>

                        </Row>


                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: '120px' }} >
                <Row>
                    <Col md='6' >
                        <p className='delinglogheading'>WHAT WE’RE OFFERING</p>
                        <h1 className='delingheading' >Dealing in all professional <br />
                            IT services.</h1>
                    </Col>
                    <Col md='6' >
                        <h6 className='delingcontent' >One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of the hardware, software, networks, and servers.</h6>
                    </Col>
                </Row>
            </Container>

            <Container className='professionalservicescontainer' >
                <Row>
                    <Col>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg" alt="" className='services5' />
                            <h4>Development</h4>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-2-2.svg" alt="" className='services5' />
                            <h4>Woo Commerce</h4>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-3-2.svg" alt="" className='services5' />
                            <h4>CRM Solutions</h4>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-4-2.svg" alt="" className='services5' />
                            <h4>Web Design</h4>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-5-2.svg" alt="" className='services5' />
                            <h4>IT Support</h4>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                </Row>
            </Container>


            <Container className='getintouch' >
                <Row>
                    <Col md='6' className='getintouch1'>
                        <p>CONTACT</p>
                        <h1>Lets get in touch</h1>
                        <h6 style={{ marginTop: "30px" }} >You can reach us anytime via
                            <a href="/"> bluebase@mail.com</a>
                        </h6>


                        <div className='touchform' >
                            <Row style={{ marginTop: "30px" }} >
                                <Col>
                                    <h6>First Name</h6>
                                    <input type="text" placeholder='First Name' className='inputarea' />
                                </Col>
                                <Col>
                                    <h6>First Name</h6>
                                    <input type="text" placeholder='First Name' className='inputarea' />
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '30px' }} >

                                <h6> Email</h6>
                                <input type="text" className='emailtextaria' placeholder='Email' />

                            </Row>
                            <Row style={{ marginTop: '30px' }} >
                                <Col>
                                    <h6>First Name</h6>
                                    <input type="text" placeholder='Subject' className='inputarea' />
                                </Col>
                                <Col>
                                    <h6>First Name</h6>
                                    <input type="text" placeholder='Subject' className='inputarea' />
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '30px' }} >
                                <h6>Message</h6>
                                <textarea name="" id="" cols="25" rows="10" style={{ marginLeft: '10px', width: '550px' }} ></textarea>
                            </Row>
                            <Button className='formsubmit' >Submit</Button>
                        </div>


                    </Col>
                    <Col md='3' >
                        <div className='exprience' >
                            <Row className='expeince1con' >
                                <div style={{ display: 'flex' }} >
                                    <span className='years22' >22+</span><span style={{ marginTop: '15px', marginLeft: '10px' }} >Years</span>

                                </div>
                                <p className='inhow' >filed exprience</p>
                            </Row>

                            <Row className='expeince1con' >
                                <div style={{ display: 'flex' }} >
                                    <span className='years22' >950+</span><span style={{ marginTop: '15px', marginLeft: '10px' }} >Projects</span>

                                </div>
                                <p className='inhow'>Done Around World</p>
                            </Row>

                            <Row className='expeince1con' >
                                <div style={{ display: 'flex' }} >
                                    <span className='years22' >99%</span><span style={{ marginTop: '15px', marginLeft: '10px' }} ></span>

                                </div>
                                <p className='inhow'>Client Satisfaction                                                                                                                                                  </p>
                            </Row>

                            <Row className='expeince1con' >
                                <div style={{ display: 'flex' }} >
                                    <span className='years22' >1995+</span><span style={{ marginTop: '15px', marginLeft: '10px' }}>Years </span>

                                </div>
                                <p className='inhow'>Established On</p>
                            </Row>
                            <Row className='expeince1con' >
                                <div style={{ display: 'flex' }} >
                                    <span className='years22' >2</span><span style={{ marginTop: '15px', marginLeft: '10px' }}>Mins </span>

                                </div>
                                <p className='inhow'> Response Time</p>
                            </Row>

                        </div>


                    </Col>
                    <Col md='3' >

                        <Row>
                            <Col>

                            <Row>
                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/support-icon.svg" alt="" className='thirdcolicon' />
                            </Row>
                            </Col>
                        </Row>



                    </Col>
                </Row>

            </Container>
            <Footer />
        </>
    )
}

export default Home

