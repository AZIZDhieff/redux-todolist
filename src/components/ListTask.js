import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { filterTasks } from "../actions/taskActions";

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks =
    filter === "done"
      ? tasks.filter((task) => task.isDone)
      : filter === "not"
      ? tasks.filter((task) => !task.isDone)
      : tasks;

  return (
    <div>
      <div>
        <button onClick={() => dispatch(filterTasks("all"))}>All</button>
        <button onClick={() => dispatch(filterTasks("done"))}>Done</button>
        <button onClick={() => dispatch(filterTasks("not"))}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
