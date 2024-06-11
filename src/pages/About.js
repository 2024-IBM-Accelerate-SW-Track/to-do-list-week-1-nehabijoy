import React, { Component } from 'react';

import "./About.css";

import profileImage from "../assets/profile_pic_name.jpg";

  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img 
              className="profile_image"
              // C:\Verizon\NehaTest.jpg
              // the image is imported
              src = {profileImage}
              alt="Profile Pic"
              ></img>
            </div>
            </div>
             <div className="split right"> 
              <div className="centered">
              <div className="name_title">Neha Bijoy</div>
              <div className="brief_description">
              I'm Neha Bijoy!
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}