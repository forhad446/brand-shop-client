import { Link, useLoaderData } from "react-router-dom";
import CartDetails from "./CartDetails";
// import Sidebar from "../components/sidebar/Sidebar";
import { SlArrowRight } from "react-icons/Sl";
import { useState } from "react";

const MyCart = () => {

    const productsData = useLoaderData()
    const [products, setProducts] = useState(useLoaderData())

    const brandNames = productsData.map(item => item.brandName);
    const uniqueValues = [...new Set(brandNames)];

    // filter data by brandName
    const handleBrandName = brandName => {
        const filterData = productsData.filter(item => item.brandName === brandName)
        setProducts(null)
        if (filterData) {
            setProducts(filterData);
        }

    }

    return (
        <div className="max-w-7xl mx-auto my-10 md:flex">

            <div className="mr-10 ">
                <div>
                    <h1 className="text-xl text-center font-bold mb-3">Brand Name</h1>
                </div>
                <ul className="flex flex-col gap-10 text-xl divide-y divide border-l-2 border-l-red-400 pl-5">
                    {
                        uniqueValues.map((item, idx) =>
                            <Link key={idx}>
                                <li onClick={() => handleBrandName(item)}>
                                    <div className="flex justify-between items-center  gap-20">
                                        <p>{item}</p>
                                        <SlArrowRight />
                                    </div>
                                </li>
                            </Link>
                        )
                    }
                </ul>
            </div>

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