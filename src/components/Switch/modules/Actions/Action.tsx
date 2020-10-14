import * as ActionType from "../Constants/Constants"

export const changeDarkMode = (value: any) => {
    return {
        type: ActionType.changeDarkMode,
        value
    }
}