
import EcommerceBanner from '@/components/home/Banner';
import Completed from '@/components/home/completed';
import Title from '@/components/title/Tittle';
import Link from 'next/link';
import * as React from 'react';

interface IAllProductsPageProps {
}

const AllProductsPage: React.FunctionComponent<IAllProductsPageProps> = async (props) => {
    const res = await fetch('https://fakestoreapi.com/products',{
       next:{
        revalidate:30
       }
    });
    const productsData = await res.json();






    return <section className='text-center'>
       

        <EcommerceBanner title="All Products"
            description="Get up to 50% off on selected items. Hurry, offer ends soon!"
            buttonText="Shop Now"
            buttonLink="/shop"
            imageUrl="https://png.pngtree.com/background/20210714/original/pngtree-fresh-green-border-e-commerce-banner-background-picture-image_1188155.jpg"
            promo=""
        />

        <Title name="All available products" />


        <section className='grid grid-cols-2 max-w-7xl mx-auto gap-12 py-12 '>
            {
                productsData?.map((product: any) => <Completed key={product.id} product={product} />)
            }
        </section>

    </section>;
};

export default AllProductsPage;
