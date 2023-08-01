import { Row, Col, Typography } from "antd";
import React from "react";
import "../css/memberShip.css";
import { MemberShipData } from "../../constants/MemberShip";
import MemberShipCard from "./MemberShipCard";

const MemberShip = () => {
  return (
    <Row>
      <Col span={24}>
        <Typography.Text className="memberShipTitle">
          Membership Benefits
        </Typography.Text>
      </Col>
      <Col className="membership-img-container" span={24}>
        {MemberShipData.map((ele: any, index: number) => {
          return (
            <MemberShipCard
              icon={ele.icon}
              title={ele.title}
              subtitle={ele.subtitle}
              key={index}
            />
          );
        })}
      </Col>
    </Row>
  );
};

export default MemberShip;
