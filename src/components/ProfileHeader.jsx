import React from 'react';
import { Camera, CheckCircle2, GraduationCap } from 'lucide-react';
import './ProfileHeader.css';

export default function ProfileHeader() {
  return (
    <div className="profile-header-container">
      <div className="profile-main-info">
        <div className="avatar-wrapper">
          <div className="avatar-glow-ring"></div>
          <img src="/avatar.jpg" alt="Monika Yadav" className="avatar-img" />
          <button className="camera-badge" aria-label="Upload profile photo">
            <Camera size={12} />
          </button>
        </div>

        <div className="user-details">
          <div className="name-verified-row">
            <h2 className="user-name">Monika Yadav</h2>
            <div className="verified-badge" title="Verified Profile">
              <CheckCircle2 size={16} className="verified-icon" />
            </div>
          </div>
          
          <div className="user-role">
            <GraduationCap size={15} className="role-icon" />
            <span>B.Tech CSE Student</span>
          </div>

          <div className="greeting-box">
            <h1 className="greeting-heading">
              Hello, <span className="highlight-orange">Monika!</span> 👋
            </h1>
            <p className="greeting-subtitle">
              Let's build your career profile and unlock amazing opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
