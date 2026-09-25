import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  FileText, LayoutGrid, Globe, Briefcase, Sparkles, Check, ChevronDown, 
  Upload, FileCheck, FileCode, Lock, Bot, Lightbulb, Edit3, Target, 
  Search, ShieldCheck, Mail, MessageSquare, History, ArrowRight, Eye, X, Download, Printer 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ResumePage.css';

export default function Resume() {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState('modern-orange');
  const [viewMode, setViewMode] = useState('column');
  const [selectedFormat, setSelectedFormat] = useState('word');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const templates = [
    { id: 'modern-orange', name: 'Modern Orange', bg: 'orange-theme' },
    { id: 'professional-blue', name: 'Professional Blue', bg: 'blue-theme' },
    { id: 'minimal-clean', name: 'Minimal Clean', bg: 'minimal-theme' },
    { id: 'executive-dark', name: 'Executive Dark', bg: 'dark-theme' },
    { id: 'creative-purple', name: 'Creative Purple', bg: 'purple-theme' },
    { id: 'classic-green', name: 'Classic Green', bg: 'green-theme' },
    { id: 'simple-grey', name: 'Simple Grey', bg: 'grey-theme' },
    { id: 'elegant-brown', name: 'Elegant Brown', bg: 'brown-theme' },
  ];

  return (
    <main className="resume-builder-page">
      <Header />

      <div className="resume-page-layout">
        {/* Main Content Area (Resume Builder First) */}
        <section className="resume-main-content">
          {/* Header & Step Progress Bar */}
          <div className="resume-title-header glass-card">
            <div className="title-row">
              <Sparkles className="orange-text" size={20} />
              <h1 className="resume-heading">Resume Builder</h1>
              <Sparkles className="orange-text" size={20} />
            </div>
            <p className="resume-subheading">
              Create a professional resume that gets you hired
            </p>

            {/* 4 Steps Tracker */}
            <div className="steps-tracker">
              {/* Step 1 */}
              <div className="step-item active">
                <div className="step-badge orange-badge">
                  <FileText size={15} />
                </div>
                <span className="step-label orange-text">Choose Template</span>
              </div>

              <div className="step-line dotted"></div>

              {/* Step 2 */}
              <div className="step-item">
                <div className="step-badge dark-badge">
                  <FileCode size={15} />
                </div>
                <span className="step-label">Add / Upload Resume</span>
              </div>

              <div className="step-line dotted"></div>

              {/* Step 3 */}
              <div className="step-item">
                <div className="step-badge dark-badge">
                  <Lock size={15} />
                </div>
                <span className="step-label">Generate Resume</span>
              </div>

              <div className="step-line dotted"></div>

              {/* Step 4 */}
              <div className="step-item">
                <div className="step-badge dark-badge">
                  <Download size={15} />
                </div>
                <span className="step-label">Download Resume</span>
              </div>
            </div>
          </div>

          {/* Section 1: Choose a Template */}
          <div className="section-block glass-card">
            <div className="section-top-row">
              <div>
                <h2 className="block-title">Choose a Template</h2>
                <p className="block-subtitle">Select a template that best represents you</p>
              </div>

              <div className="view-mode-toggle">
                <button 
                  className={`toggle-btn ${viewMode === 'column' ? 'active' : ''}`}
                  onClick={() => setViewMode('column')}
                >
                  Column Wise
                </button>
                <button 
                  className={`toggle-btn ${viewMode === 'row' ? 'active' : ''}`}
                  onClick={() => setViewMode('row')}
                >
                  Row Wise
                </button>
              </div>
            </div>

            {/* 8 Templates Grid */}
            <div className={`templates-grid-box ${viewMode === 'row' ? 'row-mode' : ''}`}>
              {templates.map((tmpl) => {
                const isSelected = selectedTemplate === tmpl.id;
                return (
                  <div 
                    key={tmpl.id} 
                    className={`template-card-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => { setSelectedTemplate(tmpl.id); setIsPreviewOpen(true); }}
                  >
                    <div className="template-preview-mockup">
                      {isSelected && (
                        <div className="selected-check-badge">
                          <Check size={13} />
                        </div>
                      )}
                      
                      {/* Mini Resume Mockup */}
                      <div className={`mini-resume-doc ${tmpl.bg}`}>
                        <div className="mini-doc-header">
                          <div className="mini-doc-avatar"></div>
                          <div className="mini-doc-lines">
                            <div className="mini-line bold-line"></div>
                            <div className="mini-line sub-line"></div>
                          </div>
                        </div>
                        <div className="mini-doc-body">
                          <div className="mini-bar bg-accent"></div>
                          <div className="mini-bar"></div>
                          <div className="mini-bar"></div>
                          <div className="mini-bar half-bar"></div>
                        </div>
                      </div>
                    </div>

                    <span className={`template-label ${isSelected ? 'selected-text' : ''}`}>
                      {tmpl.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <button className="expand-templates-bar" onClick={() => setIsPreviewOpen(true)}>
              <span>View More Templates</span>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Section 2: Add or Upload Resume */}
          <div className="section-block glass-card">
            <h2 className="block-title">Add or Upload Resume</h2>
            <p className="block-subtitle">Upload your existing resume or let AI create a new one.</p>

            <div className="upload-options-grid">
              {/* Option 1: Upload */}
              <div className="upload-box dashed-border" onClick={() => setIsPreviewOpen(true)}>
                <div className="upload-icon-circle">
                  <Upload size={20} />
                </div>
                <h3 className="upload-box-title">Upload Your Resume</h3>
                <p className="upload-box-subtitle">PDF, DOC, DOCX (Max 10MB)</p>
              </div>

              <div className="or-divider-box">
                <div className="vertical-line"></div>
                <span className="or-text">OR</span>
                <div className="vertical-line"></div>
              </div>

              {/* Option 2: AI Create */}
              <div className="upload-box orange-outline" onClick={() => setIsPreviewOpen(true)}>
                <div className="sparkle-icon-circle">
                  <Sparkles size={20} />
                </div>
                <h3 className="upload-box-title">I Don't Have a Resume</h3>
                <p className="upload-box-subtitle orange-sub">Let AI create it for you</p>
              </div>
            </div>
          </div>

          {/* Section 3: Generate & Download */}
          <div className="section-block glass-card">
            <h2 className="block-title">Generate & Download</h2>
            <p className="block-subtitle">Choose format and download your resume</p>

            <div className="download-formats-grid">
              {/* PDF */}
              <div 
                className={`format-card ${selectedFormat === 'pdf' ? 'selected' : ''}`}
                onClick={() => setSelectedFormat('pdf')}
              >
                <div className="format-icon pdf-icon">PDF</div>
                <div className="format-info">
                  <div className="format-title">PDF File</div>
                  <div className="format-desc">Best for sharing</div>
                </div>
                {selectedFormat === 'pdf' && <div className="format-check"><Check size={12} /></div>}
              </div>

              {/* Word */}
              <div 
                className={`format-card ${selectedFormat === 'word' ? 'selected' : ''}`}
                onClick={() => setSelectedFormat('word')}
              >
                <div className="format-icon word-icon">W</div>
                <div className="format-info">
                  <div className="format-title">Word File</div>
                  <div className="format-desc">Best for editing</div>
                </div>
                {selectedFormat === 'word' && <div className="format-check"><Check size={12} /></div>}
              </div>

              {/* Both */}
              <div 
                className={`format-card ${selectedFormat === 'both' ? 'selected' : ''}`}
                onClick={() => setSelectedFormat('both')}
              >
                <div className="format-icon both-icon">PDF+W</div>
                <div className="format-info">
                  <div className="format-title">Both PDF & Word</div>
                  <div className="format-desc">Get both formats</div>
                </div>
                {selectedFormat === 'both' && <div className="format-check"><Check size={12} /></div>}
              </div>
            </div>

            <button className="btn-orange-gradient main-generate-btn" onClick={() => setIsPreviewOpen(true)}>
              <Sparkles size={18} />
              <span>Generate & Download Resume</span>
            </button>

            <div className="security-note">
              <Lock size={13} />
              <span>Your data is secure and confidential</span>
            </div>
          </div>

          {/* Section 4: AI Resume Assistant & Resume Tips */}
          <div className="bottom-two-cards-grid">
            {/* AI Assistant */}
            <div className="assistant-widget glass-card glow-card-purple">
              <div className="widget-header">
                <div className="purple-icon-box">
                  <Bot size={18} />
                </div>
                <h3 className="widget-title">AI Resume Assistant</h3>
                <span className="ai-badge">AI</span>
              </div>
              <p className="widget-subtitle">
                Get AI-powered suggestions to improve your resume.
              </p>

              <div className="widget-content-row">
                <div className="action-buttons-column">
                  <button className="widget-action-item" onClick={() => setIsPreviewOpen(true)}>
                    <div className="action-item-left">
                      <Edit3 size={14} className="action-orange-icon" />
                      <span>Improve Content</span>
                    </div>
                    <span className="arrow">{'>'}</span>
                  </button>

                  <button className="widget-action-item" onClick={() => setIsPreviewOpen(true)}>
                    <div className="action-item-left">
                      <Target size={14} className="action-orange-icon" />
                      <span>ATS Score Checker</span>
                    </div>
                    <span className="arrow">{'>'}</span>
                  </button>

                  <button className="widget-action-item" onClick={() => setIsPreviewOpen(true)}>
                    <div className="action-item-left">
                      <Search size={14} className="action-orange-icon" />
                      <span>Keyword Optimizer</span>
                    </div>
                    <span className="arrow">{'>'}</span>
                  </button>

                  <button className="widget-action-item" onClick={() => setIsPreviewOpen(true)}>
                    <div className="action-item-left">
                      <FileText size={14} className="action-orange-icon" />
                      <span>Grammar & Spelling</span>
                    </div>
                    <span className="arrow">{'>'}</span>
                  </button>

                  <button className="btn-orange-gradient analyze-btn" onClick={() => setIsPreviewOpen(true)}>
                    <Sparkles size={14} />
                    <span>Analyze My Resume</span>
                  </button>
                </div>

                <div className="robot-graphic-box">
                  <img src="/robot.png" alt="AI Robot Mascot" className="robot-graphic" />
                </div>
              </div>
            </div>

            {/* Resume Tips */}
            <div className="tips-widget glass-card glow-card-orange">
              <div className="widget-header">
                <div className="orange-icon-box">
                  <Lightbulb size={18} />
                </div>
                <h3 className="widget-title">Resume Tips</h3>
              </div>

              <div className="widget-content-row">
                <div className="tips-list-column">
                  <div className="tip-bullet">
                    <FileText size={14} className="tip-icon" />
                    <span>Keep your resume to 1-2 pages.</span>
                  </div>
                  <div className="tip-bullet">
                    <FileText size={14} className="tip-icon" />
                    <span>Use action verbs and quantify results.</span>
                  </div>
                  <div className="tip-bullet">
                    <FileText size={14} className="tip-icon" />
                    <span>Tailor your resume for each job.</span>
                  </div>
                  <div className="tip-bullet">
                    <FileText size={14} className="tip-icon" />
                    <span>Highlight your key achievements.</span>
                  </div>

                  <button className="view-more-tips-btn btn-outline-orange" onClick={() => setIsPreviewOpen(true)}>
                    <span>View More Tips</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                <div className="target-graphic-box">
                  <img src="/clipboard_target.jpg" alt="Resume Tips Clipboard" className="target-graphic" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: More Features */}
          <div className="more-features-block glass-card">
            <h3 className="features-block-title">More Features</h3>
            <div className="features-pills-grid">
              <div className="feature-pill-item" onClick={() => setIsPreviewOpen(true)}>
                <ShieldCheck size={18} className="orange-text" />
                <span>ATS Score Check</span>
              </div>
              <div className="feature-pill-item" onClick={() => setIsPreviewOpen(true)}>
                <Mail size={18} className="blue-text" />
                <span>Cover Letter Generator</span>
              </div>
              <div className="feature-pill-item" onClick={() => setIsPreviewOpen(true)}>
                <Target size={18} className="orange-text" />
                <span>Job Match Analyzer</span>
              </div>
              <div className="feature-pill-item" onClick={() => setIsPreviewOpen(true)}>
                <MessageSquare size={18} className="purple-text" />
                <span>Interview Questions</span>
              </div>
              <div className="feature-pill-item" onClick={() => setIsPreviewOpen(true)}>
                <History size={18} className="green-text" />
                <span>Resume History</span>
              </div>
            </div>
          </div>
        </section>

        {/* ATS Score Card Section (Placed at Bottom) */}
        <aside className="resume-sidebar">
          <div className="ats-score-banner-card glass-card glow-card-orange">
            <div className="ats-banner-header">
              <div className="ats-badge-pill">
                <Sparkles size={14} className="orange-text pulse-glow" />
                <span>AI RESUME ANALYZER • ATS VERIFIED</span>
              </div>
            </div>

            <div className="ats-banner-content">
              {/* Left Column: Title & Breakdown Chips */}
              <div className="ats-info-col">
                <h3 className="ats-banner-title">ATS Resume Health Score</h3>
                <p className="ats-banner-sub">
                  Your resume has strong keyword density, clean parsing structure, and job-targeted impact statements.
                </p>

                <div className="ats-metrics-chips">
                  <div className="ats-chip green-chip">
                    <Check size={13} />
                    <span>Keywords: 92%</span>
                  </div>
                  <div className="ats-chip cyan-chip">
                    <Target size={13} />
                    <span>Formatting: 95%</span>
                  </div>
                  <div className="ats-chip purple-chip">
                    <Bot size={13} />
                    <span>AI Content: 88%</span>
                  </div>
                </div>
              </div>

              {/* Center Column: Gauge Dial */}
              <div className="ats-gauge-wrapper">
                <div className="ats-gauge-container">
                  <svg className="ats-gauge-svg" viewBox="0 0 100 100">
                    <circle className="gauge-bg" cx="50" cy="50" r="40" />
                    <circle 
                      className="gauge-fill-animated" 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      style={{ strokeDasharray: 251, strokeDashoffset: 251 - (251 * 86) / 100 }}
                    />
                  </svg>
                  <div className="gauge-text">
                    <span className="gauge-number">86<span className="gauge-percent">%</span></span>
                    <span className="gauge-status-tag">EXCELLENT</span>
                  </div>
                </div>
              </div>

              {/* Right Column: CTA Actions */}
              <div className="ats-action-col">
                <button className="btn-orange-gradient ats-boost-btn" onClick={() => setIsPreviewOpen(true)}>
                  <Sparkles size={16} />
                  <span>Boost Score</span>
                </button>
                <button className="btn-outline-orange ats-preview-btn" onClick={() => setIsPreviewOpen(true)}>
                  <ArrowRight size={15} />
                  <span>View Breakdown</span>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* LIVE RESUME DISPLAY MODAL */}
      {isPreviewOpen && (
        <div className="resume-modal-backdrop" onClick={() => setIsPreviewOpen(false)}>
          <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top-bar">
              <div className="modal-title-box">
                <FileText className="orange-text" size={20} />
                <h2>Live Resume Preview ({templates.find(t => t.id === selectedTemplate)?.name})</h2>
              </div>

              <div className="modal-actions">
                <button className="modal-action-btn" onClick={() => window.print()}>
                  <Printer size={16} /> Print
                </button>
                <button className="btn-orange-gradient modal-download-btn">
                  <Download size={16} /> Download {selectedFormat.toUpperCase()}
                </button>
                <button className="modal-close-btn" onClick={() => setIsPreviewOpen(false)}>
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="modal-scroll-body">
              <div className={`rendered-resume-sheet ${selectedTemplate}`}>
                {/* Resume Header */}
                <div className="r-header">
                  <div className="r-header-left">
                    <img src="/avatar.jpg" alt="Monika Yadav" className="r-avatar" />
                    <div>
                      <h1 className="r-name">MONIKA YADAV</h1>
                      <div className="r-role">Full Stack Web Developer & B.Tech CSE Student</div>
                    </div>
                  </div>
                  <div className="r-contact">
                    <div>📧 monika.yadav@example.com</div>
                    <div>📱 +91 9876543210</div>
                    <div>📍 New Delhi, India</div>
                    <div>🌐 github.com/monikayadav</div>
                  </div>
                </div>

                <div className="r-accent-bar"></div>

                {/* Resume Body Grid */}
                <div className="r-body-grid">
                  <div className="r-main-col">
                    <div className="r-section">
                      <h3 className="r-sec-title">PROFESSIONAL SUMMARY</h3>
                      <p className="r-text">
                        Enthusiastic Computer Science & Engineering student with strong hands-on expertise in building high-performance, modern React applications, clean CSS glassmorphism UIs, and full-stack solutions. Proven ability to translate user specifications into responsive, interactive digital platforms.
                      </p>
                    </div>

                    <div className="r-section">
                      <h3 className="r-sec-title">PROJECTS</h3>
                      
                      <div className="r-item">
                        <div className="r-item-head">
                          <strong>CareerCraft Dashboard & Resume Platform</strong>
                          <span className="r-date">2026</span>
                        </div>
                        <div className="r-item-sub">Tech: React, JavaScript, Vite, Modern CSS, React Router</div>
                        <ul className="r-bullets">
                          <li>Developed a full-featured career portal dashboard with dark mode glassmorphism UI matching precise design specs.</li>
                          <li>Integrated interactive template selectors, ATS score widgets, and dynamic navigation.</li>
                        </ul>
                      </div>

                      <div className="r-item">
                        <div className="r-item-head">
                          <strong>AI Assisted Portfolio Builder</strong>
                          <span className="r-date">2025</span>
                        </div>
                        <div className="r-item-sub">Tech: Node.js, Express, React, REST API</div>
                        <ul className="r-bullets">
                          <li>Engineered interactive developer showcase templates with live previews and project cards.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="r-section">
                      <h3 className="r-sec-title">EDUCATION</h3>
                      <div className="r-item">
                        <div className="r-item-head">
                          <strong>B.Tech in Computer Science & Engineering</strong>
                          <span className="r-date">2022 - 2026</span>
                        </div>
                        <div className="r-item-sub">APJ Abdul Kalam Technological University • CGPA: 8.9 / 10</div>
                      </div>
                    </div>
                  </div>

                  <div className="r-side-col">
                    <div className="r-section">
                      <h3 className="r-sec-title">TECHNICAL SKILLS</h3>
                      <div className="r-skills-list">
                        <span className="r-skill-chip">React.js</span>
                        <span className="r-skill-chip">JavaScript (ES6+)</span>
                        <span className="r-skill-chip">CSS3 / Glassmorphism</span>
                        <span className="r-skill-chip">HTML5 / Web Standards</span>
                        <span className="r-skill-chip">Node.js / Express</span>
                        <span className="r-skill-chip">Git & GitHub</span>
                        <span className="r-skill-chip">REST APIs</span>
                      </div>
                    </div>

                    <div className="r-section">
                      <h3 className="r-sec-title">ACHIEVEMENTS</h3>
                      <ul className="r-bullets">
                        <li>🏆 Winner - TechNavi Hackathon 2025</li>
                        <li>⭐ 90% Profile Match Rate on CareerCraft</li>
                        <li>📜 Certified Web Developer Specialist</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
