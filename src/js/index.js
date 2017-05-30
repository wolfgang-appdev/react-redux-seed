import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./themes/basic";
import store from "./store.js";
import App from "./components/app";
import "../sass/index.scss";

const Root = () => {
    return (
        <Provider store={store} >
            <ThemeProvider theme={theme} >
                <App />
            </ThemeProvider>
        </Provider>
    );
}

render(<Root />, document.getElementById("root"));
