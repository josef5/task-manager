import React from "react";
import StoreContext from "./components/StoreContext";
import { Store, Task, TaskData } from "./types";

const store: Store = {
  tasks: [
    {
      taskId: 1,
      priority: "1",
      taskStatus: "1",
      assignedto: "1",
      tasksummary: "1",
    },
    {
      taskId: 2,
      priority: "2",
      taskStatus: "2",
      assignedto: "2",
      tasksummary: "2",
    },
  ],
};

export const useStore = () => {
  const context = React.useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  return context;
};

const getNewId = () => {
  const highestId = store.tasks.reduce(
    (acc, task) => (task.taskId > acc ? task.taskId : acc),
    0
  );

  return highestId + 1;
};

export const getStore = async (): Promise<Store> => {
  return store;
};

export const addTask = async (taskData: TaskData): Promise<Store> => {
  const newId = getNewId();
  store.tasks.push({ ...taskData, taskId: newId });

  return { ...store };
};

export const updateTask = async (updatedTask: Task): Promise<Store> => {
  const currentTaskIndex = store.tasks.findIndex(
    (task) => task.taskId === updatedTask.taskId
  );

  if (currentTaskIndex !== -1) {
    store.tasks.splice(currentTaskIndex, 1, updatedTask);
  }

  return { ...store };
};

export const deleteTask = async (taskId: number): Promise<Store> => {
  store.tasks = store.tasks.filter((task) => task.taskId !== taskId);

  return { ...store };
};
