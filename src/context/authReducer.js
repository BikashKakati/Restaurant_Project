const LOCAL_STORAGE_KEY = "AUTH_DATA";

export const INITIAL_STATE = {
    currentUser:localStorage.getItem(LOCAL_STORAGE_KEY) || null,
}

export const actionType = {
    LOG_IN :"LOG_IN",
    LOG_OUT:"LOG_OUT",
}

export function authReducer(state,action){
    switch(action.type){
        case actionType.LOG_IN:
            return{
                currentUser:action.payload,
            }
        case actionType.LOG_OUT:
            return{
                currentUser:null,
            }
        default:
            return state;
    }
}