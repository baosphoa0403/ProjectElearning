import {SignUp} from "../../../Interface/Interface"
import * as ActionType from "../Contants/Contants"
const initialState: SignUp = {
    user: {}
  };
  

const SignUpReducer = (state: SignUp = initialState, action: any) => {
    switch (action.type) {
      case ActionType.signIn:
        console.log(action.data);
        return { ...state };
    
      default:
        break;
    }
    return { ...state };
  };
  
  export default SignUpReducer; 