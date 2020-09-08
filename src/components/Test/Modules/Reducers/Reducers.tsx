import { Test } from "../../../Interface/Interface";
import * as ActionType from "../Actions/Action"
const initialState: Test = {
   arr1: [
       {name: "hihi", age: 20},
       {name: "bảo", age: 20},
       {name: "sang", age: 20},
    ] 
}


const testReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionType.hihi:
            console.log("haha");
            return {...state}
           
    
        default:
            break;
    }
    return {...state}
}

export default testReducer