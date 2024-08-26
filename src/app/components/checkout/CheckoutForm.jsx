"use client";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Image,
  Input,
  Radio,
  Row,
  Typography,
} from "antd";
import Title from "antd/es/typography/Title";
import { useMemo, useState } from "react";
import { useStore } from "../../context/Product";
import {
  Container,
  CustomButton,
  CustomRadioGroup,
  CustomRow,
  InnerContainer,
  InnerNested,
  Quantity,
  ShippingMethod,
  SummaryWrapper,
} from "./CheckoutFormStyled";
import AddressForm from "./addressform/AddressForm";
import { useRouter } from "next/navigation";
import { useResponsive } from "../../hooks/useResponsive";

const { Text } = Typography;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const CheckoutForm = () => {
  const router = useRouter();
  const { cartItems, calculateSubtotal, checkoutCart, closeCartDrawer } =
    useStore();
  const subtotal = useMemo(() => calculateSubtotal(), [cartItems]);
  const [showBillingAddress, setShowBillingAddress] = useState(false);

  const handleBillingAddressChange = (e) => {
    setShowBillingAddress(e.target.value === "different");
  };

  const handleCompleteOrder = async () => {
    closeCartDrawer();
    await checkoutCart();
    router.push(`/`);
  };

  return (
    <Container>
      <Row gutter={20} justify="center" align="top">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          xxl={{ span: 12 }}
        >
          <Form layout="vertical">
            <Title level={4}>Contact</Title>
            <Form.Item>
              <Input size="large" placeholder="Email " />
            </Form.Item>
            <AddressForm title="Delivery" useTooltip />
            <Form.Item>
              <Checkbox>Save this information for next time</Checkbox>
            </Form.Item>
            <Title level={4}>Payment</Title>
            <Form.Item label="All transactions are secure and encrypted.">
              <ShippingMethod>
                <Text strong>Cash on Delivery (COD)</Text>
              </ShippingMethod>
            </Form.Item>
            <InnerContainer>
              <CustomRadioGroup
                defaultValue="same"
                onChange={handleBillingAddressChange}
              >
                <Radio value="same">Same as shipping address</Radio>
                <Radio value="different">Use a different billing address</Radio>
              </CustomRadioGroup>

              {showBillingAddress && <AddressForm />}
            </InnerContainer>
            <CustomButton block onClick={handleCompleteOrder}>
              Complete Order
            </CustomButton>
          </Form>
        </Col>

        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          xxl={{ span: 12 }}
        >
          <SummaryWrapper>
            {cartItems.map((item) => (
              <CustomRow key={item.id} align="middle" gutter={16}>
                <Col>
                  <InnerNested>
                    <Image
                      src={`${API_BASE_URL}/${item.image}`}
                      alt={item.name}
                      width={64}
                      height={64}
                      preview={false}
                    />
                    <Quantity>
                      <p>{item.quantity}</p>
                    </Quantity>
                  </InnerNested>
                </Col>
                <Col flex="auto">
                  <Text>{item.name}</Text>
                  <br />
                  <Text>Size: {item.size}</Text>
                </Col>
                <Col>
                  <Text>
                    {item.discount_price
                      ? `Rs.${item.discount_price}`
                      : `Rs.${item.actual_price}`}
                  </Text>
                </Col>
              </CustomRow>
            ))}
            <Row justify="space-around">
              <Text strong>SUBTOTAL:</Text>
              <Text strong>{`Rs.${subtotal}`}</Text>
            </Row>
          </SummaryWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutForm;
