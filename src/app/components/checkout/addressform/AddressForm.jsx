"use client";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Col, Form, Input, Row, Select, Tooltip } from "antd";
import Title from "antd/es/typography/Title";
const { Option } = Select;
const AddressForm = ({ title, useTooltip }) => (
  <>
    {title && <Title level={4}>{title}</Title>}
    <>
      <Form.Item>
        <Select size="large" defaultValue="Pakistan">
          <Option value="Pakistan">Pakistan</Option>
        </Select>
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item>
            <Input size="large" placeholder="First name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input size="large" placeholder="Last name" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Input size="large" placeholder="Address" />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item>
            <Input size="large" placeholder="City" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input size="large" placeholder="Postal code (optional)" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Input
          size="large"
          placeholder="Phone (optional)"
          suffix={
            useTooltip && (
              <Tooltip title="In case we need to contact you about your order">
                <QuestionCircleOutlined />
              </Tooltip>
            )
          }
        />
      </Form.Item>
    </>
  </>
);
export default AddressForm;
