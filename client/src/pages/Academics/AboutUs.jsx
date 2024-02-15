import Image from "../../assets/Images/AcademicsImages/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"; // Adjust the path accordingly
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const AboutUs = () => {
  return (
    <div>
      <div
        className="flex items-center justify-start min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="text-start bg-white bg-[rgba(255,255,255,0.4)] text-textSecondary w-full  p-10 rounded-md mx-10 text-[13px] md:text-[15px] lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Academics</h1>
          <p className="mb-8 font-semibold">
            Welcome to Mysore international school, where academic excellence is
            at the core of our mission. We are committed to providing students
            with a rigorous and well-rounded education that prepares them for
            success in a rapidly changing world. Our dedicated faculty and staff
            are passionate about nurturing the intellectual growth of every
            student, fostering critical thinking, creativity, and a love for
            learning.
          </p>
          <a
            href={"#directory"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Learn More
          </a>
        </div>
      </div>
      <Breadcrumb
        aria-label="Default breadcrumb example"
        className="p-6 bg-primary text-textSecondary "
      >
        <Breadcrumb.Item href="/" icon={HiHome} className="">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/academics">Academics</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default AboutUs;
