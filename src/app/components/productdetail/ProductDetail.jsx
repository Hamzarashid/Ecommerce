'use client';
import { Flex, Radio, Rate, Space, Typography } from 'antd';
import { useEffect } from 'react';
import { useStore } from '../../../context/Product';
import {
  ButtonWrapper,
  Card,
  CarouselImage,
  CustomButton,
  CustomInput,
  CustomRadioGroup,
  DetailContainer,
  DiscountedPrice,
  ImageContainer,
  InfoContainer,
  OriginalPrice,
  ParentContainer,
  SizeGuideLink,
  StockBar,
  StockIndicator,
  StyledCarousel,
  TextWrapper,
  Title,
} from './ProductDetailStyled';
import ProductDetailTab from './producttab/ProductDetailTab';
import { images } from '../../constants';

const { Text } = Typography;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const ProductDetail = ({ id }) => {
  const { fetchProductById, singleProduct } = useStore();
  const stock = 5;
  const stockPercentage = (stock / 100) * 100;
  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
  }, [id]);

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
            <Title level={4}>{singleProduct.name}</Title>
            <Flex align="center" justify="space-between">
              <Flex align="center" justify="center">
                <OriginalPrice>Rs.{singleProduct.actual_price}</OriginalPrice>
                <DiscountedPrice>
                  Rs.{singleProduct.discount_price}
                </DiscountedPrice>
              </Flex>
              <Flex align="center" justify="center" gap={10}>
                <Rate disabled defaultValue={5} count={5} />
                <Text> 4 reviews</Text>
              </Flex>
            </Flex>
            <Text>{singleProduct.description}</Text>
            <TextWrapper>
              <Text strong>SIZE:</Text>
              <SizeGuideLink>Size Guide</SizeGuideLink>
            </TextWrapper>
            <CustomRadioGroup defaultValue="S" buttonStyle="solid">
              {singleProduct.variants.map((item) => (
                <>
                  <Radio.Button value={item.size}>{item.size}</Radio.Button>
                </>
              ))}
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
