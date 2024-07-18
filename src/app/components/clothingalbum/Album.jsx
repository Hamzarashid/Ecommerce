"use client";
import { Col, Row } from "antd";
import { Container, InnerContainer, OverlayButton } from "./AlbumStyled";

const items = [
  {
    title: "Polo Shirts",
    image: "https://picsum.photos/800/500?random=1",
  },
  {
    title: "Dri-Fits",
    image: "https://picsum.photos/800/500?random=2",
  },
  {
    title: "Track Suits",
    image: "https://picsum.photos/800/500?random=3",
  },
  {
    title: "Chinos Pants",
    image: "https://picsum.photos/800/500?random=1",
  },
];

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
                style={{ width: "100%", height: "100%" }}
              />
              <OverlayButton>Button</OverlayButton>
            </InnerContainer>
          ))}
        </Col>

        <Col span={6}>
          {column2.map((item, index) => (
            <InnerContainer key={index}>
              <img
                alt={item.title}
                src={item.image}
                style={{ width: "100%", height: "50%" }}
              />
              <OverlayButton>Button</OverlayButton>
            </InnerContainer>
          ))}
        </Col>

        <Col span={6}>
          {column3.map((item, index) => (
            <InnerContainer key={index}>
              <img
                alt={item.title}
                src={item.image}
                style={{ width: "100%", height: "100%" }}
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
