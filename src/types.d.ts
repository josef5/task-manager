export interface Store {
  tasks: Task[];
}

export type Task = {
  taskId: number;
  priority: string;
  taskStatus: string;
  assignedto: string;
  tasksummary: string;
};
