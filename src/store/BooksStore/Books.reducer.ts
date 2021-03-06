import { BooksActionTypes, BooksDispatchTypes, BooksState } from './Books.types';

const defaultState: BooksState = {
    books: undefined,
    loading: false,
    error: undefined,
};

const BooksReducer = (
    state: BooksState = defaultState,
    action: BooksDispatchTypes
): typeof defaultState => {
    switch (action.type) {
        case BooksActionTypes.SET_BOOKS:
            return {
                ...state,
                books: {
                    metadata: action.payload.metadata,
                    booksList: {
                        ...state.books?.booksList,
                        [action.payload.metadata.page]: action.payload.booksList,
                    },
                },
            };
        case BooksActionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload ?? false,
            };
        case BooksActionTypes.SET_BOOKS_ERROR:
            return {
                ...state,
                error: action.payload ?? undefined,
            };

        default:
            return state;
    }
};

export default BooksReducer;
