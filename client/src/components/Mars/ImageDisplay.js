import React, { Component } from 'react'
import '../../styles/ImageDisplay.css'

export default class ImageDisplay extends Component {
  render () {
    return (
      <div className='image-results'>
        {this.props.images.map((image) =>
          <div className='image-map' key={image.id}>
            <ul className='image-details'>
              <img src={image.img_src} alt='' />
              <h4>Date: {image.earth_date}</h4>
            </ul>
          </div>
      )}
      </div>
    )
  }
}
