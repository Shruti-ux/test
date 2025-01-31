import React, { useState } from "react";
import { Menu, Space } from "antd";
import {
  HomeOutlined,
  BarChartOutlined,
  ShopOutlined,
  BitcoinOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  BoxPlotOutlined,
  ShoppingCartOutlined,
  FileTextOutlined,
  ListOutlined,
  InfoCircleOutlined,
  CarOutlined,
  DashboardOutlined,
  TruckOutlined,
  BookOutlined,
  FileDoneOutlined,
  ShareAltOutlined,
  GraduationCapOutlined,
} from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: <a href="/">Overview</a>,
    // icon: <HomeOutlined />,
  },
  {
    key: "2",
    label: <a href="/">Analytics</a>,
    // icon: <BarChartOutlined />,
  },
  {
    key: "3",
    label: <a href="/">E-Commerce</a>,
    // icon: <ShopOutlined />,
  },
  {
    key: "4",
    label: <a href="/">Crypto</a>,
    // icon: <BitcoinOutlined />,
  },
  {
    key: "5",
    label: <a href="/">Account</a>,
    // icon: <UserOutlined />,
  },
];

const subItems = [
  {
    key: "6",
    label: <a href="/">Customers</a>,
    // icon: <UsergroupAddOutlined />,
  },
  {
    key: "7",
    label: <a href="/">Products</a>,
    // icon: <BoxPlotOutlined />,
  },
  {
    key: "8",
    label: <a href="/">Orders</a>,
    // icon: <ShoppingCartOutlined />,
  },
  {
    key: "9",
    label: <a href="/">Invoices</a>,
    // icon: <FileTextOutlined />,
  },
];

const subItems2 = [
  {
    key: "10",
    label: <a href="/">List</a>,
    // icon: <ListOutlined />,
  },
  {
    key: "11",
    label: <a href="/">Details</a>,
    // icon: <InfoCircleOutlined />,
  },
  {
    key: "12",
    label: <a href="/">Logistics</a>,
    // icon: <TruckOutlined />,
  },
  {
    key: "13",
    label: <a href="/">Dashboard</a>,
    // icon: <DashboardOutlined />,
  },
  {
    key: "14",
    label: <a href="/">Fleet</a>,
    // icon: <CarOutlined />,
  },
];

const subItems3 = [
  {
    key: "15",
    label: <a href="/">Academy</a>,
    // icon: <GraduationCapOutlined />,
  },
  {
    key: "16",
    label: <a href="/">Dashboard</a>,
    // icon: <DashboardOutlined />,
  },
  {
    key: "17",
    label: <a href="/">Course</a>,
    // icon: <BookOutlined />,
  },
];

const subItems4 = [
  {
    key: "18",
    label: <a href="/">Job Listings</a>,
    // icon: <FileDoneOutlined />,
  },
  {
    key: "19",
    label: <a href="/">Social Media</a>,
    // icon: <ShareAltOutlined />,
  },
  {
    key: "20",
    label: <a href="/">Blog</a>,
    // icon: <BookOutlined />,
  },
];

function Invoices() {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const handleClick = (e) => {
    console.log("click", e);
  };

  const menuProps = {
    openKeys,
    onOpenChange,
  };

  return (
    <Space direction="vertical">
      <Menu mode="inline" {...menuProps}>
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon} onClick={handleClick}>
            {item.label}
          </Menu.Item>
        ))}

        <Menu.SubMenu
          key="sub1"
          icon={<i className="fas fa-cogs" />}
          title="Concepts"
        >
          {subItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon} onClick={handleClick}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu.SubMenu>

        <Menu.SubMenu
          key="sub2"
          icon={<i className="fas fa-file-invoice" />}
          title="Invoices"
        >
          {subItems2.map((item) => (
            <Menu.Item key={item.key} icon={item.icon} onClick={handleClick}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu.SubMenu>

        <Menu.SubMenu
          key="sub3"
          icon={<i className="fas fa-graduation-cap" />}
          title="Academy"
        >
          {subItems3.map((item) => (
            <Menu.Item key={item.key} icon={item.icon} onClick={handleClick}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu.SubMenu>

        <Menu.SubMenu
          key="sub4"
          icon={<i className="fas fa-newspaper" />}
          title="More"
        >
          {subItems4.map((item) => (
            <Menu.Item key={item.key} icon={item.icon} onClick={handleClick}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      </Menu>
    </Space>
  );
}

export default Invoices;
