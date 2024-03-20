import React from 'react'
import IndexNavbar from '../Components/IndexNavbar'
import { Container, Row, Col, Card } from 'reactstrap'
function Home() {
    return (
        <>
            <IndexNavbar />

            <Container style={{ marginTop: '50px' }} >
                <Row>
                    <Col md='4'>
                        <Row>
                            <Col md='6' className='servicenavcard'>
                                <div style={{ display: 'flex' }} >
                                    <div>
                                        <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/brain-svgrepo-com.svg?updatedAt=1710937497361" alt="" height={50} width={50} />
                                    </div>
                                    <div className='navcardtext' >
                                        <h6>Brainstroming ideas</h6>
                                        <p>Ideas</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md='6' className='servicenavcard'>
                                <div style={{ display: 'flex' }} >
                                    <div>
                                        <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/brain-svgrepo-com.svg?updatedAt=1710937497361" alt="" height={50} width={50} />
                                    </div>
                                    <div className='navcardtext'>
                                        <h6>SEO</h6>
                                        <p>Optimization</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='6' className='servicenavcard'>
                                <div style={{ display: 'flex' }} >
                                    <div>
                                        <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/brain-svgrepo-com.svg?updatedAt=1710937497361" alt="" height={50} width={50} />
                                    </div>
                                    <div className='navcardtext'>
                                        <h6>Product</h6>
                                        <p>Design</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md='6' className='servicenavcard'>
                                <div style={{ display: 'flex' }} >
                                    <div>
                                        <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/brain-svgrepo-com.svg?updatedAt=1710937497361" alt="" height={50} width={50} />
                                    </div>
                                    <div className='navcardtext'>
                                        <h6>Frontend </h6>
                                        <p>Development</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md='4'>
                        <Row>
                            <Col md='6' >
                                <h6 style={{ textAlign: 'center' }} >Services</h6>
                                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} >
                                    <li>Development</li>
                                    <li>Development</li>
                                    <li>Development</li>
                                    <li>Development</li>
                                    <li>Development</li>
                                    <li>Development</li>
                                </div>
                            </Col>
                            <Col md='6' >
                                <h6 style={{ textAlign: 'center' }}>Services</h6>
                                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} >
                                    <li>Development</li>
                                    <li>Development</li>
                                    <li>Development</li>
                                    <li>Development</li>
                                    <li>Development</li>
                                    <li>Development</li>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                    <Col md='4'>
                        <Card>

                            <img src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='navserviceimg' />
                        </Card>
                    </Col>
                </Row>
                <br />
                <hr />


                <div style={{ width: '180px', justifyContent: 'space-between', padding: '15px', display: 'flex' }}>
                    <a href="https://www.facebook.com/jeevshaktifoundation/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png" alt="" className="connection-logo" /></a>
                    <a href="https://www.instagram.com/jeevshaktifoundation/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="" className="connection-logo" /></a>
                    <a href="https://twitter.com/ChadhaJaslin"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-square-color-icon.png" alt="" className="connection-logo" /></a>
                    <a href="https://www.youtube.com/@jeevshaktifoundation"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-icon.png" alt="" className="connection-logo" /></a>
                </div>

            </Container>


        </>
    )
}

export default Home
