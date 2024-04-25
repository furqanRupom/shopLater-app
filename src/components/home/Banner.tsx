import Link from "next/link";
import React from "react";

interface BannerProps {
    title: string;
    description: string;
    promo: string;
    buttonText: string;
    buttonLink: string;
    imageUrl: string;
}

const EcommerceBanner: React.FC<BannerProps> = ({
    title,
    description,
    promo,
    buttonText,
    buttonLink,
    imageUrl,
}) => {
    const bannerStyle = {
        backgroundImage: `url(https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8467.jpg)`,
        backgroundSize: "cover",
        backgroundPosition:"10% 20%",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div style={bannerStyle} >

            <div className="grid w-full grid-cols-1 my-auto mb-8 md:grid-cols-2 xl:gap-14 md:gap-5 justify-items-center items-center max-w-7xl mx-auto overflow-hidden  min-h-[300px]">

            <div className="relative  overflow-hidden">
                <img src="https://i.ibb.co/rb3Zgs7/file.png" alt="container image" />
            </div>
            <div className="relative z-10 px-6 py-16 text-center lg:text-left">
                <div className="flex items-center justify-center mb-4 lg:justify-start">
                        <img className="h-20" src="https://i.ibb.co/S7hr16J/file-1.png" alt="logo" />
                    <h4 className="ml-2 text-sm font-bold tracking-widest uppercase">New Arrivals</h4>
                </div>
                <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl">{title}</h1>
                <p className="mb-6 text-base font-normal leading-7 lg:w-3/4">{description}</p>
                <div className="flex flex-col items-center gap-4 lg:flex-row">
                        <Link href={buttonLink}>     <button className="flex items-center py-4 text-sm font-bold px-7 bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-100 transition duration-300 rounded-xl">{buttonText}</button></Link>
                    <button className="flex items-center py-4 text-sm font-medium px-7 bg-transparent border border-white hover:bg-white hover:text-green-500 transition duration-300 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"></path>
                        </svg>
                        {promo}
                    </button>
                </div>
            </div>
            </div>
        </div>

    );
};

export default EcommerceBanner;
