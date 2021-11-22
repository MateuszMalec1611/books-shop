import { Card, Button } from 'react-bootstrap';
import { useAppDispatch } from 'src/hooks/useAppStore';
import { Book } from 'src/store/BooksStore/Books.types';
import { updateStore } from 'src/store/CartStore/Cart.services';
import * as S from './styles';

interface BookCoverProps {
    book: Book;
}

const BookCover: React.FC<BookCoverProps> = ({ book }) => {
    const dispatch = useAppDispatch();
    const { title, cover_url, author, pages, price } = book;
    
    const handleAddToCart = () => {
        dispatch(updateStore(book, 1));
    };

    return (
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
                        Cena: <span>{price} zł</span>
                    </Card.Text>
                </div>
                <Button onClick={handleAddToCart} variant="dark">
                    dodaj do koszyka
                </Button>
            </S.BookBody>
        </S.Book>
    );
};

export default BookCover;
