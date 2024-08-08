'use client';
import { Col, Row } from 'antd';
import { items } from '../../constants';
import { Container, InnerContainer, OverlayButton } from './AlbumStyled';

const Album = () => {
  const column1 = items.slice(0, 1);
  const column2 = items.slice(1, 3);
  const column3 = items.slice(3, 4);

  return (
    <Container>
      <Row gutter={16} justify="center">
        <Col span={12}>
          {column1.map((item, index) => (
            <InnerContainer key={index}>
              <img
                alt={item.title}
                src={item.image}
                style={{ width: '100%', height: '100%' }}
              />
              <OverlayButton>Button</OverlayButton>
            </InnerContainer>
          ))}
        </Col>

        <Col span={4}>
          {column2.map((item, index) => (
            <InnerContainer key={index}>
              <img
                alt={item.title}
                src={item.image}
                style={{ width: '100%', height: '50%' }}
              />
              <OverlayButton>Button</OverlayButton>
            </InnerContainer>
          ))}
        </Col>

        <Col span={8}>
          {column3.map((item, index) => (
            <InnerContainer key={index}>
              <img
                alt={item.title}
                src={item.image}
                style={{ width: '100%', height: '630px' }}
              />
              <OverlayButton>Button</OverlayButton>
            </InnerContainer>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Album;
