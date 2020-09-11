import { combineReducers } from "redux";
// import {createStore} from "redux";
import testReducer from "../../components/Test/Modules/Reducers/Reducers";
import reducerHome from "../../page/module/reducers/reducer";
import SignUpsReducer from "../../components/SignUp/modules/Reducers/Reducers"
const rootReducer = combineReducers({
  testReducer,
  reducerHome,
  SignUpsReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
