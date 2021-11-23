import { Book, Metadata } from 'src/store/BooksStore/Books.types';

export const bookGenerator = (props?: Partial<Book>): Book => {
    return {
        id: 0,
        title: 'test title',
        author: 'test author',
        cover_url: 'testUrl',
        pages: 0,
        price: 100,
        currency: 'PLN',
        ...props,
    };
};

export const metadataGenerator = (props?: Partial<Metadata>): Metadata => {
    return {
        page: 1,
        records_per_page: 0,
        total_records: 0,
        ...props,
    };
};

