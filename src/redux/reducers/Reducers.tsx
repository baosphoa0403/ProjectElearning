import { combineReducers } from "redux";
// import {createStore} from "redux";
import testReducer from "../../components/Test/Modules/Reducers/Reducers";
const rootReducer = combineReducers({
  testReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
