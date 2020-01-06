import React from "react";
import profileImg from "../../assets/hondalogo.png";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__img">
        <img className="profile__img--img" src={profileImg} alt='honda logo'></img>
        <h4 className="profile__img--edit">Edit</h4>
      </div>
      <div className="profile__data">
        <h2 className="profile__data--title">Knight Honda</h2>
        <h4 className="profile__data--text">Destination Kingsway Honda</h4>
        <h4 className="profile__data--text">Brand: Honda</h4>
        <h4 className="profile__data--text">Owner: Kyle Knight</h4>
        <h4 className="profile__data--text add">Address: 368 Kingsway, Vancouver, BC Canada</h4>
        <h4 className="profile__data--text">V5T 3J6</h4>
        <h4 className="profile__data--text">778.123.4567</h4>
        <h4 className="profile__data--text">ScottM_12@gmail.com</h4>
      </div>
    </div>
  );
}
