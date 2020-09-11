import { SignUp } from "../../../Interface/Interface"
import * as ActionType from "../Constant/Constants"
const initialState: SignUp = {
    user: {}
}
const SignUpsReducer = (state: SignUp = initialState, action: any) => {
    switch (action.type) {
        case ActionType.SIGN_UP:
            console.log(action.data);
            state.user = action.data;
            break;
        default:
            break;
    }
    return { ...state };
};
export default SignUpsReducer;
