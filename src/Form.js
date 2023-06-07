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
        
        <p>Enter your name:</p>
        <input type="text" onChange={this.myChangeHandler} />
        <p>Enter the title of your blog</p>
        <input type="text" onChange={this.myChangeHandler} />
        <p>Enter the body</p>
        <input type="text" onChange={this.myChangeHandler} />
        <button type="submit">Submit</button>
    </form>
    );
}
}

export default Form;