import React, { useState, useEffect, useRef } from 'react'
import { Row, Col } from 'reactstrap';

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
                            Our projects are born from a passion for innovation that knows no bounds. We see challenges<br /> as opportunities to push the envelope and explore new frontiers.
                        </p>
                    </Col>
                </Row>
            </div>


            <div className='grid grid-cols-4 gap-4'>
                <div>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png')] bg-cover bg-center rounded-xl p-4 text-2xl text-white" style={{ minHeight: '500px' }}>
                        <div className='w-2/3'>E-commerce platform development.</div>
                    </div>
                    <div>More content</div>
                </div>

                <div>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-2.png')] bg-cover bg-center rounded-xl p-4 text-2xl " style={{ minHeight: '500px' }}>
                        <div className='w-2/3'>Electronic brand marketing.</div>
                        
                    </div>
                    <div>More content</div>
                </div>
                <div>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/01/project-3.jpg')] bg-cover bg-center rounded-xl p-4 text-2xl " style={{ minHeight: '500px' }}>
                        <div className='w-2/3'>Mobile app development in ios.</div>
                    </div>
                        <div>More content</div>
                </div>
                <div>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-4.png')] bg-cover bg-center rounded-xl p-4 text-2xl text-white" style={{ minHeight: '500px' }}>
                        <div className='w-2/3'>Get into a virtual reality world.</div>
                    </div>
                        <div>More content</div>
                </div>

            </div>
        </Narrow>
    )
}
