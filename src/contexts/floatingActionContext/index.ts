import React from "react";

interface IFloatingActionContext {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  indexActive: number | null;
  setIndexActive: React.Dispatch<React.SetStateAction<number | null>>;
}

const FloatingActionContext = React.createContext<IFloatingActionContext>(
  {} as IFloatingActionContext
);

export default FloatingActionContext;
