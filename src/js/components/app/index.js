import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../../history.js";

const App = () => {
    return (
        <div id="app">
            <Router history={history}>
                <div>
                    <Route exact path="/" render={() => <h1>Home View</h1>} />
                    <Route path="/about" render={() => <h1>About View</h1>} />
                </div>
            </Router>
        </div>
    );
}

export default App;
