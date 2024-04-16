import React from 'react'
import { Container, Row, Col, Button, Card } from 'reactstrap'
import { Link } from 'react-router-dom'
import Getintouch from '../Components/Getintouch'
function Impact() {
  return (
    <>
      <div className='hwd1'>
        <Container >
          <Row >
            <Col style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
              <span className='hwd1btn'>Overview</span>
            </Col>
          </Row>
          <br /><br />
          <Row style={{ marginTop: '10px' }} >
            <Col>
              <p className='aboutheader1 hwd'>Overview of our company
                journey of impact</p>

              <p className='aboutheader2' >Innovation is at the heart of our identity. We embrace emerging technologies,
                foster a culture of creativity.</p>


            </Col>
          </Row>

        </Container>
      </div>



      <Container className='Introduction' >



        <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/hero-overview-about.jpg" alt="" />

        <p>Our team is a collective force of top talents, pros, experts, and visionaries from diverse fields. With a passion for excellence, our professionals bring a
          wealth of experience and knowledge to every project. At Slack, we are committed to delivering nothing short of excellence. From concept to implementation, we maintain
          the highest standards of quality and craftsmanship, leaving no room for compromise.</p>



        <Row className='ourteamcheck'  >
          <Col>
            <Row className='tasksign' >
              <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
              <h5>Managed Services and Products </h5>
            </Row>

          </Col>
          <Col style={{ display: 'flex', }} >
            <Row className='tasksign' >
              <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
              <h5>Flexibility and Adaptability </h5>
            </Row>

          </Col>
          <Col style={{ display: 'flex', }} >
            <Row className='tasksign' >
              <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
              <h5>Competitive Advantage </h5>
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

      <Container className='professionalservicescontainer' style={{ paddingBottom: '50px' }} >
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



      <Container className='professionalservicescontainer' style={{ marginTop: '0px', paddingTop: '0px', paddingBottom: '50px' }} >
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


      <div className='whybetter' >

        <Container>
          <Row>


            <Col md='6' className='whybettertext' >

              <h1>We’re best in all fields</h1>
              <h5>At Panacee, we are more than just a company, we are a catalyst for growth.</h5>
              <h5>Our journey is guided by a clear vision - to be at the forefront of transformative solutions that shape industries and enrich lives.
                This vision is deeply rooted in our core values: excellence, innovation, integrity, and collaboration.</h5>
              <h5>Excellence is the hallmark of everything we do. From delivering cutting-edge technologies to providing unparalleled services,
                we are relentless in our pursuit of perfection. Our commitment to excellence drives us.</h5>
              <Row>
                <Col style={{ display: 'flex', gap: '65px' }} >

                  <Row className='tasksign' >
                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                    <h5>Collaboration Tools </h5>
                  </Row>
                  <Row className='tasksign' >
                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                    <h5>Smart Reminders
                    </h5>
                  </Row>
                </Col>
                <Col style={{ display: 'flex', gap: '65px' }} >
                  <Row className='tasksign' >
                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                    <h5>Task Management </h5>
                  </Row>
                  <Row className='tasksign' >
                    <img src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962" alt="" className='righticonimagesize' />
                    <h5>Requirement</h5>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md='6' className='whybetterimg' >
              <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-6.jpg" alt="" style={{ borderRadius: '10px' }} />
            </Col>
          </Row>
        </Container>

      </div>


      <Container className='leadingmemberbox' >
        <p className='delinglogheading'>LEADERSHIP</p>
        <Row>
          <Col md='10' >
            <h1 className='membername'>Our Company Leading Members</h1>
          </Col>

        </Row>
        <h4>Are you busy putting out IT fires instead of focusing on your core business

        </h4>

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





      <Container className='assitance' >
        <Row>
          <Col className='assistanceimg'>
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-4.png" alt="" />
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-3.png" alt="" />
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-2.png" alt="" />
            <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-1.png" alt="" />
          </Col>
        </Row>
        <Row>
          <Col className='assitanttext' >
            <h1>Need any further assitance?</h1>
            <h3>Feel free to reach out for any inquiries or assistance.</h3>
            <Link to='/contactus'><Button className='bookappoinmentnow'  > Book an appointment now</Button></Link>

          </Col>
        </Row>
      </Container>
      <Getintouch />



    </>
  )
}

export default Impact
