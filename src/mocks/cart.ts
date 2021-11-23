import { CartItem } from 'src/store/CartStore/Cart.types';

export const cartItemGenerator = (props?: Partial<CartItem>): CartItem => {
    return {
        id: 0,
        title: 'test title',
        cover_url: 'testUrl',
        price: 100,
        quantity: 1,
        ...props,
    };
};

