import React from 'react'
import { Container, Row, Col, Button, Card } from 'reactstrap'
import Getintouch from './Getintouch'
function Contactus() {
    return (
        <>
            <Container>
                <Row>
                    <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '90px' }} >

                        <span className='hwd1btn'>Contact us</span>
                        <p className='contactpara1' >We are always open to talk</p>
                        <p className='contactpara2' >We have offices and teams all around the world</p>
                    </Col>
                </Row>

            </Container>

            <Container>
                <Row>
                    <Col md='6' >
                        <Card className='contypecard' >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-support-50.png?updatedAt=1712128888299" alt="" style={{ height: '60px', width: '60px' }} />
                            <h1>Support</h1>
                            <h5>Contact our fast support team</h5>
                            <a href=""><h6>infopanacee@gmail.com</h6></a>
                        </Card>
                    </Col>
                    <Col md='6'>
                        <Card className='contypecard' >
                            <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-phone-50.png?updatedAt=1712129594658" alt="" style={{ height: '60px', width: '60px' }} />
                            <h1>Phone</h1>
                            <h5>Mon-Fri from 9am to 6pm.</h5>
                            <a href=""><h6>95682 35684</h6></a>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Getintouch />
        </>
    )
}

export default Contactus
