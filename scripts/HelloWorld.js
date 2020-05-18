import React from 'react'
import PropTypes from 'prop-types'

const HelloWorld = ({ title }) => {
  return (
    <>
      <h1>Hello Ocupop!</h1>
      <p><strong>{title}</strong></p>
    </>
  )
}

HelloWorld.propTypes = {
  title: PropTypes.string
}

export default HelloWorld


