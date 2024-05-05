import React, { Component } from 'react'
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'
import '../../styles/GetImageForm.css'


const API_KEY = 'u7vxheZfgrpnmalmYSI9d35KRHsDBMJW8aMvdAdH'

export default class GetImageForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      rover: 'Curiosity',
      camera: 'FHAZ',
      images: [],
      sol: ''
    }

    this.handleRover = this.handleRover.bind(this)
    this.handleCamera = this.handleCamera.bind(this)
    this.handleSol = this.handleSol.bind(this)
    this.fetchRoverImage = this.fetchRoverImage.bind(this)
  }

  handleRover (event) {
    this.setState({rover: event.target.value})
    console.log(this.state)
  }
  handleCamera (event) {
    this.setState({camera: event.target.value})
  }
  handleSol (event) {
    this.setState({sol: event.target.value})
  }
  fetchRoverImage () {
    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol})
    let cam = this.state.camera
    let rove = this.state.rover
    let num = this.state.sol
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`
    fetch(imageUrl)
    .then(response => response.json())
    .then(responseData => {
      this.setState({images: responseData.photos})
      console.log(responseData.photos)
    })
    .catch((error) => {
      console.log('Fetching error:', error)
    })
  }

  render () {
    return (
      <div className='search-form'>
      <div className='select-form'>
        <label htmlFor="rover">Rover</label>
        <select onChange={this.handleRover} id="rover" value={this.state.rover} className="rover-select">
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirit</option>
        </select>
        <label htmlFor="camera">Camera Type</label>
        <select onChange={this.handleCamera} id="camera" value={this.state.camera}>
          <option value="fhaz">FHAZ (Front Hazard)</option>
          <option value="rhaz">RHAZ (Rear Hazard)</option>
          <option value="navcam">NAVCAM (Navigation Cam)</option>
        </select>
        <label htmlFor="sol">Martian Sol: 1000-2000</label>
        <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.sol} />
      </div>
      <div className='button'>
        <GetImageButton onClick={this.fetchRoverImage} />
      </div>
      <div className='image-results'>
        <ImageDisplay images={this.state.images} />
      </div>
    </div>
    )
  }
}
