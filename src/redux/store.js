import {applyMiddleware, combineReducers, createStore} from "redux";
import {pizzasReducer, filterReducer} from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
   pizzas: pizzasReducer,
   filter: filterReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

window.store = store

export default store