import { createLazyFileRoute } from '@tanstack/react-router'
import { Typography, Row, Col, Empty } from 'antd'
import { BookCard } from '../components/BookCard'
import type { Book } from '../types'

const { Title } = Typography

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const mockBooks: Book[] = [
    {
      book_id: '1',
      title: 'Книга траляля',
      description: 'Супер крутая книга надо почитать',
      pages: 320,
      rating: 4.8,
      created_at: '2026-01-01',
      cover_url:'https://images.unsplash.com/photo-1511108690759-009324a90311?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author_id: {
        user_id: '1',
        username: 'faye_writer',
        first_name: 'Faye',
        last_name: 'Verse',
        role: 'writer',
        email: 'faye@example.com',
        password: '', 
        bio: 'Writing stories from the heart.'
      },
      genre_id: {
        genre_id: '1',
        name: 'Фантастика',
        description: 'Books exploring human nature and behavior.'
      }
    }
  
  ]

  return (
    <div style={{ padding: '20px 0' }}>
      <Title level={2} style={{ marginBottom: 32 }}>Доступные книги</Title>
      
      {mockBooks.length > 0 ? (
        <Row gutter={[24, 24]}>
          {mockBooks.map((book) => (
            <Col key={book.book_id} xs={24} sm={12} md={8} lg={6}>
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