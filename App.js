import { useReducer, useEffect, useState  } from 'react';
import AddTask from './AddTask.js';
import TaskListFilter from './TaskListFilter.js';
import TaskList from './TaskList.js';
import { tasksReducer } from './tasksReducer.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [datosJason, setDatosJason] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((datos) => {
        console.log(datos)
        setDatosJason(datos);
      });
  }, []);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }
  
  function handleClearComplete() {
    dispatch({
      type: 'clearcompleted'
    });
  }
  
  function handleClearAll() {
    dispatch({
      type: 'clearall'
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskListFilter
        onClearComplete={handleClearComplete}
        onClearAll={handleClearAll} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];