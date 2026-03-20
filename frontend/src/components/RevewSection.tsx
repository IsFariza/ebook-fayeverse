import { useEffect, useState } from "react"
import { Typography, Rate, Form, Input, Button, message, List, Space } from "antd"
import axios from 'axios'

const{ Title, Text, Paragraph } = Typography

interface ReviewSectionProps{
    bookId: string
}
const MOCK_REVIEWS = [
  { id: 1, user: 1, rating: 5, comment: "Amazing book!" },
  { id: 2, user: 2, rating: 4, comment: "I really enjoyed the characters." }
];

export const ReviewSection = ({bookId}: ReviewSectionProps) => {
    const [reviews, setReviews] = useState<any[]>([])
    const [isReading, setIsReading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm()


useEffect(() => {
  if (reviews.length === 0) {
    setReviews(MOCK_REVIEWS);
  }
}, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const [reviewRes, progressRes] = await Promise.all ([
    //                 axios.get(`/api/reviews/?book=${bookId}`),
    //                 axios.get(`/api/progress/`)
    //             ])
    //             setReviews(reviewRes.data)
    //             const readingThis = progressRes.data.some((p: any) => p.book === Number(bookId))
    //             setIsReading(readingThis)
    //         } catch (e){
    //             console.error('Error fetching review data', e)
    //         }
    //     }
    //     fetchData()
    // }, [bookId])

    const onFinish = async (values: any) => {
        setLoading(true)
        try{
            const response = await axios.post('/api/reviews/', {
                ...values, 
                book: Number(bookId)
            })
            setReviews([response.data, ...reviews])
            message.success("Отзыв опубликован!")
            form.resetFields()
        } catch (e){
            message.error("Ошибка при публикации отзыва")
        } finally{
            setLoading(false)
        }
    }
        return (
    <div style={{ marginTop: '40px' }}>
      <Title level={3}>Отзывы</Title>

      {isReading ? (
        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', marginBottom: '24px', border: '1px solid #f0f0f0' }}>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item name="rating" label="Оценка" rules={[{ required: true }]}>
              <Rate />
            </Form.Item>
            <Form.Item name="comment" label="Ваш отзыв" rules={[{ required: true }]}>
              <Input.TextArea rows={4} placeholder="Что вы думаете о книге?" />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} style={{ backgroundColor: '#5D4037', borderColor: '#5D4037' }}>
              Отправить
            </Button>
          </Form>
        </div>
      ) : (
        <div style={{ padding: '20px', background: '#ECEBDE', borderRadius: '12px', marginBottom: '24px' }}>
          <Text italic>Только читатели могут оставлять отзывы.</Text>
        </div>
      )}

      <List
        itemLayout="horizontal"
        dataSource={reviews}
        renderItem={(item) => (
          <List.Item style={{ background: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
            <Space direction="vertical" size={0}>
              <Text strong>User #{item.user}</Text>
              <Rate disabled defaultValue={item.rating} style={{ fontSize: 12 }} />
              <Paragraph style={{ marginTop: 8 }}>{item.comment}</Paragraph>
            </Space>
          </List.Item>
        )}
      />
    </div>
  );
    }
