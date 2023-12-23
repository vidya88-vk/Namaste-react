import React from "react";

//class based component --Normal js class.
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //To create state variable
    this.state = {
      count: 1,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    //API Call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    //destructure
    const { name } = this.props;

    return (
      <div className="user-card">
        <h1>Count={this.state.count}</h1>
        {/* To update state variable in class */}
        <button
          onClick={() => {
            //Never update state variables directly.
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <img src={this.state.userInfo.avatar_url} />

        <h2>Name:{this.state.userInfo.name}</h2>
        <h2>Location:pune</h2>
      </div>
    );
  }
}

export default UserClass;
