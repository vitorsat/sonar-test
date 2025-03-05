import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders button and handles click event", () => {
  const handleClick = jest.fn(); 
  render(<Button onClick={handleClick} />);

  const buttonElement = screen.getByTestId("buttonclick");
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
