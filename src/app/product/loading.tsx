import * as React from 'react';

interface ILoaginPageProps {
}

const LoaginPage: React.FunctionComponent<ILoaginPageProps> =async (props) => {
    const res = await fetch('https://fakestoreapi.com/products');
    const productsData = await res.json();
    return <section className='grid grid-cols-2 max-w-7xl mx-auto gap-12 py-12 '>
    {
            productsData.map((product:any) => <div key={product.id} className='grid grid-cols-2 items-center justify-items-center shadow py-3 animate-pulse'>
                <div className='w-32 h-20 bg-gray-300 rounded-md'></div>
                <div>
                    <div className="p-6">
                        <div className="text-base font-semibold dark:text-gray-50 animate-pulse"></div>
                        <div className="text-xl font-semibold text-gray-500 py-3 dark:text-gray-300 animate-pulse"></div>
                        <div className="flex items-center mt-2 animate-pulse">
                            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                            <p className="text-gray-700 ml-1 animate-pulse"></p>
                        </div>
                        <div className="flex mb-4 text-sm font-medium my-5 w-full">
                            <div className='w-full'>
                                <div className="py-2 px-4 bg-gray-400 w-full text-center text-base font-semibold rounded-lg animate-pulse"></div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-300 animate-pulse"></p>
                    </div>
                </div>
            </div>)
    }
    </section>;
};

export default LoaginPage;
