import {
  Button as AntButton,
  Carousel,
  Flex,
  Input,
  Radio,
  Typography,
} from "antd";
import styled, { keyframes } from "styled-components";

const breakpoints = {
  mobile: "768px",
  tablet: "1024px",
};

export const ParentContainer = styled(Flex)`
  gap: 16px;
  padding: 30px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    padding: 16px;
  }
`;

export const DetailContainer = styled(Flex)`
  display: flex;
  gap: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 550px;
  height: 650px;

  .slick-arrow {
    color: black;
    font-size: 32px;
    border-radius: 50%;
    padding: 20px;

    &:after {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      border-inline-width: 4px 0;
      border-block-width: 4px 0;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s;

    &.active {
      opacity: 1;
    }
  }
`;
export const StyledCarousel = styled(Carousel)`
  width: 450px;
  height: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 650px;
`;

export const InfoContainer = styled.div`
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

export const { Title, Text } = Typography;

export const Card = styled.div`
  background: #ffffff;
  padding: 20px;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    padding: 8px;
  }
`;

export const StockBar = styled.div`
  background: #f8d7da;
  height: 8px;
  width: 100%;
  margin: 8px 0 0;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

export const StockIndicator = styled.div`
  background: #7b0323;
  height: 100%;
  width: ${(props) => props.stockPercentage}%;
  position: absolute;
`;

export const SizeGuideLink = styled.a`
  margin-left: 8px;
  font-size: 12px;
  color: #7b0323;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 10px;
  }
`;

export const ButtonWrapper = styled(Flex)`
  margin: 16px 0;
  display: flex;
  gap: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const TextWrapper = styled.div`
  margin: 16px 0;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 8px 0;
  }
`;

export const CustomInput = styled(Input)`
  width: 60px;
  text-align: center;
`;

export const CustomRadioGroup = styled(Radio.Group)`
  .ant-radio-button-wrapper {
    &:hover {
      background-color: #7b0323;
      border-color: #7b0323;
      color: white;
    }

    &.ant-radio-button-wrapper-checked {
      background-color: #7b0323;
      border-color: #7b0323;
    }

    &.ant-radio-button-wrapper-checked:hover {
      background-color: #7b0323;
      border-color: #7b0323;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .ant-radio-button-wrapper {
      font-size: 14px;
    }
  }
`;

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

export const CustomButton = styled(AntButton)`
  background: #7b0323;
  border-color: #7b0323;
  color: white;
  // animation: ${shake} 0.5s infinite;

  &:hover {
    background: #7b0323 !important;
    border-color: #7b0323 !important;
    color: white !important;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    font-size: 14px;
  }
`;
