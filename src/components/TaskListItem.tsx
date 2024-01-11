import React from "react";
import { ModalType, type Task } from "../types";
import { useStore, deleteTask } from "../store";
import { useModal } from "./ModalContext";

interface TaskContainerProps {
  task: Task;
}

const TaskListItem: React.FunctionComponent<TaskContainerProps> = ({
  task,
}) => {
  const [, setStore] = useStore();
  const { openModal } = useModal();

  return (
    <>
      {/* <pre>{JSON.stringify(task, null, 2)}</pre> */}
      <div>Task Id: {task.taskId}</div>
      <div>Summary: {task.tasksummary}</div>
      <div>Priority: {task.priority}</div>
      <div>Assigned to: {task.assignedto}</div>
      <div>Status: {task.taskStatus}</div>
      <button
        onClick={() => openModal({ type: ModalType.EDIT_EXISTING_TASK, task })}
      >
        Edit
      </button>
      <button onClick={async () => setStore(await deleteTask(task.taskId))}>
        Delete
      </button>
    </>
  );
};

export default TaskListItem;
