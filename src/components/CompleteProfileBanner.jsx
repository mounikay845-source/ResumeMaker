import React from 'react';
import { Briefcase, ArrowRight, CheckCircle2, Circle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CompleteProfileBanner.css';

export default function CompleteProfileBanner() {
  const navigate = useNavigate();
  const percentage = 72;
  const strokeDashoffset = 283 - (283 * percentage) / 100;

  const checklistItems = [
    { label: 'Personal Details', completed: true },
    { label: 'Education', completed: true },
    { label: 'Skills', completed: true },
    { label: 'Experiences', completed: false },
    { label: 'Projects', completed: false },
    { label: 'Achievements', completed: true },
  ];

  return (
    <div className="complete-profile-banner glass-card glow-card-orange">
      <div className="banner-content-grid">
        {/* Left Info Column */}
        <div className="banner-left-info">
          <div className="banner-title-row">
            <div className="orange-icon-box">
              <Briefcase size={18} />
            </div>
            <h3 className="banner-title">Complete Your Profile</h3>
          </div>

          <p className="banner-description">
            A complete profile increases your chances of getting the right opportunities.
          </p>

          <button 
            className="btn-orange-gradient complete-btn"
            onClick={() => navigate('/profile')}
          >
            <span>Complete Now</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Center Circular Progress Ring */}
        <div className="banner-center-ring">
          <div className="circular-ring-wrapper">
            <svg className="ring-svg" viewBox="0 0 100 100">
              <circle
                className="ring-bg"
                cx="50"
                cy="50"
                r="45"
              />
              <circle
                className="ring-progress"
                cx="50"
                cy="50"
                r="45"
                style={{
                  strokeDasharray: 283,
                  strokeDashoffset: strokeDashoffset
                }}
              />
            </svg>
            <div className="ring-text">
              <span className="ring-number">{percentage}%</span>
            </div>
          </div>
        </div>

        {/* Right Checklist Column */}
        <div className="banner-right-checklist">
          {checklistItems.map((item, idx) => (
            <div key={idx} className="checklist-item">
              <span className="checklist-label">{item.label}</span>
              {item.completed ? (
                <CheckCircle2 size={16} className="icon-check-green" />
              ) : (
                <Circle size={16} className="icon-circle-orange" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
