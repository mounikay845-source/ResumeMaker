import React, { useState } from 'react';
import { Bot, FileText, AlertCircle, MessageSquare, Compass, Lightbulb, ChevronRight } from 'lucide-react';
import './CareerAssistantAndTips.css';

export default function CareerAssistantAndTips() {
  const [activeTipIndex, setActiveTipIndex] = useState(0);

  const tips = [
    "Keep your profile updated and add new projects regularly to increase your visibility to recruiters.",
    "Tailor your resume skills section with keywords from the target job descriptions.",
    "Add measurable achievements and outcomes to your project summaries.",
    "Practice common interview questions daily using the AI Interview Preparation tool."
  ];

  const assistantActions = [
    { icon: FileText, label: 'Improve Resume' },
    { icon: AlertCircle, label: 'Find Skill Gaps' },
    { icon: MessageSquare, label: 'Interview Preparation' },
    { icon: Compass, label: 'Career Guidance' }
  ];

  return (
    <div className="bottom-cards-grid">
      {/* 1. Career Assistant (AI) */}
      <div className="assistant-card glass-card glow-card-purple">
        <div className="assistant-content">
          <div className="assistant-left-panel">
            <div className="card-header-row">
              <div className="header-icon-box purple">
                <Bot size={18} />
              </div>
              <h3 className="card-title">Career Assistant</h3>
              <span className="ai-badge">AI</span>
            </div>

            <p className="card-subtitle">
              Get AI-powered suggestions to improve your profile.
            </p>

            <div className="assistant-actions-list">
              {assistantActions.map((action, idx) => {
                const IconComp = action.icon;
                return (
                  <button key={idx} className="assistant-action-btn">
                    <div className="action-left">
                      <IconComp size={15} className="action-icon" />
                      <span>{action.label}</span>
                    </div>
                    <ChevronRight size={14} className="action-chevron" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="assistant-right-mascot">
            <div className="mascot-pedestal-glow"></div>
            <img src="/robot.png" alt="AI Assistant Mascot" className="robot-img pulse-glow" />
          </div>
        </div>
      </div>

      {/* 2. Today's Tip */}
      <div className="tip-card glass-card glow-card-orange">
        <div className="card-header-row">
          <div className="header-icon-box orange">
            <Lightbulb size={18} />
          </div>
          <h3 className="card-title">Today's Tip</h3>
        </div>

        <div className="quote-box">
          <span className="quote-mark open">“</span>
          <p className="tip-text">
            {tips[activeTipIndex]}
          </p>
          <span className="quote-mark close">”</span>
        </div>

        <div className="pagination-dots">
          {tips.map((_, idx) => (
            <button
              key={idx}
              className={`dot-btn ${idx === activeTipIndex ? 'active' : ''}`}
              onClick={() => setActiveTipIndex(idx)}
              aria-label={`Go to tip ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
