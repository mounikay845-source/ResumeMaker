import React, { useState } from 'react';
import { 
  Sparkles, 
  Mic, 
  Play, 
  RotateCcw, 
  TrendingUp, 
  Target, 
  Zap, 
  Send, 
  Copy, 
  Check, 
  BrainCircuit, 
  Award, 
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import './FeatureCards.css';

export default function FeatureCards() {
  // --- Card 1: AI Mock Interview Coach State ---
  const [selectedRole, setSelectedRole] = useState('Frontend Developer');
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const interviewQuestions = {
    'Frontend Developer': [
      "How do you optimize React component re-renders?",
      "Explain the Virtual DOM and how React reconciliation works.",
      "How do you manage state in large-scale React applications?"
    ],
    'Fullstack Developer': [
      "How do you design a scalable REST vs GraphQL API?",
      "Explain indexing strategies in MongoDB vs PostgreSQL.",
      "How do you secure authentication tokens in web applications?"
    ],
    'AI Engineer': [
      "Explain RAG (Retrieval-Augmented Generation) architecture.",
      "How do you evaluate and fine-tune LLM prompt responses?",
      "What is vector embeddings and how do vector databases work?"
    ]
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    setHasRecorded(false);
    setShowFeedback(false);
    setTimeout(() => {
      setIsRecording(false);
      setHasRecorded(true);
      setShowFeedback(true);
    }, 2800);
  };

  const handleResetInterview = () => {
    setIsRecording(false);
    setHasRecorded(false);
    setShowFeedback(false);
    setActiveQuestionIndex((prev) => (prev + 1) % interviewQuestions[selectedRole].length);
  };

  // --- Card 2: Skill Radar & Career Roadmap State ---
  const [targetRole, setTargetRole] = useState('Senior Full Stack Engineer');
  const skillMetrics = [
    { name: 'React 19 & Next.js', current: 88, required: 90, status: 'Strong' },
    { name: 'System Design & APIs', current: 65, required: 85, status: 'Gap (-20%)' },
    { name: 'TypeScript & Node.js', current: 78, required: 80, status: 'On Track' },
    { name: 'AI Integration & RAG', current: 70, required: 85, status: 'Gap (-15%)' }
  ];

  // --- Card 3: AI Networking & Pitch Assistant State ---
  const [outreachType, setOutreachType] = useState('recruiter');
  const [targetCompany, setTargetCompany] = useState('Google / Tech Corp');
  const [tone, setTone] = useState('Confident');
  const [copied, setCopied] = useState(false);

  const generateOutreachMessage = () => {
    if (outreachType === 'recruiter') {
      if (tone === 'Confident') {
        return `Hi Recruiter at ${targetCompany}, I recently built full-stack AI applications and noticed your team is hiring. I'd love to share my portfolio!`;
      } else if (tone === 'Warm') {
        return `Hello! I'm really excited about the engineering roles at ${targetCompany}. Would love to connect and learn more about your open opportunities.`;
      } else {
        return `Hi! I am a Full Stack Developer experienced in React 19 & Node.js. Are you available for a brief call regarding open developer roles at ${targetCompany}?`;
      }
    } else if (outreachType === 'referral') {
      if (tone === 'Confident') {
        return `Hey! Impressed by your engineering journey at ${targetCompany}. I'm applying for a developer position there—would you be open to a 5-min referral chat?`;
      } else if (tone === 'Warm') {
        return `Hi there! I love what ${targetCompany} is building. Would you mind sharing any quick tips for standing out in the application process?`;
      } else {
        return `Hello! I'm applying for the Full Stack Developer role at ${targetCompany}. If my profile looks like a fit, would you be open to submitting an internal referral?`;
      }
    } else {
      return `Hi team! I admire ${targetCompany}'s work in tech. I've developed full-stack web applications and would welcome a quick connection.`;
    }
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generateOutreachMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="feature-cards-grid">
      {/* 1. AI Mock Interview Coach */}
      <div className="feature-card glass-card glow-card-cyan">
        <div className="card-top">
          <div className="feature-header">
            <div className="feature-icon-box cyan">
              <Mic size={18} />
            </div>
            <h3 className="feature-title">AI Mock Interview Coach</h3>
            <span className="badge-live">LIVE AI</span>
          </div>
          <p className="feature-subtitle">
            Practice real technical questions with voice feedback & AI scoring.
          </p>
        </div>

        {/* Interactive Interview Sandbox */}
        <div className="sandbox-box interview-box">
          <div className="sandbox-selector-row">
            <span className="selector-label">Role:</span>
            <select 
              className="sandbox-select" 
              value={selectedRole} 
              onChange={(e) => {
                setSelectedRole(e.target.value);
                setActiveQuestionIndex(0);
                setHasRecorded(false);
                setShowFeedback(false);
              }}
            >
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Fullstack Developer">Fullstack Developer</option>
              <option value="AI Engineer">AI Engineer</option>
            </select>
          </div>

          <div className="interview-q-card">
            <div className="q-badge">Question #{activeQuestionIndex + 1}</div>
            <div className="q-text">
              "{interviewQuestions[selectedRole][activeQuestionIndex]}"
            </div>
          </div>

          {!showFeedback ? (
            <div className="interview-controls">
              {isRecording ? (
                <div className="recording-indicator-pulse">
                  <span className="pulse-dot"></span> Listening & Analyzing STAR method...
                </div>
              ) : (
                <button className="btn-interactive cyan-gradient" onClick={handleStartRecording}>
                  <Mic size={15} />
                  <span>{hasRecorded ? 'Re-record Answer' : 'Start Voice Answer'}</span>
                </button>
              )}
            </div>
          ) : (
            <div className="ai-feedback-box fadeIn">
              <div className="score-row">
                <span className="score-tag">AI Score: <strong>92/100</strong></span>
                <span className="star-tag">Confidence: High ★★★★☆</span>
              </div>
              <p className="feedback-tip">
                ✨ <strong>AI Suggestion:</strong> Great structure! Mentioning React 19 memoization would elevate your score to 98%.
              </p>
              <button className="btn-secondary-sm" onClick={handleResetInterview}>
                <RotateCcw size={13} /> Next Question
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 2. Career Roadmap & Skill Radar */}
      <div className="feature-card glass-card glow-card-purple">
        <div className="card-top">
          <div className="feature-header">
            <div className="feature-icon-box purple">
              <TrendingUp size={18} />
            </div>
            <h3 className="feature-title">Skill Radar & Roadmap</h3>
            <span className="badge-growth">+35% Salary Bump</span>
          </div>
          <p className="feature-subtitle">
            Analyze skill gaps and target your next high-paying developer milestone.
          </p>
        </div>

        {/* Skill Analytics Sandbox */}
        <div className="sandbox-box roadmap-box">
          <div className="target-role-badge">
            <Target size={14} className="purple-icon" />
            <span>Target: <strong>{targetRole}</strong></span>
          </div>

          <div className="skills-meter-list">
            {skillMetrics.map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="skill-info-row">
                  <span className="skill-name">{skill.name}</span>
                  <span className={`skill-status ${skill.status.includes('Gap') ? 'gap' : 'ok'}`}>
                    {skill.status}
                  </span>
                </div>
                <div className="skill-progress-bar">
                  <div 
                    className={`progress-fill ${skill.status.includes('Gap') ? 'warning-fill' : 'purple-fill'}`}
                    style={{ width: `${skill.current}%` }}
                  ></div>
                  <div className="required-marker" style={{ left: `${skill.required}%` }} title="Target Level"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="roadmap-footer">
            <div className="action-hint">
              <Zap size={13} className="yellow-icon" />
              <span>Recommended Action: Complete 1 System Design Project</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. AI Networking & Pitch Assistant */}
      <div className="feature-card glass-card glow-card-emerald">
        <div className="card-top">
          <div className="feature-header">
            <div className="feature-icon-box emerald">
              <MessageSquare size={18} />
            </div>
            <h3 className="feature-title">AI Networking Assistant</h3>
            <span className="badge-ai">1-CLICK PITCH</span>
          </div>
          <p className="feature-subtitle">
            Generate high-converting recruiter cold emails & LinkedIn connection notes.
          </p>
        </div>

        {/* Outreach Generator Sandbox */}
        <div className="sandbox-box outreach-box">
          <div className="outreach-controls-grid">
            <div className="pill-toggle-group">
              <button 
                className={`pill-btn ${outreachType === 'recruiter' ? 'active' : ''}`}
                onClick={() => setOutreachType('recruiter')}
              >
                Recruiter
              </button>
              <button 
                className={`pill-btn ${outreachType === 'referral' ? 'active' : ''}`}
                onClick={() => setOutreachType('referral')}
              >
                Peer Referral
              </button>
            </div>

            <div className="tone-selector">
              <span className="tone-label">Tone:</span>
              <div className="tone-chips-row">
                {['Confident', 'Warm', 'Direct'].map((t) => (
                  <button 
                    key={t}
                    className={`tone-chip ${tone === t ? 'selected' : ''}`}
                    onClick={() => setTone(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="generated-msg-card">
            <p className="msg-preview-text">
              {generateOutreachMessage()}
            </p>
          </div>

          <button className="btn-interactive emerald-gradient" onClick={handleCopyMessage}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Outreach Pitch'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
