import React from 'react'
import { Card , Container , Row , Col , Button} from 'reactstrap';
function Getintouch() {
  return (
   <>
    <Container className='getintouch' >
                <Row>
                    <Col md='6' className='getintouch1'>
                        <p style={{ color: '#1351d8', letterSpacing: '5px' }} >CONTACT</p>
                        <h1>Lets get in touch</h1>
                        <h6 style={{ marginTop: "30px" }} >You can reach us anytime via
                            <a href="/"> bluebase@mail.com</a>
                        </h6>
                        <Row className='touchform'>
                            <Col  >
                                <Row style={{ marginTop: "30px", display: 'flex' }} >
                                    <Col md='6' >
                                        <h6>First Name</h6>
                                        <input type="text" placeholder='First Name' className='inputarea' />
                                    </Col>
                                    <Col md='6'>
                                        <h6>Last Name</h6>
                                        <input type="text" placeholder='Last Name' className='inputarea' />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '30px' }} >

                                    <Col md='12' >
                                        <h6> Email</h6>
                                        <input type="text" className='emailtextaria' placeholder='Email' />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '30px' }} >
                                    <Col md='6'>
                                        <h6>Phone Number</h6>
                                        <input type="text" placeholder='Phone Number' className='inputarea' />
                                    </Col>
                                    <Col md='6'>
                                        <h6>Country</h6>
                                        <input type="text" placeholder='Country' className='inputarea' />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '30px' }} >
                                    <h6>Message</h6>
                                    <textarea className='textarea' name="" id="" cols="25" rows="10" style={{ marginLeft: '10px' }} ></textarea>
                                </Row>
                                <Button className='formsubmit' >Submit</Button>
                            </Col>
                        </Row>

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

                                    <Row style={{ marginTop: '50px' }} >

                                        <hr />
                                    </Row>


                                    <Row style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }} >
                                        <Col style={{ display: 'flex', marginLeft: '2px' }}>
                                            <img src="https://www.svgrepo.com/show/77510/football.svg" alt="" style={{ width: 20, height: 25, objectFit: 'contain' }} />
                                            <p style={{ marginLeft: '10px' }} >Dubblin</p>
                                        </Col>
                                        <Row>
                                            <Col style={{ display: 'flex' }}>
                                                <img src="https://ik.imagekit.io/2q7cgnqzi/icon/twitter.svg?updatedAt=1711439397169" alt="" style={{ width: 25, height: 25 }} />
                                                <p style={{ marginLeft: '10px' }} >Twitter</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ display: 'flex' }} >
                                                <img src="https://ik.imagekit.io/2q7cgnqzi/icon/instagram.svg?updatedAt=1711439653309" alt="" style={{ width: 25, height: 25 }} />
                                                <p style={{ marginLeft: '10px' }} >Instagram</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ display: 'flex' }} >
                                                <img src="https://ik.imagekit.io/2q7cgnqzi/icon/linkedin.svg?updatedAt=1711439762894" alt="" style={{ width: 18, height: 18 }} />
                                                <p style={{ marginLeft: '10px' }} >Instagram</p>
                                            </Col>
                                        </Row>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
   </>
  )
}

export default Getintouch