"use client"
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export interface ICompletedProps {
    product: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
    };
}

const Completed: React.FunctionComponent<ICompletedProps> = ({ product }) => {
    return (
        <div className="flex items-center justify-between border border-gray-200 p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center">
                <div className="relative w-20 h-20 mr-6 overflow-hidden rounded-lg border-2 border-gray-200 shadow-md">
                    <div className="absolute inset-0">
                        <Image src={product.thumbnail} layout="fill" objectFit="cover" alt="Product thumbnail" />
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-500">Brand: {product.brand}</p>
                    <p className="text-gray-500">Category: {product.category}</p>
                    <p className="text-gray-500">${product.price.toFixed(2)}</p>
                </div>
            </div>
            <div>
                <Link href={`product/${product.id}`}>
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        Buy Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Completed;
