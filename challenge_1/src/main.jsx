import React from 'react'
import ReactDOM from 'react-dom/client'
import TaskList from './components/TaskList';

const tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'This is the description of the task 1',
    completed: false,
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'This is the description of the task 2',
    completed: true,
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'This is the description of the task 3',
    completed: true,
  },
  {
    id: 3,
    title: 'Task 4',
    description: 'This is the description of the task 4',
    completed: false,
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <TaskList tasks={tasks}/>
  </>,
)
