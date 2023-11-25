import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPage";
import Home from "../Layouts/Home";

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
            
        ]
    },
]);

export default Router;