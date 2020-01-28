import "./flip-card.css";

import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default class FlipCard extends Component {
  render() {
    const { disabled } = this.props;

    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Card>
              <Card.Body classname="flip-card-body">
                <Card.Img
                  variant="top"
                  src={this.props.image}
                  className="flip-image"
                />
                <Card.Title>{this.props.name || "<NAME>"}</Card.Title>
                {/* <Card.Text>
                    {" "}
                    Testing a long paragraph of nothingness and useless content{" "}
                  </Card.Text> */}
              </Card.Body>
            </Card>
          </div>
          <div className="flip-card-back">
            <Card>
              <Card.Body className="flip-card-body">
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>{this.props.description}</Card.Text>
                <Link to="/aloy">
                  <Button variant="danger" disabled={disabled}>
                    View my Portfolio
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
