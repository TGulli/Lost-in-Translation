import { Route, Redirect } from "react-router-dom";
import { AppRoutes } from "../consts/AppRoutes";

export const PrivateRoute = (props) => {

    const session = localStorage.getItem('name')


    if (session === null) {
        return <Redirect to={ AppRoutes.Startup }  />
    }

    return <Route {...props} />
}

export default PrivateRoute
