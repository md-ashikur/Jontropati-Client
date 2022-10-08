import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const Settings = () => {
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
      <h1 className="text-3xl font-bold">Account Settings</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-75 mx-auto my-3"
      >
        <label for="picture">Profile Picture</label>
        <input
          type="file"
          {...register("picture")}
          className="form-input my-2"
         
        />
        <label for="name">Full Name</label>
        <input
          type="text"
          {...register("name")}
          className="form-input my-2"
          placeholder="Name"
        />

        <div className="w-full grid grid-cols-2 gap-4">
          <label for="email">
            Email
            <input
              type="email"
              {...register("email")}
              className="w-full my-2 input"
              placeholder={user.email}
              disabled
            />
          </label>

          <label for="phone">
            Phone Number
            <input
              type="number"
              {...register("phone")}
              className="form-input w-full h-11 my-2"
              placeholder="with country code (ex:+880)"
            />
          </label>

          <label for="facebook">
            Facebook
            <input
              type="url"
              {...register("facebook")}
              className="form-input w-full h-11 my-2"
              placeholder="facebook ID link"
            />
          </label>
          <label for="twitter">
            Twitter
            <input
              type="url"
              {...register("twitter")}
              className="form-input w-full h-11 my-2"
              placeholder="Twitter ID link"
            />
          </label>
          <label for="linkedin">
            Linkedin
            <input
              type="url"
              {...register("linkedin")}
              className="form-input w-full h-11 my-2"
              placeholder="Linkedin ID link"
            />
          </label>
          <label for="github">
            Github
            <input
              type="url"
              {...register("github")}
              className="form-input w-full h-11 my-2"
              placeholder="Github ID link"
            />
          </label>

          <label for="institute">
            Institute Name
            <input
              type="text"
              {...register("institute")}
              className="form-input w-full h-11 my-2"
              placeholder="University/College/School Name"
            />
          </label>

          <label for="degree">
            Degree
            <input
              type="text"
              {...register("degree")}
              className="form-input w-full h-11 my-2"
              placeholder="ex: B.Sc in CSE"
            />
          </label>

          <label for="gender">
            Gender
            <select name="gender" className="form-input w-full h-11 my-2" {...register("gender")}>
             
              <option value="male" selected>Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </select>
          </label>

          <label for="graduation">
            Graduation Year
            <input
              type="date"
              {...register("graduation")}
              className="form-input w-full h-11 my-2"
              placeholder="ex: B.Sc in CSE"
            />
          </label>
        </div>

        <label for="bio">
          Bio
          <textarea
            type="text"
            {...register("bio")}
            className="form-input w-full h-28 my-2"
            placeholder="write short bio ..."
          />
        </label>

        <input
          type="submit"
          value="Update"
          className="btn  w-28 rounded-full bg-primary text-white hover:bg-red-500 py-2 mt-2 px-20"
        ></input>
      </form>
    </div>
  );
};

export default Settings;
