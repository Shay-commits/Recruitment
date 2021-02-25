import { combineReducers } from "redux";
import signUpReducer from "./signUpReducer";
import fetchDataReducer from "./fetchDataReducer";

const rootReducer = combineReducers({ signUpReducer, fetchDataReducer });

export default rootReducer;
