import Image from 'next/image';
import * as React from 'react';
import Title from '../title/Tittle';


export const generateStaticParams = async() => {
    const response = await fetch('https://dummyjson.com/products').then(res => res.json());
    const products = response.products;
    return products.map((product:any) => ({
        id:product.id
    }))

}

const AddToCartComponent: React.FunctionComponent = async({id}:any) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json();
   const {image,title,description,category,price,rating} = data
  
    return <div className=" dark:bg-green-800 py-8">
        <Title name="Product Details" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="h-[460px] rounded-lg bg-green-300 dark:bg-green-700 mb-4">
                        <Image width={150}  height={200} className="w-full h-full " src={image} alt={title} />
                    </div>
                  
                </div>
                <div className="md:flex-1 px-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-md leading-relaxed mb-4">{description}</p>
                    <div className="flex mb-4">
                        <div className="mr-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                            <span className="text-gray-600 dark:text-gray-300">${price.toFixed(2)}</span>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                        <p className="text-gray-600 dark:text-gray-300 text-md leading-relaxed mb-4">{description}</p>
                    </div>
                    <div className="flex -mx-2 mb-4 mt-12">
                        <div className="w-1/2 px-2">
                            <button className="w-full bg-green-500 dark:bg-green-600 text-white py-2 px-4 rounded-full font-bold hover:bg-green-800 dark:hover:bg-green-700">Add to Cart</button>
                        </div>

                    <div className="w-1/2 px-2">
                        <button className="w-full bg-green-200 dark:bg-green-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-green-300 dark:hover:bg-green-600">Add to Wishlist</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


};

export default AddToCartComponent;
