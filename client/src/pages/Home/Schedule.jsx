import { Link } from "react-router-dom";


const Schedule = () => {
  return (
    <div className="flex-col mt-10 md:flex-row text-center py-10 bg-secondary text-white tracking-wide flex items-center justify-center gap-6 font-semibold shadow-2xl shadow-secondary">
      <h4 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl">
        Schedule a visit at Mysore International School
      </h4>
      <div>
      <Link
      to={"academics/facilities"}
      className="bg-ctcSecondary text-ctcPrimary px-8 py-4 rounded-sm font-semibold tracking-wide hover:animate-slideIn transition-all ease-in-out duration-800"
    >
      Schedule a visit
    </Link>
      </div>
    </div>
  );
};

export default Schedule;
