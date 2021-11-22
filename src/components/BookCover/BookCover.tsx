import { Card, Button } from 'react-bootstrap';
import { Book } from 'src/store/BooksStore/Books.types';
import * as S from './styles';

interface BookCoverProps {
    book: Book;
}

const BookCover: React.FC<BookCoverProps> = ({
    book: { title, cover_url, author, pages, price },
}) => {
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
                <Button variant="dark">dodaj do koszyka</Button>
            </S.BookBody>
        </S.Book>
    );
};

export default BookCover;
