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
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo3-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage'  ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo5-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage'  ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo4-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo1-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://ik.imagekit.io/2q7cgnqzi/icon/google-ar21.svg?updatedAt=1711448191760" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo2-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo3-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo5-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo4-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo1-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo1-1.svg" alt="" /></Card> </SwiperSlide>
            </Swiper>

            <Container className='howedo' >
                <Row>
                    <Col md='3' >
                        <h6 className='ourmodeltext' >OUR MODEL</h6>
                        <h1 className='howedotext' >How we do</h1>
                        <h5 className='savetimetext' >Save time and money with our powerful method.</h5>
                        <Button className='contactusbtncard' >Contact Us</Button>
                    </Col>


                    <Col md='9' >

                        <Row style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }} >
                            <Col md="3">
                                <Card style={{ width: '250px', height: '300' }} >
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






            <Container >
                <Row>
                    <Col>
                        <p style={{ color: 'blue' }} >INTERESTING ARTICLES</p>
                        <h1 style={{ fontSize: '50px' }} >Read daily news about startup companies</h1>
                    </Col>
                    <Col>
                        <h5>In today's rapidly evolving world, technology is constantly shaping the way we live and interact.
                            From artificial intelligence and automation to virtual reality, the pace of technological advancements is staggering.</h5>
                    </Col>
                </Row>
                <Row className='articlecard' >
                    <Col md='6' style={{ padding: '25px' }} >
                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-1.png" alt="" style={{ borderRadius: '15px' }} />

                    </Col>
                    <Col md='6' style={{ padding: '25px', paddingLeft: '60px' }} >

                        <p style={{ color: 'blue' }} >INTERESTING ARTICLES</p>
                        <h4>OpenAI launches new alignment division to tackle risks of superintelligent AI</h4>

                        <h5 style={{ marginTop: '35px' }} >Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals
                            at point of sale.</h5>

                        <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" style={{ width: 50, height: 28 }} />
                            <h5>PPD Development </h5>
                        </Row>

                        <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" style={{ width: 50, height: 28 }} />
                            <h5>Easy to Use </h5>
                        </Row>



                    </Col>
                </Row>
            </Container>



            <Container>
                <Row className='productcard' >
                    <Col md='5' className='product' style={{}} >
                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-2.jpg" alt="" width={600} style={{ borderRadius: '15px' }} />
                        <h6 style={{ marginTop: '25px', color: 'blue' }} >WEB DEVELOPMENT</h6>
                        <h3 style={{ marginTop: '20px', color: 'black' }} >Bluebase launches Tap to Pay on smartphone for international and domestic business</h3>

                        <h6 style={{ marginTop: '23px' }} >Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace
                            payment terminals at point of sale.</h6>
                        <p style={{ marginTop: '23px' }}>Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals at point of sale.</p>

                        <hr />
                        <Row>
                            <Col md='6' >
                                <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" style={{ width: 50, height: 28 }} />
                                    <h5>Easy to Use </h5>
                                </Row>
                                <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" style={{ width: 50, height: 28 }} />
                                    <h5>Easy to Use </h5>
                                </Row>

                            </Col>
                            <Col md='6' >
                                <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" style={{ width: 50, height: 28 }} />
                                    <h5>Easy to Use </h5>
                                </Row>
                                <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" style={{ width: 50, height: 28 }} />
                                    <h5>Easy to Use </h5>
                                </Row>

                            </Col>
                        </Row>
                        <Row>
                            <div style={{ display: 'flex', justifyContent: 'end' }} >
                                <div className='endbtn'>
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/reshot-icon-arrow-up-26SV9QGPE5.svg?updatedAt=1710503019445" alt="" width={30} />

                                </div>
                            </div>

                        </Row>

                    </Col>


                    <Col md='5' className='product'  >
                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-2.jpg" alt="" width={600} style={{ borderRadius: '15px' }} />
                        <h6 style={{ marginTop: '25px', color: 'blue' }} >WEB DEVELOPMENT</h6>
                        <h3 style={{ marginTop: '20px', color: 'black' }} >Bluebase launches Tap to Pay on smartphone for international and domestic business</h3>

                        <h6 style={{ marginTop: '23px' }} >Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace
                            payment terminals at point of sale.</h6>
                        <p style={{ marginTop: '23px' }}>Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals at point of sale.</p>

                        <hr />
                        <Row>
                            <Col md='6' >
                                <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" style={{ width: 50, height: 28 }} />
                                    <h5>Easy to Use </h5>
                                </Row>
                                <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" style={{ width: 50, height: 28 }} />
                                    <h5>Easy to Use </h5>
                                </Row>

                            </Col>
                            <Col md='6' >
                                <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" style={{ width: 50, height: 28 }} />
                                    <h5>Easy to Use </h5>
                                </Row>
                                <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" style={{ width: 50, height: 28 }} />
                                    <h5>Easy to Use </h5>
                                </Row>

                            </Col>
                        </Row>
                        <Row>
                            <div style={{ display: 'flex', justifyContent: 'end' }} >
                                <div className='endbtn'>
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/reshot-icon-arrow-up-26SV9QGPE5.svg?updatedAt=1710503019445" alt="" width={30} />

                                </div>
                            </div>

                        </Row>

                    </Col>
                </Row>
            </Container>








            <div className='productivity'>
                <Row>
                    <Col md='6' >
                        <Row>
                            <Col md='6' style={{ position: 'relative' }} >
                                <div>
                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/feature-img-1.png" alt="" />
                                </div>
                                <div style={{ position: 'relative', bottom: '470px', marginLeft: '30px' }} >
                                    <h1>Start your <br />
                                        project from <br />
                                        your pocket.</h1>
                                </div>

                            </Col>
                            <Col md='6' style={{ position: 'relative' }} >
                                <div>
                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/feature-img-1.png" alt="" />
                                </div>
                                <div style={{ position: 'relative', bottom: '470px', marginLeft: '30px' }} >
                                    <h1>Start your <br />
                                        project from <br />
                                        your pocket.</h1>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                    <Col md='6' style={{ padding: '40px', color: 'white' }} >
                        <h6 className='inhow' >FEATURED PRODUCT</h6>
                        <h1 style={{ color: 'white', fontSize: '50px', marginTop: '25px' }} >Seamless productivity <br /> with our new app</h1>
                        <h4 style={{ marginTop: '20px', color: '#cfcfcf' }} >Download Slack and experience a new era of organization <br /> and accomplishment.</h4>

                        <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/icon/done-svgrepo-com.svg?updatedAt=1711442715529" alt="" style={{ width: 50 }} />
                            <h5>PPD Development </h5>
                        </Row>
                        <Row style={{ display: 'flex', flexFlow: 'row  ', marginTop: '25px' }} >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/icon/done-svgrepo-com.svg?updatedAt=1711442715529" alt="" style={{ width: 50 }} />
                            <h5>Easy to use  </h5>
                        </Row>
                        <Row  >
                            <Button className='productivitybtn' >Get  Started Now!</Button>
                            <Button className='productivitybtn' >Learn More</Button>
                        </Row>
                    </Col>

                </Row>
            </div>




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
                            <Row className='expeince1con' style={{ borderBottom: 'none' }} >
                                <div style={{ display: 'flex' }} >
                                    <span className='years22' >2</span><span style={{ marginTop: '15px', marginLeft: '10px' }}>Mins </span>

                                </div>
                                <p className='inhow'> Response Time</p>
                            </Row>

                        </div>


                    </Col>
                    <Col md='3' >
                        <div className="contactcard">
                            <Row>
                                <Col>
                                    <Row style={{ marginTop: '10px' }} >
                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/support-icon.svg" alt="" className='thirdcolicon' style={{ width: 78 }} />
                                    </Row>
                                    <h4>
                                        Contact info
                                    </h4>

                                    <Row style={{ marginLeft: '5px' }} >
                                        809624333
                                        panacee@gmail.com
                                    </Row>
                                    <Row style={{ marginTop: '30px' }} >
                                        <hr />
                                    </Row>



                                    <Row style={{ marginTop: '30px' }} >
                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/map-icon.svg" alt="" className='thirdcolicon' style={{ width: 78 }} />
                                    </Row>
                                    <h4>
                                        Visit our office
                                    </h4>
                                    <Row style={{ marginLeft: '3px' }} >
                                        16/9, Down Street Edinburgh, Scotland United Kingdom
                                    </Row>

                                    <Row style={{ marginTop: '30px' }} >
                                        <hr />
                                    </Row>
                                    <div style={{ display: 'flex', marginLeft: '2px' }}>
                                        <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/football-svgrepo-com.svg?updatedAt=1711438889596" alt="" style={{ width: 20 }} />
                                        <p style={{ marginTop: '15px', marginLeft: '10px' }} >Dubblin</p>
                                    </div>
                                    <div style={{ display: 'flex', marginTop: '18px' }}>
                                        <img src="https://ik.imagekit.io/2q7cgnqzi/icon/twitter.svg?updatedAt=1711439397169" alt="" style={{ width: 25, height: 25 }} />
                                        <p style={{ marginLeft: '10px' }} >Twitter</p>
                                    </div>
                                    <div style={{ display: 'flex', marginTop: '18px' }}>
                                        <img src="https://ik.imagekit.io/2q7cgnqzi/icon/instagram.svg?updatedAt=1711439653309" alt="" style={{ width: 25, height: 25 }} />
                                        <p style={{ marginLeft: '10px' }} >Instagram</p>
                                    </div>
                                    <div style={{ display: 'flex', marginTop: '18px', marginLeft: '5px' }}>
                                        <img src="https://ik.imagekit.io/2q7cgnqzi/icon/linkedin.svg?updatedAt=1711439762894" alt="" style={{ width: 18, height: 18 }} />
                                        <p style={{ marginLeft: '10px' }} >Instagram</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>




            <Footer />
        </>
    )
}

export default Home

