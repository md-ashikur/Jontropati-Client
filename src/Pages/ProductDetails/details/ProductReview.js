import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";

const ProductReview = () => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div>
        <div className="flex">
          <img
            src={user?.photoURL}
            alt=""
            className="rounded-full border w-20 mx-5"
          ></img>
          <div>
            <div className="rating flex items-center">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <h3 className="font-semibold text-xl ">Kay Mills</h3>
            <p className="text-sm">October 07, 2022</p>
          </div>
        </div>
        <p className="my-4 px-5">
          The shirt was not the fabric I believed it to be. It says Classic Fit
          but was made like the older versions, not the soft cotton like my
          others. I don’t understand how the labels are the same but a
          completely different shirt. Oh well, stuck with it now.
        </p>
      </div>

      {/* ==================review from============= */}

      <p className="font-semibold ">Your rating *</p>
      <div className="rating flex items-center">
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" my-3"
      >
        <textarea
          type="text"
          {...register("review", { required: true })}
          className="form-input my-2 w-full h-28"
          placeholder="Write your review here...*"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            {...register("name")}
            className="form-input my-2"
            placeholder="Name*"
          />

          <input
            type="email"
            {...register("email", { required: true })}
            className="form-input my-2"
            placeholder="Email*"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn bg-red-500 glass text-white rounded-full border-0 hover:bg-primary py-2 mt-2 "
        ></input>
      </form>
    </div>
  );
};

export default ProductReview;
