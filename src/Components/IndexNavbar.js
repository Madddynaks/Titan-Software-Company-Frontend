import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,

    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,

    Button,
    Container
    ,
    Col, Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
function IndexNavbar() {




    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className='navbar' light expand="md">

                <NavbarBrand><Link to='/'><img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/Panacee%20logo.png?updatedAt=1710924589184" alt="" className='navlogo' /></Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem className='navitem' style={{ paddingTop: '7px' }}>
                            <Link className='link' to="/">Home</Link>
                        </NavItem>
                        <NavItem >
                            <Link className='navitem' to="/about">
                                About Us
                            </Link>
                        </NavItem>



                        <UncontrolledDropdown nav inNavbar className='navitem' style={{ position: "static" }} >
                            <Link><DropdownToggle nav caret className='navitem'>
                                Portfolio
                            </DropdownToggle></Link>

                            <DropdownMenu >
                                <DropdownItem style={{ width: '100vw', position: 'static', height: '500px', marginTop: '20px' }} >
                                    <Container className='portfolionavcon' >
                                        <Row>
                                            <Col md='8' >
                                                <Row>
                                                    <Col md='6' >
                                                        <Link to='/impact'>
                                                            <div className='portfolionavcard' style={{ display: 'flex' }} >
                                                                <div>
                                                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-1.jpg" alt="" className='proffolionavimg' />
                                                                </div>
                                                                <div className='navcardtext'>
                                                                    <h6>E-commerce</h6>
                                                                    <p>we undertook a
                                                                        <br /> project to migrate <br /> their existing.</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link to='/impact'>
                                                            <div className='portfolionavcard' style={{ display: 'flex' }} >
                                                                <div>
                                                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-3.jpeg" alt="" className='proffolionavimg' />
                                                                </div>
                                                                <div className='portfolionavcardtext'>
                                                                    <h6>SAAS Integration</h6>
                                                                    <p>we undertook a
                                                                        <br /> project to migrate <br /> their existing.</p>
                                                                </div>
                                                            </div>
                                                        </Link>

                                                    </Col>

                                                    <Col md='6' >
                                                        <Link to='/impact' >
                                                            <div className='portfolionavcard' style={{ display: 'flex' }} >
                                                                <div>
                                                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-2.jpg" alt="" className='proffolionavimg' />
                                                                </div>
                                                                <div className='navcardtext'>
                                                                    <h6>App Development</h6>
                                                                    <p>we undertook a
                                                                        <br /> project to migrate <br /> their existing.</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link to='/impact' >
                                                            <div className='portfolionavcard' style={{ display: 'flex' }} >
                                                                <div>
                                                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-4.jpeg" alt="" className='proffolionavimg' />
                                                                </div>
                                                                <div className='portfolionavcardtext'>
                                                                    <h6>Virtual Reality</h6>
                                                                    <p>we undertook a
                                                                        <br /> project to migrate <br /> their existing.</p>
                                                                </div>
                                                            </div>
                                                        </Link>


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
                                                        <a href="/">View more</a>
                                                    </div>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <br />
                                        <div style={{ display: 'flex' }} >
                                            <div style={{ width: '180px', justifyContent: 'space-between', padding: '15px', display: 'flex' }}>
                                                <a href="https://www.linkedin.com/company/panacee-software-solutions/"><img src="https://ik.imagekit.io/2q7cgnqzi/icon/icons8-linkedin.svg?updatedAt=1710492054727" alt="" className="connection-logo" /></a>
                                                <a href="https://www.instagram.com/jeevshaktifoundation/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="" className="connection-logo" /></a>
                                                <a href="https://twitter.com/ChadhaJaslin"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-square-color-icon.png" alt="" className="connection-logo" /></a>
                                                <a href="https://www.youtube.com/@jeevshaktifoundation"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-icon.png" alt="" className="connection-logo" /></a>
                                            </div>
                                            <p style={{ marginLeft: '410px', marginTop: '9px' }} >Looking for new career ? <strong>We're hiring</strong> </p>
                                        </div>
                                    </Container>

                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>



                        <UncontrolledDropdown nav inNavbar className='navitem' style={{ position: "static" }}>
                            <DropdownToggle nav caret className='navitem'>
                                Services
                            </DropdownToggle>
                            <DropdownMenu  >
                                {/* <DropdownItem>Option 1</DropdownItem> */}
                                <DropdownItem style={{ width: '100vw', position: 'static', height: '500px', marginTop: '20px' }} >




                                    <Container style={{ marginTop: '50px' }} >
                                        <Row>

                                            <Col md='8' >

                                                <Row>
                                                    <Col md="6">
                                                        <Row>
                                                            <Col md='6' >
                                                                <Link to='/how-we-do' >
                                                                    <div className='servicenavcard' style={{ display: 'flex' }} >
                                                                        <div>
                                                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/brain-svgrepo-com.svg?updatedAt=1710937497361" alt="" height={50} width={50} />
                                                                        </div>
                                                                        <div className='navcardtext'>

                                                                            <h6>Brainstroming </h6>
                                                                            <p>Ideas</p>


                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </Col>
                                                            <Col md='6' >
                                                                <Link to='/how-we-do' >
                                                                    <div className='servicenavcard' style={{ display: 'flex' }} >
                                                                        <div>
                                                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519" alt="" height={50} width={50} />
                                                                        </div>
                                                                        <div className='navcardtext'>

                                                                            <h6>SEO</h6>
                                                                            <p>Optimization</p>


                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md='6' >
                                                                <Link to='/how-we-do'>
                                                                    <div className='servicenavcard' style={{ display: 'flex' }} >
                                                                        <div>
                                                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/graphic-design.png?updatedAt=1711008512725" alt="" height={50} width={50} />
                                                                        </div>
                                                                        <div className='navcardtext'>

                                                                            <h6>Web</h6>
                                                                            <p>Design</p>

                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </Col>
                                                            <Col md='6' >
                                                                <Link to='/how-we-do'>
                                                                    <div className='servicenavcard' style={{ display: 'flex' }} >
                                                                        <div>
                                                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-upload-to-cloud-50.png?updatedAt=1711008806034" alt="" height={50} width={50} style={{ objectFit: 'contain' }} />
                                                                        </div>
                                                                        <div className='navcardtext'>
                                                                            <h6>Frontend </h6>
                                                                            <p>Development</p>



                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </Col>
                                                        </Row>

                                                    </Col>
                                                    <Col md='6' >

                                                        <Row>
                                                            <Col md='6' >
                                                                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: 'self-start', padding: 'auto', paddingLeft: '50px', marginTop: '17px' }} >
                                                                    <h6 style={{ textAlign: 'center' }} >Services</h6>
                                                                    <Link to="/ourservices"><li>Development</li></Link>
                                                                    <Link to="/ourservices"><li>Web Design</li></Link>
                                                                    <Link to="/ourservices"><li>IT Support</li></Link>

                                                                    <Link to="/ourservices"><li>E-Cpmmerce</li></Link>
                                                                    <Link to="/ourservices"><li>CRM Solutions</li></Link>

                                                                </div>
                                                            </Col>
                                                            <Col md='6' >
                                                                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'self-start', paddingLeft: '19px', marginTop: '17px' }} >
                                                                    <h6 style={{ textAlign: 'center' }}>Our Fields </h6>
                                                                    <Link to="/"><li>Healthcare</li></Link>
                                                                    <Link to="/"><li>Travel</li></Link>
                                                                    <Link to="/"><li>Supermarket</li></Link>
                                                                    <Link to="/"><li>Industries</li></Link>
                                                                    <Link to="/"><li>Hotels</li></Link>


                                                                </div>
                                                            </Col>
                                                        </Row>


                                                    </Col>
                                                </Row>
                                            </Col>



                                            <Col md='4'>

                                                <Row style={{ display: 'flex', flexDirection: 'column', padding: '10px' }} >
                                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/ipad.jpg" alt="" className='navserviceimg' />
                                                    <div style={{ marginLeft: '60px', marginTop: "35px" }} >
                                                        <h6>Our product hits</h6>
                                                        <p>Develop IT solutions based on the <br />
                                                            analysis phase.</p>
                                                        <a href="/">View more</a>
                                                    </div>

                                                </Row>
                                            </Col>
                                            <hr />
                                        </Row>
                                        <br />

                                        <div style={{ display: 'flex' }} >
                                            <div style={{ width: '180px', justifyContent: 'space-between', padding: '15px', display: 'flex' }}>
                                                <a href="https://www.linkedin.com/company/panacee-software-solutions/"><img src="https://ik.imagekit.io/2q7cgnqzi/icon/icons8-linkedin.svg?updatedAt=1710492054727" alt="" className="connection-logo" /></a>
                                                <a href="https://www.instagram.com/jeevshaktifoundation/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="" className="connection-logo" /></a>
                                                <a href="https://twitter.com/ChadhaJaslin"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-square-color-icon.png" alt="" className="connection-logo" /></a>
                                                <a href="https://www.youtube.com/@jeevshaktifoundation"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-icon.png" alt="" className="connection-logo" /></a>
                                            </div>

                                            <p style={{ marginLeft: '410px', marginTop: '9px' }} >Looking for new career ? <strong>We're hiring</strong> </p>
                                        </div>

                                    </Container>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '120px' }} className='navbtnslide' >
                        <div className='callmenavsec' style={{ display: 'flex' }} >
                            <p className='navcallus'>Call Us</p>
                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/iconmonstr-arrow-right-thin.svg?updatedAt=1710998562574" alt="" className='calluslogo' />
                        </div>
                        <div>
                            <p className='navnum' >9650900190</p>
                        </div>
                    </div>
                    <hr />
                    <Link to='/contactus'><Button className='contactusbtn'>Contact Us</Button></Link>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default IndexNavbar;