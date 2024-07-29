import {
  FacebookFilled,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TikTokFilled,
} from '@ant-design/icons';
import { Col, Row } from 'antd';
import {
  ContactInfo,
  FooterContainer,
  FooterTitle,
  Icon,
  MenuList,
  SocialIcons,
} from './FooterStyled';

const Footer = () => {
  return (
    <FooterContainer>
      <Row gutter={18} justify="center" align="middle">
        <Col span={6}>
          <ContactInfo>
            <p>
              <MailOutlined /> Demol@gmail.com
            </p>
            <p>
              <PhoneOutlined /> +92 334 285956288
            </p>
          </ContactInfo>
          <SocialIcons>
            <Icon as={FacebookFilled} />
            <Icon as={InstagramOutlined} />
            <Icon as={TikTokFilled} />
          </SocialIcons>
        </Col>
        <Col span={6}>
          <FooterTitle>Menu</FooterTitle>
          <MenuList>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Track Suits</a>
            </li>
            <li>
              <a href="#">Polo Shirts</a>
            </li>
            <li>
              <a href="#">Dri-fit Shirts</a>
            </li>
            <li>
              <a href="#">Crew Neck Shirts</a>
            </li>
          </MenuList>
        </Col>
        <Col span={6}>
          <FooterTitle>Information</FooterTitle>
          <MenuList>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </MenuList>
        </Col>
      </Row>
    </FooterContainer>
  );
};

export default Footer;
