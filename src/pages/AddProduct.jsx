import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const showSwalWithLink = () => {
    MySwal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'product added on database done',
        showConfirmButton: false,
        timer: 1500
    })
}


const AddProduct = () => {
    const handleAddProduct = event => {
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

        fetch(`http://localhost:5000/product`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then(() => {
                showSwalWithLink()
                form.reset()
            })

    }
    return (
        <div className="max-w-7xl mx-auto my-10">
            <h1>this is add product page</h1>
            <div className="flex justify-center">
                <form onSubmit={handleAddProduct} className="grid grid-cols-2 gap-3">

                    <input type="text" placeholder="Image Link"
                        name="image" className="input input-bordered input-info w-full max-w-xs" required />

                    <input type="text" placeholder="Name"
                        name="name" className="input input-bordered input-info w-full max-w-xs" required/>

                    <input type="text" placeholder="Brand Name"
                        name="brandName" className="input input-bordered input-info w-full max-w-xs" required/>

                    <input type="text" placeholder="Category Name"
                        name="categoryName" className="input input-bordered input-info w-full max-w-xs" required/>

                    <input type="text" placeholder="Price"
                        name="price" className="input input-bordered input-info w-full max-w-xs" required/>

                    <input type="text" placeholder="Short description"
                        name="shortDescription" className="input input-bordered input-info w-full max-w-xs" required/>

                    <input type="text" placeholder="Rating"
                        name="rating" className="input input-bordered input-info w-full col-span-2" required/>

                    <input type="submit"
                        value="Add Product" className="input input-bordered input-info w-full col-span-2 bg-green-500 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white" />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;