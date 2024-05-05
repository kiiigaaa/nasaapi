import React, { Component } from 'react'

export default class BaseLayout extends Component {

  render () {
    return (
      <div>
        <nav className='main-nav'>
          <div>
            <a href='/'>Mars Rover Images</a>
          </div>
          <div>
            <img src='http://www.wesleysteiner.com/ast/dtm/mars.png' alt='' />
          </div>
        </nav>
        <header className='header'>
          <h1>Welcome to Mars Rover Images</h1>
          <p>Select from the form below to get the most up to date images of Mars</p>
        </header>
        {this.props.children}

        <footer className='footer'>
          <h4>Powered by <a href="https://api.nasa.gov">NASA Api</a></h4>
        </footer>
      </div>
    )
  }
}
