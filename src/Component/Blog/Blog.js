import React from 'react';

const Blog = () => {
    return (
        <div className="my-28 lg:mx-20">
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <p>five important ways to optimize the performance of a React application<br></br>
                        Keeping component state local where necessary<br/>
                        Memoizing React components to prevent unnecessary re-renders<br/>
                        Code-splitting in React using dynamic import()<br/>
                        Windowing or list virtualization in React<br/>
                        Lazy loading images in React<br/>
                        make sure that components receive only necessary props.</p>
                </div>
            </div>


            <div tabIndex="1" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>React Native apps can be structured into 5 types of state. <br/>
                    <b>1 . Communication State</b><br/>
                    <b>2. Data State</b><br/>
                    <b>3. Control State</b><br/>
                    <b>4. Session State</b><br/>
                    <b>5. Location State</b><br/>

                    </p>
                </div>
            </div>


            <div tabIndex="2" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor.</p>
                </div>
            </div>


            <div tabIndex="3" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div className="collapse-content">
                    <p>Import useState and set state variables.
                        <br/>
                        Define a callback function and pass it down as a prop<br/>
                        Set an “onChange” event handler on the input field
                    </p>
                </div>
            </div>


            <div tabIndex="4" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Focus me to see contentWhat is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers. <br/>
                    
                    we should write unit tests to ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;