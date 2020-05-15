import React, { Component } from 'react'

export default class HelloWorld extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>Hello World!</h1>
        <p><strong>{title}</strong></p>
      </div>
    )
  }
}

// import React from 'react'
// import PropTypes from 'prop-types'

// const HelloWorld = ({ title }) => {
//   return (
//     <>
//       <h1>Hello World!</h1>
//       <p><strong>{title}</strong></p>
//     </>
//   )
// }

// HelloWorld.propTypes = {
//   title: PropTypes.string
// }

// export default HelloWorld


