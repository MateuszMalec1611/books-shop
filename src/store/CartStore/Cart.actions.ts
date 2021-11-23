import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { sendOrder } from './Cart.services';
import {
    AddToCart,
    CartActionTypes,
    CartDispatchTypes,
    CartItem,
    CartState,
    HandleOrder,
    Order,
    RemoveCartItem,
} from './Cart.types';

export type HandleOrderAction = (order: Order) => ThunkAction<void, CartState, {}, HandleOrder>;
export type AddToCartAction = (order: CartItem) => ThunkAction<void, CartState, {}, AddToCart>;
export type RemoveCartItemAction = (order: CartItem) => ThunkAction<void, CartState, {}, RemoveCartItem>;

export const addToCart = (cartItem: CartItem) => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: cartItem,
});

export const removeCartItem = (cartItem: CartItem) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: cartItem,
});

export const handleOrder: HandleOrderAction =
    (order: Order) => async (dispatch: Dispatch<CartDispatchTypes>) => {
        try {
            dispatch({ type: CartActionTypes.LOADING, payload: true });

            const data = await sendOrder(order);
            console.log(data);

            dispatch({
                type: CartActionTypes.HANDLE_ORDER,
            });
        } catch (err: any) {
            console.log(err);
        } finally {
            dispatch({ type: CartActionTypes.LOADING, payload: false });
        }
    };
