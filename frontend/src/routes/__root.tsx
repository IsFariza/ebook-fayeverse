import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Layout, ConfigProvider } from 'antd';
import { fayeTheme } from '../theme/themeConfig';
import { Navbar } from '../components/Navbar';
import {AppFooter} from '../components/AppFooter'
import { Content } from 'antd/es/layout/layout';

export const Route = createRootRoute({
  component: () => (
    
    <ConfigProvider theme={fayeTheme}>
      <Layout style={{ minHeight: '100vh' }}>

        <Navbar />
        
        <Content style={{ padding: '24px', backgroundColor:'#F0E4D4' }}>
          <Outlet /> 
        </Content>

        <AppFooter />
        
      </Layout>
    </ConfigProvider>
  ),
});