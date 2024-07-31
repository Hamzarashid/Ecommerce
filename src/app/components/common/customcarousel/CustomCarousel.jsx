// CustomCarousel.js
'use client';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import { useRef } from 'react';
import { Arrow, ArrowContainer, CarouselWrap } from './CustomCarouselStyled'; // Import styles

const CustomArrow = ({ className, style, onClick, icon }) => (
  <Arrow className={className} style={{ ...style }} onClick={onClick}>
    {icon}
  </Arrow>
);

const CustomCarousel = ({
  data,
  renderItem,
  slidesToShow = 4,
  autoplay = true,
}) => {
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current?.prev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current?.next();
    }
  };

  return (
    <CarouselWrap>
      <Carousel
        autoplay={autoplay}
        ref={carouselRef}
        dots={false}
        slidesToShow={slidesToShow}
        prevArrow={<CustomArrow className="prev" icon={<LeftOutlined />} />}
        nextArrow={<CustomArrow className="next" icon={<RightOutlined />} />}
      >
        {data.map((item) => renderItem(item))}
      </Carousel>
      <ArrowContainer>
        <CustomArrow
          className="prev"
          icon={<LeftOutlined />}
          onClick={handlePrevClick}
        />
        <CustomArrow
          className="next"
          icon={<RightOutlined />}
          onClick={handleNextClick}
        />
      </ArrowContainer>
    </CarouselWrap>
  );
};

export default CustomCarousel;
