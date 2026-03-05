import api from "./api"

export const createProduct = async(data)=>{
    const response = await api.post("/api/product/create", data);
    return response.data;
}

export const deleteProduct = async(id)=>{
    const response = await api.delete(`/api/product/${id}`);
    return response.data;
}

export const updateProduct = async(id,data)=>{
    const response = await api.patch(`/api/product/${id}`,data);
    return response.data;
}

export const getProduct = async()=>{
    const response = await api.get('/api/product/viewAllProducts');
    return response.data;
}