import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {pizzasReducer, filterReducer, cartReducer} from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
   pizzas: pizzasReducer,
   filter: filterReducer,
   cart: cartReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store