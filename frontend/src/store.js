import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {  cartReducer} from './reducers/cartReducer';
import { productDetailReducer, productListReducer } from './reducers/productReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer,
    cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
    //error is here something is wrong in cartItemsFrom Storage
    // cart: { cartItems:  cartItemsFromStorage}
}
const middleware = [thunk]

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))