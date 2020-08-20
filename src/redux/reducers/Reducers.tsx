import { combineReducers, createStore } from 'redux';
import { IDemoState } from '../constant/Constant';
import { demoReducer } from '../action/Action';


export interface IRootState {
    demo: IDemoState
}

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        demo: demoReducer
}));

export default store;