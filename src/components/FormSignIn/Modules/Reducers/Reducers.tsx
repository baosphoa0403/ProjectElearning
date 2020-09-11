import {SignIn} from "../../../Interface/Interface"
import * as ActionType from "../Contants/Contants"
const initialState: SignIn = {
    user: {hoTen: ""}
};
  

const SignInReducer = (state: SignIn = initialState, action: any) => {
    switch (action.type) {
      case ActionType.signIn:
        console.log(action.data);
        state.user = action.data
        break;
      
      default:
        break;
    }
    return { ...state };
  };
  
  export default SignInReducer; 