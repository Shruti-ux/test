import React from "react";
import {
  Layout,
  Menu,
  Card,
  Row,
  Col,
  Statistic,
  DatePicker,
  Table,
  Progress,
} from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  UserOutlined,
  DashboardOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
// import "antd/dist/antd.css";
import "./code.css";
const { Header, Content, Sider } = Layout;

const statistics = [
  { title: "Save Products", value: 178, color: "#52c41a" },
  { title: "Stock Products", value: 20, color: "#faad14" },
  { title: "Sales Products", value: 190, color: "#f5222d" },
  { title: "Job Application", value: 12, color: "#1890ff" },
];
const data = [
  { time: "10am", sales: 30 },
  { time: "11am", sales: 50 },
  { time: "12am", sales: 40 },
  { time: "01am", sales: 60 },
  { time: "02am", sales: 70 },
  { time: "03am", sales: 80 },
  { time: "04am", sales: 60 },
  { time: "05am", sales: 40 },
  { time: "06am", sales: 50 },
  { time: "07am", sales: 60 },
];
const recentOrders = [
  {
    key: "1",
    trackingNo: "#876364",
    product: "Camera Lens",
    price: "$178",
    totalOrder: 325,
    totalAmount: "$1,46,660",
  },
  {
    key: "2",
    trackingNo: "#876368",
    product: "Black Sleep Dress",
    price: "$14",
    totalOrder: 53,
    totalAmount: "$46,660",
  },
  {
    key: "3",
    trackingNo: "#876412",
    product: "Argan Oil",
    price: "$21",
    totalOrder: 78,
    totalAmount: "$3,46,676",
  },
  {
    key: "4",
    trackingNo: "#876621",
    product: "EAU DE Parfum",
    price: "$32",
    totalOrder: 98,
    totalAmount: "$3,46,981",
  },
];
const topSellingProducts = [
  { key: "1", product: "NIKE Shoes Black Pattern", price: "$87" },
  { key: "2", product: "iPhone 12", price: "$987" },
];
const Code = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <Sider>
      <div className="logo" />
      <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          User
        </Menu.Item>
        <Menu.Item key="3" icon={<BellOutlined />}>
          Notifications
        </Menu.Item>
        <Menu.Item key="4" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ padding: 0, background: "#fff" }}>
        <DatePicker.RangePicker style={{ margin: "16px" }} />
      </Header>
      <Content style={{ margin: "16px" }}>
        <Row gutter={[16, 16]}>
          {statistics.map((stat) => (
            <Col span={6} key={stat.title}>
              <Card>
                <Statistic
                  title={stat.title}
                  value={stat.value}
                  valueStyle={{ color: stat.color }}
                />
              </Card>
            </Col>
          ))}
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
          <Col span={16}>
            <Card title="Reports">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                  <Tooltip />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Analytics">
              <Progress
                type="circle"
                percent={80}
                format={(percent) => `${percent} Transactions`}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
          <Col span={12}>
            <Card title="Recent Orders">
              <Table
                dataSource={recentOrders}
                columns={[
                  {
                    title: "Tracking No",
                    dataIndex: "trackingNo",
                    key: "trackingNo",
                  },
                  {
                    title: "Product Name",
                    dataIndex: "product",
                    key: "product",
                  },
                  { title: "Price", dataIndex: "price", key: "price" },
                  {
                    title: "Total Order",
                    dataIndex: "totalOrder",
                    key: "totalOrder",
                  },
                  {
                    title: "Total Amount",
                    dataIndex: "totalAmount",
                    key: "totalAmount",
                  },
                ]}
                pagination={false}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Top Selling Products">
              <Table
                dataSource={topSellingProducts}
                columns={[
                  {
                    title: "Product Name",
                    dataIndex: "product",
                    key: "product",
                  },
                  { title: "Price", dataIndex: "price", key: "price" },
                ]}
                pagination={false}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  </Layout>
);
export default Code;
