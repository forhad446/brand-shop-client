import { useLoaderData, useParams } from "react-router-dom";

const SingleBrandDetails = () => {

    const {BrandName} = useParams()
    const product = useLoaderData()
    const product_item = product.Products; 

    const item = product_item.find(data => data.BrandName === BrandName)

    console.log(item);
    return (
        <div className="max-w-7xl mx-auto my-10 flex justify-center">
            <h1>this is single page details of our brand</h1>
        </div>
    );
};

export default SingleBrandDetails;