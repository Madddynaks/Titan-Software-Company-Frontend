import React from 'react'
import { Row, Col, Button, Container } from 'reactstrap'
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
                                    <input type="text" className='footerinput' placeholder='Name'></input>
                                </Col>
                                <Col md='5'>
                                    <Button className='contactusbtnfoot'>Contact Us</Button>

                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ display: 'flex', marginTop: '50px' , gap : '30px' }} >
                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/youtube.svg" alt="" className='footercomlogo1' />
                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/webflow.svg" alt="" className='footercomlogo' />
                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/upwork.svg" alt="" className='footercomlogo' />
                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/shopify.svg" alt="" className='footercomlogo' />
                                </Col>
                            </Row>
                        </Col>

                        <Col md='6' style={{ padding: '30px' }} >
                            <h2>Let’s get started on something great</h2>
                            <h6 style={{ marginTop: '20px' }} >Our team of IT experts looks forward to meeting with you <br />
                                and providing valuable insights tailored to your business.</h6>
                            <Button className='apontmentbtn'>Get an appointment now</Button>

                        </Col>
                    </Row>

                </Container>
                <Container className='footersignup' >
                    <Row>
                        <Col md='9' >
                            <Row className='footerdivider' >
                                <Col md='3' className='footitem' >
                                    <h5>Services</h5>
                                    <li>IT Support</li>
                                    <li>Web Design</li>
                                    <li>Development</li>
                                    <li>Cloud Things</li>
                                    <li>E-Commerce</li>
                                    <li>CRM Solutions</li>
                                </Col>
                                <Col md='3' className='footitem' >
                                    <h5>Services</h5>
                                    <li>IT Support</li>
                                    <li>Web Design</li>
                                    <li>Development</li>
                                    <li>Cloud Things</li>
                                    <li>E-Commerce</li>
                                    <li>CRM Solutions</li>
                                </Col>
                                <Col md='3' className='footitem' >
                                    <h5>Services</h5>
                                    <li>IT Support</li>
                                    <li>Web Design</li>
                                    <li>Development</li>
                                    <li>Cloud Things</li>
                                    <li>E-Commerce</li>
                                    <li>CRM Solutions</li>
                                </Col>
                                <Col md='3' className='footitem' >
                                    <h5>Services</h5>
                                    <li>IT Support</li>
                                    <li>Web Design</li>
                                    <li>Development</li>
                                    <li>Cloud Things</li>
                                    <li>E-Commerce</li>
                                    <li>CRM Solutions</li>
                                </Col>

                            </Row>

                        </Col>

                        <Col md='3' className='footcontact'  >


                            <h6>Phone</h6>
                            <p>8409624333</p>
                            <p>8409624333</p>
                            <h6>Email</h6>
                            <p>bluebase@mail.com</p>
                            <p>mandrodio@mail.com</p>




                        </Col>
                    </Row>
                </Container>
                <Container style={{marginTop : '35px'}} >

                    <Row style={{display : 'flex' , flexDirection : 'row' , gap : '15px'}} >
                        <Col md='4' style={{display : 'flex' , gap : '28px'}} >
                            <a href="https://www.facebook.com/jeevshaktifoundation/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png" alt="" className="connection-logo" /></a>
                            <a href="https://www.instagram.com/jeevshaktifoundation/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="" className="connection-logo" /></a>
                            <a href="https://twitter.com/ChadhaJaslin"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-square-color-icon.png" alt="" className="connection-logo" /></a>
                            <a href="https://www.youtube.com/@jeevshaktifoundation"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-icon.png" alt="" className="connection-logo" /></a>

                        </Col>
                        <Col md='5' >
                        <p style={{ color: 'green' }} >© Copyright 2023, Panacea Software Solutions</p>


                        </Col>
                    </Row>
                   




                </Container>
            </div>

        </>
    )
}

export default Footer
