import Modal from "./components/Modal";
import { ModalProvider } from "./components/ModalContext";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <ModalProvider>
        <TaskList />
        <Modal />
      </ModalProvider>
    </>
  );
}

export default App;
