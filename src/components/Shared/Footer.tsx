import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
                {/* About Us */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">About Us</h3>
                    <p className="text-gray-600">shopLater is your destination for all things fashion. From trendy streetwear to classic formal attire, we've got you covered. </p>
                </div>

                {/* Categories */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
                    <ul className="text-gray-600">
                        <li>Men's Clothing</li>
                        <li>Women's Clothing</li>
                        <li>Kids' Clothing</li>
                        <li>Accessories</li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
                    <p className="text-gray-600">1234 Main Street<br />New York, NY 10001<br />info@shoplater.com<br />(123) 456-7890</p>
                </div>

                {/* Newsletter */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Newsletter</h3>
                    <p className="text-gray-600">Subscribe to our newsletter for exclusive deals and updates.</p>
                    <div className="flex">
                        <input type="email" placeholder="Enter your email" className="px-4 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none focus:border-green-500" />
                        <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-600">
                <p>shopLater &copy; {new Date().getFullYear()} by Furqan Ahmad. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
