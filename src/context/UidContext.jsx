import { createContext, useContext, useState } from "react";

const UidContext = createContext();

export const useUid = () => useContext(UidContext);

const UidProvider = ({ children }) => {
  const [uid, setUid] = useState(null);

  return (
    <UidContext.Provider value={{ uid, setUid }}>
      {children}
    </UidContext.Provider>
  );
};

export default UidProvider;
