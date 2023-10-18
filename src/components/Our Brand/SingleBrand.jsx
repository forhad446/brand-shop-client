import { Link } from "react-router-dom";

const SingleBrand = ({ product }) => {
    const { Image, BrandName, ShortBody } = product;
    return (
        
            <Link
                to={`/singlebranddetails/${BrandName}`}
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
                <div className="flex flex-col h-full">
                    <img
                        src={Image}
                        className="object-cover w-full h-48"
                        alt=""
                    />
                    <div className="flex-grow border border-t-0 rounded-b">
                        <div className="p-5">
                            <h6 className="mb-2 font-semibold leading-5">{BrandName}</h6>
                            <p className="text-sm text-gray-900">
                                {ShortBody}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        
    );
};

export default SingleBrand;