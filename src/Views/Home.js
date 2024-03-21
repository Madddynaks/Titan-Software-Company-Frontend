import React from 'react'
import IndexNavbar from '../Components/IndexNavbar'
import { Container, Row, Col, Card } from 'reactstrap'
function Home() {
    return (
        <>
            <IndexNavbar />

            <Container className='portfolionavcon' >
                <Row>
                    <Col md='8' >
                        <Row>
                            <Col md='6' >
                                <div className='portfolionavcard' style={{ display: 'flex' }} >
                                    <div>
                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-1.jpg" alt="" className='proffolionavimg' />
                                    </div>
                                    <div className='navcardtext'>
                                        <h6>E-commerce</h6>
                                        <p>we undertook a project to migrate their existing.</p>
                                    </div>
                                </div>
                                <div className='portfolionavcard' style={{ display: 'flex' }} >
                                    <div>
                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-3.jpeg" alt="" className='proffolionavimg' />
                                    </div>
                                    <div className='portfolionavcardtext'>
                                        <h6>SAAS Integration</h6>
                                        <p>We partnered with DEF to
                                            upgrade their outdated IT.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md='6' >
                                <div className='portfolionavcard' style={{ display: 'flex' }} >
                                    <div>
                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-2.jpg" alt="" className='proffolionavimg' />
                                    </div>
                                    <div className='navcardtext'>
                                        <h6>App Development</h6>
                                        <p>we undertook a project to migrate their existing.</p>
                                    </div>
                                </div>
                                <div className='portfolionavcard' style={{ display: 'flex' }} >
                                    <div>
                                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-4.jpeg" alt="" className='proffolionavimg' />
                                    </div>
                                    <div className='portfolionavcardtext'>
                                        <h6>Virtual Reality</h6>
                                        <p>Enter into the virtual reality
                                            world for real experience.</p>
                                    </div>
                                </div>


                            </Col>
                        </Row>

                    </Col>
                    <Col md="4" >

                        <Row className='navourproduct' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/macbook.jpg" alt="" className='navserviceimg' />
                            <div style={{ marginLeft: '60px', marginTop: '35px' }} >
                                <h6>Our product hits</h6>
                                <p>Develop IT solutions based on the <br />
                                    analysis phase.</p>
                                <a href="">View more</a>
                            </div>

                        </Row>
                    </Col>

                </Row>
                <br />

                <div style={{ display: 'flex' }} >
                    <div style={{ width: '180px', justifyContent: 'space-between', padding: '15px', display: 'flex' }}>
                        <a href="https://www.facebook.com/jeevshaktifoundation/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png" alt="" className="connection-logo" /></a>
                        <a href="https://www.instagram.com/jeevshaktifoundation/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="" className="connection-logo" /></a>
                        <a href="https://twitter.com/ChadhaJaslin"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-square-color-icon.png" alt="" className="connection-logo" /></a>
                        <a href="https://www.youtube.com/@jeevshaktifoundation"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-icon.png" alt="" className="connection-logo" /></a>
                    </div>

                    <p style={{ marginLeft: '410px', marginTop: '9px' }} >Looking for new career ? <strong>We're hiring</strong> </p>
                </div>


            </Container>
        </>
    )
}

export default Home

