import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    Container
    , Card,
    Col, Row
} from 'reactstrap';

function IndexNavbar() {




    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className='navbar' light expand="md"   >
                <NavbarBrand href="/"><img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/Panacee%20logo.png?updatedAt=1710924589184" alt="" className='navlogo' /> </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem className='navitem'>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem className='navitem'>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                About Us
                            </NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar className='navitem' >
                            <DropdownToggle nav caret className='navitem'>
                                Portfolio
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar className='navitem' style={{ position: "static" }}>
                            <DropdownToggle nav caret>
                                Services
                            </DropdownToggle>
                            <DropdownMenu  >
                                {/* <DropdownItem>Option 1</DropdownItem> */}
                                <DropdownItem style={{ width: '100vw', position: 'static', height: '500px', clear: 'both', display: 'flex', justifyContent: 'right', alignItems: 'center', marginTop: '20px' }} >




                                    <Container style={{ marginTop: '50px' }} >
                                        <Row>

                                            <Col md='8' >

                                                <Row>
                                                    <Col md="6">
                                                        <Row>
                                                            <Col md='6' >
                                                                <div className='servicenavcard' style={{ display: 'flex' }} >
                                                                    <div>
                                                                        <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/brain-svgrepo-com.svg?updatedAt=1710937497361" alt="" height={50} width={50} />
                                                                    </div>
                                                                    <div className='navcardtext' >
                                                                        <h6>Brainstroming </h6>
                                                                        <p>Ideas</p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col md='6' >
                                                                <div className='servicenavcard' style={{ display: 'flex' }} >
                                                                    <div>
                                                                        <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519" alt="" height={50} width={50} />
                                                                    </div>
                                                                    <div className='navcardtext'>
                                                                        <h6>SEO</h6>
                                                                        <p>Optimization</p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md='6' >
                                                                <div className='servicenavcard' style={{ display: 'flex' }} >
                                                                    <div>
                                                                        <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/graphic-design.png?updatedAt=1711008512725" alt="" height={50} width={50} />
                                                                    </div>
                                                                    <div className='navcardtext'>
                                                                        <h6>Web</h6>
                                                                        <p>Design</p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col md='6' >
                                                                <div className='servicenavcard' style={{ display: 'flex' }} >
                                                                    <div>
                                                                        <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-upload-to-cloud-50.png?updatedAt=1711008806034" alt="" height={50} width={50} />
                                                                    </div>
                                                                    <div className='navcardtext'>
                                                                        <h6>Frontend </h6>
                                                                        <p>Development</p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>

                                                    </Col>
                                                    <Col md='6' >

                                                        <Row>
                                                            <Col md='6' >
                                                                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: 'self-start', padding: 'auto', paddingLeft: '50px' , marginTop : '17px'}} >
                                                                    <h6 style={{ textAlign: 'center' }} >Services</h6>
                                                                    <li>Development</li>
                                                                    <li>Web Design</li>
                                                                    <li>IT Support</li>
                                                                    <li>E-Cpmmerce</li>
                                                                    <li>CRM Solutions</li>
                                                                </div>
                                                            </Col>
                                                            <Col md='6' >
                                                                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'self-start', paddingLeft: '19px' , marginTop : '17px'}} >
                                                                    <h6 style={{ textAlign: 'center' }}>Our Fildes</h6>

                                                                    <li>Healthcare</li>
                                                                    <li>Travel</li>
                                                                    <li>Supermarket</li>
                                                                    <li>Industries</li>

                                                                    <li>Hotels</li>
                                                                    <li>NGOS</li>
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
                                                        <a href="">View more</a>
                                                    </div>

                                                </Row>
                                            </Col>

                                            <Row>

                                            </Row>

                                            <hr />
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


                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '120px' }} >
                        <div style={{ display: 'flex' }} >
                            <p className='navcallus' >Call Us</p>
                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/iconmonstr-arrow-right-thin.svg?updatedAt=1710998562574" alt="" className='calluslogo' />
                        </div>
                        <div>
                            <p className='navnum' >8409624333</p>

                        </div>
                    </div>

                    <hr />
                    <Button className='navbtn'>Contact Us</Button>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default IndexNavbar;