import { combineReducers } from "redux";
import testReducer from "../../components/Test/Modules/Reducers/Reducers";
import SignUpReducer from "../../components/FormSignIn/Modules/Reducers/Reducers";
import reducerHome from "../../page/homepage/module/reducers/reducer";
const rootReducer = combineReducers({
  testReducer,
  reducerHome,
  SignUpReducer
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
