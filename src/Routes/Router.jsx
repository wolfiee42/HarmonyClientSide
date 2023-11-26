import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPage";
import Home from "../Layouts/Home";
import Login from "../Layouts/Login";
import Signup from "../Layouts/Signup";

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

        ],
    },
]);

export default Router;