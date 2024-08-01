import {
  DownOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { Badge, Drawer, Dropdown, Menu, Space } from 'antd';
import { useResponsive } from 'antd-style';
import { useRef, useState } from 'react';
import { useStore } from '../../../context/Product';
import {
  BottomContainer,
  CategoriesWrapper,
  HeaderBottom,
  HeaderIcon,
  NavBottom,
  NavCenter,
  Section,
} from './headerStyled';

const Header = () => {
  const navCenterRef = useRef(null);
  const breakpoints = useResponsive();
  const [open, setOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState('cart');
  const { categories } = useStore();

  const toggleDrawer = (target, content) => {
    setOpen(target);
    setDrawerContent(content);
  };

  const categoryMenu = (
    <Menu>
      {categories.map((category) => (
        <Menu.Item key={category.id}>{category.name}</Menu.Item>
      ))}
    </Menu>
  );

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
              <SearchOutlined onClick={() => toggleDrawer(true, 'search')} />
              <Badge count={3} size="small" color="#7B0323">
                <HeartOutlined onClick={() => toggleDrawer(true, 'wishlist')} />
              </Badge>
              <Badge count={5} size="small" color="#7B0323">
                <ShoppingCartOutlined
                  onClick={() => toggleDrawer(true, 'cart')}
                />
              </Badge>
              <Drawer
                title="Basic Drawer"
                placement="right"
                onClose={() => toggleDrawer(false, drawerContent)}
                open={open}
              >
                {drawerContent === 'cart' && (
                  <>
                    <p>Cart contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </>
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
