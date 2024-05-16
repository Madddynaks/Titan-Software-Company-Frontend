import React,{useState,useEffect,useRef} from 'react'
import { Row,Col } from 'reactstrap';

import Narrow from '../Components/Common/Narrow'

export default function Portfolio() {
    



  return (
    <Narrow>
        <div className="mb-36 mt-24 max-xl:mt-3">
          <Row>
            <Col className="firstbtnsec ">
              <span className="abouta1">Our Projects</span>
            </Col>
          </Row>
          <Row
            className=''
            style={{ marginTop: "10px" }}
          >
            <Col>
              <p className="aboutheader1 max-xl:text-3xl font-semibold">
                We are doing world class {" "}
              </p>
              <p className="aboutheader1 max-xl:text-3xl font-semibold">
                {" "}
                projects in your way
              </p>

              <p className="aboutheader2 max-xl:px-3">
              Our projects are born from a passion for innovation that knows no bounds. We see challenges<br/> as opportunities to push the envelope and explore new frontiers.
              </p>
            </Col>
          </Row>
        </div>
      </Narrow>
  )
}
