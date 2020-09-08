import { combineReducers} from 'redux';
import { IDemoState } from '../constant/Constant';
import { demoReducer } from '../action/Action';
import testReducer from "../../components/Test/Modules/Reducers/Reducers"
const rootReducer = combineReducers({
    testReducer
})


export default type rootState = ReturnType<typeof rootReducer>

// export type RootState = ReturnType<typeof rootReducer>