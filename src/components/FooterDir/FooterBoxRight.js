import React from "react";
import SignupForm from "./SignupForm";

class FooterBoxRight extends React.Component {
  render() {
    return (
      <div className="box-two">
        <h2>
          {" "}
          <span className="inner-span">
            Sign up for <br />
            <span className="green">Exclusive</span> Deals!
          </span>{" "}
        </h2>
        {}
        <SignupForm></SignupForm>
      </div>
    );
  }
}

export default FooterBoxRight;
