import { useLoaderData } from "react-router-dom";
import CartDetails from "./CartDetails";

const MyCart = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 px-2">
                {
                    products.map(item => <CartDetails
                    key={item._id}
                    item={item}
                    ></CartDetails>)
                }
            </div>
        </div>
    );
};

export default MyCart;