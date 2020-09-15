import * as ActionType from "../Constants/Constants"
import { YourProfiles } from "../../../Interface/Interface"
const innittialState: YourProfiles = {
    data: { taiKhoan: "", matKhau: "" }
}
const ProfilesReducer = (state: YourProfiles = innittialState, action: any) => {
    switch (action.type) {
        case ActionType.actGetProfileAPI:
            console.log(action.data);
            state.data = action.data;
            break;
        default:
            break;
    }
    return { ...state };
};
export default ProfilesReducer;
