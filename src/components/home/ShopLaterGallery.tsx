import * as React from 'react';

interface IShopLaterGalleryProps {
}

const ShopLaterGallery: React.FunctionComponent<IShopLaterGalleryProps> = async(props) => {
    return <section className="text-gray-600 body-font max-w-7xl mx-auto ">
        <div className="container px-5  mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
                <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Discover a wide range of products in our gallery, from trendy fashion items to cutting-edge electronics. Find something perfect for every occasion.</p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div className="md:p-2 p-1 w-full">
                        <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-full">
                        <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.imgur.com/QkIa5tT.jpeg" />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://static-01.daraz.com.bd/p/7e3236ae171400305081a5fbd893871d.jpg_750x400.jpg_.webp" />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                </div>
            </div>
        </div>
    </section>;
};

export default ShopLaterGallery;
