import './flip-card.css'

import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default class FlipCard extends Component {
  render() {
      return (
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={this.props.image} className='flip-image'/>
                  <Card.Title>{this.props.name || '<NAME>'}</Card.Title>
                  <Card.Text>
                    {" "}
                    Testing a long paragraph of nothingness and useless content{" "}
                  </Card.Text>
                  <Button variant="danger">Oh no.</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="flip-card-back">
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={this.props.image} className='flip-image'/>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    {" "}
                    Testing a long paragraph of nothingness and useless content{" "}
                  </Card.Text>
                  <Button variant="danger">Oh no.</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      )
  }
}
