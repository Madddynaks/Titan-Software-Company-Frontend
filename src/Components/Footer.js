import React from 'react'
import { Row, Col, Button, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>



            <div className='footer' >
                <Container  >
                    <Row className='footercontainer' >
                        <Col md='6' className='inputdiv' >
                            <Row >
                                <Col style={{ display: 'flex' }}>
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/Panacee%20logo.png?updatedAt=1710924589184" alt="" className='footerlogo' />
                                    <h1 style={{ marginLeft: '10px' }} >Panacee</h1>
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

                        <Col md='6' style={{ padding: '30px' }} >
                            <h2>Let’s get started on something great</h2>
                            <h6 style={{ marginTop: '20px' }} >Our team of IT experts looks forward to meeting with you <br />
                                and providing valuable insights tailored to your business.</h6>
                            <Link to='/contactus' ><Button className='apontmentbtn'>Get an appointment now</Button></Link>

                        </Col>
                    </Row>

                </Container>
                <Container className='footersignup' >
                    <Row>
                        <Col md='9' >
                            <Row className='footerdivider' >
                                <Col md='3' className='footitem' >
                                    <h5>Services</h5>
                                    <a href="/ourservices"><li>IT Support</li></a>
                                    <a href="/ourservices"><li>Web Design</li></a>
                                    <a href="/ourservices"><li>Development</li></a>
                                    <a href="/ourservices"><li>Cloud Things</li></a>
                                    <a href="/ourservices"><li>E-Commerce</li></a>
                                    <a href="/ourservices"><li>CRM Solutions</li></a>
                                </Col>
                                <Col md='3' className='footitem'>  
                                    <h5>Company</h5>
                                    <a href="/"><li>Blog</li></a>
                                    <a href="/"><li>About Us</li></a>
                                    <a href="/"><li>Partners</li></a>
                                    <a href="/"><li>Careers </li></a>
                                    <a href="/"><li>Events</li></a>
                                    <a href="/"><li>Team</li></a>
                                </Col>
                                <Col md='3' className='footitem' >
                                    <h5>Product</h5>
                                    <a href="/"><li>Case Studies</li></a>
                                    <a href="/"><li>Our Pricing</li></a>
                                    <a href="/"><li>Features</li></a>
                                    <a href="/"><li>Overview</li></a>
                                    <a href="/"><li>New Releases</li></a>
                                    <a href="/"><li>Solutions</li></a>
                                </Col>
                                <Col md='3' className='footitem' >
                                    <h5>Services</h5>
                                    <a href="/ourservices"><li>IT Support</li></a>
                                    <a href="/ourservices"><li>Web Design</li></a>
                                    <a href="/ourservices"><li>Development</li></a>
                                    <a href="/ourservices"><li>Cloud Things</li></a>
                                    <a href="/ourservices"><li>E-Commerce</li></a>
                                    <a href="/ourservices"><li>CRM Solutions</li></a>
                                </Col>

                            </Row>

                        </Col>

                        <Col md='3' className='footcontact'  >

                            <h6>Phone</h6>
                            <a href="/"><p>9650900190</p></a>

                            <h6>Email</h6>
                            <a href="/"><p>infopanacee@gmail.com</p></a>



                        </Col>
                    </Row>
                </Container>
                <Container style={{ marginTop: '35px' }} >
                    <Row style={{ display: 'flex', flexDirection: 'row', gap: '15px' }} >
                        <Col md='4' style={{ display: 'flex', gap: '28px' }} >
                            <a href=""><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png" alt="" className="connection-logo" /></a>
                            <a href="/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="" className="connection-logo" /></a>
                            <a href="https://www.linkedin.com/company/panacee-software-solutions/"><img src="https://ik.imagekit.io/2q7cgnqzi/icon/icons8-linkedin.svg?updatedAt=1710492054727" alt="" className="connection-logo-linkedin" /></a>
                            <a href="/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-icon.png" alt="" className="connection-logo" /></a>
                        </Col>
                        <Col md='5' >
                            <Link to='/contactus' ><p style={{ color: 'white' }} >© Copyright 2023, Panacea Software Solutions</p></Link>
                        

                        </Col>
                    </Row>


                </Container>
            </div>

        </>
    )
}

export default Footer
