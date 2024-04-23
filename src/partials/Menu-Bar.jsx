
import React from 'react';

import "./Menu-Bar.css";

function MenuBar() {
  return (
    <React.Fragment>
        
    <div id="menu-bar">
      <div className="menu-container">
        <div>
          <i className="fa-brands fa-facebook fa-2xl"></i>
          <input placeholder="Search Facebook" />
        </div>
        <div>
          <i className="fa-solid fa-house fa-xl"></i>
          <i className="fa-solid fa-user-group fa-xl"></i>
          <i className="fa-solid fa-people-group fa-xl"></i>
          <i className="fa-solid fa-store fa-xl"></i>
        </div>
        <div className="menu-bar-login">
          <div className="circle">
            <i className="fa-solid fa-bell fa-xl" style={{margin: "7px"}}></i>
          </div>
          <div className="circle">
            <i
              className="fa-brands fa-facebook-messenger fa-xl"
              style={{margin: "7px"}}
            ></i>
          </div>
          <img src="profile.jpg" className="profile" />
        </div>
      </div>
    </div>

    </React.Fragment>
  )
}

export default MenuBar