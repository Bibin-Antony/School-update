import { useState } from "react";
import Button1 from "../layouts/Button1";
import FacilityCardModal from "../../pages/Academics/FacilityCardModal";

const FacilitiesCard = ({ title, images, des }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="shadow-lg p-4 flex items-center justify-center flex-col border py-10 border-textSecondary rounded-lg gap-10 text-textSecondary">
      <span className="font-semibold text-2xl capitalize">{title}</span>
      <button onClick={() => setShowModal(!showModal)}>
        <Button1 title={"View Details"} />
      </button>
      {showModal && (
        <FacilityCardModal
          images={images}
          title={title}
          isOpen={showModal}
          des={des}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default FacilitiesCard;
