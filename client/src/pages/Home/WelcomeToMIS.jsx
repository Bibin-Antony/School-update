import logo from "../../assets/Images/LogoAndOthers/hori.png"; // Adjust the path accordingly
import { motion } from "framer-motion";
import EnrollTodayModal from "../../components/layouts/EnrollTodayModal";
import { useState } from "react";

const WelcomeToMIS = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="p-6 lg:px-20 lg:py-28 space-y-10 md:space-y-0 bg-secondary text-white md:grid grid-cols-2 tracking-wide container">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="col-span-1 space-y-6"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl">
          Welcome to <span style={{ fontFamily: "myfont" }}>MIS</span>
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl">
          Empower. Excel. Educate
        </h3>
        <p className="md:text-justify ">
          Welcome to Mysore International School, a place where every student's
          journey is crafted with care and purpose. Here, education goes beyond
          textbooks, shaping young minds into confident, curious learners. Our
          vibrant community of educators and students fosters an environment of
          collaboration and growth. As you embark on this educational adventure
          with us, you'll discover not just a school but a supportive family,
          dedicated to unlocking the full potential of each individual.
        </p>
        <button
          className="w-1/3 rounded-md shadow-sm shadow-white border p-2 font-semibold tracking-widest active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-200  bg-ctcPrimary text-white"
          onClick={toggleModal}
        >
          Enroll Today
        </button>{" "}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="col-span-1 md:flex items-center justify-end pr-20"
      >
        <img src={logo} alt="" className="w-[50%]" />
      </motion.div>
      {showModal && <EnrollTodayModal closeModal={toggleModal} />}
    </div>
  );
};

export default WelcomeToMIS;
