"use client"
import Image from 'next/image';
import * as React from 'react';

const cartData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;

}


const AddToCartComponent: React.FunctionComponent = async({id}:any) => {
    const singleCart = await cartData();
    const filterData = singleCart?.find((singleData:any) => singleData.id === parseInt(id))
    console.log(filterData);
    const {thumbnail,title,description,discountPercentage,rating,stock,brand,category,price} = filterData
  
    return <div className="max-w-screen-xl mx-auto rounded overflow-hidden shadow-lg bg-white flex flex-wrap">
        {/* Product Details Section */}
        <div className="w-full md:w-2/3 py-20">
            <div className="md:flex">
                <div className="md:w-1/2">
                    <Image width={400} height={800} className="w-full h-full" src={thumbnail} alt={title} />
                </div>
                <div className="md:w-1/2 px-6 py-4">
                    <h3 className="font-semibold text-xl mb-2">{title}</h3>
                    <p className="text-gray-700 text-base mb-4">{description}</p>
                    <div className="flex items-center mb-4">
                        <div className="text-gray-700 text-base mr-2">{`Rating: ${rating}/5`}</div>
                        <div className="text-gray-700 text-base">{`Stock: ${stock}`}</div>
                    </div>
                    <p className="text-gray-700 text-base">{`Brand: ${brand}`}</p>
                    <p className="text-gray-700 text-base">{`Category: ${category}`}</p>
                    <p className="text-gray-700 text-base">{`Price: $${price.toFixed(2)}`}</p>
                    {discountPercentage && (
                        <p className="text-green-600 text-base mb-4">{`Save ${discountPercentage}% with coupon`}</p>
                    )}
                    {/* Coupon Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="couponCode">
                            Coupon Code
                        </label>
                        <div className="flex">
                            <input
                                className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="couponCode"
                                type="text"
                                placeholder="Enter coupon code"
                            />
                            <button className="bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Payment Gateway Section */}
        <div className="w-full md:w-1/3 bg-gray-100 p-4 flex flex-col justify-center items-center">
            <p className="text-xl font-semibold mb-4">Payment Options</p>
            <form className="w-full max-w-sm">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                        Card Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cardNumber"
                        type="text"
                        placeholder="Enter card number"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expirationDate">
                        Expiration Date
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="expirationDate"
                        type="text"
                        placeholder="MM/YY"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-green-400 text-sm font-bold mb-2" htmlFor="cvv">
                        CVV
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-green-400 leading-tight focus:outline-none focus:shadow-outline"
                        id="cvv"
                        type="text"
                        placeholder="CVV"
                    />
                </div>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="button"
                >
                    Submit Payment
                </button>
            </form>
        </div>
    </div>


};

export default AddToCartComponent;
