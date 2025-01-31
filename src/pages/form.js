import React from "react";
import { SmileOutlined, DollarOutlined } from "@ant-design/icons";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div className="hover-card-container">
      <div className="hover-card" style={{ width: 100 }}>
        <SmileOutlined className="icon" />
        <span className="icon-name">Pricing Simulator</span>
      </div>
    </div>
  );
};

export default SideMenu;
