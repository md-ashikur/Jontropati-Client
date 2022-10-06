import React from "react";
import Newsletters from "../../Component/Newsletters/Newsletters";
import aboutpic from "../../Images/About.jpg";
const About = () => {
  return (
    <div>
        <div className="grid lg:grid-cols-2 gap-4 lg:m-20 mx-10 my-20">
      <div>
        <h3 className="text-3xl text-primary my-5">About Us</h3>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
          <br />
          <br /> Richard McClintock, a Latin professor at Hampden-Sydney College
          in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites
          of the word in classical literature, discovered the undoubtable
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de
          Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero,
          written in 45 BC.
        </p>

        <h3 className="text-3xl text-primary my-5">Our Brand</h3>
        <p>
          “On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire. That they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will.
        </p>
      </div>
      <div className="relative overflow-hidden ">
        <img src={aboutpic} alt="" className="w-full duration-150 my-20 hover:scale-110"/>
      </div>
    </div>
    <Newsletters/>
    </div>
  );
};

export default About;
