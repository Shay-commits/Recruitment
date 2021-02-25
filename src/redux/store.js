import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer.js";
import { fetchAPIData } from "./actions";

const store = createStore(rootReducer,applyMiddleware(thunk));

// Fetching data from API on store creation
store.dispatch(fetchAPIData());

export default store;

