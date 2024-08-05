'use client';
import { EyeOutlined, HeartFilled } from '@ant-design/icons';
import { Flex, Skeleton } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const { products } = useStore();
  const [loading, setLoading] = useState(true);

  const sameCaregoryProducts = products.reduce((acc, prod) => {
    if (!acc[prod.category]) {
      acc[prod.category] = [];
    }
    acc[prod.category].push(prod);
    return acc;
  }, {});

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  const skeletonLoader = (
    <Flex vertical justify="center" align="center">
      <Skeleton.Input active />
      <CardsContainer>
        {[...Array(4).keys()].map((index) => (
          <Card key={index}>
            <Skeleton.Image active style={{ width: '350px', height: 200 }} />
            <Skeleton active />
          </Card>
        ))}
      </CardsContainer>
    </Flex>
  );

  const handleCardClick = (product) => {
    router.push(`/product/${product.id}`);
  };

  return (
    <>
      {Object.keys(sameCaregoryProducts).length === 0 && loading
        ? skeletonLoader
        : Object.keys(sameCaregoryProducts).map((category) => (
            <div key={category}>
              <HeaderText
                title={category}
                subtitle={`Discover Our ${category} Collection!`}
              />
              <CardsContainer>
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
                        }}
                      >
                        <p>Add to Cart</p> <EyeOutlined />
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
