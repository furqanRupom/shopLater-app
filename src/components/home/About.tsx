import * as React from 'react';
import Title from '../title/Tittle';

interface IAboutProps {
}

const About: React.FunctionComponent<IAboutProps> = (props) => {
    return <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
                <Title name="About us" />
            <div className="flex flex-col text-center w-full mb-20">
     
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">At ShopLater, we believe in providing the best shopping experience for our customers. From trendy fashion to cutting-edge electronics, we offer a wide range of products to suit your needs. Our mission is to make online shopping convenient, enjoyable, and secure.</p>
            </div>
            <div className="flex flex-wrap">
                <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Quality Products</h2>
                    <p className="leading-relaxed text-base mb-4">We handpick each product to ensure the highest quality and reliability, so you can shop with confidence.</p>
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Customer Satisfaction</h2>
                    <p className="leading-relaxed text-base mb-4">Your satisfaction is our top priority. We strive to provide excellent customer service and support.</p>
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Secure Transactions</h2>
                    <p className="leading-relaxed text-base mb-4">We prioritize your security. Rest assured that your transactions with us are safe and encrypted.</p>
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Fast Shipping</h2>
                    <p className="leading-relaxed text-base mb-4">Get your orders delivered to your doorstep quickly and efficiently with our fast shipping services.</p>
                </div>
            </div>
            <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Explore More</button>
        </div>
    </section>;
};

export default About;
