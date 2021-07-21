import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const MockSetTodos = jest.fn();

describe('AddInput', () => {
  it('Should render input element', () => {
    render(<AddInput todos={[]} setTodos={MockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });
  it('Should be able to type into input', () => {
    render(<AddInput todos={[]} setTodos={MockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: 'Go Grocery' } });
    expect(inputElement.value).toBe('Go Grocery');
  });
  it('Should have empty input when button clicked', () => {
    render(<AddInput todos={[]} setTodos={MockSetTodos} />);
    const addButton = screen.getByRole('button');
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: 'Go Grocery' } });
    fireEvent.click(addButton);
    expect(inputElement.value).toBe('');
  });
});
