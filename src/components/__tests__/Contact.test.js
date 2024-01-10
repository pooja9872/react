import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  test("Should load Contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should button in component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should get input text placeholder", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should get text name in component", () => {
    render(<Contact />);

    const textName = screen.getByText("Submit");

    expect(textName).toBeInTheDocument();
  });

  test("Should load 2 input boxes in component", () => {
    render(<Contact />);

    const textBoxes = screen.getAllByRole("textbox");

    expect(textBoxes.length).toBe(2);
  });
});
