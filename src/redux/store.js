import { legacy_createStore as createStore, combineReducers } from "redux";

const initialState = {
  count: 0,
};

const reducers = combineReducers({});

const store = createStore(reducers, initialState);

export default store;
