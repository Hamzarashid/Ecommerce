'use client';
import { Flex, Radio, Rate, Space, Typography, message } from 'antd';
import { useEffect, useState } from 'react';
import { useStore } from '../../../context/Product';
import SkeletonLoader from './Loader/Skeleton';
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

const { Text } = Typography;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const ProductDetail = ({ id, hideTabs }) => {
  const { fetchProductById, singleProduct, addToCart, csrfToken } = useStore();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
  }, [id]);

  useEffect(() => {
    if (
      singleProduct &&
      singleProduct.variants &&
      singleProduct.variants.length > 0
    ) {
      setSelectedSize(singleProduct.variants[0].size);
    }
  }, [singleProduct]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      message.warning('Please select a size.');
      return;
    }
    addToCart(singleProduct, selectedSize, quantity);
  };

  if (!singleProduct) {
    return (
      <ParentContainer vertical>
        <SkeletonLoader />
      </ParentContainer>
    );
  }

  const { name, actual_price, discount_price, description, variants, images } =
    singleProduct;

  return (
    <ParentContainer vertical justify="space-around">
      <DetailContainer>
        <ImageContainer>
          <StyledCarousel autoplay arrows dots={false}>
            {images.map((src, index) => (
              <div key={index}>
                <CarouselImage
                  src={`${API_BASE_URL}/${src.url}`}
                  alt={`carousel-${index}`}
                />
              </div>
            ))}
          </StyledCarousel>
        </ImageContainer>
        <InfoContainer>
          <Card>
            <Text strong style={{ color: '#7b0323' }}>
              HURRY! ONLY {5} LEFT IN STOCK.
            </Text>
            <StockBar>
              <StockIndicator stockPercentage={5} />
            </StockBar>
            <Title level={4}>{name}</Title>
            <Flex align="center" justify="space-between">
              <Flex align="center" justify="center">
                <OriginalPrice>Rs.{actual_price}</OriginalPrice>
                <DiscountedPrice>Rs.{discount_price}</DiscountedPrice>
              </Flex>
              <Flex align="center" justify="center" gap={10}>
                <Rate disabled defaultValue={5} count={5} />
                <Text> 4 reviews</Text>
              </Flex>
            </Flex>
            <Text>{description}</Text>
            <TextWrapper>
              <Text strong>SIZE:</Text>
              <SizeGuideLink>Size Guide</SizeGuideLink>
            </TextWrapper>
            <CustomRadioGroup
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              buttonStyle="solid"
            >
              {variants.map((item) => (
                <Radio.Button key={item.size} value={item.size}>
                  {item.size}
                </Radio.Button>
              ))}
            </CustomRadioGroup>
            <ButtonWrapper>
              <Space.Compact block>
                <CustomButton
                  type="primary"
                  onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
                >
                  -
                </CustomButton>
                <CustomInput
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                />
                <CustomButton
                  type="primary"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </CustomButton>
              </Space.Compact>
              <CustomButton onClick={handleAddToCart}>ADD TO CART</CustomButton>
            </ButtonWrapper>
          </Card>
        </InfoContainer>
      </DetailContainer>
      {!hideTabs && <ProductDetailTab />}
    </ParentContainer>
  );
};

export default ProductDetail;
