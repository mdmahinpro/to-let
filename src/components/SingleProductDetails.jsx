import { useLoaderData } from "react-router-dom";

function SingleProductDetails() {
  const product = useLoaderData();

  return (
    <div className="w-2/3 h-screen  mx-auto flex justify-center items-center">
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
              {product.description}
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
        {/* <div className="mt-6">
          <span className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">
            <span className="isolate inline-flex gap-4 rounded-md shadow-sm">
              <button
                type="button"
                className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              >
                EDIT
              </button>
              <Link to={`products/${product.id}`}>
                <button
                  type="button"
                  className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                >
                  VIEW
                </button>
              </Link>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              >
                DELETE
              </button>
            </span>
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default SingleProductDetails;
