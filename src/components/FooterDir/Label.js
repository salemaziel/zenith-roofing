import React from "react";

class Label extends React.Component {
  render() {
    return (
      <label htmlFor="input">
        Enter Your <span>Email</span>
      </label>
    );
  }
}

export default Label;
