import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {users, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-bars loading-md mx-auto mt-10"></span>
    }
    if(users){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node,
}