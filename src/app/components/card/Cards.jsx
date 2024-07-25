'use client';
import { HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';
import HeaderText from '../HeaderText/HeaderText';
import {
  AddToCart,
  Card,
  CardInner,
  CardsContainer,
  Description,
  Heart,
  Image,
  InnerNested,
  Price,
} from './CardsStyles';
const cardData = [
  {
    image: 'https://picsum.photos/800/500?random=1',
    description: 'Product 1',
    price: '1000',
  },
  {
    image: 'https://picsum.photos/800/500?random=2',
    description: 'Product 2',
    price: '2000',
  },
  {
    image: 'https://picsum.photos/800/500?random=3',
    description: 'Product 3',
    price: '3000',
  },
  {
    image: 'https://picsum.photos/800/500?random=4',
    description: 'Product 4',
    price: '4000',
  },
];

function Cards() {
  return (
    <>
      <HeaderText
        title="Polo Shirts"
        subtitle="Discover Our Polo Shirt Collection!"
      />
      <CardsContainer>
        {cardData.map((item, index) => (
          <Card key={index}>
            <InnerNested>
              <Image width={350} height={200} src={item.image} alt="image" />
              <Heart>
                <HeartFilled />
              </Heart>
              <AddToCart>
                <p>Add to Cart</p> <ShoppingCartOutlined />
              </AddToCart>
            </InnerNested>
            <CardInner vertical justify={'center'} align={'center'}>
              <Description>{item.description}</Description>
              <Price>
                <span>
                  <del>Rs.{item.price}</del>
                </span>
                Rs.{item.price}
              </Price>
            </CardInner>
          </Card>
        ))}
      </CardsContainer>
    </>
  );
}

export default Cards;
