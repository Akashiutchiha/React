import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { Author: "", Title: "", Body: ""};
  }

  myChangeHandler = (event) => {
    this.setState({ Author: event.target.value });
    this.setState({ Title: event.target.value });
    this.setState({ Body: event.target.value });
    console.log(this.state.Author);
    console.log(this.state.Title);
    console.log(this.state.Body);

  };

render() {
    return (
    <form onSubmit={this.myChangeHandler}>
        {/* <h1>Hello {this.state.Author}</h1> */}
        <p>Subscribe</p>

        <label htmlFor="Name">Name </label>
        <input type="text" onChange={this.myChangeHandler} />
        <button type="submit">Submit</button>
    </form>
    );
}
}

export default Form;