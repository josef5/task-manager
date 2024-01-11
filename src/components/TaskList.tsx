import { useStore } from "../store";
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
      <button onClick={() => openModal({ title: "add", task: null })}>
        Add task
      </button>
    </div>
  );
};

export default TaskList;
