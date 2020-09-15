import { combineReducers } from "redux";
import testReducer from "../../components/Test/Modules/Reducers/Reducers";
import SignInReducer from "../../components/FormSignIn/Modules/Reducers/Reducers";
import SignUpsReducer from "../../components/SignUp/modules/Reducers/Reducers";
import reducerHome from "../../page/homepage/module/reducers/reducer";
import ProfilesReducer from "../../components/InforUsers/Modules/Reducers/Reduces"
import detailCourseReducer from "../../page/detailcourses/module/reducer/Reducer";
const rootReducer = combineReducers({
  testReducer,
  reducerHome,
  SignInReducer,
  SignUpsReducer,
  ProfilesReducer,
  detailCourseReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
