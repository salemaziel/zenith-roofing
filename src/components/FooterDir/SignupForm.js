import React from "react";
import Label from "./Label";
import Input from "./Input";

class SignupForm extends React.Component {
  render() {
    return (
      <form action>
        <div className="contactform">
          <Label></Label>
          <Input />
          <button type="submit">Sign up</button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
