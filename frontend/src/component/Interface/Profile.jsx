import React from 'react'
import './Profile.css'
import profile from '../../assets/author.jpg'

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
                <h1>John Doe</h1>
                <p>Frontend Developer</p>
            </div>
        </div>
    </div>
  )
}

export default Profile
