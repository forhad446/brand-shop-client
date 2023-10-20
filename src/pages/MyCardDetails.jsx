import { useLoaderData, useParams } from "react-router-dom";
import Slider from "../components/Carousel/Slider";

const MyCardDetails = () => {
    const { id } = useParams()
    const productsData = useLoaderData()

    const isExit = productsData.find(item => item._id === id);
    const { _id, brandName, categoryName, image, name, price, rating, shortDescription } = isExit;
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="flex gap-10 ">
                <div className="w-5/12">
                    <Slider></Slider>
                    <img src="https://i.ibb.co/VL1LkK2/welcome-sign-2284312-1920.jpg" alt="" />
                </div>
                <div className="w-8/12 rounded-lg shadow-xl p-5">
                    <div>
                        <img src={image} alt={brandName} />
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-xl font-bold">{name}</h1>
                            <p className="text-lg font-medium">{shortDescription}</p>
                        </div>
                        <div>
                            <button className="uppercase bg-green-500 hover:bg-indigo-700 px-2 py-1 rounded-lg text-white">
                                {brandName}
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <p className="text-2xl font-bold">{price}$</p>
                        <p className="text-xl font-medium">Rating: {rating}</p>
                    </div>
                </div>
                <div className="w-4/12">
                    <img src="https://i.ibb.co/7X1t7C7/gambling-hell-439523-1920.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MyCardDetails;