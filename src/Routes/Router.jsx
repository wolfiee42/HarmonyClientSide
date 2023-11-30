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
import PostDetails from "../Layouts/Home/PostDetails";
import Membership from "../Layouts/Membership";
import PostComments from "../Dashboard/PostComments";
import AdminRouter from "./AdminRouter";

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
                path: "/postdetails/:id",
                element: <PostDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/posts/${params.id}`)
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/membership",
                element: <PrivateRoute><Membership /></PrivateRoute>
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
            {
                path: '/dashboard/mypost/:title',
                element: <PrivateRoute><PostComments /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/comments/${params.title}`)
            },

            // admin
            {
                path: '/dashboard/admindash',
                element: <AdminRouter><AdminProfile /></AdminRouter>,
            },
            {
                path: '/dashboard/manageuser',
                element: <AdminRouter><ManageUser /></AdminRouter>,
            },
            {
                path: '/dashboard/report',
                element: <AdminRouter> <Report /></AdminRouter>,
            },
            {
                path: '/dashboard/announcement',
                element: <AdminRouter><Announcement /></AdminRouter>,
            },

        ]
    }
]);

export default Router;