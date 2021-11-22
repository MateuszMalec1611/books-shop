import { BooksActionTypes, BooksDispatchTypes, BooksState } from './Books.types';

const defaultState: BooksState = {
    books: undefined,
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

        default:
            return state;
    }
};

export default BooksReducer;
