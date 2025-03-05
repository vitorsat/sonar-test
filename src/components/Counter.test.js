import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders counter and updates on button click", () => {
  render(<Counter />);

  const counterText = screen.getByTestId('counttext');
  expect(counterText).toBeInTheDocument();

  const buttonElement = screen.getByTestId('buttonclick');
  fireEvent.click(buttonElement);
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
