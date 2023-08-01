import { Row, Col, Image, Typography } from "antd";
import React from "react";
import gridImgOne from "../assets/gridImageOne.png";
import gridImgTwo from "../assets/gridImageTwo.png";
import gridImgThree from "../assets/gridImageThree.png";
import "../css/imageGrid.css";

const ImageGridCard = () => {
  return (
    <Row>
      <Col span={10} className="imageGridCol">
        <div>
          <Image
            src={gridImgTwo}
            alt="imgTwo"
            width={120}
            preview={false}
            style={{ marginRight: 20 }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <Image
            src={gridImgOne}
            alt="imgOne"
            width={150}
            preview={false}
            style={{ margin: 10 }}
          />
          <Image
            src={gridImgThree}
            alt="imgThree"
            width={120}
            preview={false}
            style={{ margin: 10 }}
          />
        </div>
      </Col>

      <Col span={10} className="imageGridCol">
        <Typography.Title level={1} className="imageGridText">
          A Subscription <br /> To make Your <br /> Life Style <br />{" "}
          <span className="gradientText"> Better </span>
        </Typography.Title>
      </Col>
    </Row>
  );
};

export default ImageGridCard;
