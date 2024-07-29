import styled from 'styled-components';

export const ServiceCardWrapper = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  border: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const IconWrapper = styled.div`
  font-size: 36px;
  color: #1890ff;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid transparent;
  transition: border 0.3s ease;

  &:hover {
    color: white;
    border: 1px solid #ddd;
    background-color: #7b0323;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #333;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
`;
