import FacultyCard from "../Academics/FacultyCard";
import fac1 from "../../assets/Images/AcademicsImages/FacultyImages/fac1.jpg";
import vicePrincipal from "../../assets/Images/AcademicsImages/FacultyImages/vice_principal.jpg";
import chairman from "../../assets/Images/AcademicsImages/FacultyImages/chairman.jpg";
import trustee from "../../assets/Images/AcademicsImages/FacultyImages/trustee.jpg";

const FaS = () => {
  const data = [
    {
      name: "Dr. Joseph K Thomas",
      designation: "Founder & Chairman",
      education: "MA., MBA., MDBA., MRICS (London) Ph.D (Management)",
      img: chairman,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi exercitationem modi aspernatur quia, sed error similique dolor tempore optio blanditiis, cumque corporis sit provident facilis in rerum necessitatibus praesentium.",
      contact: "rohith@test.com",
    },

    {
      name: "Helena Joseph",
      designation: "TRUSTEE / SECRETARY",
      education: "",
      img: trustee,
      quote:
        "Education is not learning of facts but training of the mind to think",
      contact: "rohith@test.com",
    },

    {
      name: "Dr. PREETHI VINCENT",
      designation: "Principal",
      education: " M.A, B.Ed, M.Phil, Ph.D",
      img: fac1,
      quote:
        "Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations",
      contact: "rohith@test.com",
    },

    {
      name: "Dr. Joseph K Thomas",
      designation: "Vice-Principal",
      education: "MA., MBA., MDBA., MRICS (London) Ph.D (Management)",
      img: vicePrincipal,
      quote:
        "Education is not learning of facts but training of the mind to think",
      contact: "rohith@test.com",
    },
  ];

  return (
    <div className="py-10 p-6 space-y-3 lg:space-y-10 mt-[16rem] md:mt-[10rem] text-textSecondary">
      <h2 className="text-start font-semibold text-2xl capitalize lg:text-center lg:mb-6">
        Faculty and staff
      </h2>
      <p className="text-start lg:text-center lg:mb-5">
        Meet the passionate educators and staff who are the heart of Mysore
        international school. Our experienced and dedicated professionals are
        committed to providing a nurturing and supportive learning environment
        for every student.
      </p>

      <div className="w-full lg:grid grid-cols-2 mx-auto space-y-6 lg:space-y-0 lg:gap-24 lg:px-8">
        {data.map((card) => {
          return (
            <FacultyCard
              key={card.name}
              name={card.name}
              designation={card.designation}
              img={card.img}
              quote={card.quote}
              education={card.education}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FaS;
