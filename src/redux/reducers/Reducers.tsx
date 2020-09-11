import { combineReducers } from "redux";
import testReducer from "../../components/Test/Modules/Reducers/Reducers";
import SignInReducer from "../../components/FormSignIn/Modules/Reducers/Reducers";
import reducerHome from "../../page/homepage/module/reducers/reducer";
const rootReducer = combineReducers({
  testReducer,
  reducerHome,
  SignInReducer
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
