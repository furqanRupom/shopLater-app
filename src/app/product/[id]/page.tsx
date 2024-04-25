"use client"
import AddToCartComponent from '@/components/home/AddToCart';
import EcommerceBanner from '@/components/home/Banner';
import * as React from 'react';


const AddToCart: React.FunctionComponent = ({params}:any) => {
  console.log({params});
  return <div>
    <EcommerceBanner title="Grap it its YOURS"
      description="Get up to 50% off on selected items. Hurry, offer ends soon!"
      buttonText="Shop Now"
      buttonLink="/shop"
      imageUrl="https://png.pngtree.com/background/20210714/original/pngtree-fresh-green-border-e-commerce-banner-background-picture-image_1188155.jpg"
      promo=""
    />
    <AddToCartComponent id={params.id} />
  </div>;
};

export default AddToCart;
