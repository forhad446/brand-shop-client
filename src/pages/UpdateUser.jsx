import { useState } from "react";
import { Navigate, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const UpdateUser = () => {
    const { id } = useParams()
    const productsData = useLoaderData()

    const [update, setUpdate] = useState(true)

    const isExit = productsData.find(item => item._id === id);
    const { brandName, categoryName, image, name, price, rating, shortDescription } = isExit;

    const MySwal = withReactContent(Swal)
    const showSwalWithLink = () => {
        MySwal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'product Updated Successful',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const categoryName = form.categoryName.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;

        const product = { image, name, brandName, categoryName, price, shortDescription, rating }

        setUpdate(true)

        fetch(`http://localhost:5000/myCart/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then(() => {
                setUpdate(false)
                showSwalWithLink()
            })

    }
    console.log(name);
    return (
        <div className="max-w-7xl mx-auto my-10">
            {
                !update && <Navigate to="/myCart"></Navigate>
            }
            <h1>this is add product page</h1>
            <div className="flex justify-center">
                <form onSubmit={handleUpdateProduct} className="grid grid-cols-2 gap-3">

                    <input type="text" placeholder={image}
                        name="image" className="input input-bordered input-info w-full max-w-xs" required />

                    <input type="text" placeholder={name}
                        name="name" className="input input-bordered input-info w-full max-w-xs" required />

                    <input type="text" placeholder={brandName}
                        name="brandName" className="input input-bordered input-info w-full max-w-xs" required />

                    <input type="text" placeholder={categoryName}
                        name="categoryName" className="input input-bordered input-info w-full max-w-xs" required />

                    <input type="text" placeholder={price}
                        name="price" className="input input-bordered input-info w-full max-w-xs" required />

                    <input type="text" placeholder={shortDescription}
                        name="shortDescription" className="input input-bordered input-info w-full max-w-xs" required />

                    <input type="text" placeholder={rating}
                        name="rating" className="input input-bordered input-info w-full col-span-2" required />

                    <input type="submit"
                        value="Update Product" className="input input-bordered input-info w-full col-span-2 bg-green-500 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white" />

                </form>
            </div>
        </div>
    );
};

export default UpdateUser;