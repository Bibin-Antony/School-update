const Button5 = ({ title }) => {
  return (
    <button className="bg-ctcPrimary text-ctcSecondary w-full py-2 rounded-sm font-semibold tracking-wider hover:bg-ctcPrimary hover:text-ctcSecondary hover:border hover:scale-95 transition-all duration-200 ">
      {title}
    </button>
  );
};

export default Button5;
