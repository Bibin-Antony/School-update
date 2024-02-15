import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const PopupModal = ({ name, designation, img, quote, education }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <span
        onClick={() => setOpenModal(true)}
        className=" font-bold text-textSecondary tracking-wider text-[13px] "
      >
        Know More &gt;
      </span>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body className="space-y-5">
          <div className="rounded-md  flex items-center justify-center">
            <img src={img} alt="" className="rounded-lg w-[90%]" />
          </div>
          <div className="flex items-center justify-center flex-col font-semibold gap-2 tracking-wide">
            <div className="text-center mb-2">
              <h3 className="text-xl">{name}</h3>
              <span>{designation}</span>
              <p className="text-[14px]">{education}</p>
            </div>
            <i className="block text-[14px] text-center leading-relaxed text-gray-500">
              {" "}
              &quot;{quote} &quot;
            </i>
            <Link
              to="mailto:rohithmanjunath20@hotmail.com"
              className="flex items-center justify-center gap-2 font-bold bg-ctcPrimary text-white hover:text-white rounded-sm transition-all duration-200 py-2 px-3 text-sm self-start"
            >
              <FaEnvelope />
              <span>Email</span>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PopupModal;
