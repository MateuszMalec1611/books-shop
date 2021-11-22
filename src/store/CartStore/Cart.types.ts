import { ThunkAction } from 'redux-thunk';

export interface CartState {
    cart: CartItem[] | [];
    totalAmount: number;
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

export type CartDispatchTypes = AddToCart | RemoveCartItem | SendOrder;

export type SendOrderAction = (order: Order) => ThunkAction<void, CartState, {}, SendOrder>;

export interface AddToCart {
    type: typeof CartActionTypes.ADD_TO_CART;
    payload: CartItem;
}

export interface RemoveCartItem {
    type: typeof CartActionTypes.REMOVE_CART_ITEM;
    payload: CartItem;
}

export interface SendOrder {
    type: typeof CartActionTypes.SEND_ORDER;
}

export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
    SEND_ORDER = 'SEND_ORDER',
}
