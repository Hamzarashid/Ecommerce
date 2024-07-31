import styled from 'styled-components';

export const CarouselWrap = styled.div`
  position: relative;

  .slick-track {
    display: flex;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
  }

  .slick-arrow {
    color: #4d4c4c;
    font-size: 24px;
    z-index: 1;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 54px 0 0 0;
`;

export const Arrow = styled.div`
  cursor: pointer;
  font-size: 24px;
  z-index: 1;
  color: #8c8c8c;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &.prev {
    left: calc(50% - 20px);
  }

  &.next {
    left: calc(50% + 20px);
  }
`;

export const CustomArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &.prev {
    left: calc(50% - 60px); /* Adjusted for icon size */
  }

  &.next {
    left: calc(50% + 60px); /* Adjusted for icon size */
  }
`;
