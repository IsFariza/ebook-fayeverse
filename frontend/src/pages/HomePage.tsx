import { Typography, Row, Col, Empty } from 'antd'
import { BookCard } from '../components/BookCard'
import type { Book } from '../types/book'

const { Title } = Typography

export const HomePage = () => {
  const mockBooks: Book[] = [
    {
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
    }
  ]

  return (
    <div style={{ padding: '20px 0' }}>
      <Title level={2} style={{ marginBottom: 32 }}>Доступные книги</Title>
      {mockBooks.length > 0 ? (
        <Row gutter={[24, 24]}>
          {mockBooks.map((book) => (
            <Col key={book.id} xs={24} sm={12} md={8} lg={6}>
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      ) : (
        <Empty description="No books found in the archives." />
      )}
    </div>
  )
}