import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="relative md:h-[calc(100vh-100px)]">
            <img
                src="https://i.ibb.co/N2cFt0f/technology-6701504-1920.jpg"
                className="absolute  w-full h-full"
                alt=""
            />
            <div className="relative h-full py-10 bg-gray-900 bg-opacity-75 flex justify-center items-center">
                <div className="">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl sm:leading-none text-center">
                        Exploring Tomorrow's, Tech Today
                    </h2>
                    <p className="max-w-xl mt-4 text-base text-gray-400 md:text-lg text-center">

                        Remember to stay up-to-date with the latest tech trends, as the technology landscape is ever-evolving. Consistently providing valuable and insightful content will help your website become a go-to resource for tech enthusiasts and professionals looking to explore the technology of tomorrow today.
                    </p>
                    <div className="flex justify-center mt-5">
                        <Link to=''>
                            <button className="bg-green-500 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white">Learn More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;