import React from "react";
export default class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  handleChange = (event) => {
    this.setState({
			input: event.target.value,
			messages: this.state.messages
		});
  };
  handleSubmit = () => {
    this.setState({
      input: "",
      messages: [this.state.messages, this.state.input],
    });
  };
  render() {
    return (
      <div>
        <h2 className="title">Type in a Message</h2>
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.handleSubmit.bind(this)}>Add Message</button>
        <ul className="main-content">
          {this.state.messages.map((message, i) => {
            return <li key={i}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}
