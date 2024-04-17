import { React, useEffect } from 'react'
import { Container, Row, Col, Button, Card } from 'reactstrap'
import { Link } from 'react-router-dom'

import Slider from '../Components/Slider'
import Getintouch from '../Components/Getintouch'

function About() {
  useEffect(() => {

    window.scrollTo(0, 0);
  }, [])
  return (

    <>



      <Container>
        <Row >
          <Col className='firstbtnsec'>

            <span className='abouta1'>Company</span>

          </Col>
        </Row>

        <br /><br />
        <Row style={{ marginTop: '10px' }} >
          <Col>
            <p className='aboutheader1'>Our company provide a best </p>
            <p className='aboutheader1'> horizon tech solutions</p>

            <p className='aboutheader2' >Experience the transformative power of innovation and seamless solutions with <br /> dynamics. Our journey doesn't end with the delivery of a solution.</p>
          </Col>
        </Row>


        <Row className='aboutcardindex' >
          <Col md='3' >
            <Card className='aboutcard' >
              <h1>300+</h1>
              <h5>Projects</h5>
              <p>We are spread around the world.</p>
            </Card>
          </Col>
          <Col md='3' >
            <Card className='aboutcard' >
              <h1>100%</h1>
              <h5>Client Satisfaction</h5>
              <p>Our clients a happy with our service.</p>
            </Card>
          </Col>
          <Col md='3' >
            <Card className='aboutcard' >
              <h1 >300+</h1>
              <h5>Legal Customers
              </h5>
              <p>Our customers are from many countries.</p>
            </Card>
          </Col>
          <Col md='3' >
            <Card className='aboutcard' >
              <h1>2020</h1>
              <h5>We Established On</h5>
              <p>Our company have a great history.</p>
            </Card>
          </Col>
        </Row>
      </Container>


      <div className='sliderdiv' >
        <Slider />
      </div>





      <Container className='OURCOMPANY' >
        <p className='delinglogheading'>WHAT WE’RE OFFERING</p>

        <Row>
          <Col md='10' >
            <h1 style={{ fontSize: '45px' }} >Why our company is too popular?</h1>
          </Col>
          <Col>
            <Link to='/contactus' > <Button className='contactusbtnhome'>Contact Us</Button></Link>

          </Col>
        </Row>



        <Row>
          <Col style={{ marginTop: '50px' }} >
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/hero-company-about.jpg" alt="" className='ourpopulaityimage' />
            <p style={{ marginTop: '30px' }} >Our team is a collective force of top talents, pros, experts, and visionaries from diverse fields. With a passion for excellence, our professionals bring a wealth of experience and knowledge to every project. At Slack, we are committed to delivering nothing short of excellence. From concept to implementation, we maintain the highest standards of quality and craftsmanship, leaving no room for compromise.</p>
          </Col>
        </Row>
        <br />
        <Row className='whatweofferingbig' >
          <Col>
            <Row className='tasksign' >
              <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
              <h5>Managed Services and Products </h5>
            </Row>
          </Col>
          <Col>
            <Row className='tasksign' >
              <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
              <h5>Flexibility and Adaptability </h5>
            </Row>
          </Col>
          <Col>
            <Row className='tasksign' >
              <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
              <h5>Competitive Advantage </h5>
            </Row>
          </Col>
        </Row>
      </Container>




      <Container className='whatweareoffering'>
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




      <Container className='ourexpert1' >
        <p className='delinglogheading'>WHAT WE’RE OFFERING</p>
        <Row>
          <Col md='8' >
            <h1>Our professional experts</h1>
            <p>Our team is a collective force of top talents, experts, and <br />
              visionaries from diverse fields.</p>
          </Col>
          <Col md='4'>
            <Link to='/contactus' ><Button className='bookappwexp' >Book an appointment with our expert now</Button></Link>

          </Col>
        </Row>
      </Container>






      <Container>
        <Row className='ourexpertrow' >
          <Col className='ourexpert' >
            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/1710233260227.jpg?updatedAt=1712234410396" alt="" className='ourexpertimg' />
            <h5>Priyanka Tiwari</h5>
            <h6>Director</h6>
            <Card className='contactlogocard'>
              <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-linked-in.svg?updatedAt=1711952300908" alt="" className='contactlogo' />
              <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-facebook%20(1).svg?updatedAt=1711952309727" alt="" className='contactlogo' />
              <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-instagram.svg?updatedAt=1711952319421" alt="" className='contactlogo' />
            </Card>
          </Col>

          <Col className='ourexpert' >
            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/Screenshot%202024-04-04%20180748.png?updatedAt=1712234288002" alt="" className='ourexpertimg' />
            <h5>Amit Tiwari</h5>
            <h6>Managing Director</h6>
            <Card className='contactlogocard'>
              <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-linked-in.svg?updatedAt=1711952300908" alt="" className='contactlogo' />
              <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-facebook%20(1).svg?updatedAt=1711952309727" alt="" className='contactlogo' />
              <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-instagram.svg?updatedAt=1711952319421" alt="" className='contactlogo' />
            </Card>
          </Col>

          <Col className='ourexpert' >
            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/Screenshot%202024-04-04%20180334.png?updatedAt=1712234050478" alt="" className='ourexpertimg' />
            <h5>Vidhu Sekhar</h5>
            <h6>Senior  Software Developer</h6>
            <Card className='contactlogocard'>
              <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-linked-in.svg?updatedAt=1711952300908" alt="" className='contactlogo' />
              <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-facebook%20(1).svg?updatedAt=1711952309727" alt="" className='contactlogo' />
              <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-instagram.svg?updatedAt=1711952319421" alt="" className='contactlogo' />
            </Card>
          </Col>

          <Col className='ourexpert' >
            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/1708491155284.jpg?updatedAt=1712234171080" alt="" className='ourexpertimg' />
            <h5>Gaurav Jha </h5>
            <h6>Software Developer</h6>
            <Card className='contactlogocard'>
              <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-linked-in.svg?updatedAt=1711952300908" alt="" className='contactlogo' />
              <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-facebook%20(1).svg?updatedAt=1711952309727" alt="" className='contactlogo' />
              <img src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-instagram.svg?updatedAt=1711952319421" alt="" className='contactlogo' />
            </Card>
          </Col>

        </Row>
      </Container>


      <div className='whybetter' >
        <Container>
          <Row>
            <Col md='6' className='whybetterimg' >
              <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-3.png" alt="" className='bettertanother' />
            </Col>
            <Col md='6' className='whybettertext' >
              <h1>Why our services are
                better than others?</h1>
              <h5>We don't believe in a one-size-fit-all approach. Our services are carefully customized to suit your specific need, ensuring you to achieve your goals.</h5>
              <h5>We believe in delivering value that extends your beyond the immediate project. Our services are designed to provide a long-term benefits.</h5>

              <Row>
                <Col style={{ display: 'flex', gap: '65px' }} >
                  <Row className='tasksign' >
                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                    <h5>PPD Development </h5>
                  </Row>


                  <Row className='tasksign' >
                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                    <h5>Quick Response </h5>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className='assitance'>

        <Row>
          <Col className='assistanceimg'>
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-4.png" alt="" />
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-3.png" alt="" />
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-2.png" alt="" />
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-1.png" alt="" />
          </Col>
        </Row>

        <Row>
          <Col className='assitanttext'>
            <h1>Need any further assitance?</h1>
            <h3>Feel free to reach out for any inquiries or assistance.</h3>
            <Link to='/contactus'><Button className='bookappoinmentnow'> Book an appointment now</Button></Link>
          </Col>
        </Row>

      </Container>

      <Getintouch />
    </>

  )
}

export default About
