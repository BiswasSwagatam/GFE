import { useState } from "react";

let id = 0;

let initialTasks = [{ id: id++, label: "Walk the dog" }];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTasks, setNewTasks] = useState("");

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          onChange={(e) => setNewTasks(e.target.value)}
        />
        <div>
          <button
            onClick={() => {
              setTasks(tasks.concat({ id: id++, label: newTasks.trim() })),
                setNewTasks("");
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <ul>
        {tasks.map(({ id, label }) => (
          <li key={id}>
            <span>{label}</span>
            <button
              onClick={() => {
                setTasks(tasks.filter((task) => task.id !== id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
