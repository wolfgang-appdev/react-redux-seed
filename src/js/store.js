import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import layout from "./modules/layout/reducer.js";


const reducers = combineReducers({
    layout
});


const middlewareArray = [];
middlewareArray.push(thunk);
middlewareArray.push(promise());

if (process.env.NODE_ENV !== "production") {
    middlewareArray.push(createLogger());
}


const middlewares = applyMiddleware(...middlewareArray);
const store = createStore(reducers, {}, middlewares);
export default store;
