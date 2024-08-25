import React from "react";

interface IButtonBase {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonBase: React.FC<IButtonBase> = (props) => {
  const { type, children, onClick } = props;

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      className="bg-primary rounded-[5px] text-white font-medium py-2 px-5"
    >
      {children}
    </button>
  );
};

export default ButtonBase;
