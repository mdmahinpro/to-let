import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ManageAllProducts() {
  const [products, setProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmDelete) {
      try {
        await fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
        });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
        fetchProducts(); // Fetch the updated list of products after deletion
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="bg-white mb-8">
      {showToast && (
        <div className="toast toast-end">
          <div className="alert text-white bg-red-600 font-bold ">
            <span>Item deleted successfully.</span>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl text-center font-bold text-gray-900">
          Manage Products
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 h-6">
                    {product.description.slice(3, 50)}
                  </p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {product.price}$
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <span className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">
                  <span className="isolate inline-flex gap-4 rounded-md shadow-sm">
                    <Link to={`/dashboard/edit-product/${product.id}`}>
                      <button
                        type="button"
                        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                      >
                        EDIT
                      </button>
                    </Link>

                    <Link to={`products/${product.id}`}>
                      <button
                        type="button"
                        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                      >
                        VIEW
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(product.id)}
                      type="button"
                      className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                    >
                      DELETE
                    </button>
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageAllProducts;
