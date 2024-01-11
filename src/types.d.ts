export interface Store {
  tasks: Task[];
}

export type TaskData = {
  priority: string;
  taskStatus: string;
  assignedto: string;
  tasksummary: string;
};

export type Task = TaskData & {
  taskId: number;
};

export type ModalData = {
  title: string;
  task: Task | null;
};
