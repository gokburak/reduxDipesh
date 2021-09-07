import { ActionTypes } from "../contants/actionsTypes";

const itinialState = {
    products:[]
}


export const productReducer =(state=itinialState,{type,payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
            default:
                return state
    }
}