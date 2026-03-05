import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { Layout, ConfigProvider, Menu, Button, Space} from 'antd';
import { fayeTheme } from '../theme/themeConfig';
import { GithubOutlined, InstagramOutlined } from '@ant-design/icons';
import logoImg from '../assets/logo.png'
const { Header, Content, Footer } = Layout;

export const Route = createRootRoute({
  component: () => (
    
    <ConfigProvider theme={fayeTheme}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ 
          padding: '0',
          display: 'flex', 
          alignItems: 'center', 
          backgroundColor: '#C9B59C' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%'
            }}> 
            
            <img src={logoImg} alt='FayeVerse logo' style={{
              height: '64px',
              marginRight: '10px'
            }} />

            <span style={{fontWeight: 'bold', color: '#664343'}}>FayeVerse</span>
            </div>


            <Menu 
              mode = 'horizontal' 
              style = {{
                backgroundColor: 'transparent', 
                flex: 1,
                border: 'none',
                justifyContent: 'flex-end'
              }}

              items={[
                {key: 'main', label: <Link to='/'>Главная</Link>},
                {key: 'library', label: <Link to='/library'>Моя Библиотека</Link>},
                {key: 'support', label: <Link to='/support'>Поддержка</Link>},
              ]}
              />

              <div style={{paddingRight: '20px'}}>
                <Button style={{backgroundColor:'#664343', color:'#C9B59C', borderRadius:'8px'}}>
                  Мой профиль
                </Button>
              </div>
        </Header>
        
        <Content style={{ padding: '24px', backgroundColor:'#F0E4D4' }}>
          <Outlet /> 
        </Content>

        <Footer style={{ textAlign: 'center', background: '#C9B59C', color: '#664343' }}>
          <Space direction="vertical" size="small">
          <div style={{ fontWeight: 'bold' }}>FayeVerse ©2026</div>
          
          <Space size="large" style={{ fontSize: '24px' }}>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#664343' }}
            >
              <GithubOutlined />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#664343' }}
            >
              <InstagramOutlined />
            </a>
          </Space>
        </Space>
        </Footer>
      </Layout>
    </ConfigProvider>
  ),
});