import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders NFT card title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Equilibrium #3429/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders NFT description", () => {
  render(<App />);
  const descriptionElement = screen.getByText(
    /Our Equilibrium collection promotes balance and calm/i
  );
  expect(descriptionElement).toBeInTheDocument();
});

test("renders ETH price", () => {
  render(<App />);
  const priceElement = screen.getByText(/0.041 ETH/i);
  expect(priceElement).toBeInTheDocument();
});

test("renders creator name", () => {
  render(<App />);
  const creatorElement = screen.getByText(/Jules Wyvern/i);
  expect(creatorElement).toBeInTheDocument();
});
