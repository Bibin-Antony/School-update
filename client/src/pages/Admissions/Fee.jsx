import Image from "../../assets/Images/AdmissionsImages/payment.jpg"; // Adjust the path accordingly
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
          <h1 className="text-4xl font-bold mb-4">Online Fee Payment</h1>
          <p className="mb-8 font-semibold">
          At Mysore International School, we prioritize a seamless and hassle-free school experience for parents. Our secure Online Fees Payments system simplifies the entire process, offering a range of benefits at your fingertips. Opt for the convenience of online transactions to make fee payments efficiently, ensuring a smoother journey for both you and your child at MIS
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