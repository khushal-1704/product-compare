import { useEffect } from "react";
import {
  Row,
  Col,
  Breadcrumb,
  Button,
} from "antd";
import { NavLink, Link } from "react-router-dom";

import { profile, toggler } from "../../assets/svgs";


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
          <Button
            type="link"
            className="sidebar-toggler"
          >
            {toggler}
          </Button>
          <Link to="/sign-in" className="btn-sign-in">
            {profile}
            <span>Sign in</span>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default Header;
