import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Card, Button, Typography, Space, Rate } from 'antd';
import type { Book } from '../types/book';

const { Text, Title, Paragraph } = Typography;

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop';

export const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(book.cover_url || FALLBACK_IMAGE);

  const handleNavigate = () => {
    navigate({
      to: '/books/$bookId',
      params: {bookId: book.id.toString()}
    })
  }

  return (
    <Card
      hoverable
      onClick={handleNavigate}
      style={{ width: 300, borderRadius: '12px', overflow: 'hidden' }}
      cover={
        <div style={{ height: '400px', background: '#f0f2f5' }}>
          <img
            alt={book.title}
            src={imgSrc}
            onError={() => setImgSrc(FALLBACK_IMAGE)}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
          />
        </div>
      }
    >
      <Card.Meta
        title={<Title level={4} style={{ margin: 0 }}>{book.title}</Title>}
        description={
          <Space direction="vertical" size={0} style={{ width: '100%' }}>
            <Text type="secondary">{book.genre_name}</Text>
            <Rate disabled defaultValue={book.average_rating} style={{ fontSize: 14, color: '#3d2b1f'}} />
            <Paragraph ellipsis={{ rows: 2 }} style={{ marginTop: 8 }}>
              {book.description}
            </Paragraph>
          </Space>
        }
      />

      <div style={{ marginTop: 20 }}>
        <Space direction="vertical" style={{ width: '100%' }} size={10}>
          <Button 
            type="primary" 
            block 
            shape="round" 
            size="large"
            onClick={(e) => {
              e.stopPropagation();
              navigate({ to: `/read/${book.id}` })
            }}

          >
            Читать сейчас
          </Button>
          <Button 
            type="default" 
            block 
            shape="round"
            onClick={(e) => {
              e.stopPropagation();
              navigate({ to: '/library' })
            }}
          >
            Добавить в Библиотеку
          </Button>
        </Space>
      </div>
    </Card>
  );
};