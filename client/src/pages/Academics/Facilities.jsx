import Slider from "../../components/layouts/Slider";
import image1 from "../../assets/Images/AcademicsImages/facultyCarousel/download_1.png"; // Adjust the path accordingly
import image2 from "../../assets/Images/AcademicsImages/facultyCarousel/DSC_1109.png"; // Adjust the path accordingly
import image3 from "../../assets/Images/AcademicsImages/facultyCarousel/Field-TripCecri-1-min.jpg"; // Adjust the path accordingly
import image4 from "../../assets/Images/AcademicsImages/facultyCarousel/school7.png"; // Adjust the path accordingly
import image5 from "../../assets/Images/AcademicsImages/facultyCarousel/SchoolEdu.png"; // Adjust the path accordingly
import FacilitiesCard from "../../components/cards/FacilitiesCard";
import FacilityCards from "./FacilityCards";
import Footer from "../../components/layouts/Footer";

const slides = [
  {
    id: 1,
    url: image1,
  },
  {
    id: 2,
    url: image2,
  },
  {
    id: 3,
    url: image3,
  },
  {
    id: 4,
    url: image4,
  },
  {
    id: 5,
    url: image5,
  },
];

const Facilities = () => {
  return (
    <>
      <div className="slider-container w-[70vw] h-[80vh] mx-auto mt-[5.5rem] rounded-lg flex flex-col">
        <h2 className="my-4 text-center text-4xl font-semibold text-textSecondary">
          Facilities
        </h2>
        <p className=" text-textSecondary text-center font-semibold">
          Welcome to Mysore International School's state-of-the-art facilities
          designed to enhance the learning experience and provide a safe,
          nurturing environment for our students. Our commitment to excellence
          extends beyond the classroom, and our facilities reflect that
          dedication. Explore our campus and discover the resources that make
          Mysore International School a unique place of learning.{" "}
        </p>
        <div className="w-[80%] h-[90%]  self-center my-10">
          <Slider slides={slides} />
        </div>
      </div>
      <div className="w-[80%] mx-auto my-10">
        <FacilityCards />
      </div>
      <Footer />
    </>
  );
};

export default Facilities;
