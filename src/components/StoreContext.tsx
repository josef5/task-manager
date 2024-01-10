import React, { createContext, useState } from "react";
import { Store } from "../types";

const useStoreState = (initialStore: Store) => useState<Store>(initialStore);

const StoreContext = createContext<ReturnType<typeof useStoreState> | null>(
  null
);

export const StoreProvider = ({
  store: initialStore,
  children,
}: {
  store: Store;
  children: React.ReactNode;
}) => {
  const [store, setStore] = useStoreState(initialStore);

  return (
    <StoreContext.Provider value={[store, setStore]}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = React.useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export default StoreContext;
