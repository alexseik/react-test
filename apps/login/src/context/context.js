import React, { useContext } from "react";

export const ApiContext = React.createContext(null);

export const useApi = () => {
  const api = useContext(ApiContext);
  if (!api) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return api;
};
