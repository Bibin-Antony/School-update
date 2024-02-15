const Button4 = ({ title }) => {
  return (
    <button className="bg-ctcSecondary text-ctcPrimary py-2 rounded-sm font-semibold tracking-wider hover:bg-ctcPrimary hover:text-ctcSecondary hover:border hover:scale-95 transition-all duration-400 ">
      {title}
    </button>
  );
};

export default Button4;
