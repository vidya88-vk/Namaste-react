import About from "./About";
const User = ({ name }) => {
  return (
    <div className="user-card m-4 p-4 bg-gray-100 rounded-lg">
      <h2>Name:{name}</h2>
      <h2>Location:pune</h2>
    </div>
  );
};

export default User;
