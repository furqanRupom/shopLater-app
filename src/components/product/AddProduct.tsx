
"use client"
import * as React from 'react';
import Title from '../title/Tittle';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createProduct } from '@/actions/createProduct';

interface IAddProductProps {
}

export interface FormValues{
    title: string
    price: number
    description: string
    category: string
    image: string
}
const AddProduct: React.FunctionComponent<IAddProductProps> = (props) => {
    const {register,handleSubmit} = useForm<FormValues>();
    const onSubmit:SubmitHandler<FormValues> = async(data:FormValues) => {
        console.log({ ...data, price: Number(data.price) });
        try {
            const res = await createProduct({...data,price:Number(data.price)});
            console.log(res);
            
        } catch (error:any) {
            console.log(error.message);
            throw new Error(error)
        }
        
    }
  return <>
      <Title name="Add Product" />
      <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-12 mx-auto">
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap -m-2">
                      <div className="p-2 w-full">
                          <div className="relative">
                              <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
                              <input {...register('title')} type="text" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                          </div>
                      </div>
                      <div className="p-2 w-1/2">
                          <div className="relative">
                              <label htmlFor="price" className="leading-7 text-sm text-gray-600">Price</label>
                              <input {...register('price')} type="number" id="price" name="price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                          </div>
                      </div>
                      <div className="p-2 w-1/2">
                          <div className="relative">
                              <label htmlFor="category" className="leading-7 text-sm text-gray-600">Category</label>
                              <input {...register('category')} type="text" id="category" name="category" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                          </div>
                      </div>
                      <div className="p-2 w-full">
                          <div className="relative">
                              <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
                              <textarea {...register('description')} id="description" name="description" rows={4} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                          </div>
                      </div>
                      <div className="p-2 w-full">
                          <div className="relative">
                              <label htmlFor="image" className="leading-7 text-sm text-gray-600">Image URL</label>
                              <input {...register('image')} type="text" id="image" name="image" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                          </div>
                      </div>
                      <div className="p-2 w-full">
                          <div className="relative">
                              <label htmlFor="discount" className="leading-7 text-sm text-gray-600">Discount (optional)</label>
                              <input type="number" id="discount" name="discount" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                          </div>
                      </div>
                      <div className="p-2 w-full">
                          <button type="submit" className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Add Product</button>
                      </div>
                  </form>
              </div>
          </div>
      </section>
  </>;
};

export default AddProduct;
