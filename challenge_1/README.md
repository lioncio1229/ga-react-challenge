# Challenge 1: React Component Creation

Instructions: 

Create a React component called `TaskList` that receives a prop called `tasks`, which is an array of task objects. Each task object should have the following structure: 

{ 

  id: number, 

  title: string, 

  description: string, 

  completed: boolean 

} 

The `TaskList` component should render each task as a list item, displaying the title and description. If a task is completed (i.e., `completed` is `true`), it should have a different CSS style to indicate its status. 

 

Specifications: 

- The `TaskList` component should be implemented in a file named `TaskList.js`. 

- The component should receive a prop named `tasks`, which is an array of task objects as described above. 

- Each task should be rendered as a list item (`<li>` element) with its title and description displayed. 

- Apply different CSS styles to completed tasks to indicate their status (e.g., strike-through the text or change the background color). 

- The `TaskList` component should be reusable and not tightly coupled to any specific data source. 
