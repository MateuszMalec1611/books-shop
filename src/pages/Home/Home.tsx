import { connect, InferThunkActionCreatorType } from 'react-redux';
import { RootState } from 'src/store/Store';
import { fetchBooks } from 'src/store/BooksStore/Books.services';
import { Books, FetchBooksAction } from 'src/store/BooksStore/Books.types';
import { useEffect } from 'react';

export interface HomeProps {
    books?: Books;
    fetchBooks: InferThunkActionCreatorType<FetchBooksAction>;
}

const Home: React.FC<HomeProps> = ({ books, fetchBooks }) => {
    console.log(books);
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return <div>Home</div>;
};

const mapStateToProps = (state: RootState) => ({
    books: state.booksStore.books,
});

export default connect(mapStateToProps, { fetchBooks })(Home);
