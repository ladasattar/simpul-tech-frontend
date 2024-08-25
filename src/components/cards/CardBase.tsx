import React from "react";

interface ICardBase {
  children?: React.ReactNode;
  extra?: string;
}

const CardBase: React.FC<ICardBase> = (props) => {
  const { children, extra } = props;

  return (
    <section
      className={`flex flex-col w-[734px] h-[737px] bg-white py-6 rounded-md border border-[#BDBDBD] overflow-hidden overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-[#BDBDBD] scrollbar-track-transparent ${extra}`}
    >
      {children}
    </section>
  );
};

export default CardBase;
