import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : "";
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
