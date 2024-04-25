import EcommerceBanner from '@/components/home/Banner';
import Image from 'next/image';
import * as React from 'react';

interface IPostsProps {
}

const Posts: React.FunctionComponent<IPostsProps> = async(props) => {
    const res = await fetch('https://dummyjson.com/posts',{
        cache:"no-store"
    });
    const data = await res.json();
    console.log(data);
    const posts = data.posts;
    return <section>
        <div>
            <EcommerceBanner title="All Our valuable client posts"
                description="Add your feedback in too. We always response your valuable feedback and will try to solve your problem as soon as possible !"
                buttonText="Feedback Now"
                buttonLink="/feedback"
                imageUrl="https://png.pngtree.com/background/20210714/original/pngtree-fresh-green-border-e-commerce-banner-background-picture-image_1188155.jpg"
                promo=""
            />
            {posts.length === 0 ? <div className="p-4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden w-full">
                    <div className="p-6 w-full h-full">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">this card only exit</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint libero quidem suscipit.</h1>
                        <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nisi consequatur facere nemo placeat ab repudiandae doloribus iusto quos vitae!</p>
                        <div className="flex items-center flex-wrap">
                            <a href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id corrupti, vel itaque cupiditate aliquid maxime iure aspernatur dicta ullam unde suscipit assumenda ipsum excepturi libero atque a eveniet repudiandae! Quis.
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>55
                            </span>
                        </div>
                    </div>
                </div>
            </div> : posts.slice(0, 10).map(({ title, body, tags, reactions }: any, index: any) => (
                <div key={index} className="p-4 ">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <Image width={400} height={400} className="mx-auto" src="https://t4.ftcdn.net/jpg/02/92/02/75/360_F_292027530_tOeqJbmtM9LwI4YbaaUrbCglVhZuyQth.jpg" alt={title} />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{
                                tags.map((tag: any) => <small>{tag}</small>)
                            }</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                            <p className="leading-relaxed mb-3">{body}</p>
                            <div className="flex items-center flex-wrap">
                                <a href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>{reactions}
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>{reactions}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
};

export default Posts;
