import React from "react";
import { Row, Col, Typography, Image } from "antd";
import "../css/sustainability.css";
import arrow from '../assets/Union.png'
import earth from '../assets/earth.png'

const {Text, Title} = Typography

const Sustainability = () => {
  return (
    <Row>
      <Col span={24}>
        <Text className="sustainability-title">
          Bringing Sustainability
        </Text>
      <Title level={1} className="gradientText factText"># FACT</Title>
      <Image alt='earthImg' width={120} src={earth} className="earthImg" />
      </Col>
     
        <Col span={20} className="big-img-container">
            <Text className="sustainability-img-text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
        </Col>
        <Col span={3} offset={1} className="small-img-container">
            {/* image container */}
        </Col>
        <Col span={24} style={{marginTop:'450px'}}>
            <Image src={arrow} width={30} className="arrow" />
            <Text className="sustainability-bottom-text">Sad right ?<span className="gradientText"> You can change this</span></Text>
        </Col>
    </Row>
  );
};

export default Sustainability;
