import React from "react";
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
} from "react-router-dom";
import Startup from "./StartUp/Startup";
import Translation from "./Translation/Translation";
import PublicRoute from "./hoc/PublicRoute";
import PrivateRoute from "./hoc/PrivateRoute"
import { AppRoutes } from "./consts/AppRoutes";
import Profile from "./Profile/Profile";




export default function App() {
    return (
        <Router>
            <div className="App">
                {/*<nav>*/}
                {/*    <NavLink></NavLink>*/}
                {/*</nav>*/}
                <Switch>
                    <PrivateRoute path={AppRoutes.Translation} component = {Translation} />
                    <PrivateRoute path={AppRoutes.Profile} component = {Profile} />
                    <PublicRoute exact path={AppRoutes.Startup} component = {Startup} />
                    {/*<Route path="* " component = {NotFound} />*/}

                </Switch>
            </div>
        </Router>
    );
}
