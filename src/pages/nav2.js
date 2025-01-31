import { useState } from "react";
import {
  Menu,
  Dropdown,
  Space,
  Avatar,
  Badge,
  Button,
  Tooltip,
  Input,
} from "antd";
import {
  UserOutlined,
  BellOutlined,
  DownOutlined,
  SearchOutlined,
  FlagOutlined,
} from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: "First menu item",
  },
  {
    key: "2",
    label: "Second menu item",
  },
  {
    key: "3",
    label: "Third menu item",
  },
];

function App() {
  const [notificationCount, setNotificationCount] = useState(2);

  const handleMenuClick = (e) => {
    console.log("click", e);
  };

  return (
    <Space>
      <Input
        suffix={<SearchOutlined />}
        placeholder="Search"
        style={{ width: 200 }}
      />
      <Dropdown
        overlay={<Menu onClick={handleMenuClick} items={items} />}
        trigger={["click"]}
      >
        <Button icon={<FlagOutlined />} />
      </Dropdown>
      <Tooltip title="Notifications">
        <Badge count={notificationCount}>
          <BellOutlined />
        </Badge>
      </Tooltip>
      <Dropdown
        overlay={<Menu onClick={handleMenuClick} items={items} />}
        trigger={["click"]}
      >
        <Avatar
          icon={<UserOutlined />}
          style={{
            backgroundColor: "#87d068",
          }}
        />
      </Dropdown>
    </Space>
  );
}

export default App;
