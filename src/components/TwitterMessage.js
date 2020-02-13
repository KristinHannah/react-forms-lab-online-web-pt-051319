import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      maxChars: 280
    };
  }

  handleChange = (event) => {
    const elength = event.target.value.length
    console.log(elength)
    this.setState({
      message: event.target.value,
      maxChars: 280 - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <form>
          <input type="text" name="message" onChange={event => this.handleChange(event)} id="message" value={this.state.message} />
          <p>remaining characters: {this.state.maxChars} </p>
        </form>
      </div>
    );
  }
}

export default TwitterMessage;
