export interface Book {
    book_id: string;
    title: string;
    description: string;
    pages: number;
    rating: number;
    genre_id: string;
    author_id: string;
    created_at: string
}

export interface User{
    user_id: string;
    role: 'admin' | 'moderator' | 'writer' | 'reader';
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    bio: string;
}
export interface ReadingProgress{
    progress_id: string;
    user_id: string;
    book_id: string;
    last_chapter_read: number;
    last_read_at: string;
}
export interface Review{
    review_id: string;
    user_id: string;
    book_id: string;
    rating:number;
    comment: string;
}
export interface Library{
    lirary_id: string;
    user_id: string;
    books_num: number;
}
export interface Genre{
    genre_id: string;
    name: string;
    description: string;
}