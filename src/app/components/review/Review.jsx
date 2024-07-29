'use client';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel, Rate } from 'antd';
import { useRef } from 'react';
import { reviews } from '../../constants';
import {
  Arrow,
  ArrowContainer,
  Card,
  CarouselWrap,
  Description,
  ParentContainer,
  ReviewsContainer,
  ReviewsSubtitle,
  ReviewsTitle,
  ReviewsTitleContainer,
  Title,
} from './ReviewStyled';

const CustomArrow = ({ className, style, onClick, icon }) => (
  <Arrow className={className} style={{ ...style }} onClick={onClick}>
    {icon}
  </Arrow>
);

const Review = () => {
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
    <ParentContainer>
      <ReviewsContainer>
        <ReviewsTitleContainer>
          <ReviewsTitle>Let customers speak for us</ReviewsTitle>
          <div>
            <Rate disabled defaultValue={5} style={{ color: '#d3d21e' }} />
            <span>from 137 reviews</span>
          </div>
        </ReviewsTitleContainer>
        <CarouselWrap>
          <Carousel
            autoplay
            ref={carouselRef}
            dots={false}
            slidesToShow={4}
            prevArrow={<CustomArrow className="prev" icon={<LeftOutlined />} />}
            nextArrow={
              <CustomArrow className="next" icon={<RightOutlined />} />
            }
          >
            {reviews.map((review) => (
              <Card key={review.id}>
                <Rate
                  disabled
                  defaultValue={review.rating}
                  style={{ color: '#d3d21e' }}
                />
                <Title>{review.title}</Title>
                <Description>{review.description}</Description>
              </Card>
            ))}
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
      </ReviewsContainer>
    </ParentContainer>
  );
};

export default Review;
