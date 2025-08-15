"use client";
import React, { createContext, PropsWithChildren } from "react";

type Details = {
  title: string;
  position: number;
};

type ExpertiesContext = {
  details: Details;
};

type ExpertiesProps =PropsWithChildren & {
  details:Details
}
const exertiseContext = createContext<ExpertiesContext | undefined>(undefined);


const Experties = ({children,details}:ExpertiesProps) => {
  return (
    <exertiseContext.Provider value={{details}}>{children}</exertiseContext.Provider>
  );
};




Experties.Title =  function Title() {
  return <div>m</div>;
};

export default Experties;
