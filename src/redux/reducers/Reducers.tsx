import { combineReducers } from "redux";
// import {createStore} from "redux";
import testReducer from "../../components/Test/Modules/Reducers/Reducers";
import reducerHome from "../../page/module/reducers/reducer";
import SignUpReducer from "../../components/FormSignIn/Modules/Reducers/Reducers";
const rootReducer = combineReducers({
  testReducer,
  reducerHome,
  SignUpReducer
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
