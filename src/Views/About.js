import { React, useEffect,useState,useRef } from "react";
import { Container, Row, Col, Button, Card } from "reactstrap";
import { Link } from "react-router-dom";

import Slider from "../Components/Slider";
import Getintouch from "../Components/Getintouch";
import Narrow from "../Components/Common/Narrow";

function About() {
  // useEffect(() => {

  //   window.scrollTo(0, 0);
  // }, [])

  useEffect(() => {
    const elements = document.querySelectorAll(".professionalservicescard");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  useEffect(() => {
    const elements = document.querySelectorAll(".aboutheader1");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".about");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Narrow>
        <div className="mb-36 mt-24 max-xl:mt-3">
          <Row>
            <Col className="firstbtnsec ">
              <span className="abouta1">Company</span>
            </Col>
          </Row>
          <Row
            className={`header ${isVisible ? "fade-in" : ""}`}
            style={{ marginTop: "10px" }}
          >
            <Col>
              <p className="aboutheader1 max-xl:text-3xl font-semibold">
                Our company provide a best{" "}
              </p>
              <p className="aboutheader1 max-xl:text-3xl font-semibold">
                {" "}
                horizon tech solutions
              </p>

              <p className="aboutheader2 max-xl:px-3">
                Experience the transformative power of innovation and seamless
                solutions with <br /> dynamics. Our journey doesn't end with the
                delivery of a solution.
              </p>
            </Col>
          </Row>

          <div ref={sectionRef}
      className={`about mt-5 grid grid-cols-4 max-xl:grid-cols-1 gap-5 max-xl:p-3 ${isVisible ? 'fade-in' : ''}`}>
            <div>
              <Card className="aboutcard h-full max-xl:p-3">
                <h1 className="text-4xl font-bold">300+</h1>
                <h5 className="text-2xl font-semibold">Projects</h5>
                <p className="text-xl">We are spread around the world.</p>
              </Card>
            </div>
            <div>
              <Card className="aboutcard h-full max-xl:p-3">
                <h1 className="text-4xl font-bold">100%</h1>
                <h5 className="text-2xl font-semibold">Client Satisfaction</h5>
                <p className="text-xl">Our clients a happy with our service.</p>
              </Card>
            </div>
            <div>
              <Card className="aboutcard h-full max-xl:p-3">
                <h1 className="text-4xl font-bold">300+</h1>
                <h5 className="text-2xl font-semibold">Legal Customers</h5>
                <p className="text-xl">
                  Our customers are from many countries.
                </p>
              </Card>
            </div>
            <div>
              <Card className="aboutcard h-full max-xl:p-3">
                <h1 className="text-4xl font-bold">2020</h1>
                <h5 className="text-2xl font-semibold">We Established On</h5>
                <p className="text-xl">Our company have a great history.</p>
              </Card>
            </div>
          </div>
        </div>
      </Narrow>

      <div className="sliderdiv mb-32">
        <Slider />
      </div>

      <div className="bg-[#F3F6FD]">
        <Narrow>
          <div className="OURCOMPANY py-5 px-3">
            <p className="delinglogheading">WHAT WE’RE OFFERING</p>
            <div className="flex justify-between max-md:flex-col">
              <div className="w-9/12">
                <h1 style={{ fontSize: "45px" }} className=" font-semibold">
                  Why our company is too popular?
                </h1>
                <h5 style={{ marginTop: "20px" }} className="text-lg">
                  Contact us today to begin your journey!
                </h5>
              </div>
              <div className="flex justify-end w-3/12 max-md:w-full max-md:justify-start max-md:my-3">
                <Link to="/contactus">
                  {" "}
                  <Button className=" bg-[#1351d8] py-3 px-7 rounded-full text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <Row>
              <Col className="my-2">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/hero-company-about.jpg"
                  alt=""
                  className="ourpopulaityimage"
                />
                <p style={{ marginTop: "30px" }}>
                  Our team is a collective force of top talents, pros, experts,
                  and visionaries from diverse fields. With a passion for
                  excellence, our professionals bring a wealth of experience and
                  knowledge to every project. At Slack, we are committed to
                  delivering nothing short of excellence. From concept to
                  implementation, we maintain the highest standards of quality
                  and craftsmanship, leaving no room for compromise.
                </p>
              </Col>
            </Row>
            <br />
            <div className="grid grid-cols-3 gap-2 max-md:grid-cols-1">
              <div className="flex items-center">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=" w-1/12"
                />
                <h5 className="pl-2">Managed Services and Products </h5>
              </div>
              <div className="flex items-center">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=" w-1/12"
                />
                <h5 className="pl-2">Flexibility and Adaptability </h5>
              </div>
              <div className="flex items-center">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=" w-1/12"
                />
                <h5 className="pl-2">Competitive Advantage </h5>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <div className="bg-black py-3 mt-28">
        <Narrow>
          <div className="whatweareoffering mt-32 max-xl:mt-5 max-xl:px-3">
            <Row>
              <Col md="6">
                <p className="delinglogheading">WHAT WE’RE OFFERING</p>
                <h1 className="delingheading text-white">
                  Dealing in all professional <br />
                  IT services.
                </h1>
              </Col>
              <Col md="6">
                <h6 className="delingcontent text-white">
                  One fundamental aspect of IT services is infrastructure
                  management. This involves the design, implementation, and
                  maintenance of the hardware, software, networks, and servers.
                </h6>
              </Col>
            </Row>
          </div>
        </Narrow>
      </div>

      <div className="bg-black py-14 max-xl:py-2">
        <Narrow>
          <div className="professionalservicescontainer pb-32 max-xl:pb-0">
            <div className="professionalservicesrow justify-between w-full max-xl:p-3 flex max-xl:flex-col max-xl:gap-3">
              <div sm="1" md="2">
                <Card className="professionalservicescard">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg"
                    alt=""
                    className="services5"
                  />
                  <div className="text-xl font-bold">Development</div>
                  <p>Our development is pixel perfect in all ways.</p>
                </Card>
              </div>
              <div sm="1" md="2">
                <div className="professionalservicescard bg-white">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-2-2.svg"
                    alt=""
                    className="services5"
                  />
                  <div className="text-xl font-bold">Woo Commerce</div>
                  <p>Our development is pixel perfect in all ways.</p>
                </div>
              </div>
              <div sm="1" md="2">
                <Card className="professionalservicescard">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-3-2.svg"
                    alt=""
                    className="services5"
                  />
                  <div className="text-xl font-bold">CRM Solutions</div>
                  <p>Our development is pixel perfect in all ways.</p>
                </Card>
              </div>
              <div sm="1" md="2">
                <Card className="professionalservicescard">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-4-2.svg"
                    alt=""
                    className="services5"
                  />
                  <div className="text-xl font-bold">Web Design</div>
                  <p>Our development is pixel perfect in all ways.</p>
                </Card>
              </div>
              <div sm="1" md="2">
                <Card className="professionalservicescard">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-5-2.svg"
                    alt=""
                    className="services5"
                  />
                  <div className="text-xl font-bold">IT Support</div>
                  <p>Our development is pixel perfect in all ways.</p>
                </Card>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Narrow>
        <div className="ourexpert1 p-28 max-xl:p-3  max-xl:py-20 mt-32 max-xl:mt-0">
          <div className="flex max-xl:flex-col max-xl:text-center max-xl:mx-auto">
            <div className="w-2/3 max-xl:w-full">
              <p className="delinglogheading">WHAT WE’RE OFFERING</p>
              <h1 className="text-5xl font-bold mt-3">
                Our professional experts
              </h1>
              <p className="text-xl mt-3">
                Our team is a collective force of top talents, experts, and{" "}
                <br />
                visionaries from diverse fields.
              </p>
            </div>
            <div className="max-xl: mt-5">
              <Link to="/contactus">
                <Button className="bookappwexp bg-blue-600 hover:bg-black font-semibold">
                  Book an appointment with our expert now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Narrow>

      <Narrow>
        <div className="team mb-32">
          <Row className="ourexpertrow mt-3">
            <Col className="ourexpert">
              <img
                src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/1710233260227.jpg?updatedAt=1712234410396"
                alt=""
                className="ourexpertimg"
              />
              <h5 className="text-2xl font-bold">Priyanka Tiwari</h5>
              <h6 className="text-xl text-blue-600">Director</h6>
              <Card className="contactlogocard">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-linked-in.svg?updatedAt=1711952300908"
                  alt=""
                  className="contactlogo"
                />
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-facebook%20(1).svg?updatedAt=1711952309727"
                  alt=""
                  className="contactlogo"
                />
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-instagram.svg?updatedAt=1711952319421"
                  alt=""
                  className="contactlogo"
                />
              </Card>
            </Col>

            <Col className="ourexpert">
              <img
                src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/Screenshot%202024-04-04%20180748.png?updatedAt=1712234288002"
                alt=""
                className="ourexpertimg"
              />
              <h5 className="text-2xl font-bold">Amit Tiwari</h5>
              <h6 className="text-xl text-blue-600">Managing Director</h6>
              <Card className="contactlogocard">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-linked-in.svg?updatedAt=1711952300908"
                  alt=""
                  className="contactlogo"
                />
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-facebook%20(1).svg?updatedAt=1711952309727"
                  alt=""
                  className="contactlogo"
                />
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-instagram.svg?updatedAt=1711952319421"
                  alt=""
                  className="contactlogo"
                />
              </Card>
            </Col>

            <Col className="ourexpert">
              <img
                src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/Screenshot%202024-04-04%20180334.png?updatedAt=1712234050478"
                alt=""
                className="ourexpertimg"
              />
              <h5 className="text-2xl font-bold">Vidhu Sekhar</h5>
              <h6 className="text-xl text-blue-600">
                Senior Software Developer
              </h6>
              <Card className="contactlogocard">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-linked-in.svg?updatedAt=1711952300908"
                  alt=""
                  className="contactlogo"
                />
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-facebook%20(1).svg?updatedAt=1711952309727"
                  alt=""
                  className="contactlogo"
                />
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-instagram.svg?updatedAt=1711952319421"
                  alt=""
                  className="contactlogo"
                />
              </Card>
            </Col>

            <Col className="ourexpert">
              <img
                src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/1708491155284.jpg?updatedAt=1712234171080"
                alt=""
                className="ourexpertimg"
              />
              <h5 className="text-3xl font-bold">Gaurav Jha </h5>
              <h6 className="text-xl text-blue-600">Software Developer</h6>
              <Card className="contactlogocard">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-linked-in.svg?updatedAt=1711952300908"
                  alt=""
                  className="contactlogo"
                />
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-facebook%20(1).svg?updatedAt=1711952309727"
                  alt=""
                  className="contactlogo"
                />
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-instagram.svg?updatedAt=1711952319421"
                  alt=""
                  className="contactlogo"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Narrow>

      <div className="whybetter py-36 max-xl:p-3">
        <Narrow>
          <div>
            <div className="flex max-xl:flex-col">
              <div className="whybetterimg w-1/2 max-xl:w-full">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-3.png"
                  alt=""
                  className="bettertanother h-full"
                />
              </div>
              <div className="whybettertext w-1/2 max-xl:w-full">
                <h1 className="text-5xl font-bold">
                  Why our services are better than others?
                </h1>
                <h5 className="text-xl text-gray-200">
                  We don't believe in a one-size-fit-all approach. Our services
                  are carefully customized to suit your specific need, ensuring
                  you to achieve your goals.
                </h5>
                <h5 className="text-xl text-gray-200">
                  We believe in delivering value that extends your beyond the
                  immediate project. Our services are designed to provide a
                  long-term benefits.
                </h5>

                <div>
                  <div className="flex max-xl:flex-col gap-10">
                    <div className="tasksign">
                      <img
                        src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                        alt=""
                        className="righticonimagesize w-10"
                      />
                      <h5 className="text-xl my-auto text-gray-200">
                        PPD Development{" "}
                      </h5>
                    </div>

                    <div className="tasksign">
                      <img
                        src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                        alt=""
                        className="righticonimagesize w-10"
                      />
                      <h5 className="text-xl my-auto text-gray-200">
                        Quick Response{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Narrow>
        <div className="assitance py-28 mb-32">
          <Row>
            <Col className="assistanceimg">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-4.png"
                alt=""
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-3.png"
                alt=""
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-2.png"
                alt=""
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-1.png"
                alt=""
              />
            </Col>
          </Row>

          <div>
            <div className="assitanttext w-9/12 mx-auto text-center">
              <h1 className="text-4xl font-bold ">
                Need any further assitance?
              </h1>
              <h3 className="text-2xl text-gray-200  ">
                Feel free to reach out for any inquiries or assistance.
              </h3>
              <Link to="/contactus">
                <Button className="bookappoinmentnow">
                  Book an appointment now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Narrow>

      <Getintouch />
    </>
  );
}

export default About;