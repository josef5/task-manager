import { useStore } from "../store";
import { ModalType } from "../types";
import { useModal } from "./ModalContext";
import TaskListItem from "./TaskListItem";
import React from "react";

const TaskList: React.FunctionComponent = () => {
  const [store] = useStore();
  const { tasks } = store;
  const { openModal } = useModal();

  /**
   * Renders the list of tasks. Fallback message if no tasks are found.
   */
  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold">Tasks</h1>
      {tasks.length ? (
        tasks.map((task) => <TaskListItem key={task.taskId} task={task} />)
      ) : (
        <p className="border-solid border-[0px] border-gray-500 rounded-lg p-5 my-5 bg-white/[.05]">
          The task list is empty
        </p>
      )}
      <div className="flex justify-end">
        <button
          className="min-w-36 mt-5 bg-white/[.05] px-3 py-2 ml-5 rounded-lg border-solid border-[0px] border-gray-500 text-sm hover:ring-1 ring-blue-500"
          onClick={() =>
            openModal({ type: ModalType.ADD_NEW_TASK, task: null })
          }
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskList;
