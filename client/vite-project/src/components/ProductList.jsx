import React from "react";
import { deleteProduct } from "../services/product.api";

const ProductList = ({ products = [], refreshProducts, setEditingProduct }) => {

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      refreshProducts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>

      <h2 className="text-xl font-semibold mb-4">
        Product List
      </h2>

      <div className="grid gap-4">

        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >

            <div>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-sm text-gray-500">Brand: {product.brand}</p>
              <p className="font-semibold">₹ {product.price}</p>
            </div>

            <div className="flex gap-2">

              <button
                onClick={() => setEditingProduct(product)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ProductList;