import { useState } from 'react';
import { Form, Input, Button, Card, Typography, message, Space, Divider } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from '@tanstack/react-router';

const { Title, Text } = Typography;

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      if (isLogin) {
        const res = await axios.post('/api/users/login/', {
          username: values.username,
          password: values.password,
        });
        
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        
        message.success('С возвращением на FayeVerse!');
        navigate({ to: '/' });
      } else {
        // REGISTER LOGI
        await axios.post('/api/users/register/', {
          username: values.username,
          email: values.email,
          password: values.password,
        });
        
        message.success('Регистрация прошла успешно. Войдите в аккаунт.');
        setIsLogin(true); // Switch to login mode
        form.resetFields(['email']); // Clear email but keep username for convenience
      }
    } catch (err: any) {
      const errorMsg = err.response?.data?.detail || 'Что-то пошло не так :(';
      message.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignSelf: 'center',
      minHeight: '80vh', 
      paddingTop: '50px' 
    }}>
      <Card style={{ width: '100%', maxWidth: 400, borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <Title level={2} style={{ color: '#5D4037' }}>
            {isLogin ? 'С возращением, читатель!' : 'Добро пожаловать на FayeVerse!'}
          </Title>
          <Text type="secondary">
            {isLogin ? 'Введите данные чтобы продолжить' : 'Создайте аккаунт чтобы начать читать'}
          </Text>
        </div>

        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Введите имя пользователя' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Имя пользователя" size="large" />
          </Form.Item>

          {!isLogin && (
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Введите ваш email' },
                { type: 'email', message: 'Пожалуйста введите корректный email' }
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
            </Form.Item>
          )}

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Введите пароль' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" size="large" />
          </Form.Item>

          <Button 
            type="primary" 
            htmlType="submit" 
            loading={loading} 
            block 
            size="large"
            style={{ backgroundColor: '#5D4037', borderColor: '#5D4037', marginTop: 10 }}
          >
            {isLogin ? 'Войти' : 'Зарегестрироваться'}
          </Button>
        </Form>

        <Divider />

        <div style={{ textAlign: 'center' }}>
          <Space>
            <Text>
              {!isLogin ? "Уже есть аккаунт?" : "Еще нет аккаунта?"}
            </Text>
            <Button type="link" onClick={() => setIsLogin(!isLogin)} style={{ padding: 0, color: '#5D4037' }}>
              {!isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
};