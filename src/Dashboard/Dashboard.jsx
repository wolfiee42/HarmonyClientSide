import AdminDash from './AdminDash';
import UserDash from './UserDash';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import useAdmin from '../Utilities/useAdmin';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className='flex'>
            <Helmet>
                <title>Harmony | Dashboard</title>
            </Helmet>
            <div className='w-1/5 min-h-screen pt-5 bg-[#ECE3CE] '>
                <ul className='menu'>
                    {isAdmin === true ? <AdminDash /> : <UserDash />}

                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}>
                            <FaHome />
                            <p>Home</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='w-4/5'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;