import React from "react";
import './CSS/App.css';
import './CSS/StartLogo.css'
import './CSS/MidBox.css'
import './CSS/Input.css'
import './CSS/StartHeader.css'
import './CSS/Sign.css'
import './CSS/CustomHeader.css'
import './CSS/Buttons.css'


import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import Startup from "./StartUp/Startup";
import Translation from "./Translation/Translation";
import PublicRoute from "./hoc/PublicRoute";
import PrivateRoute from "./hoc/PrivateRoute"
import { AppRoutes } from "./consts/AppRoutes";
import Profile from "./Profile/Profile";
import NotFound from "./NotFound/NotFound";


export default function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <PrivateRoute path={AppRoutes.Translation} component = {Translation} />
                    <PrivateRoute path={AppRoutes.Profile} component = {Profile} />
                    <PublicRoute exact path={AppRoutes.Startup} component = {Startup} />
                    <PublicRoute path="*" component = {NotFound} />

                </Switch>
            </div>
        </Router>
    );
}
