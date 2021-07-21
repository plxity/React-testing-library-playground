import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTodo = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole('button');
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe('Todo', () => {
  it('Should render the same text typed in the input field', () => {
    render(<MockTodo />);
    addTodo(['shoping']);
    const divElement = screen.getByText(/shoping/i);
    expect(divElement).toBeInTheDocument();
  });
  it('Should render multiple elements', () => {
    render(<MockTodo />);
    addTodo(['shoping', 'shoping 101']);
    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(2);
  });

  it('Task should not have completed class when initially rendered', () => {
    render(<MockTodo />);
    addTodo(['shoping']);
    const divElement = screen.getByText(/shoping/i);
    expect(divElement).not.toHaveClass('todo-item-active');
  });
  it('Task should have completed class when initially rendered', () => {
    render(<MockTodo />);
    addTodo(['shoping']);
    const divElement = screen.getByText(/shoping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
});
