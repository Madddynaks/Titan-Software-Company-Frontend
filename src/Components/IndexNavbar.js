import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Narrow from './Common/Narrow';
import { Row, Col } from 'reactstrap';
function IndexNavbar() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [Port, setPort] = useState(false);
    const [Serv, setServ] = useState(false);
    const [PortMobile, setPortMobile] = useState(false);
    const [ServMobile, setServMobile] = useState(false);
    const toggle = () => {setIsOpen(!isOpen);
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
                        <div className='flex'>
                            <div><Link to="/" onClick={() => { setPort(false); setServ(false) }}><img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/Panacee%20logo.png?updatedAt=1710924589184" alt="" className='navlogo' style={{ margin: "0px" }} /></Link></div>
                            <div className='contentNavbar flex items-center max-md:hidden text-sm'>
                                <span ><Link to="/" onClick={() => { setPort(false); setServ(false) }} className='text-center block hover:text-black' >Home</Link></span>
                                <span className=' '><Link to='/about' onClick={() => { setPort(false); setServ(false) }} className='text-center block hover:text-black'>About Us</Link></span>
                                <span className='  '><button onClick={displayPortfolio} className='w-full'><Link to='/impact' className=' w-full flex justify-center items-center hover:text-black'>Portfolio &nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><path fill="#000000" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
                                </Link></button></span>
                                <span className=' '><button onClick={displayServ} className='w-full'><Link to='/ourservices' className='flex justify-center items-center hover:text-black'>Services&nbsp;<svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><path fill="#000000" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></Link></button></span>
                            </div>

                        </div>
                        <div className='flex'>
                            <div className='flax items-center max-md:hidden text-sm'>
                                <div className='flex'>Call Us &nbsp; <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/home%20arrow.svg?updatedAt=1713423053103" /></div>
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
                    {Port && (<div className='bg-white  flex '>
                        <div className='w-9/12 border-r-2'>
                            <div className=' grid grid-cols-2 gap-5 text-sm max-lg:text-xs py-5 pr-5 '>
                                <div className='flex justify-center items-center'>
                                    <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-1.jpg' alt='' className='w-6/12 max-lg:w-4/12 max-lg:h-1/2' />
                                    <div className='flex flex-col justify-center pl-3 w-6/12 max-lg:w-8/12 '> <h3 className=' font-semibold'>E-commerce</h3><p>We undertook a project to migrate their existing.</p></div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-2.jpg' alt='' className='w-6/12 max-lg:w-4/12 max-lg:h-1/2' />
                                    <div className='flex flex-col justify-center pl-3 w-6/12 max-lg:w-8/12 '> <h3 className=' font-semibold'>App Development</h3><p>The mobile application has significantly improved.</p></div>
                                </div><div className='flex justify-center items-center'>
                                    <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-3.jpeg' alt='' className='w-6/12 max-lg:w-4/12 max-lg:h-1/2' />
                                    <div className='flex flex-col justify-center pl-3 w-6/12 max-lg:w-8/12 '> <h3 className=' font-semibold'>SAAS Integration</h3><p>We partnered with DEF to upgrade their outdated IT.</p></div>
                                </div><div className='flex justify-center items-center'>
                                    <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/portfolio-mega-menu-4.jpeg' alt='' className='w-6/12 max-lg:w-4/12 max-lg:h-1/2' />
                                    <div className='flex flex-col justify-center pl-3 w-6/12 max-lg:w-8/12 '> <h3 className=' font-semibold'>Virtual Reality</h3><p>Enter into the virtual reality world for real experience.</p></div>
                                </div>

                            </div>
                            <div className='px-5 max-lg:text-xs'><hr />
                                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }} className='py-3'>
                                    <Col md='4' style={{ display: 'flex', alignItems: "center", gap: '28px' }} >
                                        <a href="/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png" alt="" className="connection-logo" /></a>
                                        <a href="/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="" className="connection-logo" /></a>
                                        <a href="https://www.linkedin.com/company/panacee-software-solutions/"><img src="https://ik.imagekit.io/2q7cgnqzi/icon/icons8-linkedin.svg?updatedAt=1710492054727" alt="" className="connection-logo-linkedin" /></a>
                                        <a href="/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-icon.png" alt="" className="connection-logo" /></a>
                                    </Col>
                                    <Col md='5' >
                                        <Link to='/contactus' ><p className=' text-right max-xl:text-left max-xl:mt-5'>© Copyright 2023, Panacea Software Solutions</p></Link>

                                    </Col>
                                </Row>
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
                    {Serv && (<div className='bg-white  flex '>
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
                                <div className='w-3/12 pl-10 py-5 leading-8'>
                                    <span className=' font-semibold'>Services</span>
                                    <Link to="/ourservices"><li>Development</li></Link>
                                    <Link to="/ourservices"><li>Web Design</li></Link>
                                    <Link to="/ourservices"><li>IT Support</li></Link>
                                    <Link to="/ourservices"><li>E-Cpmmerce</li></Link>
                                    <Link to="/ourservices"><li>CRM Solutions</li></Link>

                                </div>
                                <div className='w-3/12 pl-10 leading-8 py-5'>
                                    <span className=' font-semibold'>Our Fields</span>
                                    <Link to="/"><li>Healthcare</li></Link>
                                    <Link to="/"><li>Travel</li></Link>
                                    <Link to="/"><li>Supermarket</li></Link>
                                    <Link to="/"><li>Industries</li></Link>
                                    <Link to="/"><li>Hotels</li></Link>


                                </div>
                            </div>
                            <div className='px-5 max-lg:text-xs'><hr />
                                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }} className='py-3'>
                                    <Col md='4' style={{ display: 'flex', alignItems: "center", gap: '28px' }} >
                                        <a href="/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png" alt="" className="connection-logo" /></a>
                                        <a href="/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="" className="connection-logo" /></a>
                                        <a href="https://www.linkedin.com/company/panacee-software-solutions/"><img src="https://ik.imagekit.io/2q7cgnqzi/icon/icons8-linkedin.svg?updatedAt=1710492054727" alt="" className="connection-logo-linkedin" /></a>
                                        <a href="/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-icon.png" alt="" className="connection-logo" /></a>
                                    </Col>
                                    <Col md='5' >
                                        <Link to='/contactus' ><p className=' text-right max-xl:text-left max-xl:mt-5'>© Copyright 2023, Panacea Software Solutions</p></Link>

                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className='w-3/12 flex flex-col justify-center items-center p-3 text-sm max-lg:text-xs'>
                            <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/02/ipad.jpg' alt="Image" />
                            <div  >
                                <h3 className=' font-semibold'>Our product hits</h3>
                                <p>Develop IT solutions based on the
                                    analysis phase.</p>
                                <a href="/">View more</a>
                            </div>
                        </div>

                    </div>)}
                </Narrow>
            </div>
            <Narrow >
                { (<div className={`absolute dropdownMenu ${isOpen ? 'open' : 'close'}`}>
                    <div className='flex justify-end pr-4 py-3 '><button onClick={toggle} className='rounded-full border-3 p-2'><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg></button></div>
                    <div className='text-md  px-4'>
                        <div className='my-3  border-b-2 py-2'><Link to='/' className=' block hover:text-black'>Home</Link></div>
                        <div className='my-3   border-b-2 py-2'><Link to='/about' className='block hover:text-black'>About Us</Link></div>
                        <div className='my-3   border-b-2 py-1'><button onClick={displayPortfolioMobile} className='w-full'><Link to='/impact' className=' w-full flex justify-between items-center hover:text-black'><span>Portfolio</span> <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512" className='dropdownsvg bg-blue-200 rounded-md'><path fill="#1d12f0" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                        </Link></button>
                            {PortMobile && (<div className={`dropPort ${PortMobile?'open':''}  my-2`}>
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

                                    <div className='flex justify-between items-center w-full '>
                                        <a href="/" className='h-full'><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png" alt="" className="connection-logo" /></a>
                                        <a href="/" className='h-full'><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="" className="connection-logo" /></a>
                                        <a href="https://www.linkedin.com/company/panacee-software-solutions/" className='h-full'><img src="https://ik.imagekit.io/2q7cgnqzi/icon/icons8-linkedin.svg?updatedAt=1710492054727" alt="" className="connection-logo-linkedin" /></a>
                                        <a href="/" className='h-full'><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-icon.png" alt="" className="connection-logo" /></a>
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

                                        <div className='flex justify-between items-center w-full '>
                                            <a href="/" className='h-full'><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png" alt="" className="connection-logo" /></a>
                                            <a href="/" className='h-full'><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="" className="connection-logo" /></a>
                                            <a href="https://www.linkedin.com/company/panacee-software-solutions/" className='h-full'><img src="https://ik.imagekit.io/2q7cgnqzi/icon/icons8-linkedin.svg?updatedAt=1710492054727" alt="" className="connection-logo-linkedin" /></a>
                                            <a href="/" className='h-full'><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-icon.png" alt="" className="connection-logo" /></a>
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