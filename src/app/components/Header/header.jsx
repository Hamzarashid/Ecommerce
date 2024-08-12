import {
  DownOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Badge, Drawer, Dropdown, Menu, Space, Typography, Button } from "antd";
import { useRef, useState } from "react";
import { useStore } from "../../../context/Product";
import {
  BottomContainer,
  CategoriesWrapper,
  FooterButton,
  HeaderBottom,
  HeaderIcon,
  NavBottom,
  NavCenter,
  Section,
} from "./headerStyled";
import SearchDrawer from "./Drawer/SearchDrawer";
import CartDrawer from "./Drawer/CartDrawer";
import WishlistDrawer from "./Drawer/WishlistDrawer";

const { Text } = Typography;

const Header = () => {
  const navCenterRef = useRef(null);
  const [drawerContent, setDrawerContent] = useState("cart");
  const {
    categories,
    cartItems,
    wishlistItems,
    openCartDrawer,
    closeCartDrawer,
    drawerOpen,
    checkoutCart,
  } = useStore();

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

  const DrawerContent = ({ drawerContent }) => {
    switch (drawerContent) {
      case "search":
        return <SearchDrawer />;
      case "cart":
        return <CartDrawer />;
      case "wishlist":
        return <WishlistDrawer />;
      default:
        return null;
    }
  };

  const handleCheckout = async () => {
    try {
      await checkoutCart();
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };

  return (
    <>
      <HeaderBottom ref={navCenterRef}>
        <NavCenter align="center" justify="space-between"></NavCenter>
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
              <Badge count={wishlistItems.length} size="small" color="#7B0323">
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
                footer={
                  drawerContent === "cart" && (
                    <FooterButton onClick={handleCheckout}>
                      Checkout
                    </FooterButton>
                  )
                }
              >
                <DrawerContent drawerContent={drawerContent} />
              </Drawer>
            </HeaderIcon>
          </NavBottom>
        </BottomContainer>
      </HeaderBottom>
    </>
  );
};

export default Header;
