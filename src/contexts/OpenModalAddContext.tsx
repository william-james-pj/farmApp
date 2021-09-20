import React, { createContext, ReactNode, useState } from "react";

type OpenModalAddType = {
  isOpen: boolean;
  openModal: (open: boolean) => void;
};

type OpenModalAddProviderProps = {
  children: ReactNode;
};

export const OpenModalAddContext = createContext({} as OpenModalAddType);

export function OpenModalAddProvider(props: OpenModalAddProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <OpenModalAddContext.Provider value={{ isOpen, openModal }}>
      {props.children}
    </OpenModalAddContext.Provider>
  );
}
