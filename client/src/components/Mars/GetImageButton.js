import React, { Component } from 'react'

export default class GetImageButton extends Component {
  render () {
    return (
      <div className='image-button'>
        <button onClick={this.props.onClick}>Get Images!</button>
      </div>
    )
  }
}
