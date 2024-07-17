import {
  BellOutlined,
  DownOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Drawer, Popover, Space } from "antd";
import { useResponsive } from "antd-style";
import { useEffect, useRef, useState } from "react";
import { categories } from "../../constants";
import {
  BottomContainer,
  CategoriesWrapper,
  Dropdown,
  HeaderBottom,
  HeaderIcon,
  NavBottom,
  NavCenter,
  PopoverContent,
  Section,
} from "./headerStyled";

const Header = () => {
  const navCenterRef = useRef(null);
  const breakpoints = useResponsive();
  const [open, setOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState("cart");

  const toggleDrawer = (target, content) => {
    setOpen(target);
    setDrawerContent(content);
  };

  return (
    <>
      <HeaderBottom ref={navCenterRef}>
        <NavCenter
          breakpoints={breakpoints}
          align="center"
          justify="space-between"
          gap="50px"
        ></NavCenter>
        <BottomContainer breakpoints={breakpoints}>
          {breakpoints.xl && (
            <NavBottom justify="space-between">
              <Section align="center">
                <Dropdown menu={{ items: categories }}>
                  <CategoriesWrapper
                    type="text"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      Categories
                      <DownOutlined rotate={360} />
                    </Space>
                  </CategoriesWrapper>
                </Dropdown>
              </Section>
              <UserAddOutlined />
              <HeaderIcon gap="15px">
                <SearchOutlined onClick={() => toggleDrawer(true, "search")}/>
                <Popover
                  content={
                    <PopoverContent vertical justify="center" align="center">
                      <SmileOutlined /> <p>Notification</p>
                    </PopoverContent>
                  }
                  trigger="click"
                >
                  <BellOutlined />
                </Popover>
                <HeartOutlined onClick={() => toggleDrawer(true, "wishlist")} />
                <ShoppingCartOutlined
                  onClick={() => toggleDrawer(true, "cart")}
                />
                <Drawer
                  title="Basic Drawer"
                  placement="right"
                  onClose={() => toggleDrawer(false, drawerContent)}
                  open={open}
                >
                  {drawerContent === "cart" && (
                    <>
                      <p>Cart contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </>
                  )}
                  {drawerContent === "wishlist" && (
                    <>
                      <p>Wishlist contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </>
                  )}

                  {drawerContent === "search" && (
                    <>
                      <p>Search contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </>
                  )}
                </Drawer>
              </HeaderIcon>
            </NavBottom>
          )}
        </BottomContainer>
      </HeaderBottom>
    </>
  );
};

export default Header;
