import { useEffect, useState } from 'react';
import { connect, InferThunkActionCreatorType } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { RootState } from 'src/store/Store';
import { fetchBooks } from 'src/store/BooksStore/Books.services';
import { Books, FetchBooksAction } from 'src/store/BooksStore/Books.types';
import BookCover from 'src/components/BookCover/BookCover';
import { Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import * as S from './styles';

export interface HomeProps {
    books?: Books;
    fetchBooks: InferThunkActionCreatorType<FetchBooksAction>;
}

const Home: React.FC<HomeProps> = ({ books, fetchBooks }) => {
    let navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const getCurrentPage = searchParams.get('page');
    const page = getCurrentPage ? +getCurrentPage : 1;
    const [pageCount, setPagCount] = useState<null | number>(null);

    useEffect(() => {
        if (books?.metadata)
            setPagCount(
                Math.ceil(books?.metadata.total_records / books?.metadata.records_per_page)
            );
    }, [books?.metadata]);

    useEffect(() => {
        if (!books?.booksList[page]) fetchBooks(page);
    }, [books?.booksList, fetchBooks, page]);

    const booksList = books?.booksList[page]?.map(book => (
        <S.BookCol key={book.id}>
            <BookCover book={book} />
        </S.BookCol>
    ));

    const handlePageClick = (event: { selected: number }) => {
        navigate(
            {
                pathname: '/',
                search: `?page=${event.selected + 1}`,
            },
            { replace: false }
        );
    };

    return (
        <Container fluid>
            <Row xs={1} md={2} lg={3} xl={4}>
                {booksList}
            </Row>
            {pageCount && (
                <S.PaginationWrapper xs={12}>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
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
        </Container>
    );
};

const mapStateToProps = (state: RootState) => ({
    books: state.booksStore.books,
});

export default connect(mapStateToProps, { fetchBooks })(Home);
