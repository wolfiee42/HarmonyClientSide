import { NavLink } from "react-router-dom";

const UserDash = () => {
    return (
        <div>
            <li>
                <NavLink to='/dashboard/myprofile'>
                    <p>My Profile</p>
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/addpost'>
                    <p>Add Post</p>
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/mypost'>
                    <p>My Post</p>
                </NavLink>
            </li>
        </div>
    );
};

export default UserDash;