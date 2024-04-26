import About from '@/components/home/About';
import EcommerceBanner from '@/components/home/Banner';
import BestFeatured from '@/components/home/BestFeatured';
import NewsLetter from '@/components/home/NewsLetter';
import ShopLaterGallery from '@/components/home/ShopLaterGallery';
import Testimonial from '@/components/home/Testimonial';
import Timeline from '@/components/home/Timeline';
import Completed from '@/components/home/completed';
import Title from '@/components/title/Tittle';
import Link from 'next/link';
import * as React from 'react';

interface IHomeProps {
}




const Home: React.FunctionComponent<IHomeProps> = async (props) => {
  const res = await fetch('https://fakestoreapi.com/products',{
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

   <main>

    <About />
       
     <section>
             <Title name="Featured Products" />
        <section className='grid grid-cols-2 max-w-7xl mx-auto gap-12 py-12 '>
          {
            productsData?.slice(0, 4).map((product: any) => <Completed key={product.id} product={product} />)
          }
        </section>
     </section>
    {/* testimonials section */}
    <Timeline />
    <BestFeatured />
    <Testimonial />
    <NewsLetter />
   </main>


   
  </section>;
};

export default Home;
