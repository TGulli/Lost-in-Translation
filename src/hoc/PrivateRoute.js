import { Route, Redirect } from "react-router-dom"
import { AppRoutes } from "../consts/AppRoutes"

/*
* If name is not set, the user must log in before visiting the current site*/
export const PrivateRoute = (props) => {

    const session = localStorage.getItem('name')

    if (session === null) {
        return <Redirect to={ AppRoutes.Startup }  />
    }
    return <Route {...props} />
}

export default PrivateRoute
