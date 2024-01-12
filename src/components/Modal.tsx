// Modal.tsx
import React, { FormEvent, useEffect } from "react";
import { useModal } from "./ModalContext";
import { updateTaskList, useStore } from "../store";
import { ModalType, Task, TaskData, TaskStatus } from "../types";

const Modal: React.FC = () => {
  const { modalData, closeModal } = useModal();
  const [, setStore] = useStore();

  const [tasksummary, setTaskSummary] = React.useState(
    modalData?.task?.tasksummary ?? ""
  );
  const [priority, setPriority] = React.useState(
    modalData?.task?.priority ?? ""
  );
  const [taskStatus, setTaskStatus] = React.useState(
    modalData?.task?.taskStatus ?? ""
  );
  const [assignedto, setAssignedTo] = React.useState(
    modalData?.task?.assignedto ?? ""
  );

  /**
   * Handles the form submission
   * @param event - The form event
   */
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const task: Task | TaskData = {
      taskId: modalData?.task?.taskId,
      priority: formData.get("priority") as string,
      taskStatus: formData.get("taskStatus") as TaskStatus,
      assignedto: formData.get("assignedto") as string,
      tasksummary: formData.get("tasksummary") as string,
    };

    setStore(await updateTaskList(task));

    closeModal();
  };

  const title =
    modalData?.type === ModalType.ADD_NEW_TASK ? "Add task" : "Edit task";

  useEffect(() => {
    setTaskSummary(modalData?.task?.tasksummary ?? "");
    setPriority(modalData?.task?.priority ?? "");
    setTaskStatus(modalData?.task?.taskStatus ?? "");
    setAssignedTo(modalData?.task?.assignedto ?? "");
  }, [modalData]);

  return (
    <div>
      {modalData && (
        <div
          className="absolute w-full h-screen bg-black/90 flex items-center justify-center cursor-pointer"
          onClick={closeModal}
        >
          <div
            className="bg-[color:hsl(0,0%,30%)] rounded-lg p-5 w-10/12 flex flex-col relative cursor-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-baseline mt-5">
              <h3 className="text-3xl font-bold flex-1">{title}</h3>
              {modalData.task?.taskId && (
                <p className="text-sm text-white/60">
                  Task Id: {modalData.task.taskId}
                </p>
              )}
            </div>
            <form
              className="flex flex-1 flex-col mt-5 justify-between"
              onSubmit={handleSubmit}
            >
              <div className="">
                <div className="flex flex-col">
                  <label htmlFor="summary" className="text-sm mb-1">
                    Summary
                  </label>
                  <input
                    className="text-gray-900 rounded px-2 py-1"
                    type="text"
                    name="tasksummary"
                    value={tasksummary}
                    onChange={(event) => setTaskSummary(event.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-between my-5">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="assignedto" className="text-sm mb-1">
                      Assigned To
                    </label>
                    <input
                      className="text-gray-900 rounded px-2 py-1"
                      type="text"
                      name="assignedto"
                      value={assignedto}
                      onChange={(event) => setAssignedTo(event.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-1/5">
                    <label htmlFor="priority" className="text-sm mb-1">
                      Priority
                    </label>
                    <input
                      className="text-gray-900 rounded px-2 py-1"
                      type="text"
                      name="priority"
                      value={priority}
                      onChange={(event) => setPriority(event.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col w-1/5">
                    <label htmlFor="taskStatus" className="text-sm mb-1">
                      Task Status
                    </label>
                    <select
                      className="text-gray-900 rounded px-2 py-1"
                      name="taskStatus"
                      value={taskStatus}
                      onChange={(event) => setTaskStatus(event.target.value)}
                      required
                    >
                      <option value={TaskStatus.UNASSIGNED}>Unassigned</option>
                      <option value={TaskStatus.LOW}>Low</option>
                      <option value={TaskStatus.MEDIUM}>Medium</option>
                      <option value={TaskStatus.HIGH}>High</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 bg-white/[.2] px-3 py-2 rounded-lg border-solid border-[0px] border-gray-500 text-sm w-[45%] self-end justify-self-end text-white hover:ring-2 ring-blue-500"
              >
                Save
              </button>
            </form>
            <button
              className="absolute right-3 top-3 bg-black/10 p-1 rounded-full w-6 h-6 flex items-center justify-center text-sm text-white/20 hover:text-white/30"
              onClick={closeModal}
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
