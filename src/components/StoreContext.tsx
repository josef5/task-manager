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

export default StoreContext;
