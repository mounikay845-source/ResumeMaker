import React from 'react';
import { Pencil, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ProfileCompletionCard.css';

export default function ProfileCompletionCard({ percentage = 72 }) {
  const navigate = useNavigate();

  return (
    <div className="profile-completion-card glass-card glow-card-orange">
      <div className="completion-header-row">
        <span className="completion-title">Profile Completion</span>
        <span className="completion-percentage">{percentage}%</span>
      </div>

      <div className="progress-bar-track">
        <div 
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        >
          <div className="progress-glow-dot"></div>
        </div>
      </div>

      <button className="edit-profile-btn btn-outline-orange" onClick={() => navigate('/profile')}>
        <div className="btn-inner">
          <Pencil size={15} className="edit-icon" />
          <span>Edit Profile</span>
        </div>
        <ChevronRight size={16} className="chevron-icon" />
      </button>
    </div>
  );
}
