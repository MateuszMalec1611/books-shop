import { AxiosResponse } from 'axios';
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
    SetOnSuccess,
} from './Cart.types';

export type HandleOrderAction = (order: Order) => ThunkAction<void, CartState, {}, HandleOrder>;
export type AddToCartAction = (order: CartItem) => ThunkAction<void, CartState, {}, AddToCart>;
export type RemoveCartItemAction = (order: CartItem) => ThunkAction<void, CartState, {}, RemoveCartItem>;
export type SetOnSuccessCartAction = (state?: boolean) => ThunkAction<void, CartState, {}, SetOnSuccess>;

export const addToCart = (cartItem: CartItem) => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: cartItem,
});

export const removeCartItem = (cartItem: CartItem) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: cartItem,
});

export const setOnSuccessState = (state?: boolean) => ({
    type: CartActionTypes.SET_ON_SUCCESS,
    payload: state ?? undefined,
});

export const handleOrder: HandleOrderAction =
    (order: Order) => async (dispatch: Dispatch<CartDispatchTypes>) => {
        try {
            dispatch({ type: CartActionTypes.SET_ON_SUCCESS });
            dispatch({ type: CartActionTypes.SET_CART_ERROR });
            dispatch({ type: CartActionTypes.SET_LOADING, payload: true });

            const data: AxiosResponse<{ statusText: string }> = await sendOrder(order);
            console.log(data.statusText);
            if (data.statusText !== 'Created') throw new Error('Nie udało się złożyc zamówienia');

            dispatch({
                type: CartActionTypes.HANDLE_ORDER,
            });
            dispatch({ type: CartActionTypes.SET_ON_SUCCESS, payload: true });
        } catch (err: any) {
            if (err?.response?.data?.error?.message) {
                dispatch({
                    type: CartActionTypes.SET_CART_ERROR,
                    payload: err.response.data.error.message,
                });
            } else {
                dispatch({ type: CartActionTypes.SET_CART_ERROR, payload: err.message });
            }
        } finally {
            dispatch({ type: CartActionTypes.SET_LOADING, payload: false });
        }
    };
