import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Startup from "./StartUp/Startup";
import Translation from "./Translation/Translation";


export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/translation">
                        <Translation/>
                    </Route>
                    <Route path="/">
                        <Startup/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
