import { Link } from 'react-router-dom';
import Container from '../Components/Container'
import { FaBell } from "react-icons/fa";
import Button from '../Components/Button';
import { useState } from 'react';

const Navbar = () => {
    const navMenu = <>
        <li><Link>Home</Link></li>
        <li><Link>Membership</Link></li>
        <li><Link><FaBell className='text-xl' /></Link></li>
    </>
    const [some, setsome] = useState(false)
    return (
        <div className=' bg-[#ECE3CE]'>
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navMenu}
                            </ul>
                        </div>
                        <Link to={'/'}>
                            <div className='flex justify-center items-center gap-4'>
                                <img className='w-[60px]' src="https://i.ibb.co/8cTzbRB/h-1-removebg-preview.png" alt="" />
                                <h1 className='font-bold text-xl font-serif'>Harmony</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navMenu}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {some ? <Link>
                            <Button>Join Us</Button>
                        </Link> :
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;