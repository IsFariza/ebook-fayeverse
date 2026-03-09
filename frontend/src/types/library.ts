import type { Book } from './book';

export interface Library{
    id: number;
    name: string;
    is_public: boolean;
    books: Book[];
    books_count: number;
    is_owner: boolean;
    created_at: string
}

 