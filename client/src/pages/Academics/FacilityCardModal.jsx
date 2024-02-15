import { Modal } from "flowbite-react";
import { IoMdClose } from "react-icons/io";
import Slider from "../../components/layouts/Slider";

const FacilityCardModal = ({ title, isOpen, onClose, images, des }) => {
  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Body>
        <div className="space-y-6">
          <IoMdClose className="text-2xl cursor-pointer" onClick={onClose} />
          <p className="tracking-wider text-textSecondary font-semibold text-[15px]">
            {des}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FacilityCardModal;
