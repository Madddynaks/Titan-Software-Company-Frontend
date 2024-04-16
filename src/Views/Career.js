import React from 'react'
import { Container, Row, Col, Button, Card } from 'reactstrap'
function Career() {
    return (
        <>
            <div className='hwd1'>
                <Container >
                    <Row >
                        <Col className='firstbtnsec'>
                            <span className='hwd1btn'>Career</span>
                        </Col>
                    </Row>

                    <br /><br />
                    <Row style={{ marginTop: '10px' }} >
                        <Col>
                            <p className='aboutheader1 hwd'>You have great opportunities</p>
                            <p className='aboutheader2'>If you are a talented and ambitious individual looking to make a mark in your career, we invite you to explore our career opportunities.</p>
                        </Col>
                    </Row>

                    <Row >
                        <Col className='buttonwidth' >
                            <Button className='bookappoinmentnow'> Book an appointment now</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className='Introduction' >



                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/hero-career-about.jpg" alt="" />

                <p>Our team is a collective force of top talents, pros, experts, and visionaries from diverse fields. With a passion for excellence, our professionals bring a
                    wealth of experience and knowledge to every project. At Slack, we are committed to delivering nothing short of excellence. From concept to implementation, we maintain
                    the highest standards of quality and craftsmanship, leaving no room for compromise.</p>



                <Row className='grateofferbox'  >
                    <Col>
                        <Row className='tasksign' >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                            <h5>Managed Services and Products </h5>
                        </Row>
                    </Col>
                    <Col  >
                        <Row className='tasksign' >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                            <h5>Flexibility and Adaptability </h5>
                        </Row>
                    </Col>
                    <Col  >
                        <Row className='tasksign' >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                            <h5>Competitive Advantage </h5>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className='professionalservicescontainer'  >
                <Row className='professionalservicesrow' >
                    <Col md='2' >
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg" alt="" className='services5' />
                            <h4>Development</h4>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                    <Col md='2'>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-2-2.svg" alt="" className='services5' />
                            <h4>Woo Commerce</h4>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                    <Col md='2'>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-3-2.svg" alt="" className='services5' />
                            <h4>CRM Solutions</h4>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                    <Col md='2'>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-4-2.svg" alt="" className='services5' />
                            <h4>Web Design</h4>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                    <Col md='2'>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-5-2.svg" alt="" className='services5' />
                            <h4>IT Support</h4>
                            <p>Our development is pixel perfect in all ways.</p>
                        </Card>
                    </Col>
                </Row>
            </Container>



            <Container className='professionalservicescontainer'  >
                <Row className='professionalservicesrow' >
                    <Col md='2' >
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg" alt="" className='services5' />
                            <h4>Cloud Services</h4>
                            <p>we can provide all around the world.</p>
                        </Card>
                    </Col>
                    <Col md='2'>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-2-2.svg" alt="" className='services5' />
                            <h4>Network Security</h4>
                            <p>We have a best team for your shopping websites.</p>
                        </Card>
                    </Col>
                    <Col md='2'>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-3-2.svg" alt="" className='services5' />
                            <h4>Monitoring</h4>
                            <p>We enhance customer experiences for success.</p>
                        </Card>
                    </Col>
                    <Col md='2'>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-4-2.svg" alt="" className='services5' />
                            <h4>Email Services</h4>
                            <p>We create vibrant, intuitive and minimalist web</p>
                        </Card>
                    </Col>
                    <Col md='2'>
                        <Card className='professionalservicescard' >
                            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-5-2.svg" alt="" className='services5' />
                            <h4>Hardware Services</h4>
                            <p>We offers expert assistance for your IT issues.</p>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Career
