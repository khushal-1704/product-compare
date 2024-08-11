import { useEffect } from "react";
import {
  Row,
  Col,
  Breadcrumb,
} from "antd";
import { NavLink, Link } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";


function Header({
  name,
}) {

  useEffect(() => window.scrollTo(0, 0));


  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">Page</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              {name.replace("/", "") ? name.replace("/", "") : 'Products Table'}
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={24} md={18} className="header-control">
          <Link to="/sign-in" className="btn-sign-in">
            <div className="">
              <UserOutlined />
              <span style={{ fontSize: '16px', margin: '0px 10px' }}>Greetings User</span>
            </div>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default Header;
