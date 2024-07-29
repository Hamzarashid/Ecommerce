import styled, { keyframes } from 'styled-components';
import { Typography } from 'antd';
import { Button as AntButton } from 'antd';
export const DetailContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 20px;
`;

export const ImageContainer = styled.div`
  flex: 1;
`;

export const InfoContainer = styled.div`
  flex: 2;
`;
export const { Title, Text } = Typography;

export const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
  text-align: start;
`;

export const StockBar = styled.div`
  background: #f8d7da;
  height: 8px;
  margin: 8px 0;
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

export const Price = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  margin: 8px 0;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  margin-right: 8px;
  color: #888;
`;

export const DiscountedPrice = styled.span`
  color: #7b0323;
  font-size: 20px;
  font-weight: bold;
`;

export const SizeGuideLink = styled.a`
  margin-left: 8px;
  font-size: 12px;
  color: #7b0323;
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
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
`;
