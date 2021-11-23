export interface CartState {
    cart: CartItem[] | [];
    totalAmount: number;
    loading: boolean;
    error?: string;
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

export type CartDispatchTypes = AddToCart | RemoveCartItem | HandleOrder | SendLoading | SendError;

export interface AddToCart {
    type: CartActionTypes.ADD_TO_CART;
    payload: CartItem;
}

export interface RemoveCartItem {
    type: CartActionTypes.REMOVE_CART_ITEM;
    payload: CartItem;
}

export interface HandleOrder {
    type: CartActionTypes.HANDLE_ORDER;
}

export interface SendLoading {
    type: CartActionTypes.SET_LOADING;
    payload?: boolean;
}

export interface SendError {
    type: CartActionTypes.SET_CART_ERROR;
    payload?: string;
}

export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
    HANDLE_ORDER = 'HANDLE_ORDER',
    SET_LOADING = 'SET_LOADING',
    SET_CART_ERROR = 'SET_CART_ERROR',
}
