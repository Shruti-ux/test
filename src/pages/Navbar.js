import React from "react";
import { Layout, Avatar, Badge } from "antd";
import { BellOutlined, LineChartOutlined } from "@ant-design/icons";
// import "antd/dist/antd.css";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 20,
      }}
    >
      <div style={{ paddingLeft: 20, fontSize: "20px", fontWeight: "bold" }}>
        Sancus
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Badge count={1} style={{ backgroundColor: "#faad14" }}>
          <LineChartOutlined style={{ fontSize: "20px", marginRight: 24 }} />
        </Badge>
        <Badge count={1} style={{ backgroundColor: "#faad14" }}>
          <BellOutlined style={{ fontSize: "20px", marginRight: 24 }} />
        </Badge>
        <Avatar style={{ backgroundColor: "#1890ff" }}>AS</Avatar>
      </div>
    </Header>
  );
};

export default Navbar;
