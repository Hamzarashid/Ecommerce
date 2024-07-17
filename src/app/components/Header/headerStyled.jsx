import styled from "styled-components";
import { Button, Dropdown as dd, Input, Flex, Space } from "antd";

const { Search } = Input;

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

export const UserBtn = styled(Button)`
  background-color: transparent;
  border: 1px solid;
  height: 32px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  &:hover svg {
    color: #6acde0;
  }
`;

export const NavTop = styled(Flex)`
  padding: "5px 70px";
`;

export const NavCenter = styled(Flex)`
  padding:"20px 70px";
`;

export const Section = styled(Flex)`
  height: 100%;
  button {
    border-radius: 0px;
    min-height: 50px;
  }
`;

export const Dropdown = styled(dd)`
  cursor: pointer;
  font-size: 0.8rem;
  color: #494f54;
`;

export const CategoriesWrapper = styled(Button)`
  background-color: #fff;
  display: inline;
  font-weight: 500;
  color: black;
`;

export const SearchBar = styled(Search)`
  .ant-input-search-button {
    background-color: #6acde0;
  }
  .ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover {
    background-color: #53adbf;
  }
`;

export const AuthBtn = styled(Button)`
padding: 4px 0px;
  border: none;
  box-shadow: none;
`;

export const TopNavText = styled(Space)`
  font-size: 0.8rem;
  color: #494f54;
`;

export const NavBottom = styled(Flex)`
  min-height: 50px;
`;
export const PopoverContent = styled(Flex)`
  font-weight: 700;
  font-size: 1.8rem;
`;
export const HeaderIcon = styled(Flex)`
padding:8px;
 
`;

