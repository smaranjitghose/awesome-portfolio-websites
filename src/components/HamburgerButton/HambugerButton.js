import React from 'react';
import './HamburgerButton.css'

const HamburgerButton = (props) => {
    return(
        <div onClick = {props.onClick} className={`hamburger ${props.activated ? 'is-active' : ''}`} id="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
    )
}

export default HamburgerButton