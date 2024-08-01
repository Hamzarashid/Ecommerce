'use client';
import { HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useStore } from '../../../context/Product';
import HeaderText from '../HeaderText/HeaderText';
import {
  AddToCart,
  Card,
  CardInner,
  CardsContainer,
  Heart,
  Image,
  InnerNested,
  Price,
  Title,
} from './CardsStyles';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function Cards() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const { products } = useStore();

  const sameCaregoryProducts = products.reduce((acc, prod) => {
    if (!acc[prod.category]) {
      acc[prod.category] = [];
    }
    acc[prod.category].push(prod);
    return acc;
  }, {});

  const handleCardClick = (product) => {
    router.push(`/product/${product.id}`);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      {Object.keys(sameCaregoryProducts).map((category) => (
        <div key={category}>
          <HeaderText
            title={category}
            subtitle={`Discover Our ${category} Collection!`}
          />
          <CardsContainer style={{ display: 'flex', overflowX: 'auto' }}>
            {sameCaregoryProducts[category].map((prod) => (
              <Card key={prod.id} onClick={() => handleCardClick(prod)}>
                <InnerNested>
                  <Image
                    width={350}
                    height={200}
                    src={`${API_BASE_URL}/${prod.images[0].url}`}
                    alt={`Product image`}
                  />

                  <Heart>
                    <HeartFilled />
                  </Heart>
                  <AddToCart
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(prod);
                    }}
                  >
                    <p>Add to Cart</p> <ShoppingCartOutlined />
                  </AddToCart>
                </InnerNested>
                <CardInner vertical justify={'center'} align={'center'}>
                  <Title>{prod.name}</Title>
                  <Price>
                    <span>
                      <del>Rs.{prod.actual_price}</del>
                    </span>
                    Rs.{prod.discount_price}
                  </Price>
                </CardInner>
              </Card>
            ))}
          </CardsContainer>
        </div>
      ))}
    </>
  );
}
export default Cards;
