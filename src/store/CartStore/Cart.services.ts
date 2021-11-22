import { Dispatch } from 'react';
import api from 'src/api';
import { CartActionTypes, CartDispatchTypes, CartItem, Order, SendOrderAction } from './Cart.types';

export const addToCart = (cartItem: CartItem) => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: cartItem,
});

export const removeCartItem = (cartItem: CartItem) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: cartItem,
});

export const sendOrder: SendOrderAction =
    (order: Order) => async (dispatch: Dispatch<CartDispatchTypes>) => {
        try {
            dispatch({ type: CartActionTypes.LOADING, payload: true });

            const data = await api().post(`order`, order);
            console.log(data);
            dispatch({
                type: CartActionTypes.SEND_ORDER,
            });
        } catch (err: any) {
            console.log(err);
        } finally {
            dispatch({ type: CartActionTypes.LOADING, payload: false });
        }
    };
