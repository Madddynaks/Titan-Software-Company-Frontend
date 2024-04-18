import { React, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'reactstrap'
import 'swiper/css';


import Slider from '../Components/Slider';
import Getintouch from '../Components/Getintouch';
import MultipleTab from '../Components/MultipleTab';

function Home() {

    useEffect(() => {

        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className='home1'>
                <Row>
                    <Col md='6'>
                        <p className='home1para'>EMPOWERMENT</p>
                        <h1 className='homepara2'  >Seamless IT for your  business, boosting your growth.</h1>
                        <p className='homepara3'  >We provide the expertise and support to propel your business forward in the digital landscape.</p>
                        <Row className='btnsectionrow' style={{ marginTop: '35px' }}>
                            <Col className='btnsection'>
                                <Link to='/contactus' ><Button className='contactusbtnhome'>Contact Us</Button></Link>
                                <Link to='/contactus' ><Button className='letstalkbtnhome'>Let's Talk <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/home%20arrow.svg?updatedAt=1713423053103" alt="" className='letstalkarrow'/> </Button></Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col md='6'>
                        <img src="https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='frontimg' />
                    </Col>
                </Row>
                <br /><br /><br />
                <br /><br />

                <hr /><br />
            </div>


            <Slider />


            <Container className='howedo' >
                <Row>
                    <Col md='3'  >
                        <h6 className='ourmodeltext' >OUR MODEL</h6>
                        <h1 className='howedotext' >How we do</h1>
                        <h5 className='savetimetext' >Save time and money with our powerful method.</h5>
                        <Link to='/contactus'><Button className='contactusbtncard' >Contact Us</Button></Link>
                    </Col>

                    <Col md='9'>
                        <Row className='hwdcon'>
                            <Col md="3" style={{ padding: '0px' }}>
                                <Card className='howedocard1'  >
                                    <div className='howedocard' style={{ display: 'flex' }}>
                                        <div>
                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/brain-svgrepo-com.svg?updatedAt=1710937497361" alt="" className='ourmodelimg' />
                                        </div>
                                        <div className='navcardtext'>
                                            <h6>Brainstroming</h6>
                                            <p>Ideas</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col md="3" style={{ padding: '0px' }}>
                                <Card className='howedocard1'  >
                                    <div className='howedocard' style={{ display: 'flex' }} >
                                        <div>
                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519" alt="" className='ourmodelimg' />
                                        </div>
                                        <div className='navcardtext'>
                                            <h6>Product</h6>
                                            <p>Design</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col md="3" style={{ padding: '0px' }} >
                                <Card className='howedocard1' >
                                    <div className='howedocard' style={{ display: 'flex' }} >
                                        <div>
                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/graphic-design.png?updatedAt=1711008512725" alt="" className='ourmodelimg' />
                                        </div>
                                        <div className='navcardtext'>
                                            <h6>Front-End</h6>
                                            <p>Development</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        <Row className='hwdcon2'>
                            <Col md="4" style={{ padding: '0px' }} >
                                <Card className='howedocard1'  >
                                    <div className='howedocard' >
                                        <div>
                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519" alt="" className='ourmodelimg' />
                                        </div>
                                        <div className='navcardtext'>
                                            <h6>SEO</h6>
                                            <p>Optimization</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col md="4" style={{ padding: '0px' }}>
                                <Card className='howedocard1 '  >
                                    <div className='howedocard' style={{ display: 'flex' }} >
                                        <div>
                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519" alt="" className='ourmodelimg' />
                                        </div>
                                        <div className='navcardtext '>
                                            <h6>Back-End</h6>
                                            <p>Development</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>



                        <Row>
                            <Col className='last11'>
                                <Card className='howedocard1 last'  >
                                    <div className='howedocard ' style={{ display: 'flex' }} >
                                        <div>
                                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/icons8-seo-50.png?updatedAt=1711008899519" alt="" className='ourmodelimg' />
                                        </div>
                                        <div className='navcardtext'>
                                            <h6>Digital</h6>
                                            <p>Marketing</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>

                        </Row>


                    </Col>
                </Row>
            </Container>

            <Container className='whatweoffering'  >
                <Row>
                    <Col md='6' >
                        <p className='delinglogheading'>WHAT WE’RE OFFERING</p>
                        <h1 className='delingheading' >Dealing in all professional <br />
                            IT services.</h1>
                    </Col>
                    <Col md='6' >
                        <h6 className='delingcontent' >One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of the hardware, software, networks, and servers.</h6>
                    </Col>
                </Row>
            </Container>

            <Container className='professionalservicescontainer' >
                <Row className='professionalservicesrow' >
                    <Col md='2' >
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg" alt="" className='services5' />
                            <h5>Development</h5>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                    <Col md='2'>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-2-2.svg" alt="" className='services5' />
                            <h5>Woo Commerce</h5>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                    <Col md='2'>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-3-2.svg" alt="" className='services5' />
                            <h5>CRM Solutions</h5>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                    <Col md='2'>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-4-2.svg" alt="" className='services5' />
                            <h5>Web Design</h5>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                    <Col md='2'>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-5-2.svg" alt="" className='services5' />
                            <h5>IT Support</h5>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                </Row>
            </Container>



            <Container  >

                <MultipleTab />


            </Container>








            <div className='showcasework' >
                <Row>
                    <Col className='col1' md='4' >
                        <p className='delinglogheading'>PROJECTS</p>
                        <h1>Showcase of our <br /> recognized
                            work</h1> <br />
                        <p className='dim' >Our collaborative approach ensures that we truly understand our clients unique requirements and challenges.</p>
                        <hr />
                        <Row className='rightsign' >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                            <h5>PPD Development </h5>
                        </Row>

                        <Row className='rightsign'  >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                            <h5>Easy to Use </h5>
                        </Row>
                    </Col>

                    <Col className='col2' md='7' >
                        <Row style={{ display: 'flex', justifyContent: 'space-around' , gap : '15px' }} >

                            <Col md='3' className='ecom'>
                                <h2  >E-commerce platform development </h2>
                            </Col>
                            <Col md='3' className='saas' >
                                <h2  >Software as a service integration</h2>
                            </Col>
                            <Col md='3' className='app' >
                                <h2  >Mobile platform Development</h2>
                            </Col>
                        </Row>


                    </Col>
                </Row>

            </div>





            <Container className='articlebox'  >
                <Row  >
                    <Col>
                        <p className='articleboxabout'>INTERESTING ARTICLES</p>
                        <h1 className='articleboxabouthead'>Read daily news about startup companies</h1>
                    </Col>
                    <Col>
                        <h5>In today's rapidly evolving world, technology is constantly shaping the way we live and interact.
                            From artificial intelligence and automation to virtual reality, the pace of technological advancements is staggering.</h5>
                    </Col>
                </Row>
                <Row className='articlecard' >
                    <Col md='6' className='articlecardimg'>
                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-1.png" alt="" className='interestingimg' />
                    </Col>
                    <Col md='6' className='articletextbox' >

                        <p>INTERESTING ARTICLES</p>
                        <h4>OpenAI launches new alignment division to tackle risks of superintelligent AI</h4>

                        <h5 style={{ marginTop: '35px' }} >Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals
                            at point of sale.</h5>
                        {/* <Row className='tasksign' >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                            <h5>Collaboration Tools </h5>
                        </Row>
                        <Row className='tasksign' >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                            <h5>Smart Reminders </h5>
                        </Row> */}

                    </Col>
                </Row>
            </Container>





            <Container>
                <Row className='productcard' >
                    <Col md='5' className='product'>
                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-2.jpg" alt="" />
                        <h6 className='spacingunique' >WEB DEVELOPMENT</h6>
                        <h3 className='articlecardhead'  >Bluebase launches Tap to Pay on smartphone for international and domestic business</h3>

                        <h style={{ marginTop: '23px' }}>Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace
                            payment terminals at point of sale.</h>

                        <hr />
                        <Row>
                            <Col md='6' >
                                <Row className='tasksign' >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                                    <h5>Collaboration Tools </h5>
                                </Row>
                                <Row className='tasksign' >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                                    <h5>Smart Reminders </h5>
                                </Row>
                            </Col>
                            <Col md='6' >
                                <Row className='tasksign' >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                                    <h5>Requirement </h5>
                                </Row>
                                <Row className='tasksign' >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                                    <h5>Task Management </h5>
                                </Row>
                            </Col>
                        </Row>
                    </Col>


                    <Col md='5' className='product'>
                        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-3.jpg" alt="" />
                        <h6>CLOUD COMPUTING</h6>

                        <h3 className='articlecardhead'  >Google Bard launches in EU, overcoming data privacy concerns in the region</h3>

                        <p >Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals at point of sale.</p>

                        <hr />
                        <Row>
                            <Col md='6' >
                                <Row className='tasksign' >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                                    <h5>Collaboration Tools </h5>
                                </Row>
                                <Row className='tasksign'  >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                                    <h5>Smart Reminders </h5>
                                </Row>

                            </Col>
                            <Col md='6' >
                                <Row className='tasksign'  >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                                    <h5>Requirement </h5>
                                </Row>
                                <Row className='tasksign'  >
                                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                                    <h5>Task Management </h5>
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>


            <div className='productivity'>
                <Row>
                    <Col md='6' className='productivitycard1'  >

                        <Col md='5' className='productivitycardtype' >
                            <div>
                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/feature-img-1.png" alt="" />
                            </div>
                            <div className='productivitycardtext'  >
                                <h1>Start your <br />
                                    project from <br />
                                    your pocket.</h1>
                            </div>
                        </Col>
                        <Col md='5' className='productivitycardtype' >
                            <div>
                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/feature-img-2.png" alt="" />
                            </div>
                            <div className='productivitycardtext'  >
                                <h1>Available on <br />
                                    all responsive <br />
                                    devices.</h1>
                            </div>
                        </Col>
                    </Col>



                    <Col md='6' className='fetureproductbox'>
                        <Row>
                            <Col >
                                <h6 className='inhow' >FEATURED PRODUCT</h6>
                                <h1 className='fetureproducthead'>Seamless productivity <br /> with our new app</h1>
                                <h4 className='fetureproductabout'  >Download Slack and experience a new era of organization <br /> and accomplishment.</h4>
                            </Col>
                        </Row>


                        <Row className='tasksign'>
                            <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                            <h5 style={{ color: 'white' }}>PPD Development </h5>
                        </Row>
                        <Row className='tasksign' >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                            <h5 style={{ color: 'white' }}>Easy to use  </h5>
                        </Row>

                        <Row className='productivitybutton'>
                            <Col md='3'>
                                <Link to='/contactus' ></Link> <Button className='productivitybtn' >Get  Started Now!</Button>
                            </Col>
                            <Col >
                                <Link to='/contactus' ><Button className='productivitybtn' >Learn More</Button></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Getintouch />
        </>
    )
}

export default Home

