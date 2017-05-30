import defaultState from "./state.js";
import * as types from "./actions/types.js";


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.EXAMPLE: {

            return state;

        }
        default: {

            return state;

        }
    }
}

export default reducer;
