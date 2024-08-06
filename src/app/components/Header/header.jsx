import {
  DownOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import {
  Badge,
  Button,
  Drawer,
  Dropdown,
  List,
  Menu,
  Space,
  Typography,
} from 'antd';
import { useRef, useState } from 'react';
import { useStore } from '../../../context/Product';
import {
  BottomContainer,
  CategoriesWrapper,
  CustomButton,
  CustomInput,
  HeaderBottom,
  HeaderIcon,
  NavBottom,
  NavCenter,
  Section,
} from './headerStyled';

const { Text } = Typography;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Header = () => {
  const navCenterRef = useRef(null);
  const [drawerContent, setDrawerContent] = useState('cart');
  const {
    categories,
    cartItems,
    openCartDrawer,
    closeCartDrawer,
    drawerOpen,
    updateCartItems,
    checkoutCart,
  } = useStore();

  const toggleDrawer = (content) => {
    setDrawerContent(content);
    openCartDrawer();
  };

  const handleIncrease = (id, size) => {
    const newCart = cartItems.map((item) => {
      if (item.id === id && item.size === size) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCartItems(newCart);
  };

  const handleDecrease = (id, size) => {
    const newCart = cartItems
      .map((item) => {
        if (item.id === id && item.size === size) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null;
        }
        return item;
      })
      .filter((item) => item !== null);
    updateCartItems(newCart);
  };

  const categoryMenu = (
    <Menu>
      {categories.map((category) => (
        <Menu.Item key={category.id}>{category.name}</Menu.Item>
      ))}
    </Menu>
  );

  const handleCheckout = async () => {
    try {
      await checkoutCart();
    } catch (error) {
      console.error('Checkout failed:', error);
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
              <SearchOutlined onClick={() => toggleDrawer('search')} />
              <Badge count={3} size="small" color="#7B0323">
                <HeartOutlined onClick={() => toggleDrawer('wishlist')} />
              </Badge>
              <Badge count={cartItems.length} size="small" color="#7B0323">
                <ShoppingCartOutlined onClick={() => toggleDrawer('cart')} />
              </Badge>
              <Drawer
                title="SHOPPING CART"
                placement="right"
                onClose={closeCartDrawer}
                open={drawerOpen}
              >
                {drawerContent === 'cart' && (
                  <List
                    itemLayout="horizontal"
                    dataSource={cartItems}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <img
                              src={`${API_BASE_URL}/${item.image}`}
                              alt={item.name}
                              width={120}
                              height={150}
                            />
                          }
                          title={
                            <>
                              <Text strong>{item.name}</Text>
                              <br />
                              <Text type="secondary">Size: {item.size}</Text>
                            </>
                          }
                          description={
                            <>
                              <Text strong>Rs.{item.discount_price}</Text>
                              <br />
                              <Space.Compact block>
                                <CustomButton
                                  type="primary"
                                  onClick={() =>
                                    handleDecrease(item.id, item.size)
                                  }
                                >
                                  -
                                </CustomButton>
                                <CustomInput
                                  min={1}
                                  value={item.quantity}
                                  readOnly
                                />
                                <CustomButton
                                  type="primary"
                                  onClick={() =>
                                    handleIncrease(item.id, item.size)
                                  }
                                >
                                  +
                                </CustomButton>
                              </Space.Compact>
                              <Button onClick={handleCheckout}>Checkout</Button>
                            </>
                          }
                        />
                      </List.Item>
                    )}
                  />
                )}
                {drawerContent === 'wishlist' && (
                  <>
                    <p>Wishlist contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </>
                )}
                {drawerContent === 'search' && (
                  <>
                    <p>Search contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </>
                )}
              </Drawer>
            </HeaderIcon>
          </NavBottom>
        </BottomContainer>
      </HeaderBottom>
    </>
  );
};

export default Header;
