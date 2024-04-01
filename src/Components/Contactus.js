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
            <Getintouch />
        </>
    )
}

export default Contactus
