import { useStore } from "../store";
import { ModalType } from "../types";
import { useModal } from "./ModalContext";
import TaskListItem from "./TaskListItem";
import React from "react";

const TaskList: React.FunctionComponent = () => {
  const [store] = useStore();
  const { tasks } = store;
  const { openModal } = useModal();

  return (
    <div>
      {tasks.map((task) => (
        <TaskListItem key={task.taskId} task={task} />
      ))}
      <hr />
      <button
        onClick={() => openModal({ type: ModalType.ADD_NEW_TASK, task: null })}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskList;
