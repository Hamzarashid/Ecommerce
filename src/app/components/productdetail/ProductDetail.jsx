'use client';
import { Button, Drawer, Flex, Radio, Rate, Space, Typography } from 'antd';
import {
  ButtonWrapper,
  Card,
  CarouselImage,
  CustomButton,
  CustomDrawer,
  CustomInput,
  CustomRadioGroup,
  DetailContainer,
  DiscountedPrice,
  ImageContainer,
  InfoContainer,
  OriginalPrice,
  ParentContainer,
  Price,
  SizeGuideLink,
  StockBar,
  StockIndicator,
  StyledCarousel,
  TextWrapper,
  Title,
} from './ProductDetailStyled';
import ProductDetailTab from './producttab/ProductDetailTab';
import { images } from '../../constants';
import { useProduct } from '../../../context/Product';

const { Text } = Typography;

const ProductDetail = () => {
  const stock = 5;
  const stockPercentage = (stock / 100) * 100;

  return (
    <ParentContainer vertical justify="space-around">
      <DetailContainer>
        <ImageContainer>
          <StyledCarousel autoplay arrows dots={false}>
            {images.map((src, index) => (
              <div key={index}>
                <CarouselImage src={src} alt={`carousel-${index}`} />
              </div>
            ))}
          </StyledCarousel>
        </ImageContainer>
        <InfoContainer>
          <Card>
            <Text strong color="#7b0323">
              HURRY! ONLY {stock} LEFT IN STOCK.
            </Text>
            <StockBar>
              <StockIndicator stockPercentage={stockPercentage} />
            </StockBar>
            <Title level={4}>Addas Dri-fit Track Suit (Black)</Title>
            <Flex align="center" justify="space-between">
              <Flex align="center" justify="center">
                <OriginalPrice>Rs.4,700.00</OriginalPrice>
                <DiscountedPrice>Rs.2,350.00</DiscountedPrice>
              </Flex>
              <Flex align="center" justify="center" gap={10}>
                <Rate disabled defaultValue={5} count={5} />
                <Text> 4 reviews</Text>
              </Flex>
            </Flex>
            <Text>
              Fabric: Fine Interlock (100% Export Export Quality polyester)
              Feel: Breathable and Flexible Logos: Printed Logos (High Density)
              Top: Pull-Over shirt...
            </Text>
            <TextWrapper>
              <Text strong>SIZE:</Text>
              <SizeGuideLink>Size Guide</SizeGuideLink>
            </TextWrapper>
            <CustomRadioGroup defaultValue="S" buttonStyle="solid">
              <Radio.Button value="S">S</Radio.Button>
              <Radio.Button value="M">M</Radio.Button>
              <Radio.Button value="L">L</Radio.Button>
            </CustomRadioGroup>
            <ButtonWrapper>
              <Space.Compact block>
                <CustomButton type="primary">-</CustomButton>
                <CustomInput defaultValue={1} />
                <CustomButton type="primary">+</CustomButton>
              </Space.Compact>
              <CustomButton>ADD TO CART</CustomButton>
            </ButtonWrapper>
          </Card>
        </InfoContainer>
      </DetailContainer>
      {/* Tabs */}
      <ProductDetailTab />
    </ParentContainer>
  );
};

export default ProductDetail;
