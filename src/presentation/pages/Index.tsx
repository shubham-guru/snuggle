import React from 'react'
import { Col, Layout, Space, Typography } from 'antd';
import NavBar from '../components/NavBar';
import '../css/index.css'
import MainContent from '../components/MainContent';
import ImageGridCard from '../components/ImageGridCard';
import Works from '../components/Works';
import MemberShip from '../components/MemberShip';
import Sustainability from '../components/Sustainability';
import MyFooter from '../components/MyFooter';


const Index = () => {
    const { Header, Footer, Content } = Layout;
  return (
    <Space direction="vertical" className='mainSpace' size={[0, 48]}>
    <Layout>
      <Header className='containerStyle'>
        <NavBar />
      </Header>
      <Content className='containerStyle'>
        <MainContent />
        <ImageGridCard />
        <div className="thirdBg"></div>
        <Works />
        <MemberShip />
        <Sustainability/>
        <MyFooter/>
      </Content>
    </Layout>
  </Space>
  )
}

export default Index