import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Narrow from './Common/Narrow';
function IndexNavbar() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [Port, setPort] = useState(false);
    const [Serv, setServ] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const displayPortfolio = () => {
        setPort(!Port);
        setServ(false);
    }
    const displayServ = () => {
        setServ(!Serv);
        setPort(false);
    }

    return (
        <>
            <div style={{ backgroundColor: "black", padding: "0.5rem 0rem", maxHeight: "65px" }}>
                <Narrow>
                    <div style={{ height: "3rem", color: "white", display: "flex", alignItems: 'center', justifyContent: "space-between", }}>
                        <span>Panacee Software Company</span>
                        <span>Janakpuri South </span>
                    </div>
                </Narrow>
            </div>
            <div class="navbarContainer border-b-2 ">
                <Narrow >
                    <div className='navbar w-full justify-between'>
                        <div className='flex'>
                            <div><Link to="/" onClick={()=>{setPort(false);setServ(false)}}><img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/Panacee%20logo.png?updatedAt=1710924589184" alt="" className='navlogo' style={{ margin: "0px" }} /></Link></div>
                            <div className='contentNavbar flex items-center max-md:hidden text-sm'>
                                <span ><Link to="/" onClick={()=>{setPort(false);setServ(false)}} className='text-center block hover:text-black' >Home</Link></span>
                                <span className=' '><Link to='/about' onClick={()=>{setPort(false);setServ(false)}} className='text-center block hover:text-black'>About Us</Link></span>
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
                                <button className='contactusbtn text-white' onClick={() => navigate('/contactus')}>Contact Us</button>
                            </div>
                            <div className='hidden max-md:flex max-md:items-center px-3'>
                                <button onClick={toggle}><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#000000" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                                </button></div>
                        </div>
                    </div>

                </Narrow>
            </div>

            <Narrow >
                {Port && (<div className='absolute '>hi</div>)}
            </Narrow>
            <Narrow >
                {Serv && (<div className='absolute'>hello</div>)}
            </Narrow>
            <Narrow >
                {isOpen && (<div className='absolute dropdownMenu flex flex-col '>
                    <div className='flex justify-end pr-4 py-3 '><button onClick={toggle} className='rounded-full border-3 p-2'><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg></button></div>
                    <div className='text-md  px-4'>
                        <div className='my-3  border-b-2 py-2'><Link to='/' className=' block hover:text-black'>Home</Link></div>
                        <div className='my-3   border-b-2 py-2'><Link to='/about' className='block hover:text-black'>About Us</Link></div>
                        <div className='my-3   border-b-2 py-1'><button onClick={displayPortfolio} className='w-full'><Link to='/impact' className=' w-full flex justify-between items-center hover:text-black'><span>Portfolio</span> <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512" className='dropdownsvg bg-blue-200 rounded-md'><path fill="#1d12f0" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                        </Link></button></div>
                        <div className='my-3   border-b-2 py-1'><button onClick={displayServ} className='w-full'><Link to='/ourservices' className='flex justify-between items-center hover:text-black'>Services<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512" className='dropdownsvg bg-blue-200 rounded-md'><path fill="#1d12f0" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></Link></button></div>
                        <div className='my-2'>FAQ</div>
                    </div>
                </div>)}
            </Narrow>
        </>
    );
}

export default IndexNavbar;