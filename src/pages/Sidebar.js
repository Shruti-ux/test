import React from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
// import "antd/dist/antd.css";
import "./Sidebar.css"; // Make sure to create this CSS file

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={80} style={{ background: "#fff", height: "100vh" }} collapsed>
      <div
        className="logo"
        style={{
          height: "32px",
          margin: "16px",
          textAlign: "center",
          fontSize: "24px",
          color: "#ff4d4f",
        }}
      >
        T
      </div>
      <Menu
        mode="vertical"
        defaultSelectedKeys={["1"]}
        style={{ borderRight: 0 }}
      >
        <Menu.Item
          key="1"
          icon={
            <BarChartOutlined style={{ color: "#ff4d4f", fontSize: "24px" }} />
          }
        />
        <Menu.Item
          key="2"
          icon={
            <AppstoreOutlined style={{ color: "#595959", fontSize: "24px" }} />
          }
        />
        <Menu.Item
          key="3"
          icon={
            <DatabaseOutlined style={{ color: "#595959", fontSize: "24px" }} />
          }
        />
        <Menu.Item
          key="4"
          icon={
            <AppstoreOutlined style={{ color: "#595959", fontSize: "24px" }} />
          }
        />
        <Menu.Item
          key="5"
          icon={
            <AppstoreOutlined style={{ color: "#595959", fontSize: "24px" }} />
          }
        />
      </Menu>
    </Sider>
  );
};

export default Sidebar;
