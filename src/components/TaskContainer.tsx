import React from "react";
import type { Task } from "../types";
import { useStore, deleteTask } from "../store";
import { useModal } from "./ModalContext";

interface TaskContainerProps {
  task: Task;
}

const TaskContainer: React.FunctionComponent<TaskContainerProps> = ({
  task,
}) => {
  const [, setStore] = useStore();
  const { openModal } = useModal();

  return (
    <>
      <pre>{JSON.stringify(task, null, 2)}</pre>
      <button onClick={() => openModal({ title: "edit", task })}>Edit</button>
      <button onClick={async () => setStore(await deleteTask(task.taskId))}>
        Delete
      </button>
    </>
  );
};

export default TaskContainer;
