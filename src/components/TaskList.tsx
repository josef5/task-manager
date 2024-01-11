import { useStore } from "../store";
import { ModalType } from "../types";
import { useModal } from "./ModalContext";
import TaskContainer from "./TaskContainer";
import React from "react";

const TaskList: React.FunctionComponent = () => {
  const [store] = useStore();
  const { tasks } = store;
  const { openModal } = useModal();

  return (
    <div>
      {tasks.map((task) => (
        <TaskContainer key={task.taskId} task={task} />
      ))}
      <hr />
      <button
        onClick={() => openModal({ type: ModalType.ADD_NEW_TASK, task: null })}
      >
        Add task
      </button>
    </div>
  );
};

export default TaskList;
