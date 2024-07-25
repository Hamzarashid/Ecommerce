import Carousel from '../app/components/carousel/Carousel';
import Album from './components/clothingalbum/Album';
import Cards from './components/card/Cards';
import Accordion from './components/faqs/Accordion';

export default function Home() {
  return (
    <>
      <Carousel />
      <Album />
      <Cards />
      <Accordion />
    </>
  );
}
