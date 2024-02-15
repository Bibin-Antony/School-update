import { useState } from "react";

const EnrollTodayModal = ({ closeModal }) => {
  const initialStudentInfo = {
    name: "John Doe",
    dob: "",
    phone: "",
    program: "Pre-School",
    altPhone: "",
    address: "",
    agree: false,
  };

  const [studentInfo, setStudentInfo] = useState(initialStudentInfo);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if terms and conditions are agreed
    if (!termsChecked) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    // Add your form submission logic here
    console.log("Submitted student info:", studentInfo);
    // Reset form data after submission
    setStudentInfo(initialStudentInfo);
    setTermsChecked(false);
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Update the studentInfo state based on input changes
    setStudentInfo((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setTermsChecked(e.target.checked);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full pt-20 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="relative w-1/2 bg-white p-10 rounded-lg">
        <button
          className="absolute top-2 right-2 text-xl cursor-pointer"
          onClick={closeModal}
        >
          x
        </button>
        <h2>Student Information</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="name">
              Student name
            </label>
            <input
              className="rounded-md outline-none border-slate-400"
              onChange={handleChange}
              type="text"
              name="name"
              value={studentInfo.name}
            />
          </div>
          <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="dob">
                Date of Birth
              </label>
              <input
                className="rounded-md outline-none border-slate-400"
                onChange={handleChange}
                type="date"
                name="dob"
                value={studentInfo.dob}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="phone">
                Phone number
              </label>
              <input
                className="rounded-md outline-none border-slate-400"
                onChange={handleChange}
                type="text"
                name="phone"
                value={studentInfo.phone}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="altPhone">
                Alternative Phone number
              </label>
              <input
                className="rounded-md outline-none border-slate-400"
                onChange={handleChange}
                type="text"
                name="altPhone"
                value={studentInfo.altPhone}
              />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label className="text-black" htmlFor="address">
                Address
              </label>
              <textarea
                className="rounded-md outline-none border-slate-400 h-[60px]"
                onChange={handleChange}
                name="address"
                value={studentInfo.address}
              />
            </div>
            <div className="flex flex-row gap-2 items-center">
              <input
                className="rounded-md outline-none border-slate-400"
                onChange={handleCheckboxChange}
                type="checkbox"
                name="agree"
                checked={termsChecked}
              />
              <label className="text-black" htmlFor="agree">
                I agree to the terms and conditions
              </label>
            </div>
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:translate-x-3 transition-all ease-in-out duration-800"
              >
                Submit
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollTodayModal;



