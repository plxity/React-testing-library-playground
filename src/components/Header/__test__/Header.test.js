import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('Should render correct texts in header', () => {
  render(<Header title="my header"/>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});


it('Should render correct texts in header', () => {
  render(<Header title="my header"/>);
  const headingElement = screen.getByRole("heading", {name: "my header"})
  expect(headingElement).toBeInTheDocument();
});

it('Should render correct texts in header', () => {
  render(<Header title="my header"/>);
  const headingElement = screen.getByTitle("header")
  expect(headingElement).toBeInTheDocument();
});

it('Should render correct texts in header', () => {
  render(<Header title="my header"/>);
  const headingElement = screen.getByTestId("header-1")
  expect(headingElement).toBeInTheDocument();
});


// Find by
it('Should render correct texts in header', async () => {
  render(<Header title="my header"/>);
  const headingElement = await screen.findByText(/my header/i)
  expect(headingElement).toBeInTheDocument();
});

//Query by
it('Should render correct texts in header', async () => {
  render(<Header title="my header"/>);
  const headingElement = screen.queryByText(/dogs/i)
  expect(headingElement).not.toBeInTheDocument();
});

it('Should render correct texts in header', async () => {
  render(<Header title="my header"/>);
  const headingElements = screen.getAllByRole("heading")
  expect(headingElements.length).toBe(2);
});

// it('Shouls render correct texts in header', () => {
//   render(<Header title="my header"/>);
//   const headingElement = screen.getByRole("heading")
//   expect(headingElement).toBeInTheDocument();
// });