import { combineReducers } from "redux";
// import {createStore} from "redux";
import testReducer from "../../components/Test/Modules/Reducers/Reducers";
import reducerHome from "../../page/module/reducers/reducer";
const rootReducer = combineReducers({
  testReducer,
  reducerHome,
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
