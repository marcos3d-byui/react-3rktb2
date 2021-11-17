import React from 'react';
import './topbar.css';
import { NotificationsNone, Public, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">PROJETTA</span>
          {/* {<img src="https://instagram.flsc3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66039680_2261634457298293_208216827644346368_n.jpg" alt="" className="logoImg"/>} */}
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBagde">2</span>
          </div>
          <div className="topbarIconContainer">
            <Public />
            <span className="topIconBagde">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/9679700/pexels-photo-9679700.jpeg?cs=srgb&dl=pexels-lisa-9679700.jpg&fm=jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
