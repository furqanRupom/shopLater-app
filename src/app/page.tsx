import EcommerceBanner from '@/components/home/Banner';
import Completed from '@/components/home/completed';
import Link from 'next/link';
import * as React from 'react';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = async (props) => {
  const res = await fetch('https://dummyjson.com/products',{
    cache:"no-store"
  });
  const productsData = await res.json();


  

  

  return <section >

    
    <EcommerceBanner title="Limited Time Offer!"
      description="Get up to 50% off on selected items. Hurry, offer ends soon!"
      buttonText="Shop Now"
      buttonLink="/shop"
      imageUrl="https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8467.jpg"
      promo="Get up to 50% off on selected items."
    />

    <section className='grid grid-cols-2 max-w-7xl mx-auto gap-12 py-12 '>
          {
            productsData?.products?.slice(0,8).map((product:any) => <Completed key={product.id} product={product} />)
          }
    </section>
   
  </section>;
};

export default Home;
