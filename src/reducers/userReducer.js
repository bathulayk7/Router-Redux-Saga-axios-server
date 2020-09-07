import { USER_LOGGEDOUT, USER_LOGGEDIN } from "../config/actionTypes"

const initialState=null
export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case USER_LOGGEDIN:
            return action.user
        case USER_LOGGEDOUT:
            return initialState
            default:return state
            
    }
}