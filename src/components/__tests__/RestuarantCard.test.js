import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";
import UserContext from "../../utils/UserContext";

const loggedInUser = {
  name: "test",
};

it("Should test Restaurant Card Component", () => {
  render(
    <UserContext.Provider value={loggedInUser}>
      <RestaurantCard resData={MOCK_DATA} />
    </UserContext.Provider>
  );

  const resName = screen.getByText("Theobroma");
  expect(resName).toBeInTheDocument();
});
