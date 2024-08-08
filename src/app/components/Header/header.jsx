import {
  DownOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Badge, Button, Drawer, Dropdown, Menu, Space, Typography } from "antd";
import { useRef, useState } from "react";
import { useStore } from "../../../context/Product";
import {
  BottomContainer,
  CategoriesWrapper,
  HeaderBottom,
  HeaderIcon,
  NavBottom,
  NavCenter,
  Section,
} from "./headerStyled";
import SearchDrawer from "./Drawer/SearchDrawer";
import CartDrawer from "./Drawer/CartDrawer";

const { Text } = Typography;

const Header = () => {
  const navCenterRef = useRef(null);
  const [drawerContent, setDrawerContent] = useState("cart");
  const { categories, cartItems, openCartDrawer, closeCartDrawer, drawerOpen } =
    useStore();

  const toggleDrawer = (content) => {
    setDrawerContent(content);
    openCartDrawer();
  };

  const categoryMenu = (
    <Menu>
      {categories.map((category) => (
        <Menu.Item key={category.id}>{category.name}</Menu.Item>
      ))}
    </Menu>
  );

  const getDrawerTitle = () => {
    switch (drawerContent) {
      case "cart":
        return "SHOPPING CART";
      case "wishlist":
        return "WISHLIST";
      case "search":
        return "SEARCH PRODUCTS";
      default:
        return "";
    }
  };

  return (
    <>
      <HeaderBottom ref={navCenterRef}>
        <NavCenter
          align="center"
          justify="space-between"
          gap="50px"
        ></NavCenter>
        <BottomContainer>
          <NavBottom justify="space-between">
            <Section align="center">
              <Dropdown overlay={categoryMenu}>
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
              <SearchOutlined onClick={() => toggleDrawer("search")} />
              <Badge count={3} size="small" color="#7B0323">
                <HeartOutlined onClick={() => toggleDrawer("wishlist")} />
              </Badge>
              <Badge count={cartItems.length} size="small" color="#7B0323">
                <ShoppingCartOutlined onClick={() => toggleDrawer("cart")} />
              </Badge>

              <Drawer
                title={getDrawerTitle()}
                placement="right"
                onClose={closeCartDrawer}
                open={drawerOpen}
              >
                {drawerContent === "search" && <SearchDrawer />}
                {drawerContent === "cart" && <CartDrawer />}
                {drawerContent === "wishlist" && <p>Wishlist contents...</p>}
              </Drawer>
            </HeaderIcon>
          </NavBottom>
        </BottomContainer>
      </HeaderBottom>
    </>
  );
};

export default Header;
