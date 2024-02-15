import { Breadcrumb } from "flowbite-react";
import Address from "./Address";
import AdmissionEnquiry from "./AdmissionEnquiry";
import { HiHome } from "react-icons/hi";
import Footer from "../../components/layouts/Footer";

const Contact = () => {
  return (
    <div className="mt-20">
      <Breadcrumb
        aria-label="Default breadcrumb example"
        className="p-6  text-textSecondary  "
      >
        <Breadcrumb.Item href="/" icon={HiHome} className="">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/academics">Contact Us</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="text-4xl uppercase text-center text-textSecondary font-semibold ">
        Contact Us
      </h1>
      <Address />
      <AdmissionEnquiry />
      <Footer />
    </div>
  );
};

export default Contact;
