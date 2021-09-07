import { ActionTypes } from "../contants/actionsTypes"


export const setProducts = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}  ;
export const selectedProduct = (product) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload:product,
    }
}  ;