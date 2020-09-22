import { Button, TextField } from "@material-ui/core";
import React from "react";
import Card from "react-credit-cards";

import "react-credit-cards/es/styles-compiled.css";
import "./PayementForm.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export default class PaymentForm extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment column1">
          <div className="row1">
            <Card
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={this.handleCallback}
            />
          </div>
          <div className="row2">
            <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
              <div className="form-group">
                <TextField
                  type="number"
                  name="number"
                  className="form-control"
                  label="Card Number"
                  variant="outlined"
                  pattern="[\d| ]{16,22}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
                <small>E.g.: 49..., 51..., 36..., 37...</small>
              </div>
              <div className="form-group">
                <TextField
                  type="text"
                  name="name"
                  className="form-control"
                  label="Name"
                  variant="outlined"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="row">
                <div className="col-6">
                  <TextField
                    type="number"
                    name="expiry"
                    className="form-control"
                    label="Expiry Date"
                    pattern="\d\d/\d\d"
                    variant="outlined"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div className="col-6">
                  <TextField
                    type="number"
                    maxlength="3"
                    name="cvc"
                    className="form-control"
                    label="CVC"
                    size="3"
                    variant="outlined"
                    pattern="\d{3,4}"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
              </div>
              <input type="hidden" name="issuer" value={issuer} />
              <div className="form-actions classes">
                {/* <Button
                  variant="outlined"
                  color="primary"
                  href="#outlined-buttons"
                >
                  Proceed to Pay
                </Button> */}
                {/* <button className="btn btn-primary btn-block">PAY</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
