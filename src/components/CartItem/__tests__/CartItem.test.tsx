import { render, screen } from '@testing-library/react';
import { cartItemGenerator } from 'src/mocks/cart';
import { CartItemProps } from '../CartItem';
import CartItem from '../CartItem';
import store from 'src/store/Store';
import { Provider } from 'react-redux';

const cartItemProps: CartItemProps = {
    cartItem: cartItemGenerator(),
    addToCart: jest.fn(),
    removeCartItem: jest.fn(),
};

const Wrapper = ({ children }: any) => <Provider store={store}>{children}</Provider>;

describe('Cart item', () => {
    it('should display item title', () => {
        render(<CartItem {...cartItemProps} />, { wrapper: Wrapper });

        expect(screen.getByTestId('CartItem_Title')).toHaveTextContent(
            cartItemProps.cartItem.title
        );
    });
});
