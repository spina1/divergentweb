import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.onChangeClientName = this.onChangeClientName.bind(this);
    this.onChangeClientPhone = this.onChangeClientPhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      clientname: "",
      clientphone: "",
    };
  }

  onChangeClientName(e) {
    this.setState({
      clientname: e.target.value,
    });
  }
  onChangeClientPhone(e) {
    this.setState({
      clientphone: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const client = {
      clientname: this.state.clientname,
      clientphone: this.state.clientphone,
    };
    console.log(client);
    window.location = "/";
  }

  render() {
    return (
      <div>
        <div className="page-section">
          <h3>Sign Up For Notifications</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.clientname}
                onChange={this.onChangeClientName}
              />
            </div>
            <div className="form-group">
              <label>Phone: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.clientphone}
                onChange={this.onChangeClientPhone}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
