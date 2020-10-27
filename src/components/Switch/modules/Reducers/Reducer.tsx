import {Switch} from "../../../Interface/Interface";
import * as ActionType from "../Constants/Constants";
const local: any = {
  dark: localStorage.getItem("dark")
}
const initialState: Switch = {
  darkMode: localStorage.getItem("dark") ? JSON.parse(local.dark) : false 
}

const reducerSwitch = (state: Switch = initialState, action: any) => {
    switch (action.type) {
        case ActionType.changeDarkMode:
            state.darkMode = action.value            
            localStorage.setItem("dark", action.value );
            break;
      default:
        break;
    }
    return { ...state };
  };
  export default reducerSwitch;