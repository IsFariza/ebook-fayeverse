
export interface User{
    id: number;
    role: 'admin' | 'moderator' | 'writer' | 'reader';
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    bio: string;
    avatar_img_url: string
}