import { Button, Col, Row } from 'antd'
import React from 'react'
import { Typography,Image } from 'antd';
import '../css/mainContent.css';
import mainBg2 from '../assets/mainBg2.png';

const MainContent = () => {
  const { Title } = Typography;
  return (
    <div>
    <Row className='mainRowStyle'>
      <Col span={10} className='headingCol'>
        <Title className='headingText' level={1}>upgrade your <br /> lifestyle with <br /> <span className='gradientText'> snuggle </span></Title>
        <Button className='joinBtn' shape='round'>
            Join us
        </Button>
      </Col>
      <Col span={12}>
        <div className='mainbg'>
            <Image 
            src={mainBg2}
            preview={false}
            width={500}
            height={400}
            className='mainImg'
            alt='mainImg'
            />
        </div>
      </Col>
    </Row>

    <Row>
    <div className='secondBg'></div>
    
    </Row>
    </div>
  )
}

export default MainContent