import { Layout, Space } from "antd";
import { GithubOutlined, InstagramOutlined } from '@ant-design/icons'; 

const { Footer } = Layout

export const AppFooter = () => (
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
)