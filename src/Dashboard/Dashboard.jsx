import React, { useState } from 'react';
import AdminDash from './AdminDash';
import UserDash from './UserDash';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Dashboard = () => {
    const [admin, setAdmin] = useState(true)
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen pt-5 bg-[#ECE3CE] '>
                <ul className='menu'>
                    {admin ? <AdminDash /> : <UserDash />}
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}>
                            <FaHome />
                            <p>Home</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='w-3/4'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;