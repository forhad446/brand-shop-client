import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleBrand from "./SingleBrand";

export const OurBrand = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./product_data.json')
        .then(res => res.json())
        .then(data => setProducts(data.Products))
    },[])
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Choose the</span>
                    </span>{' '}
                    brand name that aligns best with the content
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
            </div>
            <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                {
                    products.map((product, rxd) => <SingleBrand 
                    key={rxd}
                    product={product}
                    ></SingleBrand>)
                }
                {/* <Link
                    to="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://i.ibb.co/VQsRM76/apple-1853259-1920.jpg"
                            className="object-cover w-full h-48"
                            alt=""
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 font-semibold leading-5">
                                    Apples
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Apple is a multinational technology company based in Cupertino, California, USA
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    to="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://i.ibb.co/fCCsyTb/facebook-login-1475585-1920.jpg"
                            alt="sumsung"
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 font-semibold leading-5">
                                    Samsung
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Samsung is a multinational conglomerate headquartered in Seoul, South Korea. It is one of the world's largest and most diversified technology companies
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://i.ibb.co/4KwYPWP/passion-photography-3359955-1920.jpg"
                            className="object-cover w-full h-48"
                            alt=""
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 font-semibold leading-5">Sony</h6>
                                <p className="text-sm text-gray-900">
                                    Sony is a Japanese multinational conglomerate known for its diverse range of consumer electronics, entertainment, and technology productsr.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://i.ibb.co/qx77fXf/office-625892-1920.jpg"
                            className="object-cover w-full h-48"
                            alt=""
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 font-semibold leading-5">
                                    Google
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Google is an American multinational technology company known for its vast range of internet-related products and services.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://i.ibb.co/rk5yzGj/cpu-4393376-1920.jpg"
                            className="object-cover w-full h-48"
                            alt=""
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 font-semibold leading-5">
                                    Intel
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Intel is an American multinational corporation and one of the world's largest and most well-known semiconductor chip manufacturers.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://i.ibb.co/xFqQ7kx/smartphone-5714763-1920.jpg"
                            className="object-cover w-full h-48"
                            alt=""
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 font-semibold leading-5">
                                    Redmi
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Redmi is a sub-brand of Xiaomi Corporation, a prominent Chinese electronics company.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://i.ibb.co/Jj4X1NM/twitter-1522890-1920.jpg"
                            className="object-cover w-full h-48"
                            alt=""
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 font-semibold leading-5">Twitter</h6>
                                <p className="text-sm text-gray-900">
                                    Twitter is a widely recognized social media platform and microblogging service that allows users to share short messages called "tweets."
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    href="/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src="https://i.ibb.co/FJMYXXP/business-5475659-1920.jpg"
                            className="object-cover w-full h-48"
                            alt=""
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 font-semibold leading-5">
                                    Facebook
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Facebook has become a primary means of communication, information sharing, and social connection for billions of people worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link> */}
            </div>
            <div className="text-center">
                <Link
                    to="/"
                    className="bg-green-500 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white"
                >
                    Learn more
                </Link>
            </div>
        </div>
    );
};