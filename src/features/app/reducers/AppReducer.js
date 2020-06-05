import { AppConstant } from "../AppConstant";
const initialState = {
    fullName: "",
}
function appReducer(state = initialState, action) {
    switch (action.type) {
        case AppConstant.SAVE_USER_DETAILS_SUCCESS:
            return { ...state, fullName: action.payload.fullName };
        case AppConstant.SAVE_USER_DETAILS_FAIL:
                return { ...state };
        default:
            return state
    }
}
export default appReducer;