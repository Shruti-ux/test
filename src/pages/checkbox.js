import React from "react";
import { Input, DatePicker, Checkbox, Switch, Form } from "antd";
const { RangePicker } = DatePicker;
const FilterComponent = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Invoice number">
        <Input placeholder="Invoice number" />
      </Form.Item>
      <Form.Item label="Issue date">
        <RangePicker />
      </Form.Item>
      <Form.Item label="From customer">
        <Checkbox.Group>
          <Checkbox value="Blind Spots Inc.">Blind Spots Inc.</Checkbox>
          <Checkbox value="Dispatcher Inc.">Dispatcher Inc.</Checkbox>
          <Checkbox value="ACME SRL">ACME SRL</Checkbox>
          <Checkbox value="Novelty I.S">Novelty I.S</Checkbox>
          <Checkbox value="Beauty Clinic SRL">Beauty Clinic SRL</Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item>
        <Switch checkedChildren="Paid only" unCheckedChildren="Paid only" />
      </Form.Item>
      <Form.Item>
        <Switch
          defaultChecked
          checkedChildren="Group by status"
          unCheckedChildren="Group by status"
        />
      </Form.Item>
    </Form>
  );
};
export default FilterComponent;
