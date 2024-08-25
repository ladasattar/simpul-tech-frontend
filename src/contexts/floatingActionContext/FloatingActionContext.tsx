import React from "react";
import FloatingActionContext from ".";

type FloatingActionProviderProps = {
  children: React.ReactNode;
};

export const FloatingActionProvider: React.FC<FloatingActionProviderProps> = (
  props
) => {
  const [isShown, setIsShown] = React.useState<boolean>(false);
  const [indexActive, setIndexActive] = React.useState<number | null>(null);

  return (
    <FloatingActionContext.Provider
      value={{ isShown, setIsShown, indexActive, setIndexActive }}
    >
      {props.children}
    </FloatingActionContext.Provider>
  );
};
