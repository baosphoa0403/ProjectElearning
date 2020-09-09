import { combineReducers} from 'redux';
import { IDemoState } from '../constant/Constant';
import { demoReducer } from '../action/Action';
import testReducer from "../../components/Test/Modules/Reducers/Reducers"
const rootReducer = combineReducers({
    test: testReducer
})



export type RootState = ReturnType<typeof rootReducer>

