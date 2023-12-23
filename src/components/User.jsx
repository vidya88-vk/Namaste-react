import About from "./About";
const User = ({ name }) => {
  return (
    <div className="user-card">
      <h2>Name:{name}</h2>
      <h2>Location:pune</h2>
    </div>
  );
};

export default User;
