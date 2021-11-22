import { ThunkAction } from 'redux-thunk';

export interface CartState {
    cart: CartItem[] | [];
    totalAmount: number;
    loading: boolean;
}

export type CartItem = {
    id: number;
    title: string;
    cover_url: string;
    price: number;
    quantity: number;
};

export type Order = {
    order: {
        id: number;
        quantity: number;
    }[];
    first_name: string;
    last_name: string;
    city: string;
    zip_code: string;
};

export type CartDispatchTypes = AddToCart | RemoveCartItem | SendOrder | SendLoading;

export type SendOrderAction = (order: Order) => ThunkAction<void, CartState, {}, SendOrder>;
export type AddToCartAction = (order: CartItem) => ThunkAction<void, CartState, {}, AddToCart>;
export type RemoveCartItemAction = (
    order: CartItem
) => ThunkAction<void, CartState, {}, RemoveCartItem>;

export interface AddToCart {
    type: CartActionTypes.ADD_TO_CART;
    payload: CartItem;
}

export interface RemoveCartItem {
    type: CartActionTypes.REMOVE_CART_ITEM;
    payload: CartItem;
}

export interface SendOrder {
    type: CartActionTypes.SEND_ORDER;
}

export interface SendLoading {
    type: CartActionTypes.LOADING;
    payload?: boolean;
}

export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
    SEND_ORDER = 'SEND_ORDER',
    LOADING = 'LOADING',
}
