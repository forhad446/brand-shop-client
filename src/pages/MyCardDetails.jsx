import { useLoaderData, useParams } from "react-router-dom";

const MyCardDetails = () => {
    const {id} = useParams()
    const productsData = useLoaderData()

    const isExit = productsData.find(item => item._id === id);
    const { _id, brandName, categoryName, image, name, price, rating, shortDescription } = isExit;

    console.log(brandName);
    return (
        <div>

        </div>
    );
};

export default MyCardDetails;