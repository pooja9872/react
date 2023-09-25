const User = ({ name, location, email }) => {
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact Us: {email}</h4>
    </div>
  );
};

export default User;
