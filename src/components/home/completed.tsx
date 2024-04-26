"use client"
import { StarIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';


export interface ICompletedProps {
  product:{
      id: number
      title: string
      price: number
      description: string
      category: string
      image: string
      rating: {
          rate: number
          count: number
      },
      discount?:number | 20
  }
}




const Completed: React.FunctionComponent<ICompletedProps> = ({ product }) => {
    return (
        <div className='grid grid-cols-2 items-center justify-items-center shadow py-3'>
                <div >
                    <Image className='object-cover' src={product.image} width={150} height={100} alt="Product thumbnail" />
                </div>
            <div >
                <form className="p-6">
                    <h1 className="text-base font-semibold dark:text-gray-50">{product.title}</h1>
                    <div className="text-xl font-semibold text-gray-500 py-3 dark:text-gray-300">Price : ${product.price.toFixed(2)}</div>
                    <div className="flex items-center mt-2">
                        <StarIcon className="h-6 w-6 text-yellow-500" />
                        <p className="text-gray-700 ml-1">{product.rating.rate} ({product.rating.count} reviews)</p>
                    </div>
                    <div className="flex mb-4 text-sm font-medium my-5 w-full">
                     <Link className='w-full' href={`/product/${product.id}`}>
                            <button
                                type="button"
                                className="py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                            >
                                Buy now
                            </button>
                     </Link>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Free shipping on all continental US orders.</p>
                </form>
            </div>
        </div>
    );
};

export default Completed;
