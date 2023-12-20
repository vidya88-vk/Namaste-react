import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";

const AppLayout = () => {
  return (
    <div className="app">
      {/* //Build header //body //footer */}
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

//render functional component
root.render(<AppLayout />);
