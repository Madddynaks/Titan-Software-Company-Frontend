import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useState } from "react";
import Narrow from "./Common/Narrow";
function Getintouch() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending data to a server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
      message: "",
    });
  };
  return (
    <>
      <Narrow>
        <div className="getintouch">
          <Row>
            <Col md="6" className="getintouch1 p-20 max-xl:p-10">
              <p style={{ color: "#1351d8", letterSpacing: "5px" }}>CONTACT</p>
              <h1 className="text-4xl font-bold">Lets get in touch</h1>
              <h5 style={{ marginTop: "30px" }}>
                You can reach us anytime via
                <a style={{ color: "blue" }} href="/">
                  {" "}
                  infopanacee@gmail.com
                </a>
              </h5>
              <div className=" mt-5">
                <form onSubmit={handleSubmit} className=" rounded mb-4">
                  <div className="flex justify-between">
                    <div style={{ width: "48%" }} className="mb-4">
                      <label
                        className="block text-gray-700 font-semibold text-sm mb-2"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className=" appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ width: "48%" }} className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-semibold mb-2"
                        htmlFor="firstName"
                      >
                        Last Name
                      </label>
                      <input
                        className=" appearance-none border rounded w-full py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-semibold mb-2"
                      htmlFor="firstName"
                    >
                      Email
                    </label>
                    <input
                      className=" appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex justify-between">
                    <div style={{width:"48%"}} className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-semibold mb-2"
                        htmlFor="firstName"
                      >
                        Phone Number
                      </label>
                      <input
                        className=" appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phoneNumber"
                        name="phoneNumber"
                        type="number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{width:"48%"}} className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-semibold mb-2"
                        htmlFor="firstName"
                      >
                        Country
                      </label>
                      <input
                        className=" appearance-none border rounded w-full py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-semibold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="">
                    <button
                      className="bg-blue-700 w-full hover:bg-black text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </Col>
            <Col md="3">
              <div className="exprience p-10 max-xl:p-0">
                <Row className="expeince1con">
                  <div style={{ display: "flex" }}>
                    <span className="years22">5+</span>
                    <span style={{ marginTop: "15px", marginLeft: "10px" }}>
                      Years
                    </span>
                  </div>
                  <p className="inhow">filed exprience</p>
                  <hr />
                </Row>

                <Row className="expeince1con">
                  <div style={{ display: "flex" }}>
                    <span className="years22">100+</span>
                    <span style={{ marginTop: "15px", marginLeft: "10px" }}>
                      Projects
                    </span>
                  </div>
                  <p className="inhow">Done Around World</p>
                  <hr />
                </Row>

                <Row className="expeince1con">
                  <div style={{ display: "flex" }}>
                    <span className="years22">99%</span>
                    <span
                      style={{ marginTop: "15px", marginLeft: "10px" }}
                    ></span>
                  </div>
                  <p className="inhow">Client Satisfaction </p>
                  <hr />
                </Row>

                <Row className="expeince1con">
                  <div style={{ display: "flex" }}>
                    <span className="years22">2020</span>
                    <span style={{ marginTop: "15px", marginLeft: "10px" }}>
                      Years{" "}
                    </span>
                  </div>
                  <p className="inhow">Established On</p>
                  <hr />
                </Row>
                <Row className="expeince1con" style={{ borderBottom: "none" }}>
                  <div style={{ display: "flex" }}>
                    <span className="years22">2</span>
                    <span style={{ marginTop: "15px", marginLeft: "10px" }}>
                      Mins{" "}
                    </span>
                  </div>
                  <p className="inhow"> Response Time</p>
                </Row>
              </div>
            </Col>
            <Col md="3">
              <div className="contactcard p-20 max-xl:p-10">
                <Row>
                  <Col
                    style={{
                      justifyContent: "left",
                    }}
                  >
                    <Row style={{ marginTop: "10px" }}>
                      <img
                        src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/support-icon.svg"
                        alt=""
                        className="thirdcolicon"
                        style={{ width: 78 }}
                      />
                    </Row>
                    <h4>Contact info</h4>
                    <p style={{ marginBottom: "4px" }}>96509 00190</p>
                    <p style={{ margin: "0px" }}>infopanacee@gmail.com</p>
                    <br />
                    <Row style={{ marginTop: "30px" }}>
                      {" "}
                      <br />
                      <hr />
                    </Row>
                    <Row style={{ marginTop: "30px" }}>
                      <img
                        src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/map-icon.svg"
                        alt=""
                        className="thirdcolicon"
                        style={{ width: 78 }}
                      />
                    </Row>
                    <h4>Visit our office</h4>
                    <Row style={{ marginLeft: "3px" }}>
                      246, Block-C4F, Janakpuri, Delhi-110058.{" "}
                    </Row>
                    <Row style={{ marginTop: "50px" }}>
                      <hr />
                    </Row>
                    <Row
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "27px",
                        marginTop: "39px",
                      }}
                    >
                      <Col style={{ display: "flex", marginLeft: "2px" }}>
                        <img
                          src="https://www.svgrepo.com/show/77510/football.svg"
                          alt=""
                          style={{
                            width: 20,
                            height: 25,
                            objectFit: "contain",
                          }}
                        />
                        <p style={{ marginLeft: "10px" }}>Dubblin</p>
                      </Col>
                      <Row>
                        <Col style={{ display: "flex" }}>
                          <img
                            src="https://ik.imagekit.io/2q7cgnqzi/icon/twitter.svg?updatedAt=1711439397169"
                            alt=""
                            style={{ width: 25, height: 25 }}
                          />
                          <p style={{ marginLeft: "10px" }}>Twitter</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ display: "flex" }}>
                          <img
                            src="https://ik.imagekit.io/2q7cgnqzi/icon/instagram.svg?updatedAt=1711439653309"
                            alt=""
                            style={{ width: 25, height: 25 }}
                          />
                          <p style={{ marginLeft: "10px" }}>Instagram</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ display: "flex" }}>
                          <img
                            src="https://ik.imagekit.io/2q7cgnqzi/icon/linkedin.svg?updatedAt=1711439762894"
                            alt=""
                            style={{ width: 18, height: 18 }}
                          />
                          <p style={{ marginLeft: "10px" }}>Instagram</p>
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Narrow>
    </>
  );
}

export default Getintouch;
