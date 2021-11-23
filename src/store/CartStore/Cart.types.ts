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

export type CartDispatchTypes = AddToCart | RemoveCartItem | HandleOrder | SendLoading;

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
    type: CartActionTypes.LOADING;
    payload?: boolean;
}

export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
    HANDLE_ORDER = 'HANDLE_ORDER',
    LOADING = 'LOADING',
}
