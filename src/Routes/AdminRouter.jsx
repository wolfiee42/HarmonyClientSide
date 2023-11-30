/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Utilities/useAuth";
import useAdmin from "../Utilities/useAdmin";

const AdminRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace />
};

export default AdminRouter;