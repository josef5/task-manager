// Modal.tsx
import React, { FormEvent, useEffect } from "react";
import { useModal } from "./ModalContext";
import { updateTaskList, useStore } from "../store";
import { Task, TaskData } from "../types";

const Modal: React.FC = () => {
  const { modalData, closeModal } = useModal();
  const [, setStore] = useStore();

  const [tasksummary, setTaskSummary] = React.useState(
    modalData?.task?.tasksummary ?? ""
  );
  const [priority, setPriority] = React.useState(
    modalData?.task?.priority ?? ""
  );
  const [taskStatus, setTaskStatus] = React.useState(
    modalData?.task?.taskStatus ?? ""
  );
  const [assignedto, setAssignedTo] = React.useState(
    modalData?.task?.assignedto ?? ""
  );

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const task: Task | TaskData = {
      taskId: modalData?.task?.taskId,
      priority: formData.get("priority") as string,
      taskStatus: formData.get("taskStatus") as string,
      assignedto: formData.get("assignedto") as string,
      tasksummary: formData.get("tasksummary") as string,
    };

    setStore(await updateTaskList(task));
  };

  useEffect(() => {
    setTaskSummary(modalData?.task?.tasksummary ?? "");
    setPriority(modalData?.task?.priority ?? "");
    setTaskStatus(modalData?.task?.taskStatus ?? "");
    setAssignedTo(modalData?.task?.assignedto ?? "");
  }, [modalData]);

  return (
    <div>
      {modalData && (
        <div>
          <h3>{modalData.title ?? "no title data"}</h3>
          <form onSubmit={handleSubmit}>
            {modalData.task?.taskId && <p>taskId: {modalData.task.taskId}</p>}
            <label htmlFor="summary">Summary:</label>
            <input
              type="text"
              name="tasksummary"
              value={tasksummary}
              onChange={(event) => setTaskSummary(event.target.value)}
              required
            />
            <label htmlFor="priority">Priority:</label>
            <input
              type="text"
              name="priority"
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
              required
            />
            <label htmlFor="taskStatus">Task Status:</label>
            <input
              type="text"
              name="taskStatus"
              value={taskStatus}
              onChange={(event) => setTaskStatus(event.target.value)}
              required
            />
            <label htmlFor="assignedto">Assigned To:</label>
            <input
              type="text"
              name="assignedto"
              value={assignedto}
              onChange={(event) => setAssignedTo(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default Modal;
