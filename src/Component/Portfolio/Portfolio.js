import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { FaRegEdit } from "react-icons/fa";

const Portfolio = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="bg-base-200 py-20 px-10 ">
      <div className="grid lg:grid-cols-6 gap-6 p-0 my-3">
        <div className="bg-white lg:col-span-2 rounded shadow-lg relative">
          <figure className="flex justify-center px-10 py-8">
            <div className="avatar online">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
          </figure>

          <div className="px-10">
            <h2 className="card-title justify-center">{user?.displayName}</h2>
            <p className="text-xs text-center">
              Jr. Web Developer. specialized in React.js
            </p>

            <div className="text-left">
              <div className="my-5">
                <h4 className="font-bold text-primary mb-2">Contact</h4>
                <p className="text-sm">Email : {user?.email}</p>
                <p className="text-sm">Phone : +880 1705-433694</p>
              </div>
              <hr />
              <div className="my-5 flex flex-col">
                <h4 className="font-bold text-primary mb-2">Linked Accounts</h4>
                <Link to="home" className="hover:text-primary">
                  <b>+</b> Facebook
                </Link>
                <Link to="home" className="hover:text-primary">
                  + Twitter
                </Link>
                <Link to="home" className="hover:text-primary">
                  + Linkedin
                </Link>
                <Link to="home" className="hover:text-primary">
                  + Github
                </Link>
              </div>
              <hr />
              <div className="my-5">
                <h4 className="font-bold text-primary mb-2">Education</h4>
                <p className="text-sm font-medium">
                  B.Sc. - Computer Science and Engineering
                </p>
                <p className="text-sm font-medium text-[#807e7ec9]">
                  Pundra University Of Science & Technology, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-base-100 py-20 px-10 relative">
          {/* ================update about start===================       */}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal sm:modal-middle">
            <div className="modal-box">
             
            <textarea className="textarea focus:outline-none textarea-accent w-full h-64" placeholder="Bio"></textarea>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn  hover:bg-accent bg-primary text-white">
                 Update
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold">About Me</h1>
            <label htmlFor="my-modal-6" className="">
              <FaRegEdit className="text-2xl text-gray-400 hover:scale-90" />
            </label>
          </div>
          {/* ==================update about end================ */}

          <p className="py-6">
            I am Md Ashikur Rahman. Jr. Web developer.
            <br />
            Skills I have as a web developer - HTML5, CSS3, Bootstrap, tailwind,
            Javascript, React.js, Express.js, daysi UI.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
