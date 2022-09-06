import {   combineReducers, applyMiddleware, compose } from 'redux'
import { legacy_createStore as createStore } from 'redux'
// import { combineReducers,configureStore,applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    // productDelete: productDeleteReducer,
    // productCreate: productCreateReducer,
    // productUpdate: productUpdateReducer,
    // productReviewCreate: productReviewCreateReducer,
    // productTopRated: productTopRatedReducer,

    cart: cartReducer,
    // userLogin: userLoginReducer,
    // userRegister: userRegisterReducer,
    // userDetails: userDetailsReducer,
    // userUpdateProfile: userUpdateProfileReducer,
    // userList: userListReducer,
    // userDelete: userDeleteReducer,
    // userUpdate: userUpdateReducer,

    // orderCreate: orderCreateReducer,
    // orderDetails: orderDetailsReducer,
    // orderPay: orderPayReducer,
    // orderListMy: orderListMyReducer,
    // orderList: orderListReducer,
    // orderDeliver: orderDeliverReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []
    
const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        // shippingAddress: shippingAddressFromStorage,
    },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
    )
export default store

