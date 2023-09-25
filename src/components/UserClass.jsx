import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Default",
      },
    };

    //console.log(this.props.name + "Child Constuctor Called");
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child Did Mount Called");
    const data = await fetch("https://api.github.com/users/pooja9872");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("Component Did Update Called");
  }

  componentWillUnmount() {
    //console.log("Component Will UnMount will called");
  }

  render() {
    //console.log(this.props.name + "Child Render Called");
    const { avatar_url, name, location, bio, followers } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>Name : {name}</h3>
        <h5>{bio}</h5>
        <h5>Location : {location}</h5>
        <h5>Followers: {followers}</h5>
      </div>
    );
  }
}

export default UserClass;
