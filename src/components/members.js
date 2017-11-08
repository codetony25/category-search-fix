import React, { Component } from 'react';

class Members extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.members && this.props.members.length > 0) {
      return (
        <div style={{ textAlign: "center", listStyle: "none" }}>
          {this.props.members.map((person) => (
            <h3>{person.title}</h3>
          ))}
        </div>
      )
    }
    else {
      return (
        <h4 style={{ textAlign: "center" }}>
          Search and select to see members...
        </h4>
      )
    }
  }
}

export default Members;
