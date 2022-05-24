
import React from 'react';
import { Link } from 'react-router-dom';
import ashik from "../../Images/ashik.jpg";
const Portfolio = () => {
    return (
        <div className="mt-20 mb-5">
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col p-0 my-3 lg:flex-row">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <div class="avatar online">
                                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={ashik} />
                                </div>
                            </div>
                        </figure>


                        <div class="card-body">

                            <h2 class="card-title justify-center">MD. ASHIKUR RAHMAN</h2>
                            <p className="text-xs text-center">Jr. Web Developer. specialized in React.js</p>


                            <div className="text-left">
                                <div className="my-5">
                                    <h4 className="font-bold text-primary mb-2">Contact</h4>
                                    <p className="text-sm">Email : mdashik.contact@gmail.com</p>
                                    <p className="text-sm">Phone : +880 1705-433694</p>
                                </div>
                                <hr />
                                <div className="my-5 flex flex-col">
                                    <h4 className="font-bold text-primary mb-2">Linked Accounts</h4>
                                    <Link to="home" className="hover:text-primary"><b>+</b> Facebook</Link>
                                    <Link to="home" className="hover:text-primary">+ Twitter</Link>
                                    <Link to="home" className="hover:text-primary">+ Linkedin</Link>
                                    <Link to="home" className="hover:text-primary">+ Github</Link>
                                </div>
                                <hr />
                                <div className="my-5">
                                    <h4 className="font-bold text-primary mb-2">Education</h4>
                                    <p className="text-sm font-medium">B.Sc. - Computer Science and Engineering</p>
                                    <p className="text-sm font-medium text-[#807e7ec9]">Pundra University Of Science & Technology, Bangladesh</p>

                                </div>
                                <hr />

                                <div className="my-5 ">
                                    <h4 className="font-bold text-primary mb-2 ">Skills</h4>

                                </div>

                            </div>

                        </div>
                    </div>


                    <div className="bg-base-100 relative top-0 card py-20 px-10 lg:mt-[-100px]">
                        <h1 class="text-5xl font-bold">About Me</h1>
                        <p class="py-6">I am Md Ashikur Rahman. Jr. Web developer & Graphic designer 24/7 supportive. I provide the best innovative design ideas to clients.<br/>

                            I make professional clean look websites using HTML5, CSS3, Bootstrap, tailwind, Javascript, React, or using WordPress/Wix.<br/>

                            I also make Logos, magazines, stationery, and vector portrait.<br/>

                            You can message me so we can talk about your project. Whatever option you like. Looking forward to working with you soon.</p>
                            
                            <h1 class="text-3xl font-bold my-4">Live Websites</h1>
                           
                           <div className="flex flex-col lg:flex-row justify-evenly gap-5">
                           <a href="https://max-warehouse-6c399.firebaseapp.com/home"><button className="border-double outline outline-offset-2 outline-cyan-500 py-2 px-5 rounded-btn font-bold hover:bg-primary hover:text-white  ">MAX WAREHOUSE</button></a>
                            
                            <a href="https://travel-trip-11eb1.web.app/"><button className="border-double outline outline-offset-2 outline-cyan-500 py-2 px-5 rounded-btn font-bold hover:bg-primary hover:text-white  ">Travel Trip</button></a>

                            <a href="https://md-ashikur.github.io/Personal-profile-design/"><button className="border-double outline outline-offset-2 outline-cyan-500 py-2 px-5 rounded-btn font-bold hover:bg-primary hover:text-white  ">Personal Pofile</button></a>
                           </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;