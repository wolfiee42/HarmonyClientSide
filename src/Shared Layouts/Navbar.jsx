import { Link } from 'react-router-dom';
import Container from '../Components/Container'
import { FaBell } from "react-icons/fa";
import Button from '../Components/Button';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAdmin from '../Utilities/useAdmin';
import useAxiosPublic from '../Utilities/useAxiosPublic';

const Navbar = () => {
    const axiosPublic = useAxiosPublic();
    const [announ, setAnnoun] = useState(0);
    const navMenu = <>
        <li><Link>Home</Link></li>
        <li><Link to={'/membership'}>Membership</Link></li>
        <li className='text-xl indicator'><Link>

            <span className="indicator-item badge">{announ}</span>

            <FaBell> </FaBell>
        </Link></li>
    </>
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();

    useEffect(() => {
        axiosPublic.get('/announcementcount')
            .then(res => {
                setAnnoun(res.data.result);

            })
    }, [axiosPublic])

    const handleLogout = () => {
        logOut();
    }

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
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal mr-10 px-1">
                            {navMenu}
                        </ul>
                        {!user ? <Link to='/login'>
                            <Button>Join Us</Button>
                        </Link> :
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt={user?.displayName} src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#739072] text-white rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user?.displayName}
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    {
                                        user && !isAdmin && <li><Link to='/dashboard/myprofile'>Dashboard</Link></li>
                                    }
                                    {
                                        user && !!isAdmin && <li><Link to='/dashboard/admindash'>Dashboard</Link></li>
                                    }
                                    <li><p onClick={handleLogout}>Logout</p></li>
                                </ul>
                            </div>}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;