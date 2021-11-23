import { useEffect, useState } from 'react';
import { connect, InferThunkActionCreatorType } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { RootState } from 'src/store/Store';
import { setBooks } from 'src/store/BooksStore/Books.actions';
import { Books } from 'src/store/BooksStore/Books.types';
import BookCover from 'src/components/BookCover/BookCover';
import { Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import useScrollPosition from '@react-hook/window-scroll';
import Loader from 'src/components/Loader/Loader';
import { SetBooksAction } from 'src/store/BooksStore/Books.actions';
import Alert from 'src/components/Alert/Alert';
import * as S from './styles';

export interface HomeProps {
    books?: Books;
    loading: boolean;
    error?: string;
    setBooks: InferThunkActionCreatorType<SetBooksAction>;
}

const Home: React.FC<HomeProps> = ({ books, loading, error, setBooks }) => {
    let navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const scrollY = useScrollPosition(60);
    const [pageCount, setPagCount] = useState<null | number>(null);
    const getCurrentPage = searchParams.get('page');
    const page = getCurrentPage ? +getCurrentPage : 1;
    console.log(error);

    useEffect(() => {
        if (books?.metadata)
            setPagCount(
                Math.ceil(books?.metadata.total_records / books?.metadata.records_per_page)
            );
    }, [books?.metadata]);

    useEffect(() => {
        if (!books?.booksList[page]) setBooks(page);
    }, [books?.booksList, page, setBooks]);

    const booksList = books?.booksList[page]?.map(book => (
        <S.BookCol key={book.id}>
            <BookCover book={book} />
        </S.BookCol>
    ));

    const handlePageChange = (event: { selected: number }) => {
        navigate(
            {
                pathname: '/',
                search: `?page=${event.selected + 1}`,
            },
            { replace: false }
        );
    };

    const handleTop = () => window.scrollTo(0, 0);

    return (
        <Container fluid>
            {!loading && !!booksList?.length && !error && (
                <Row xs={1} md={2} lg={3} xl={4}>
                    {booksList}
                </Row>
            )}
            {pageCount && !!booksList?.length && !error && (
                <S.PaginationWrapper xs={12}>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageChange}
                        pageRangeDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="<"
                        marginPagesDisplayed={0}
                        initialPage={page - 1}
                        activeLinkClassName="active"
                        disabledClassName="disabled"
                    />
                </S.PaginationWrapper>
            )}
            {!loading && !booksList?.length && !error && (
                <Alert space={true} variant="warning">
                    Obecnie nie posiadamy żadnych ksiązek w sprzedaży
                </Alert>
            )}
            {loading && <Loader />}
            {!!error && !loading && (
                <Alert space={true} variant="danger">
                    {error}
                </Alert>
            )}
            {scrollY > 800 && <S.TopArrow onClick={handleTop}>^</S.TopArrow>}
        </Container>
    );
};

const mapStateToProps = (state: RootState) => ({
    books: state.booksStore.books,
    loading: state.booksStore.loading,
    error: state.booksStore.error,
});

export default connect(mapStateToProps, { setBooks })(Home);
