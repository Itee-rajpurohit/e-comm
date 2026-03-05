import { useState, useEffect } from "react";
import { createProduct, updateProduct } from "../services/product.api";

const ProductForm = ({ refreshProducts, editingProduct, setEditingProduct }) => {

  const [product, setProduct] = useState({
    name:"",
    description:"",
    price:"",
    category:"",
    brand:"",
    stock:""
  });

  useEffect(() => {
  if (!editingProduct) return;

  setProduct(prev => ({
    ...prev,
    name: editingProduct.name || "",
    description: editingProduct.description || "",
    price: editingProduct.price || "",
    category: editingProduct.category || "",
    brand: editingProduct.brand || "",
    stock: editingProduct.stock || ""
  }));

}, [editingProduct?._id]);

  const handleChange = (e)=>{
    setProduct({...product,[e.target.name]:e.target.value});
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try {

      if(editingProduct){
        await updateProduct(editingProduct._id, product);
        alert("Product Updated");
        setEditingProduct(null);
      }
      else{
        await createProduct(product);
        alert("Product Created");
      }

      refreshProducts();

      setProduct({
        name:"",
        description:"",
        price:"",
        category:"",
        brand:"",
        stock:""
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="bg-white p-6 rounded-lg shadow mb-8">

      <h2 className="text-xl font-semibold mb-4">
        {editingProduct ? "Edit Product" : "Create Product"}
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

        <input
          className="border p-2 rounded"
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          name="brand"
          placeholder="Brand"
          value={product.brand}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded col-span-2"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />

        <button
          className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          type="submit"
        >
          {editingProduct ? "Update Product" : "Create Product"}
        </button>

      </form>

    </div>
  );
};

export default ProductForm;