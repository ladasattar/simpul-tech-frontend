import LoadingSvg from "@assets/svg/loading.svg";
import React from "react";

interface ILoading {
  text?: string;
}

const Loading: React.FC<ILoading> = (props) => {
  const { text } = props;

  return (
    <section className="flex flex-col flex-1 items-center justify-center w-full h-full gap-2">
      <img src={LoadingSvg} alt="Loading Spinner" className="animate-spin" />
      <p className="text-lg font-semibold text-gray">
        {text ? text : "Loading..."}
      </p>
    </section>
  );
};

export default Loading;
