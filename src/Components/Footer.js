import React from 'react'
import { Row, Col, Button, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import Narrow from './Common/Narrow'
function Footer() {
    return (
        <>



            <div className='footer pb-5' >
                <Narrow>
                <div  >
                    <Row className='footercontainer' >
                        <Col md='6' className='inputdiv' >
                            <Row >
                                <Col className=' flex align-items-center gap-3'>
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/Panacee%20logo.png?updatedAt=1710924589184" alt="" className='footerlogo' />
                                    <h1 className='text-3xl font-semibold'>Panacee</h1>
                                </Col>
                            </Row>
                            <Row>
                                <p style={{ marginTop: '30px' }} >We provide the expertise and support to <br />
                                    propel your business forward.</p>
                            </Row>

                            <Row style={{ marginTop: '20px', display: 'flex', gap: '15px' }} >
                                <Col md='5' style={{ display: 'flex' }} >
                                    <input type="text" className='footerinput' placeholder='Enter Your Email'></input>
                                </Col>
                                <Col md='5'>
                                    <Link to='/contactus'><Button className='contactusbtnfoot'>Contact Us</Button></Link>
                                    
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ display: 'flex', marginTop: '50px', gap: '30px' }} >
                                    <Row>
                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/youtube.svg" alt="" className='footercomlogo1' />

                                    </Row>
                                    <Row>
                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/webflow.svg" alt="" className='footercomlogo' />

                                    </Row>
                                    <Row>
                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/upwork.svg" alt="" className='footercomlogo' />

                                    </Row>
                                    <Row>
                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/shopify.svg" alt="" className='footercomlogo' />
                                    </Row>
                                </Col>
                            </Row>
                        </Col>

                        <Col md='6' className='pl-28 max-xl:pl-7' style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center'}} >
                            <h3 className='text-2xl font-bold max-xl:mt-10'>Let’s get started on something great</h3>
                            <h6 style={{ marginTop: '20px' }} className='text-xl text-gray-300' >Our team of IT experts looks forward to meeting with you <br />
                                and providing valuable insights tailored to your business.</h6>
                            <Link to='/contactus' ><Button className='apontmentbtn'>Get an appointment now</Button></Link>

                        </Col>
                    </Row>

                </div>
                <div className='footersignup' >
                    <Row>
                        <Col md='9' >
                            <Row className='footerdivider leading-10 p-3 pt-5' >
                                <Col md='3' className='footitem ' >
                                    <h5 className='text-xl font-semibold'>Services</h5>
                                    <a href="/ourservices"><li>IT Support</li></a>
                                    <a href="/ourservices"><li>Web Design</li></a>
                                    <a href="/ourservices"><li>Development</li></a>
                                    <a href="/ourservices"><li>Cloud Things</li></a>
                                    <a href="/ourservices"><li>E-Commerce</li></a>
                                    <a href="/ourservices"><li>CRM Solutions</li></a>
                                </Col>
                                <Col md='3' className='footitem'>  
                                    <h5 className='text-xl font-semibold max-xl:mt-10'>Company</h5>
                                    <a href="/"><li>Blog</li></a>
                                    <a href="/"><li>About Us</li></a>
                                    <a href="/"><li>Partners</li></a>
                                    <a href="/career"><li>Careers </li></a>
                                    <a href="/"><li>Events</li></a>
                                    <a href="/"><li>Team</li></a>
                                </Col>
                                <Col md='3' className='footitem max-xl:mt-10' >
                                    <h5 className='text-xl font-semibold'>Product</h5>
                                    <a href="/"><li>Case Studies</li></a>
                                    <a href="/"><li>Our Pricing</li></a>
                                    <a href="/"><li>Features</li></a>
                                    <a href="/"><li>Overview</li></a>
                                    <a href="/"><li>New Releases</li></a>
                                    <a href="/"><li>Solutions</li></a>
                                </Col>
                                <Col md='3' className='footitem max-xl:mt-10' >
                                    <h5 className='text-xl font-semibold'>Services</h5>
                                    <a href="/ourservices"><li>IT Support</li></a>
                                    <a href="/ourservices"><li>Web Design</li></a>
                                    <a href="/ourservices"><li>Development</li></a>
                                    <a href="/ourservices"><li>Cloud Things</li></a>
                                    <a href="/ourservices"><li>E-Commerce</li></a>
                                    <a href="/ourservices"><li>CRM Solutions</li></a>
                                </Col>

                            </Row>

                        </Col>

                        <Col md='3' className='footcontact pl-24 max-xl:pl-6'  >

                            <p className='text-xl font-semibold'>Phone</p>
                            <a href="/"><p>9650900190</p></a>

                            <br />
                            <p className='text-xl font-semibold'>Email</p>
                            <a href="/"><p>infopanacee@gmail.com</p></a>



                        </Col>
                    </Row>
                </div>
                <div style={{ marginTop: '35px' }} className='max-xl:p-3'>
                    <Row style={{ display: 'flex', flexDirection: 'row', justifyContent:"space-between" }} >
                        <Col md='4' style={{ display: 'flex', alignItems:"center", gap: '28px' }} >
                            <a href="/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png" alt="" className="connection-logo w-10" /></a>
                            <a href="/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="" className="connection-logo w-10" /></a>
                            <a href="https://www.linkedin.com/company/panacee-software-solutions/"><img src="https://ik.imagekit.io/2q7cgnqzi/icon/icons8-linkedin.svg?updatedAt=1710492054727" alt="" className="connection-logo-linkedin w-10" /></a>
                            <a href="/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-icon.png" alt="" className="connection-logo w-10" /></a>
                        </Col>
                        <Col md='5' >
                            <Link to='/contactus' ><p className=' text-right max-xl:text-left max-xl:mt-5'>© Copyright 2023, Panacea Software Solutions</p></Link>
             
                        </Col>
                    </Row>


                </div>
                </Narrow>
            </div>

        </>
    )
}

export default Footer
