'use client';
import { HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { cardData } from '../../constants';
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
import { useRouter } from 'next/navigation';

function Cards() {
  const router = useRouter();

  const handleCardClick = (product) => {
    router.push(`/product/${product.id}`);
    console.log(product);
  };

  return (
    <>
      <HeaderText
        title="Polo Shirts"
        subtitle="Discover Our Polo Shirt Collection!"
      />
      <CardsContainer>
        {cardData.map((item, index) => (
          <Card key={index} onClick={() => handleCardClick(item)}>
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
