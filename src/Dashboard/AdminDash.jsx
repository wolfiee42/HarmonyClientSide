import { NavLink } from "react-router-dom";

const AdminDash = () => {
    return (
        <div>
            <li>
                <NavLink to='/dashboard/admindash'>
                    <p>Admin Profile</p>
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/manageuser'>
                    <p>Manage User</p>
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/announcement'>
                    <p>Announcement</p>
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/report'>
                    <p>Report</p>
                </NavLink>
            </li>
        </div>
    );
};

export default AdminDash;