import React, { Component } from 'react'

export default class HelloWorld extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>Hello World! This is {title}</h1>
      </div>
    )
  }
}
