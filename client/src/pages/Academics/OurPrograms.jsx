import { Link } from "react-router-dom";
import SidebarAcademics from "../../components/layouts/SidebarAcademics";
import { useState } from "react";

const OurPrograms = () => {
  const programsData = [
    {
      id: 1,
      imageUrl: "",
      title: "Pre-school",
      description: "where curiosity and joy meet in a safe, joyful space.",
      age: "4-5 years",
      schedule: " 8:00 AM - 10:00 AM",
    },
    {
      id: 2,
      imageUrl: "",
      title: "Middle-school",
      description: "Providing a secure and engaging space for young minds.",
      age: "12-15 years",
      schedule: " 8:00 AM - 5:00 PM",
    },
    {
      id: 3,
      imageUrl: "",
      title: "High-school",
      description: `Cultivating minds, fostering growth in a secure, dynamic atmosphere.`,
      age: "16-18 years",
      schedule: " 8:00 AM - 5:00 PM",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center flex-col gap-8 p-5 bg-secondary pb-[6rem] tracking-wide py-20">
        <h2 className="font-bold text-2xl text-white">Our Academic Programs</h2>
        <p className="text-center w-[50%] max-lg:w-[80%] text-white">
          At Mysore International School, our mission is to offer affordable,
          high-quality education and childcare services across all childhood
          stages. Committed to fostering growth and success, we ensure every
          child thrives in a nurturing environment.
        </p>
        <div className="lg:grid grid-cols-3 lg:gap-20 lg:px-24">
          {programsData.map((item) => {
            return (
              <Link
                onClick={() => setOpen(!open)}
                key={item.id}
                className="bg-white text-textSecondary rounded-md"
              >
                <div className="w-full">
                  <img
                    src="https://assets.telegraphindia.com/telegraph/2022/Dec/1670380679_new-project-2022-12-07t080748-004.jpg"
                    alt=""
                    className="w-full rounded"
                  />
                </div>
                <div className="flex flex-col items-center justify-center p-3 ">
                  <div className="w-full flex  flex-col gap-4 p-2 border-b-2">
                    <h2 className="font-bold ">{item.title}</h2>
                    <p className="max-md:text-[14px]">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between w-full p-2 ">
                    <div className="w-1/2 flex flex-col gap-2">
                      <span className=" flex items-center justify-center font-semibold">
                        Age
                      </span>
                      <span className="flex items-center justify-center text-red-600 text-[13px] max-md:text-[12px]">
                        {item.age}
                      </span>
                    </div>
                    <div className="w-1/2  flex flex-col gap-2">
                      <span className=" flex items-center justify-center font-semibold ">
                        Schedule
                      </span>
                      <span className=" flex items-center justify-center text-red-600 text-[13px] max-md:text-[12px]">
                        {item.schedule}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <SidebarAcademics
        open={open}
        setOpen={setOpen}
        title="Scholl Enrollment Euquiry"
      />
    </>
  );
};

export default OurPrograms;
