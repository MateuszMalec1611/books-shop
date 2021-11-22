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

export type CartDispatchTypes = AddToCart;

export interface AddToCart {
    type: typeof CartActionTypes.ADD_TO_CART;
    payload: CartItem;
}

export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
}
