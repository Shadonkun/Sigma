import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  name: string;
  setName: (name: string) => void;
  isNameSet: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>(() => {
    return localStorage.getItem("userName") || "";
  });
  const [isNameSet, setIsNameSet] = useState<boolean>(() => !!localStorage.getItem("userName"));

  const updateName = (newName: string) => {
    setName(newName);
    localStorage.setItem("userName", newName);
    setIsNameSet(true);
  };

  return (
    <UserContext.Provider value={{ name, setName: updateName, isNameSet }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
