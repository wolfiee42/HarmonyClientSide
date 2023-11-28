import { FaPaperclip, FaPlus, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserDash = () => {
    return (
        <div>
            <li>
                <NavLink to='/dashboard/myprofile'>
                    <FaUser/>
                    <p>My Profile</p>
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/addpost'>
                    <FaPlus/>
                    <p>Add Post</p>
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/mypost'>
                    <FaPaperclip></FaPaperclip>
                    <p>My Post</p>
                </NavLink>
            </li>
        </div>
    );
};

export default UserDash;