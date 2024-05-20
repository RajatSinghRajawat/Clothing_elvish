import React from 'react'
import Elvishbhaifoot from './Elvishbhaifoot'
import Elvishbhainav from './Elvishbhainav'
import './Elvishbhai.css'

const Elvishlogin = () => {
  return (
    <>
      <Elvishbhainav />
      <div className="signup-container">
        <h2 className="signup-heading">Sign Up</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
          <p className="signup-text">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </form>
      </div>


      <Elvishbhaifoot />
    </>
  )
}

export default Elvishlogin
