import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Narrow from './Common/Narrow';
import { Row, Col } from 'reactstrap';
import { RotateLeft } from '@mui/icons-material';
function IndexNavbar() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [Port, setPort] = useState(false);
    const [Serv, setServ] = useState(false);
    const [PortMobile, setPortMobile] = useState(false);
    const [ServMobile, setServMobile] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
        setServMobile(false);
        setPortMobile(false);
    };
    const displayPortfolio = () => {
        setPort(!Port);
        setServ(false);
    }
    const displayServ = () => {
        setServ(!Serv);
        setPort(false);
    }
    const displayPortfolioMobile = () => {
        setPortMobile(!PortMobile);
        setServMobile(false);
    }
    const displayServMobile = () => {
        setServMobile(!ServMobile);
        setPortMobile(false);
    }
    return (
        <>
            <div style={{ backgroundColor: "black", padding: "0.5rem 0rem", maxHeight: "65px" }}>
                <Narrow>
                    <div style={{ height: "3rem", color: "white", display: "flex", alignItems: 'center', justifyContent: "space-between", }} className='px-2 max-md:text-sm'>
                        <span>Panacee Software Company</span>
                        <span>Janakpuri South </span>
                    </div>
                </Narrow>
            </div>
            <div class="navbarContainer  ">
                <Narrow >
                    <div className='navbar w-full justify-between'>
                        <div className='flex py-2'>
                            <div><Link to="/" onClick={() => { setPort(false); setServ(false) }}><img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/Panacee%20logo.png?updatedAt=1710924589184" alt="" className='navlogo' style={{ margin: "0px" }} /></Link></div>
                            <div className='contentNavbar  flex items-center max-md:hidden text-lg '>
                                <span ><Link to="/" onClick={() => { setPort(false); setServ(false) }} className='text-center block hover:text-black' >Home</Link></span>
                                <span className=' '><Link to='/about' onClick={() => { setPort(false); setServ(false) }} className='text-center block hover:text-black'>About Us</Link></span>
                                <span className='  '><button onClick={displayPortfolio} className='w-full'><Link to='/portfolio' className=' w-full flex justify-center items-center hover:text-black'>Portfolio &nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><path fill="#000000" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
                                </Link></button></span>
                                <span className=' '><button onClick={displayServ} className='w-full'><Link to='/ourservices' className='flex justify-center items-center hover:text-black'>Services&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><path fill="#000000" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></Link></button></span>
                            </div>

                        </div>
                        <div className='flex'>
                            <div className='flax items-center max-md:hidden text-sm'>
                                <div className='flex text-blue-700'>Call Us &nbsp; <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512" className='callsvg'><path fill="#1351d8" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></div>
                                <div className='pr-2'>+91-965-090-0190</div></div>
                            <div className='flex items-center border-s border-black pl-2 max-md:border-none'>
                                <button className=' bg-[#1351d8] py-2 px-3 rounded-full text-white' onClick={() => navigate('/contactus')}>Contact Us</button>
                            </div>
                            <div className='hidden max-md:flex max-md:items-center px-3'>
                                <button onClick={toggle}><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#000000" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                                </button></div>
                        </div>
                    </div>

                </Narrow>
                <hr />

                <Narrow >
                    {Port && (<div className='bg-white  flex ' style={{ minHeight: "385px" }}>
                        <div className='w-9/12 border-r-2'>
                            <div className=' grid grid-cols-2 gap-5 text-sm max-lg:text-xs pt-4 pb-5 pr-5 '>
                                <div className='flex justify-center items-center'>
                                    <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-1.jpg' alt='' className='w-5/12 max-lg:w-4/12 max-lg:h-1/2' />
                                    <div className='flex flex-col justify-center pl-3 w-7/12 max-lg:w-8/12 '> <h3 className=' font-semibold'>E-commerce</h3><p>We undertook a project to migrate their existing.</p></div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-2.jpg' alt='' className='w-5/12 max-lg:w-4/12 max-lg:h-1/2' />
                                    <div className='flex flex-col justify-center pl-3 w-7/12 max-lg:w-8/12 '> <h3 className=' font-semibold'>App Development</h3><p>The mobile application has significantly improved.</p></div>
                                </div><div className='flex justify-center items-center'>
                                    <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-3.jpeg' alt='' className='w-5/12 max-lg:w-4/12 max-lg:h-1/2' />
                                    <div className='flex flex-col justify-center pl-3 w-7/12 max-lg:w-8/12 '> <h3 className=' font-semibold'>SAAS Integration</h3><p>We partnered with DEF to upgrade their outdated IT.</p></div>
                                </div><div className='flex justify-center items-center'>
                                    <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-4.jpeg' alt='' className='w-5/12 max-lg:w-4/12 max-lg:h-1/2' />
                                    <div className='flex flex-col justify-center pl-3 w-7/12 max-lg:w-8/12 '> <h3 className=' font-semibold'>Virtual Reality</h3><p>Enter into the virtual reality world for real experience.</p></div>
                                </div>
                            </div>
                            <hr className='my-2' />
                            <div className='px-5 max-lg:text-xs flex items-center justify-between'>
                                <div className='flex '>
                                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25" viewBox="0 0 512 512" className='mx-3'> <path fill="#1351d8" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg></a>
                                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.75" viewBox="0 0 576 512" className='mx-3'> <path fill="#1351d8" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg></a>
                                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.25" viewBox="0 0 448 512" className='mx-3'> <path fill="#1351d8" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></a>
                                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.25" viewBox="0 0 448 512" className='mx-3'> <path fill="#1351d8" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg></a>
                                </div>
                                <Link to='/contactus' ><p className=' text-right max-xl:text-left max-xl:mt-5'>© Copyright 2023, Panacea Software Solutions</p></Link>
                            </div>
                        </div>
                        <div className='w-3/12 flex flex-col justify-center items-center p-3 text-sm max-lg:text-xs'>
                            <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/ipad.jpg' alt="Image" />
                            <div  >
                                <h3 className=' font-semibold'>Our product hits</h3>
                                <p>Develop IT solutions based on the <br />
                                    analysis phase.</p>
                                <a href="/">View more</a>
                            </div>
                        </div>

                    </div>)}
                </Narrow>

                <Narrow >
                    {Serv && (<div className='bg-white  flex ' style={{ minHeight: "385px" }} >
                        <div className='w-9/12 border-r-2'>
                            <div className='flex  px-3'>
                                <div className='w-6/12 grid grid-cols-2 gap-5 text-sm max-lg:text-xs py-5 pr-5 '>
                                    <div className='flex p-3 bg-gray-100 rounded-md'>
                                        <img src='https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-1.svg?updatedAt=1713440854392' alt='' className='w-4/12 p-1 bg-gray-300 rounded-lg' />
                                        <div className='pl-3' > <h3 className=' font-semibold'>Brainstroming</h3><p>Ideas</p></div>
                                    </div>
                                    <div className='flex p-3 bg-gray-100 rounded-md'>
                                        <img src='https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-2%20(1).svg?updatedAt=1713441749519' alt='' className='w-4/12 p-1 bg-gray-300 rounded-lg' />
                                        <div className='pl-3' > <h3 className=' font-semibold'>Product</h3><p>Design</p></div>
                                    </div>
                                    <div className='flex p-3 bg-gray-100 rounded-md'>
                                        <img src='https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-3.svg?updatedAt=1713440667501' alt='' className='w-4/12 p-1 bg-gray-300 rounded-lg' />
                                        <div className='pl-3' > <h3 className=' font-semibold'>SEO</h3><p>Optimisation</p></div>
                                    </div>
                                    <div className='flex p-3 bg-gray-100 rounded-md'>
                                        <img src='https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-4.svg?updatedAt=1713441484235' alt='' className='w-4/12 p-1 bg-gray-300 rounded-lg' />
                                        <div className='pl-3' > <h3 className=' font-semibold'>Front-End</h3><p>Development</p></div>
                                    </div>
                                </div>
                                <div className='w-3/12 pl-10 py-10 leading-8 -' >
                                    <span className=' font-semibold'>Services</span>
                                    <Link to="/ourservices"><li>Development</li></Link>
                                    <Link to="/ourservices"><li>Web Design</li></Link>
                                    <Link to="/ourservices"><li>IT Support</li></Link>
                                    <Link to="/ourservices"><li>E-Cpmmerce</li></Link>
                                    <Link to="/ourservices"><li>CRM Solutions</li></Link>

                                </div>
                                <div className='w-3/12 pl-10 leading-8 py-10'>
                                    <span className=' font-semibold'>Our Fields</span>
                                    <Link to="/"><li>Healthcare</li></Link>
                                    <Link to="/"><li>Travel</li></Link>
                                    <Link to="/"><li>Supermarket</li></Link>
                                    <Link to="/"><li>Industries</li></Link>
                                    <Link to="/"><li>Hotels</li></Link>


                                </div>
                            </div>
                            <hr className='my-3' />
                            <div className='px-5 max-lg:text-xs flex items-center justify-between'>
                                <div className='flex '>
                                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25" viewBox="0 0 512 512" className='mx-3'> <path fill="#1351d8" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg></a>
                                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.75" viewBox="0 0 576 512" className='mx-3'> <path fill="#1351d8" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg></a>
                                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.25" viewBox="0 0 448 512" className='mx-3'> <path fill="#1351d8" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></a>
                                    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.25" viewBox="0 0 448 512" className='mx-3'> <path fill="#1351d8" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg></a>
                                </div>
                                <Link to='/contactus' ><p className=' text-right max-xl:text-left max-xl:mt-5'>© Copyright 2023, Panacea Software Solutions</p></Link>
                            </div>
                        </div>
                        <div className='w-3/12 flex flex-col justify-center items-center p-3 text-sm max-lg:text-xs'>
                            <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/ipad.jpg' alt="Image" />
                            <div  >
                                <h3 className=' font-semibold'>Our product hits</h3>
                                <p>Develop IT solutions based on the <br />
                                    analysis phase.</p>
                                <a href="/">View more</a>
                            </div>
                        </div>

                    </div>)}
                </Narrow>
            </div>
            <Narrow >
                {(<div className={`absolute dropdownMenu ${isOpen ? 'open' : 'close'}`}>
                    <div className='flex justify-end pr-4 py-3 '><button onClick={toggle} className='rounded-full border-3 p-2'><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg></button></div>
                    <div className='text-md  px-4'>
                        <div className='my-3  border-b-2 py-2'><Link to='/' onClick={toggle} className=' block hover:text-black'>Home</Link></div>
                        <div className='my-3   border-b-2 py-2'><Link to='/about' onClick={toggle} className='block hover:text-black'>About Us</Link></div>
                        <div className='my-3   border-b-2 py-1'><button onClick={displayPortfolioMobile} className='w-full'><Link to='/portfolio' className=' w-full flex justify-between items-center hover:text-black'><span>Portfolio</span> <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512" className='dropdownsvg bg-blue-200 rounded-md'><path fill="#1d12f0" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                        </Link></button>
                            {PortMobile && (<div className={`dropPort ${PortMobile ? 'open' : ''}  my-2`}>
                                <div className=' grid grid-cols-1 gap-3  text-sm px-2 py-2'>
                                    <div className='flex justify-center items-center'>
                                        <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-1.jpg' alt='' className='w-5/12 h-full rounded-md' />
                                        <div className='flex flex-col justify-center pl-3  '> <h3 className=' font-semibold'>E-commerce</h3><p>We undertook a project to migrate their existing.</p></div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-2.jpg' alt='' className='w-5/12 h-full rounded-md ' />
                                        <div className='flex flex-col justify-center pl-3  '> <h3 className=' font-semibold'>App Development</h3><p>The mobile application has significantly improved.</p></div>
                                    </div><div className='flex justify-center items-center'>
                                        <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-3.jpeg' alt='' className='w-5/12 h-full rounded-md' />
                                        <div className='flex flex-col justify-center pl-3 w-6/12 max-lg:w-8/12 '> <h3 className=' font-semibold'>SAAS Integration</h3><p>We partnered with DEF to upgrade their outdated IT.</p></div>
                                    </div><div className='flex justify-center items-center'>
                                        <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-4.jpeg' alt='' className='w-5/12 h-full rounded-md' />
                                        <div className='flex flex-col justify-center pl-3 w-6/12 max-lg:w-8/12 '> <h3 className=' font-semibold'>Virtual Reality</h3><p>Enter into the virtual reality world for real experience.</p></div>
                                    </div>

                                </div>
                                <hr className='my-4' />
                                <div className='flex flex-col items-center py-2 px-3'>

                                    <div className='px-5 max-lg:text-xs flex items-center justify-between'>
                                        <div className='flex '>
                                            <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25" viewBox="0 0 512 512" className='mx-3'> <path fill="#1351d8" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg></a>
                                            <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.75" viewBox="0 0 576 512" className='mx-3'> <path fill="#1351d8" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg></a>
                                            <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.25" viewBox="0 0 448 512" className='mx-3'> <path fill="#1351d8" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></a>
                                            <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.25" viewBox="0 0 448 512" className='mx-3'> <path fill="#1351d8" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg></a>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        <Link to='/contactus' className='text-center' ><p className=''>© Copyright 2023, Panacea Software Solutions</p></Link>
                                    </div>
                                </div>
                                <div className=' flex flex-col justify-center items-center p-3 '>
                                    <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/ipad.jpg' alt="Image" />
                                    <div  >
                                        <h3 className=' font-semibold'>Our product hits</h3>
                                        <p>Develop IT solutions based on the
                                            analysis phase.</p>
                                        <a href="/">View more</a>
                                    </div>
                                </div>
                            </div>)}</div>
                        <div className='my-3 border-b-2 py-1'><button onClick={displayServMobile} className='w-full'><Link to='/ourservices' className='flex justify-between items-center hover:text-black'>Services<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512" className='dropdownsvg bg-blue-200 rounded-md'><path fill="#1d12f0" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></Link></button>
                            {ServMobile && (<div className=' dropPort my-2'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-col px-3'>
                                        <div className=' grid grid-cols-1 gap-3 text-sm max-lg:text-xs py-5 pr-5 '>
                                            <div className='flex p-3 bg-gray-100 rounded-md'>
                                                <img src='https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-1.svg?updatedAt=1713440854392' alt='' className='w-4/12 p-1 bg-gray-300 rounded-lg' />
                                                <div className='pl-3' > <h3 className=' font-semibold'>Brainstroming</h3><p>Ideas</p></div>
                                            </div>
                                            <div className='flex p-3 bg-gray-100 rounded-md'>
                                                <img src='https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-2%20(1).svg?updatedAt=1713441749519' alt='' className='w-4/12 p-1 bg-gray-300 rounded-lg' />
                                                <div className='pl-3' > <h3 className=' font-semibold'>Product</h3><p>Design</p></div>
                                            </div>
                                            <div className='flex p-3 bg-gray-100 rounded-md'>
                                                <img src='https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-3.svg?updatedAt=1713440667501' alt='' className='w-4/12 p-1 bg-gray-300 rounded-lg' />
                                                <div className='pl-3' > <h3 className=' font-semibold'>SEO</h3><p>Optimisation</p></div>
                                            </div>
                                            <div className='flex p-3 bg-gray-100 rounded-md'>
                                                <img src='https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-4.svg?updatedAt=1713441484235' alt='' className='w-4/12 p-1 bg-gray-300 rounded-lg' />
                                                <div className='pl-3' > <h3 className=' font-semibold'>Front-End</h3><p>Development</p></div>
                                            </div>
                                        </div>
                                        <div className='mb-4'>
                                            <span className=' font-semibold'>Services</span>
                                            <Link to="/ourservices"><li>Development</li></Link>
                                            <Link to="/ourservices"><li>Web Design</li></Link>
                                            <Link to="/ourservices"><li>IT Support</li></Link>
                                            <Link to="/ourservices"><li>E-Cpmmerce</li></Link>
                                            <Link to="/ourservices"><li>CRM Solutions</li></Link>

                                        </div>
                                        <div className='my-3'>
                                            <span className=' font-semibold'>Our Fields</span>
                                            <Link to="/"><li>Healthcare</li></Link>
                                            <Link to="/"><li>Travel</li></Link>
                                            <Link to="/"><li>Supermarket</li></Link>
                                            <Link to="/"><li>Industries</li></Link>
                                            <Link to="/"><li>Hotels</li></Link>


                                        </div>
                                    </div>
                                    <hr className='my-4' />
                                    <div className='flex flex-col items-center py-2 px-3'>

                                        <div className='px-5 max-lg:text-xs flex items-center justify-between'>
                                            <div className='flex '>
                                                <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25" viewBox="0 0 512 512" className='mx-3'> <path fill="#1351d8" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg></a>
                                                <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.75" viewBox="0 0 576 512" className='mx-3'> <path fill="#1351d8" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg></a>
                                                <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.25" viewBox="0 0 448 512" className='mx-3'> <path fill="#1351d8" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></a>
                                                <a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="25.25" viewBox="0 0 448 512" className='mx-3'> <path fill="#1351d8" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg></a>
                                            </div>
                                            
                                        </div>
                                        <div>
                                            <Link to='/contactus' className='text-center' ><p className=''>© Copyright 2023, Panacea Software Solutions</p></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center p-3 '>
                                    <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/ipad.jpg' alt="Image" />
                                    <div  >
                                        <h3 className=' font-semibold'>Our product hits</h3>
                                        <p>Develop IT solutions based on the
                                            analysis phase.</p>
                                        <a href="/">View more</a>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                        <div className='my-2 border-b-2 py-2'>FAQ</div>
                    </div>
                </div>)}
            </Narrow >
        </>
    );
}

export default IndexNavbar;