import { combineReducers } from "redux";
import testReducer from "../../components/Test/Modules/Reducers/Reducers";
import SignUpReducer from "../../components/FormSignIn/Modules/Reducers/Reducers";
import SignUpsReducer from "../../components/SignUp/modules/Reducers/Reducers"
import reducerHome from "../../page/homepage/module/reducers/reducer";
const rootReducer = combineReducers({
  testReducer,
  reducerHome,
  SignUpReducer,
  SignUpsReducer
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
