import { render, screen } from '@testing-library/react';
import TaskList from '../src/components/TaskList';
import {tasks} from '../src/main';

describe('TaskList', () => {
  it('renders all tasks', () => {
    render(<TaskList tasks={tasks} />);

    // Check if each task is rendered correctly
    tasks.forEach((task) => {
      const title = screen.getByText(task.title);
      const description = screen.getByText(task.description);
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();

      // Check if completed tasks have the correct style
      if (task.completed) {
        expect(title).toHaveStyle('text-decoration: line-through');
        expect(description).toHaveStyle('color: #2a3a81');
      } else {
        expect(title).not.toHaveStyle('text-decoration: line-through');
        expect(description).toHaveStyle('color: #6671a0');
      }
    });
  });
});
