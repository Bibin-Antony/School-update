import Button3 from "../../components/layouts/Button3";

const RaiseATicket = () => {
  return (
    <div className="flex-col lg:flex-row text-center py-10 px-6 bg-secondary text-white tracking-wide flex items-center justify-center gap-6 font-semibold ">
      <h4 className="text-[16px] sm:text-xl md:text-2xl">
        Should you encounter any challenges or have questions about the online
        payment process
      </h4>
      <Button3 title="Raise a ticket" />
    </div>
  );
};

export default RaiseATicket;
