import React, { createContext, useState } from "react";
import { Store } from "../types";

/**
 * Custom hook to access the store context
 */
const useStoreState = (initialStore: Store) => useState<Store>(initialStore);

/**
 * Custom hook to access the store context
 */
const StoreContext = createContext<ReturnType<typeof useStoreState> | null>(
  null
);

/**
 * Context Provider for the store
 */
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
