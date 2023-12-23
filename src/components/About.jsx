import User from "./User";
import UserClass from "./UserClass";
import { useState } from "react";
//Functional Component
const About = () => {
  const [count, setCount] = useState(0);
  const [count2] = useState(11);

  return (
    <div>
      <h1>About Page</h1>
      <h1>Count = {count}</h1>
      <h1>Count = {count2}</h1>
      {/* <User name={"vidya Nipunge (functional)"} /> */}
      <UserClass name={"Vidya Kotkar (class)"} />
    </div>
  );
};

export default About;

//class based component
