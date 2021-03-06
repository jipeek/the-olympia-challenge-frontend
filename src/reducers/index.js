import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
    auth: authReducer,
    user: userReducer
});

const rootReducer = (state, action) => {
    if (action.type === "[Auth] Logout") {
        state = undefined;
    }

    return reducers(state, action);
};

export default rootReducer;
