import React from 'react'
import { Row, Col, Button, Container } from 'reactstrap'
function Footer() {
    return (
        <>



            <div className='footer' >
                <Container  >
                    <Row className='footercontainer' >
                        <Col md='6' className='inputdiv' >
                            <div style={{ display: 'flex' }} >
                                <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/Panacee%20logo.png?updatedAt=1710924589184" alt="" className='footerlogo' />
                                <h1 style={{ marginLeft: '10px' }} >Panacee</h1>
                            </div>

                            <p style={{ marginTop: '30px' }} >We provide the expertise and support to <br />
                                propel your business forward.</p>
                            <div style={{ display: 'flex', marginTop: '40px' }} >
                                <input type="text" className='footerinput' placeholder='Name'></input>
                                <Button className='contactusbtn'>Contact Us</Button>
                            </div>
                            <div style={{ display: 'flex', marginTop: '50px' }} >
                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/youtube.svg" alt="" className='footercomlogo1' />
                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/webflow.svg" alt="" className='footercomlogo' />
                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/upwork.svg" alt="" className='footercomlogo' />
                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/shopify.svg" alt="" className='footercomlogo' />
                            </div>
                        </Col>

                        <Col md='6' style={{ paddingLeft: '90px' }} >
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
                                <Col>
                                    <h5>Services</h5>
                                    <li>IT Support</li>
                                    <li>Web Design</li>
                                    <li>Development</li>
                                    <li>Cloud Things</li>
                                    <li>E-Commerce</li>
                                    <li>CRM Solutions</li>
                                </Col>
                                <Col>
                                    <h5>Services</h5>
                                    <li>IT Support</li>
                                    <li>Web Design</li>
                                    <li>Development</li>
                                    <li>Cloud Things</li>
                                    <li>E-Commerce</li>
                                    <li>CRM Solutions</li>
                                </Col>
                                <Col>
                                    <h5>Services</h5>
                                    <li>IT Support</li>
                                    <li>Web Design</li>
                                    <li>Development</li>
                                    <li>Cloud Things</li>
                                    <li>E-Commerce</li>
                                    <li>CRM Solutions</li>
                                </Col>

                                <Col>
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

                        <Col md='3' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '180px' }} >
                            <div>
                                <h6>Phone</h6>
                                <p>8409624333</p>
                                <p>8409624333</p>
                            </div>

                            <div>
                                <h6>Mail</h6>
                                <p>bluebase@mail.com</p>
                                <p>mandrodio@mail.com</p>
                            </div>

                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div style={{ width: '200px', justifyContent: 'space-between', padding: '15px', display: 'flex' }}>
                        <a href="https://www.facebook.com/jeevshaktifoundation/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png" alt="" className="connection-logo" /></a>
                        <a href="https://www.instagram.com/jeevshaktifoundation/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="" className="connection-logo" /></a>
                        <a href="https://twitter.com/ChadhaJaslin"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-square-color-icon.png" alt="" className="connection-logo" /></a>
                        <a href="https://www.youtube.com/@jeevshaktifoundation"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-icon.png" alt="" className="connection-logo" /></a>

                    </div>
                    <div>
                        <p style={{ color: 'green' }} >© 2023 All rights reserved by WordpressRiver</p>

                    </div>


                </Container>
            </div>

        </>
    )
}

export default Footer
