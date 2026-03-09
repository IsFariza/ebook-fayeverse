export interface ReadingProgress {
    id: number;
    book: number;          
    current_page: number;
    
    percentage: number;    
    is_completed: boolean;
    updated_at: string;  
}