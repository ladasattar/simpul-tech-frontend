import React from "react";

interface ITags {
  name: string;
  extra?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Tags: React.FC<ITags> = (props) => {
  const { name, extra, disabled, onClick } = props;

  return (
    <p
      onClick={onClick}
      id="todoTag"
      className={`text-gray font-semibold py-2 px-[14px] rounded-[5px] w-fit whitespace-nowrap ${
        name === "Important ASAP"
          ? "bg-[#E5F1FF]"
          : name === "Offline Meeting"
          ? "bg-[#FDCFA4]"
          : name === "Virtual Meeting"
          ? "bg-[#F9E9C3]"
          : name === "ASAP"
          ? "bg-[#AFEBDB]"
          : name === "Client Related"
          ? "bg-[#CBF1C2]"
          : name === "Self Task"
          ? "bg-[#CFCEF9]"
          : name === "Appointments"
          ? "bg-[#F9E0FD]"
          : name === "Court Related"
          ? "bg-[#9DD0ED]"
          : "bg-gray-light"
      } ${disabled ? "grayscale" : ""} ${extra}`}
    >
      {name}
    </p>
  );
};

export default Tags;
