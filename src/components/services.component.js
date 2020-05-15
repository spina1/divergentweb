import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="page-section">
          <table className="table table-dark">
            <tr>
              <th>Service</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>Haircut</td>
              <td>$25.00</td>
            </tr>
            <tr>
              <td>Haircut and Beard</td>
              <td>$30.00</td>
            </tr>
            <tr>
              <td>Children's Haircut</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Lineup</td>
              <td>$10.00</td>
            </tr>
            <tr>
              <td>Lineup with Beard</td>
              <td>$15.00</td>
            </tr>
            <tr>
              <td>Facial</td>
              <td>$15.00</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
