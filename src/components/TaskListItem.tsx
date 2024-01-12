import React from "react";
import { ModalType, type Task } from "../types";
import { useStore, deleteTask } from "../store";
import { useModal } from "./ModalContext";

interface TaskContainerProps {
  task: Task;
}

const TaskListItem: React.FunctionComponent<TaskContainerProps> = ({
  task,
}) => {
  const [, setStore] = useStore();
  const { openModal } = useModal();

  /**
   * Renders a single task item in the list
   * @param task - The task to be rendered
   */
  return (
    <div className="border-solid border-[0px] border-gray-500 rounded-lg p-5 my-5 bg-white/[.05]">
      <h3 className="text-xl mb-3">{task.tasksummary}</h3>
      <div className="flex items-center text-sm text-gray-400">
        <div className="flex-1">Task Id: {task.taskId}</div>
        <div className="flex-1">Priority: {task.priority}</div>
        <div className="flex-1">Assigned to: {task.assignedto}</div>
        <div className="flex-1">Status: {task.taskStatus}</div>
      </div>
      <div className="flex justify-start">
        <button
          className="min-w-24 mt-5 bg-white/[.05] px-3 py-2 mr-5 rounded-lg border-solid border-[0px] border-gray-500 text-sm hover:ring-1 ring-blue-500"
          onClick={() =>
            openModal({ type: ModalType.EDIT_EXISTING_TASK, task })
          }
        >
          Edit
        </button>
        <button
          className="min-w-24 mt-5 bg-white/[.05] px-3 py-2 mr-5 rounded-lg border-solid border-[0px] border-gray-500 text-sm hover:ring-1 ring-red-500"
          onClick={async () => setStore(await deleteTask(task.taskId))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskListItem;
