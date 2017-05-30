import React from "react";
import { Router, Route } from "react-router-dom";
import styled from "styled-components";
import history from "../../history.js";

const H1 = styled.h1`
	color: ${props => props.theme.colors.primaryColor};
    font-size: ${props => props.theme.scale.m};
`;

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Route exact path="/" render={() => <H1>Index View</H1>} />
                    <Route path="/about" render={() => <H1>About View</H1>} />
                </div>
            </Router>
        </div>
    );
}

export default App;
