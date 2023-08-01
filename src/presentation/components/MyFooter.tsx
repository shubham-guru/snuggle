import React from "react";
import { Row, Col, Typography, Button } from "antd";
import "../css/footer.css";

const { Text,Title } = Typography;

const MyFooter = () => {
  return (
    <Row className="footer-container">
      <Col span={24}>
        <Title level={3}>How Snuggle change this</Title>
      </Col>
      <Col span={24}>
      <Text style={{fontFamily: 'Poppins, sans-serif'}}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Text>
      </Col>
      <Col span={24}>
        <Button className="read-more-btn"> <b> Read More </b></Button>
      </Col>
    </Row>
  );
};

export default MyFooter;
