import React, { createContext, useContext, useState } from "react";
import { ModalData } from "../types";

interface ModalContextProps {
  modalData: ModalData | null;
  openModal: (data: ModalData) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
}

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const openModal = (data: ModalData) => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <ModalContext.Provider value={{ modalData, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
