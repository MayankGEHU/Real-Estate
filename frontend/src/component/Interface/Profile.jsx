import React from 'react'
import './Profile.css'
import profile from '../../assets/author.jpg'

const profileData = [
  {
    name: "Mayank Singh",
    location: "Dehradun"
  }
];

const Profile = () => {
  return (
    <div className="Profile-container-box">
        <div className="Profile-section-container">
            <div className="profile-left-side">
                <div className="profile-picture-container">
                    <img src={profile} alt="Profile" className="profile-picture" />
                </div>
            </div>
            <div className="profile-right-side">
                {profileData.map((data, index) => (
                  <div key={index}>
                    <h1>{data.name}</h1>
                    <p>{data.location}</p>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Profile