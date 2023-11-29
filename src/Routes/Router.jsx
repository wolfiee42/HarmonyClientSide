import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPage";
import Login from "../Layouts/Login";
import Signup from "../Layouts/Signup";
import Dashboard from "../Dashboard/Dashboard";
import MyProfile from "../Dashboard/User/MyProfile";
import AddPost from "../Dashboard/User/AddPost";
import MyPost from "../Dashboard/User/MyPost";
import AdminProfile from "../Dashboard/Admin/AdminProfile";
import ManageUser from "../Dashboard/Admin/ManageUser";
import Report from "../Dashboard/Admin/Report";
import Announcement from "../Dashboard/Admin/Announcement";
import PrivateRoute from "./PrivateRoute";
import Home from "../Layouts/Home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },

        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [

            // user
            {
                path: '/dashboard/myprofile',
                element: <PrivateRoute><MyProfile /></PrivateRoute>
            },
            {
                path: '/dashboard/addpost',
                element: <PrivateRoute><AddPost /></PrivateRoute>
            },
            {
                path: '/dashboard/mypost',
                element: <PrivateRoute><MyPost /></PrivateRoute>
            },

            // admin
            {
                path: '/dashboard/admindash',
                element: <AdminProfile />,
            },
            {
                path: '/dashboard/manageuser',
                element: <ManageUser />,
            },
            {
                path: '/dashboard/report',
                element: <Report />,
            },
            {
                path: '/dashboard/announcement',
                element: <Announcement />,
            },

        ]
    }
]);

export default Router;