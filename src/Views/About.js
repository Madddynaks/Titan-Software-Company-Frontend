import React from 'react'
import { Container, Row, Col, Button, Card } from 'reactstrap'
import IndexNavbar from '../Components/IndexNavbar'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'
import Getintouch from '../Components/Getintouch'

function About() {
  return (

    <>

      <IndexNavbar />

      <Container>
        <Row >
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <Button className='letstalkbtnhome'>Let's Talk </Button>

          </Col>
        </Row>

        <br /><br />
        <Row style={{ marginTop: '10px' }} >
          <Col>
            <p className='aboutheader1'>Our company provide a best <br /> horizon tech solutions</p>

            <p className='aboutheader2' >Experience the transformative power of innovation and seamless solutions with <br /> dynamics. Our journey doesn't end with the delivery of a solution.</p>
          </Col>
        </Row>


        <Row className='aboutcardindex' >
          <Col md='3' >
            <Card className='aboutcard' >
              <h1>300+</h1>
              <h4>Projects</h4>
              <p>We are spread around the world.</p>
            </Card>
          </Col>
          <Col md='3' >
            <Card className='aboutcard' >
              <h1>100%</h1>
              <h4>Client Satisfaction</h4>
              <p>Our clients a happy with our service.</p>
            </Card>
          </Col>
          <Col md='3' >
            <Card className='aboutcard' >
              <h1>300+</h1>
              <h4>Legal Customers
              </h4>
              <p>Our customers are from many countries.</p>
            </Card>
          </Col>
          <Col md='3' >
            <Card className='aboutcard' >
              <h1>1995</h1>
              <h4>We Established On</h4>
              <p>Our company have a great history.</p>
            </Card>
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: '50px' }}>
        <Slider />
      </div>





      <Container className='OURCOMPANY' >
        <p className='delinglogheading'>WHAT WE’RE OFFERING</p>

        <Row>
          <Col md='10' >
            <h1 style={{ fontSize: '45px' }} >Why our company is too popular?</h1>
          </Col>
          <Col>
            <Button className='contactusbtnhome'>Contact Us</Button>
          </Col>
        </Row>



        <Row>
          <Col style={{ marginTop: '50px' }} >
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/hero-company-about.jpg" alt="" />
            <p style={{ marginTop: '30px' }} >Our team is a collective force of top talents, pros, experts, and visionaries from diverse fields. With a passion for excellence, our professionals bring a wealth of experience and knowledge to every project. At Slack, we are committed to delivering nothing short of excellence. From concept to implementation, we maintain the highest standards of quality and craftsmanship, leaving no room for compromise.</p>
          </Col>
        </Row>


        <br />
        <Row>
          <Col md='4' >
            <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
              <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" style={{ width: 50, height: 28 }} />
              <h5>PPD Development </h5>
            </Row>
          </Col>
          <Col md='4' >
            <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
              <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" style={{ width: 50, height: 28 }} />
              <h5>PPD Development </h5>
            </Row>
          </Col>
          <Col md='4' >
            <Row style={{ display: 'flex', flexFlow: 'row', marginTop: '35px' }} >
              <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" style={{ width: 50, height: 28 }} />
              <h5>PPD Development </h5>
            </Row>
          </Col>
        </Row>



      </Container>




      <Container style={{ marginTop: '120px' }} >
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

      <Container>
        <p className='delinglogheading'>WHAT WE’RE OFFERING</p>
        <Row>
          <Col md='9' >
            <h1>Our professional experts</h1>
            <p>Our team is a collective force of top talents, experts, and <br />
              visionaries from diverse fields.</p>
          </Col>
          <Col md='3'>
            <Button>Book an appointment with our expert now</Button>

          </Col>
        </Row>

      </Container>






      <Getintouch />
      <Footer />
    </>

  )
}

export default About
