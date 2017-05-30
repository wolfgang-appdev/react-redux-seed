import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import App from "./components/app";
import "../sass/index.scss";

const Root = () => {
    return (
        <Provider store={store} >
            <App />
        </Provider>
    );
}

render(<Root />, document.getElementById("root"));
