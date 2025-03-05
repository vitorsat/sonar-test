import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders Home page with counter", () => {
  render(<Home />);
  
  const counterText = screen.getByText(/count: 0/i);
  expect(counterText).toBeInTheDocument()
});
