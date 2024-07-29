'use client';
import { Button, Input, Radio } from 'antd';
import {
  ButtonWrapper,
  Card,
  CustomButton,
  DetailContainer,
  DiscountedPrice,
  ImageContainer,
  InfoContainer,
  OriginalPrice,
  Price,
  SizeGuideLink,
  StockBar,
  StockIndicator,
  Text,
  Title,
} from './pageStyled';

const Page = () => {
  const stock = 5;
  const stockPercentage = (stock / 100) * 100;
  return (
    <DetailContainer>
      <ImageContainer>
        <img src="https://picsum.photos/800/500?random=3" alt="cmak" />
      </ImageContainer>
      <InfoContainer>
        <Card>
          <Text strong style={{ color: '#dc3545' }}>
            HURRY! ONLY {stock} LEFT IN STOCK.
          </Text>
          <StockBar>
            <StockIndicator stockPercentage={stockPercentage} />
          </StockBar>
          <Title level={4}>Addas Dri-fit Track Suit (Black)</Title>
          <Price>
            <OriginalPrice>Rs.4,700.00</OriginalPrice>
            <DiscountedPrice>Rs.2,350.00</DiscountedPrice>
          </Price>
          <Text>
            Fabric: Fine Interlock (100% Export Export Quality polyester) Feel:
            Breathable and Flexible Logos: Printed Logos (High Density) Top:
            Pull-Over shirt...
          </Text>
          <div style={{ margin: '16px 0' }}>
            <Text strong>SIZE:</Text>
            <SizeGuideLink>Size Guide</SizeGuideLink>
          </div>
          <Radio.Group defaultValue="S" buttonStyle="solid">
            <Radio.Button value="S">S</Radio.Button>
            <Radio.Button value="M">M</Radio.Button>
            <Radio.Button value="L">L</Radio.Button>
          </Radio.Group>
          <ButtonWrapper style={{ margin: '16px 0' }}>
            <Button>-</Button>
            <Input
              style={{ width: '60px', textAlign: 'center' }}
              defaultValue={1}
            />
            <Button>+</Button>
            <CustomButton>ADD TO CART</CustomButton>
          </ButtonWrapper>
        </Card>
      </InfoContainer>
    </DetailContainer>
  );
};

export default Page;
