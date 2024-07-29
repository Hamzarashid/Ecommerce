import { Button, Dropdown as dd, Flex } from 'antd';
import styled from 'styled-components';

export const HeaderBottom = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
`;

export const BottomContainer = styled.div`
  background-color: #fff;
`;

export const NavTop = styled(Flex)`
  padding: '5px 70px';
`;

export const NavCenter = styled(Flex)`
  padding: '20px 70px';
`;

export const Section = styled(Flex)`
  height: 100%;
  button {
    border-radius: 2px;
    min-height: 50px;
  }
`;

export const Dropdown = styled(dd)`
  cursor: pointer;
  font-size: 0.8rem;
  color: white;
  width: 150px;
`;

export const CategoriesWrapper = styled(Button)`
  background-color: #7b0323;
  display: inline;
  font-weight: 500;
  color: white;
`;

export const NavBottom = styled(Flex)`
  min-height: 50px;
`;
export const PopoverContent = styled(Flex)`
  font-weight: 700;
  font-size: 1.8rem;
`;
export const HeaderIcon = styled(Flex)`
  padding: 14px;
  align-items: center;
`;
