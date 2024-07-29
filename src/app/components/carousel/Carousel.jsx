'use client';
import { CarouselItem, StyledCarousel, StyledImage } from './CarouselStyles';

export default function Carousel() {
  return (
    <StyledCarousel autoplay autoplaySpeed={2000}>
      <CarouselItem>
        <StyledImage
          src="https://picsum.photos/800/500?random=1"
          alt="Image 1"
          layout="fill"
        />
      </CarouselItem>
      <CarouselItem>
        <StyledImage
          src="https://picsum.photos/800/500?random=2"
          alt="Image 2"
          layout="fill"
        />
      </CarouselItem>
      <CarouselItem>
        <StyledImage
          src="https://picsum.photos/800/500?random=3"
          alt="Image 3"
          layout="fill"
        />
      </CarouselItem>
      <CarouselItem>
        <StyledImage
          src="https://picsum.photos/800/500?random=4"
          alt="Image 4"
          layout="fill"
        />
      </CarouselItem>
    </StyledCarousel>
  );
}
