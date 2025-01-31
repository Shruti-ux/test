import React from "react";
import { Form, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// import "antd/dist/reset.css";
import "./sample.css"; // External CSS for custom styling

const Sample = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="left-panel">
          <div className="login-header">
            <h1>TREDENCE</h1>
          </div>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            <Form.Item
              label="E-mail or phone number"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email or phone number!",
                },
              ]}
            >
              <Input placeholder="KaylaHarris@tredence.com" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Enter Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-button">
                Login
              </Button>
            </Form.Item>

            <Form.Item>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </Form.Item>
          </Form>
        </div>
        <div className="right-panel">
          <div className="welcome-text">
            <h2>
              Welcome to <span>Inventory Control Tower</span>
            </h2>
            <p>
              Provides real-time visibility into inventory across the supply
              chain, enabling businesses to monitor, manage, and optimize stock
              levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
