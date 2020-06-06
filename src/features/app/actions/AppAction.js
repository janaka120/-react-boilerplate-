import {AppConstant} from "../AppConstant";

export const saveUserDetailsRequest = (data)=>{
    return {
        type:AppConstant.SAVE_USER_DETAILS_REQUEST,
        payload:data
    }
}

export const saveUserDetailsSuccess = (data)=>{
    return {
        type:AppConstant.SAVE_USER_DETAILS_SUCCESS,
        payload:data
    }
}

export const saveUserDetailsFail = () =>{
    return {
        type:AppConstant.SAVE_USER_DETAILS_FAIL,
    }
}