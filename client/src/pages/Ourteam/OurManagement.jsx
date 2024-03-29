import OurTeamCard from "./OurTeamCard";
import chairman from "../../assets/Images/AcademicsImages/FacultyImages/chairman.jpg";

const OurManagement = () => {
  return (
    <div className="mt-14 mx-auto text-textSecondary w-[90%] ">
      <h2 className="text-2xl font-semibold my-8 uppercase text-center ">
        Our Management
      </h2>
      <OurTeamCard
        name="Dr. Joseph K Thomas"
        position={"Founder & Chairman"}
        quote={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi exercitationem modi aspernatur quia, sed error similique dolor tempore optio blanditiis, cumque corporis sit provident facilis in rerum necessitatibus praesentium."
        }
        education={"MA., MBA., MDBA., MRICS (London) Ph.D (Management)"}
        image={chairman}
      />
    </div>
  );
};

export default OurManagement;
