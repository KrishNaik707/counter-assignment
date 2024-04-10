import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterElement = screen.getByText(/counter/i);
  expect(counterElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  const countElement = screen.getByTestId("count");
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const countElement = screen.getByTestId("count");
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent("-1");
});