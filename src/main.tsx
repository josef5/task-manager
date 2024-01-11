import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { getStore } from "./store.ts";
import { StoreProvider } from "./components/StoreContext.tsx";
import "./index.css";

async function renderApp() {
  const store = await getStore();

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </React.StrictMode>
  );
}

renderApp();
