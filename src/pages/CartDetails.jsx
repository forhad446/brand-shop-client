import { Link } from "react-router-dom";


const CartDetails = ({ item }) => {

    const { _id, brandName, categoryName, image, name, price, rating, shortDescription } = item;

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/myCart/${_id}`, {
            method: "DELETE",
        })

        window.location.reload(false);

    }
    return (
        <div>

            <div className="flex flex-col items-center justify-between w-full h-[450px] overflow-hidden bg-white rounded-lg shadow-lg p-5">
                <div className="w-[330px] bg-cover bg-landscape">
                    <img className="w-full" src={image} alt={brandName} />
                </div>
                <div className="w-full ">
                    <h1 className="text-2xl font-bold text-gray-900">
                        {brandName}
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        {shortDescription}
                    </p>
                    <div className="flex mt-2 item-center">
                        Rating {rating}
                    </div>
                    <div className="flex justify-between mt-3 item-center">
                        <h1 className="text-xl font-bold text-gray-700">
                            {price}$
                        </h1>
                        <Link to={`/myCardDetails/${_id}`}>
                            <button
                                className="uppercase bg-green-500 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white">
                                Details
                            </button>
                        </Link>
                    </div>
                    <div className="mt-5 flex  gap-10 justify-between">
                        <button className="uppercase bg-green-500 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white">
                            Update
                        </button>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="uppercase bg-green-500 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white">
                            Delete
                        </button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default CartDetails;