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
      <div className="w-96 min-h-400 mt-6 m-auto items-center text-center rounded-2xl p-3 shadow-xl bg-slate-300 font-sans text-xl  leading-8">
        <img src={avatar_url} className=" w-full object-fill" />
        <h3>Name : {name}</h3>
        <h5>{bio}</h5>
        <h5>Location : {location}</h5>
        <h5>Followers: {followers}</h5>
      </div>
    );
  }
}

export default UserClass;
