import type { Task } from "../types";
import { useStore } from "./StoreContext";
import TaskContainer from "./TaskContainer";
import React from "react";

const TaskList: React.FunctionComponent = () => {
  const [store, setStore] = useStore();
  const { tasks }: { tasks: Task[] } = store;

  return (
    <div>
      {tasks.map((task) => (
        <TaskContainer key={task.taskId} task={task} />
      ))}
      <hr />
      <button onClick={() => setStore({ tasks: [] })}>Add task</button>
    </div>
  );
};

export default TaskList;
