import React, { Component } from "react";

export default class Barbers extends Component {
  render() {
    return (
      <div>
        <section className="bg-light page-section" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  Our Amazing Team
                </h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={require("../assests/img/team/1.jpg")}
                    alt=""
                  />
                  <h4>Erik Lopez</h4>
                  <p className="text-muted">Owner and Barber</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="https://instagram.com/erikthebarber_?igshid=xl27cwr6wail">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/erik.lopez.946">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="img/team/2.jpg"
                    alt=""
                  />
                  <h4>Silvino Pina</h4>
                  <p className="text-muted">Barber</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="img/team/3.jpg"
                    alt=""
                  />
                  <h4>Ivan Palomares</h4>
                  <p className="text-muted">Barber</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                  totam corporis ea, alias ut unde.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
