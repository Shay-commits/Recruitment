import { combineReducers } from "redux";
import signUpReducer from "./signUpReducer";
import fetchDataReducer from "./fetchDataReducer";
import contentDetailReducer from "./contentDetailReducer"
import jobReducer from "./jobReducer";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({ signUpReducer, fetchDataReducer, contentId: contentDetailReducer, job:jobReducer, userReducer, loginReducer });

export default rootReducer;
