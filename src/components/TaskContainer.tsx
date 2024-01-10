import React from "react";
import type { Task } from "../types";
import { updateTask, useStore } from "../store";
import { deleteTask } from "../store";

interface TaskContainerProps {
  task: Task;
}

const TaskContainer: React.FunctionComponent<TaskContainerProps> = ({
  task,
}) => {
  const [, setStore] = useStore();

  return (
    <>
      <pre>{JSON.stringify(task, null, 2)}</pre>
      <button
        onClick={async () => {
          setStore(
            await updateTask({
              taskId: task.taskId,
              priority: "10",
              taskStatus: "10",
              assignedto: "10",
              tasksummary: "10",
            })
          );
        }}
      >
        Update
      </button>
      <button
        onClick={async () => {
          setStore(await deleteTask(task.taskId));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default TaskContainer;
