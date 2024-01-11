export interface Store {
  tasks: Task[];
}

export type TaskData = {
  priority: string;
  taskStatus: TaskStatus;
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

export enum ModalType {
  ADD_NEW_TASK,
  EDIT_EXISTING_TASK,
}

export enum TaskStatus {
  UNASSIGNED = "UNASSIGNED",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}
