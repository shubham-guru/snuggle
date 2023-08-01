import React from "react";
import { Typography, Row, Col, Image } from "antd";
import "../css/memberShipCard.css";

const { Text } = Typography;

type myProps = {
  icon: string;
  title: string;
  subtitle: string;
};

const MemberShipCard: React.FC<myProps> = ({ icon, title, subtitle }) => {
  return (
    <Col className="card-container" span={8} >
      <Image width={80} src={icon} preview={false}></Image>
      <Text className="membership-card-title">{title}</Text>
      <Text className="membership-card-subtitle">{subtitle}</Text>
    </Col>
  );
};

export default MemberShipCard;
