

const CartDetails = ({item}) => {
    const {_id, brandName, categoryName, image, name, price, rating, shortDescription} = item;
    return (
        <div>

            <div className="flex items-center max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="w-2/4 bg-cover bg-landscape">
                    <img src={image} alt="" />
                </div>
                <div className="w-2/3 p-4">
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
                        <button className="uppercase bg-green-500 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white">
                            Details
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartDetails;