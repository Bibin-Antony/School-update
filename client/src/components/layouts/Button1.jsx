const Button1 = ({ title }) => {
  return (
    <button className=" shadow-sm shadow-white border p-2 font-semibold tracking-widest active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-200 hover:scale-105 bg-ctcPrimary text-white">
      {title}
    </button>
  );
};

export default Button1;
