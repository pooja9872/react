import React from "react";
import UserClass from "./UserClass";

// const About = () => {
//   const userInfo = {
//     name: "Pooja",
//     location: "Hyderabad",
//     email: "user1@gmail.com",
//   };
//   return (
//     <div className="main-container">
//       <h2>About</h2>
//       <h4>
//         This is the app where i am learning react and implementing my knowledge
//       </h4>
//       <User {...userInfo} />
//       <UserClass
//         name={"Arti Kumari"}
//         location={"Hyderabad IN"}
//         email={"user2@gmail.com"}
//       />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constuctor Called");
  }

  componentDidMount() {
    //console.log("Parent Did Mount Called");
  }

  render() {
    // console.log("Parent Render Called");
    return (
      <div className="text-center mt-5 text-xl font-sans">
        <h2>About</h2>
        <h4>
          This is the app where i am learning react and implementing my
          knowledge
        </h4>
        <UserClass />
      </div>
    );
  }
}

export default About;
