import { useState } from "react";

function AddNewProduct() {
  const [showToast, setShowToast] = useState(false);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    if (id && title && brand && price && description && image_url) {
      const product = { id, title, brand, price, description, image_url };
      console.log(product);

      const confirmAdd = window.confirm(
        "Are you sure you want to add this product?"
      );

      if (confirmAdd) {
        try {
          const response = await fetch(`http://localhost:3000/products`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(product),
          });

          if (response.ok) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
            form.reset(); // Reset the form after successful submission
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
  };

  return (
    <div className="isolate rounded-md shadow-sm">
      {/* Toast notification */}
      {showToast && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Product added successfully.</span>
          </div>
        </div>
      )}

      <form onSubmit={handleAddProduct} className="space-y-4">
        {/* Form fields */}
        <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="id"
            className="block text-xs font-medium text-gray-900"
          >
            ID
          </label>
          <input
            type="text"
            name="id"
            id="id"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Product ID"
            required
          />
        </div>

        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="title"
            className="block text-xs font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Product Title"
            required
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="brand"
            className="block text-xs font-medium text-gray-900"
          >
            Brand
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Product Brand"
            required
          />
        </div>
        <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="price"
            className="block text-xs font-medium text-gray-900"
          >
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Product Price"
            required
          />
        </div>
        <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="description"
            className="block text-xs font-medium text-gray-900"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Product Description"
            required
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label
            htmlFor="image_url"
            className="block text-xs font-medium text-gray-900"
          >
            Image URL
          </label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Product Image URL"
            required
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            ADD PRODUCT
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewProduct;
