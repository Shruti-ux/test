import React, { useState } from "react";
import {
  Layout,
  Table,
  Select,
  DatePicker,
  Button,
  Pagination,
  // Content,
} from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
// import "antd/dist/antd.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const { Option } = Select;
const { RangePicker } = DatePicker;

const data = [
  {
    key: "1",
    executionRunDate: "22 Jul 2022",
    executionID: "EX_1234",
    dqScore: "88%",
    country: "Great Britain",
    source: "EPOS",
    executionStatus: "Completed",
    auditStatus: "Pending",
  },
  // Add more data as needed
];

const columns = [
  {
    title: "Execution Run Date",
    dataIndex: "executionRunDate",
    key: "executionRunDate",
  },
  {
    title: "Execution ID",
    dataIndex: "executionID",
    key: "executionID",
  },
  {
    title: "DQ Score",
    dataIndex: "dqScore",
    key: "dqScore",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Source",
    dataIndex: "source",
    key: "source",
  },
  {
    title: "Execution Status",
    dataIndex: "executionStatus",
    key: "executionStatus",
    render: (text) => (
      <span>
        {text === "Completed" ? (
          <CheckCircleOutlined style={{ color: "green" }} />
        ) : (
          <CloseCircleOutlined style={{ color: "red" }} />
        )}
        {text}
      </span>
    ),
  },
  {
    title: "Audit Status",
    dataIndex: "auditStatus",
    key: "auditStatus",
  },
  {
    title: "Run Summary",
    key: "runSummary",
    render: () => <a>View Summary</a>,
  },
  {
    title: "Data Load Exception",
    key: "dataLoadException",
    render: () => <a>View Exceptions</a>,
  },
  {
    title: "Sancus Output",
    key: "sancusOutput",
    render: () => <a>View Results</a>,
  },
];

const DataQualityReportAnalysis = () => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Navbar />
        {/* <Content style={{ margin: "16px" }}> */}
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <div style={{ padding: 20 }}>
            <div style={{ marginBottom: 20 }}>
              <Select
                defaultValue="Great Britain"
                style={{ width: 150, marginRight: 10 }}
              >
                <Option value="Great Britain">Great Britain</Option>
                <Option value="Other">Other</Option>
              </Select>
              <Select
                defaultValue="Source"
                style={{ width: 150, marginRight: 10 }}
              >
                <Option value="Source">Source</Option>
                <Option value="EPOS">EPOS</Option>
                <Option value="Retail Sales">Retail Sales</Option>
              </Select>
              <Select
                defaultValue="Execution Status"
                style={{ width: 150, marginRight: 10 }}
              >
                <Option value="Completed">Completed</Option>
                <Option value="Pending">Pending</Option>
              </Select>
              <Select
                defaultValue="Audit Status"
                style={{ width: 150, marginRight: 10 }}
              >
                <Option value="Pending">Pending</Option>
                <Option value="NA">NA</Option>
              </Select>
              <DatePicker
                picker="month"
                defaultValue={null}
                style={{ marginRight: 10 }}
              />
              <Button type="primary">Go</Button>
            </div>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              rowKey="executionID"
            />
            <div style={{ marginTop: 20, textAlign: "right" }}>
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={100}
                onChange={(page, pageSize) => {
                  setCurrentPage(page);
                  setPageSize(pageSize);
                }}
                showSizeChanger
              />
            </div>
          </div>
        </div>
        {/* </Content> */}
        {/* <Footer style={{ textAlign: "center" }}>
        Sancus ©2023 Created by Your Company
      </Footer> */}
      </Layout>
    </Layout>
  );
};

export default DataQualityReportAnalysis;
