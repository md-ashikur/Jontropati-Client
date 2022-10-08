import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';


const AddProduct = () => {
    const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    // const url = ``;
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   });
  };
    return (
        <div className="lg:mx-20 mx-5 my-28">
        <h1 className="text-3xl font-bold">Add New Product</h1>
  
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-75 mx-auto my-3"
        >
          <label for="picture">Product Picture</label>
          <input
            type="file"
            {...register("picture")}
            className="form-input my-2"
           
          />
          <label for="name">Product Name</label>
          <input
            type="text"
            {...register("name")}
            className="form-input my-2"
            placeholder="Name"
          />
  
          <div className="w-full grid grid-cols-2 gap-4">
  
            <label for="price">
              Product Price
              <input
                type="number"
                {...register("price")}
                className="form-input w-full h-11 my-2"
                placeholder="price"
              />
            </label>
  
            <label for="stock">
              In Stock
              <select name="stock" className="form-input w-full h-11 my-2" {...register("stock")}>
               
                <option value="Yes" selected>Yes</option>
                <option value="No">No</option>
               
              </select>
            </label>
  
            <label for="date">
              Date
              <input
                type="date"
                {...register("date")}
                className="form-input w-full h-11 my-2"
                placeholder="ex: B.Sc in CSE"
              />
            </label>
          </div>
  
          <label for="description">
           Description
            <textarea
              type="text"
              {...register("description")}
              className="form-input w-full h-28 my-2"
              placeholder="write short bio ..."
            />
          </label>
  
          <input
            type="submit"
            value="Add Product"
            className="btn  w-28 rounded-full bg-primary text-white hover:bg-red-500 py-2 mt-2 px-20"
          ></input>
        </form>
      </div>
    );
};

export default AddProduct;