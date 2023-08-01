import React from "react";
import { Col, Row, Image } from "antd";
import logo from "../assets/logo.png";
import { Typography } from "antd";
import { Navbar } from "../../constants/Navbar";
import "../css/navbar.css";

const NavBar = () => {
  const { Link } = Typography;
  return (
    <Row>
      <Col span={10} push={14}>
        {Navbar.map((item: { name: string; link: string }, index: number) => {
          return (
            <Link href={item.link} key={index} className="navLink">
              {item.name}
            </Link>
          );
        })}
      </Col>
      <Col span={8} pull={12}>
        <Image width={50} src={logo} preview={false} />
      </Col>
    </Row>
  );
};

export default NavBar;
