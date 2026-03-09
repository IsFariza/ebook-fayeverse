import { Layout, Menu, Button } from "antd"
import { Link } from '@tanstack/react-router'
import logoImg from '../assets/logo.png'

const{Header} = Layout

export const Navbar = () =>(
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
)