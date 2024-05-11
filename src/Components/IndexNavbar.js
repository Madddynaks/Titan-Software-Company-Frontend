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
import Narrow from './Common/Narrow';
function IndexNavbar() {




    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <div style={{backgroundColor:"black", padding:"0.5rem 0rem",maxHeight:"65px"}}>
        <Narrow>
        <div style={{height:"3rem",color:"white",display:"flex", alignItems:'center',justifyContent:"space-between",}}>
            <span>Panacee Software Company</span>
            <span>Janakpuri South </span>
        </div>
        </Narrow>
        </div>
        <div class="navbarContainer">
        <Narrow >
        <div>
            <Navbar className='navbar' light expand="md" style={{padding:"0px"}}>
                <NavbarBrand><Link to='/'><img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/Panacee%20logo.png?updatedAt=1710924589184" alt="" className='navlogo' style={{margin:"0px"}}/></Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar style={{width:"90%"}}>
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
                                <DropdownItem style={{ width: '100vw', position: 'static', height: '55vh' }} >
                                    <Container className='portfolionavcon' >
                                        <Row>
                                            <Col md={8} >
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
                                            <Col md={4} >
                                                <Row className='navourproduct' >
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
                                        <div style={{ display: 'flex', justifyContent: 'center' }} >


                                            <p style={{ marginTop: '9px' }} >Looking for new career ? <strong>We're hiring</strong> </p>
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
                                <DropdownItem style={{ width: '100vw', position: 'static', height: '55vh', }} >




                                    <Container style={{}} >
                                        <Row>

                                            <Col md={8}>
                                                <Row>
                                                    <Col md={7}>
                                                        <Row className='gap-3' >
                                                            <Col md={5}>
                                                                <Row className='navservicecard'  >
                                                                    <Col  className='navportcardin'>
                                                                        <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-1.svg?updatedAt=1713440854392" alt=""  />
                                                                    </Col>
                                                                    <Col >
                                                                        <h6>Brainstroming </h6>
                                                                        <p>Ideas</p>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col md={5}>
                                                                <Row className='navservicecard' >
                                                                    <Col className='navportcardin'>
                                                                        <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-3.svg?updatedAt=1713440667501" alt="" height={50} width={50} />
                                                                    </Col>
                                                                    <Col>
                                                                        <h6>SEO</h6>
                                                                        <p>Optimization</p>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>

                                                        <Row className='gap-3 mt-3'  >
                                                            <Col md={5}>
                                                                <Row className='navservicecard' >
                                                                    <Col className='navportcardin' style={{width : '10px'}}>
                                                                        <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-2%20(1).svg?updatedAt=1713441749519" alt="" height={50} width={50} style={{ objectFit: 'contain' }}  />
                                                                    </Col>
                                                                    <Col>
                                                                        <h6>App</h6>
                                                                        <p>Development</p>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col md={5}>
                                                                <Row className='navservicecard' >
                                                                    <Col className='navportcardin'>
                                                                        <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-4.svg?updatedAt=1713441484235" alt="" height={50} width={50} style={{ objectFit: 'contain' }} />
                                                                    </Col>
                                                                    <Col>
                                                                        <h6>Frontend </h6>
                                                                        <p>Development</p>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>



                                                    <Col md={5}>

                                                        <Row>
                                                            <Col md={6} className='navserviceslink'>
                                                                <h6  >Services</h6>
                                                                <Link to="/ourservices"><li>Development</li></Link>
                                                                <Link to="/ourservices"><li>Web Design</li></Link>
                                                                <Link to="/ourservices"><li>IT Support</li></Link>
                                                                <Link to="/ourservices"><li>E-Cpmmerce</li></Link>
                                                                <Link to="/ourservices"><li>CRM Solutions</li></Link>
                                                            </Col>
                                                            <Col md={6} className='navserviceslink'>
                                                                <h6 >Our Fields </h6>
                                                                <Link to="/"><li>Healthcare</li></Link>
                                                                <Link to="/"><li>Travel</li></Link>
                                                                <Link to="/"><li>Supermarket</li></Link>
                                                                <Link to="/"><li>Industries</li></Link>
                                                                <Link to="/"><li>Hotels</li></Link>
                                                            </Col>
                                                        </Row>




                                                        {/* <div className='navserviceslink'>
                                                            <h6  >Services</h6>
                                                            <Link to="/ourservices"><li>Development</li></Link>
                                                            <Link to="/ourservices"><li>Web Design</li></Link>
                                                            <Link to="/ourservices"><li>IT Support</li></Link>
                                                            <Link to="/ourservices"><li>E-Cpmmerce</li></Link>
                                                            <Link to="/ourservices"><li>CRM Solutions</li></Link>
                                                        </div> */}

                                                    </Col>
                                                </Row>
                                            </Col>




                                            <Col md='4'>

                                                <Row className='navourproduct' >
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


                                        <div style={{ display: 'flex', justifyContent: 'center' }} >


                                            <p style={{ marginTop: '9px' }} >Looking for new career ? <strong>We're hiring</strong> </p>
                                        </div>

                                    </Container>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>




                    <Row className='navcontacyinfo' style={{display:"flex",width:"30%"}}>
                        <Col md="6">
                            <Row className='mt-2' >
                                <div  style={{ display: 'flex'}}>
                                    <p className='navcallus'>Call Us</p>
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/home%20arrow.svg?updatedAt=1713423053103" alt="" style={{ width: '15px', height: '20px', marginTop: '12px' }} />
                                </div>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='navnum' style={{fontSize:"1.5em"}} >9650900190</p>
                                </Col>
                            </Row>

                        </Col>
                        <Col md="6" className='navbtnbox' >
                            <Link to='/contactus'>
                                <Button className='contactusbtn' >Contact Us</Button>
                            </Link>
                        </Col>
                    </Row>



                </Collapse>
            </Navbar>
        </div>
        </Narrow>
        </div>
        </>
    );
}

export default IndexNavbar;