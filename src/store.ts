interface Store {
  tasks: Task[];
  /* itemsNum: number;
  total: number; */
}

export type Task = {
  taskId: number;
  priority: string;
  taskStatus: string;
  assignedto: string;
  tasksummary: string;
};

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

export const getStore = async (): Promise<Store> => {
  return store;
};

export const addTask = async (task: Task): Promise<Store> => {
  store.tasks.push(task);

  return { ...store };
};

export const deleteTask = async (taskId: number): Promise<Store> => {
  store.tasks = store.tasks.filter((task) => task.taskId !== taskId);

  return { ...store };
};
