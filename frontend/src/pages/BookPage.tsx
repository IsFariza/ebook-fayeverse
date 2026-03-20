import { useParams } from '@tanstack/react-router';
import { Typography, Row, Col, Button, Space, Divider } from 'antd';
import { BookCard } from '../components/BookCard';
import type { Book } from '../types/book';
import { ReviewSection } from '../components/RevewSection';

const { Title, Paragraph, Text } = Typography;
const book: Book = {
    id: 1,
      title: 'Книга траляля',
      description: 'Супер крутая книга надо почитать',
      pages: 320,
      average_rating: 4.8,
      created_at: '2026-01-01',
      cover_url:'https://images.unsplash.com/photo-1511108690759-009324a90311?q=80&w=688&auto=format&fit=crop',
      author: 1,
      author_name: 'Faye',
      genre: 1,
      genre_name: 'Fantasy'
  };

const similarBooks: Book[] = Array(3).fill(book).map((b, i) => ({ ...b, id: i + 100 }));


export const BookPage = () => {
  const { bookId } = useParams({ from: '/books/$bookId' });

  

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>

      <Row gutter={[54, 22]} align="middle">
        <Col xs={24} md={8}>
          <div style={{ 
            background: '#ECEBDE', 
            padding: '10px', 
            borderRadius: '12px', 
            display: 'flex', 
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <img 
              src={book.cover_url} 
              alt={book.title} 
              style={{ width: '100%', maxWidth: '310px', borderRadius: '8px', objectFit: 'cover' }} 
            />
          </div>
        </Col>
        
        <Col xs={24} md={16}>
          <Space direction="vertical" size="large">
            <div>
              <Title style={{ margin: 0, fontSize: '38px' }}>{book.title}</Title>
              <Text type="secondary" style={{ fontSize: '30px' }}>{book.genre_name}</Text>
            </div>
            
            <Paragraph style={{ fontSize: '20px', lineHeight: '1.6', color: '#555' }}>
              {book.description}
            </Paragraph>

            <Space size="middle">
              <Button type="primary" size="large" style={{ backgroundColor: '#5D4037', borderColor: '#5D4037', height: '45px', padding: '0 30px' }}>
                Читать сейчас
              </Button>
              <Button size="large" style={{ color: '#5D4037', borderColor: '#5D4037', height: '45px', padding: '0 30px' }}>
                Добавить в Библиотеку
              </Button>
            </Space>
          </Space>
        </Col>
      </Row>
<Divider style={{ margin: '60px 0' }} />
      <ReviewSection bookId={bookId} /> 

      <Divider style={{ margin: '60px 0' }} />

      <Title level={2} style={{ marginBottom: '40px' }}>Похожие книги</Title>
      <Row gutter={[24, 24]}>
        {similarBooks.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8}>
            <BookCard book={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};