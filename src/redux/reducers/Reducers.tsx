import { combineReducers } from "redux";
// import {createStore} from "redux";
import testReducer from "../../components/Test/Modules/Reducers/Reducers";
import SignUpReducer from "../../components/FormSignIn/Modules/Reducers/Reducers"
const rootReducer = combineReducers({
  testReducer,
  SignUpReducer
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
