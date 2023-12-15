import React from "react";
import ReactDOM from "react-dom/client";

//React Element =>object->reneder(Html)=>Clumsy code=>to avoid this JSX use

//JSX == Javascript + xml
//Creating h1 tag using JSX.

const Title = () => (
  <h1 className="head" tabIndex={5}>
    Namsate React Using JSX
  </h1>
);

const num = 1000;
//React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {/* call Title component here */}
    <Title />
    {/* writing javascript variable num code in jsx inside {} braces */}
    {100 + 100}
    <h1 className="heading">Namaste react functional component.</h1>
  </div>
);

//short hand functional component syntax
// const HeadingComponent2 = () => (
//   <h1 id="head">Namaste react functional component.</h1>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

//render functional component
root.render(<HeadingComponent />);
