"use server";

import { FormValues } from "@/components/product/AddProduct";

export const createProduct = async (data:FormValues) => {
    const res = await fetch("https://fakestoreapi.com/products",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            body:JSON.stringify(data)
        },
        cache:"no-store"
    });
    const productInfo = await res.json();
    return productInfo;
}