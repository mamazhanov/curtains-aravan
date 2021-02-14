import { combineReducers, createStore } from "redux";
import ordersReducer from "./orders-reducer";
import retailsReducer from "./retails-reducer";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    ordersPage: ordersReducer,
    retailsPage: retailsReducer,
    form: formReducer
});

let store = createStore(reducers);

window.store = store;
export default store;