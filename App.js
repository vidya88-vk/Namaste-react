/** nested html structure
<div id="parent">
    <div id="child">
        <h1>I am h1 tag!!</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div> 
Note:- ReactElement() -- Object -- Html Understand =>(Browser)
*/

// create above html nested structure in react
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);
console.log(parent);

// creating h1 tag
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!!"
);
//console.log(heading); //return object of heading const.
// Creating root for react
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering heading inside Root
// root.render(heading);
root.render(parent);
