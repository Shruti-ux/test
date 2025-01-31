import React from "react";
import { Layout, Menu, Button, Card, Row, Col, Select, Statistic } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import ReactApexChart from "react-apexcharts";
import "./sample2.css"; // External CSS for custom styling

const { Header, Content, Sider } = Layout;
const { Option } = Select;

const Dashboard = () => {
  const dcChartOptions = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "DC-01",
        "DC-02",
        "DC-03",
        "DC-04",
        "DC-05",
        "DC-06",
        "DC-07",
        "DC-08",
      ],
    },
    fill: {
      colors: ["#1890ff", "#f5222d"],
    },
    colors: ["#1890ff"],
    tooltip: {
      y: {
        formatter: (val) => `${val}%`,
      },
    },
  };

  const dcChartData = {
    series: [
      {
        name: "In-Stock",
        data: [52, 98, 97, 99, 54, 83, 55],
      },
    ],
  };

  const storeChartOptions = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Store-01",
        "Store-10",
        "Store-03",
        "Store-21",
        "Store-31",
        "Store-11",
      ],
    },
    fill: {
      colors: ["#1890ff", "#f5222d"],
    },
    colors: ["#1890ff"],
    tooltip: {
      y: {
        formatter: (val) => `${val}%`,
      },
    },
  };

  const storeChartData = {
    series: [
      {
        name: "In-Stock",
        data: [80, 60, 85, 95, 98, 85],
      },
    ],
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible>
        <div className="logo">T</div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="3" icon={<ShoppingOutlined />}>
            Inventory
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="header-content">
            <div className="user-info">
              <span className="user-name">John Doe</span>
              <span className="user-role">Supply Chain Planner</span>
            </div>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}>
          <Row gutter={16}>
            <Col span={6}>
              <Card>
                <Statistic title="Inventory OH Value" value="2.4B" />
                <span className="stat-change down">3% YoY</span>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic title="In-Stock" value="95%" />
                <span className="stat-change up">2% YoY</span>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic title="Days on Hand" value="42 Days" />
                <span className="stat-change up">2% YoY</span>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic title="Fill Rate" value="96%" />
                <span className="stat-change down">2% YoY</span>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic title="OTIF" value="89%" />
                <span className="stat-change down">5% YoY</span>
              </Card>
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: 24 }}>
            <Col span={12}>
              <Card title="Insight by DC Type">
                <Select
                  defaultValue="In-Stock"
                  style={{ width: 120, marginBottom: 20 }}
                >
                  <Option value="In-Stock">In-Stock</Option>
                  <Option value="On Hand">On Hand</Option>
                </Select>
                <ReactApexChart
                  options={dcChartOptions}
                  series={dcChartData.series}
                  type="bar"
                  height={350}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Insight by Store">
                <Select
                  defaultValue="In-Stock"
                  style={{ width: 120, marginBottom: 20 }}
                >
                  <Option value="In-Stock">In-Stock</Option>
                  <Option value="On Hand">On Hand</Option>
                </Select>
                <ReactApexChart
                  options={storeChartOptions}
                  series={storeChartData.series}
                  type="bar"
                  height={350}
                />
              </Card>
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: 24 }}>
            <Col span={12}>
              <Card title="Top Alerts">
                <div className="alert-box">
                  <div className="alert-icon">
                    <span>9 Days</span>
                  </div>
                  <div className="alert-text">
                    <strong>Great Value Vegetable Oil</strong>
                    <p>48 fl oz - 200684 expected to go out of stock</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Delay Risk">
                <Statistic title="Revenue Impact" value="$904K" />
                <span className="stat-change down">-3%</span>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
