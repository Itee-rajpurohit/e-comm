import React, { useEffect, useState } from "react";
import { getProduct } from "../../services/product.api";
import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";

const ProductsPage = () => {

  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await getProduct();
      setProducts(res.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      await fetchProducts();
    };

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-8">
          Product Management
        </h1>

        <ProductForm
          refreshProducts={fetchProducts}
          editingProduct={editingProduct}
          setEditingProduct={setEditingProduct}
        />

        <ProductList
          products={products}
          refreshProducts={fetchProducts}
          setEditingProduct={setEditingProduct}
        />

      </div>

    </div>
  );
};

export default ProductsPage;