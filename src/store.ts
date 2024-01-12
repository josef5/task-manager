import React from "react";
import StoreContext from "./components/StoreContext";
import { Store, Task, TaskData, TaskStatus } from "./types";

const store: Store = {
  tasks: [
    {
      taskId: 1,
      priority: "3",
      taskStatus: TaskStatus.UNASSIGNED,
      assignedto: "Everyone",
      tasksummary: "Submit timesheets",
    },
  ],
};

/**
 * Custom hook to access the store context
 */
export const useStore = () => {
  const context = React.useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  return context;
};

/**
 * Generates a new unique task id
 */
const getNewId = () => {
  const highestId = store.tasks.reduce(
    (acc, task) => (task.taskId > acc ? task.taskId : acc),
    0
  );

  return highestId + 1;
};

/**
 * Retrieves the current store state
 */
export const getStore = async (): Promise<Store> => {
  return store;
};

/**
 * Adds a new task to the store
 * @param taskData - The data for the new task
 * @returns The updated store with the new task added
 */
export const addTask = async (taskData: TaskData): Promise<Store> => {
  const newId = getNewId();
  store.tasks.push({ ...taskData, taskId: newId });

  return { ...store };
};

/**
 * Updates a task in the store
 * @param updatedTask - The updated task object
 * @returns The updated store with the task updated
 */
export const updateTask = async (updatedTask: Task): Promise<Store> => {
  const currentTaskIndex = store.tasks.findIndex(
    (task) => task.taskId === updatedTask.taskId
  );

  if (currentTaskIndex !== -1) {
    store.tasks.splice(currentTaskIndex, 1, updatedTask);
  }

  return { ...store };
};

/**
 * Updates the task list in the store based on the provided task data
 * @param task - The task or task data to be updated
 * @returns The updated store with the task list updated
 */
export const updateTaskList = async (task: Task | TaskData): Promise<Store> => {
  // An existing task has an id, a new task has none
  const isCurrentTask = "taskId" in task && task.taskId !== undefined;

  if (isCurrentTask) {
    // task is of type Task
    return await updateTask(task);
  } else {
    // task is of type TaskData
    return await addTask(task);
  }
};

/**
 * Deletes a task from the store
 * @param taskId - The id of the task to be deleted
 * @returns The updated store with the task deleted
 */
export const deleteTask = async (taskId: number): Promise<Store> => {
  store.tasks = store.tasks.filter((task) => task.taskId !== taskId);

  return { ...store };
};
