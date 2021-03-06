import { useEffect, useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { connect, InferThunkActionCreatorType } from 'react-redux';
import { useAppSelector } from 'src/hooks/useAppStore';
import { Book } from 'src/store/BooksStore/Books.types';
import { AddToCartAction } from 'src/store/CartStore/Cart.actions';
import { addToCart } from 'src/store/CartStore/Cart.actions';
import { CartItem } from 'src/store/CartStore/Cart.types';
import * as S from './styles';

interface BookCoverProps {
    book: Book;
    addToCart: InferThunkActionCreatorType<AddToCartAction>;
}

const BookCover: React.FC<BookCoverProps> = ({ book, addToCart }) => {
    const [added, setAdded] = useState(false);
    const { title, cover_url, author, pages, price, id } = book;
    const cart = useAppSelector(state => state.cartStore.cart);

    const isInCart = cart?.find(item => item.id === id);

    const handleAddToCart = () => {
        const cartItem: CartItem = {
            title,
            cover_url,
            id,
            price,
            quantity: 1,
        };

        addToCart(cartItem);
        setAdded(true);
    };

    useEffect(() => {
        if (added) {
            const addedTimeout = setTimeout(() => {
                setAdded(false);
            }, 800);

            return () => clearTimeout(addedTimeout);
        }
    });

    return (
        <>
            <S.Book>
                <Card.Img variant="top" src={cover_url} />
                <S.BookBody>
                    <Card.Title>{title}</Card.Title>
                    <div>
                        <Card.Text>
                            Liczba stron: <span>{pages}</span>
                        </Card.Text>
                    </div>
                    <div>
                        <Card.Text>
                            Autor: <span>{author}</span>
                        </Card.Text>
                    </div>
                    <div>
                        <Card.Text>
                            Cena: <span>{price} z??</span>
                        </Card.Text>
                    </div>
                    <Button
                        disabled={!!isInCart}
                        onClick={handleAddToCart}
                        variant={!!isInCart ? 'secondary' : 'dark'}>
                        {!!isInCart ? 'dodano do koszyka' : 'dodaj do koszyka'}
                    </Button>
                </S.BookBody>
            </S.Book>
            {added && (
                <S.SuccesAlertBox>
                    <Alert variant="success">Pomy??lnie dodano do koszyka</Alert>
                </S.SuccesAlertBox>
            )}
        </>
    );
};

export default connect(null, { addToCart })(BookCover);
