import { connect, InferThunkActionCreatorType } from 'react-redux';
import { RootState } from 'src/store/Store';
import { fetchBooks } from 'src/store/BooksStore/Books.services';
import { Books, FetchBooksAction } from 'src/store/BooksStore/Books.types';
import { useEffect } from 'react';
import BookCover from 'src/components/BookCover/BookCover';
import { Container, Row } from 'react-bootstrap';
import * as S from './styles';

export interface HomeProps {
    books?: Books;
    fetchBooks: InferThunkActionCreatorType<FetchBooksAction>;
}

const Home: React.FC<HomeProps> = ({ books, fetchBooks }) => {
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    const booksList = books?.booksList[1].map(book => (
        <S.BookCol key={book.id}>
            <BookCover book={book} />
        </S.BookCol>
    ));

    return (
        <Container fluid>
            <Row xs={1} md={2} lg={3} xl={4}>
                {booksList}
            </Row>
        </Container>
    );
};

const mapStateToProps = (state: RootState) => ({
    books: state.booksStore.books,
});

export default connect(mapStateToProps, { fetchBooks })(Home);
