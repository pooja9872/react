const { createContext } = require("react");

const UserContext = createContext({
  loggedInUser: "Deafult User",
});

export default UserContext;
