import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  Globe, LayoutGrid, FileText, Briefcase, Bookmark, MessageSquare, Settings, 
  Crown, Upload, Sparkles, Check, ChevronLeft, ChevronRight, ExternalLink, 
  Copy, Edit2, QrCode, Smartphone, Compass, Shield, BarChart2, Share2, 
  Bot, Lightbulb, UserCheck, Trophy, PhoneCall, ArrowRight, Eye 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './PortfolioPage.css';

export default function Portfolio() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('simple');
  const [selectedTemplate, setSelectedTemplate] = useState('clean-minimal');
  const [copied, setCopied] = useState(false);

  const portfolioTypes = [
    {
      id: 'simple',
      title: 'Simple',
      icon: '🎨',
      color: 'green-icon',
      desc: 'Clean and minimal designs',
      sub: 'Perfect for a professional look'
    },
    {
      id: 'modern',
      title: 'Modern',
      icon: '💎',
      color: 'blue-icon',
      desc: 'Creative and elegant designs',
      sub: 'Stand out with style'
    },
    {
      id: 'premium',
      title: 'Premium',
      icon: '👑',
      color: 'purple-icon',
      desc: 'Advanced and luxurious designs',
      sub: 'For a powerful impression'
    }
  ];

  const portfolioTemplates = [
    { id: 'clean-minimal', name: 'Clean Minimal', sub: 'Perfect for professionals', theme: 'theme-orange' },
    { id: 'simple-white', name: 'Simple White', sub: 'Clean and Elegant', theme: 'theme-white' },
    { id: 'basic-dark', name: 'Basic Dark', sub: 'Dark & Professional', theme: 'theme-dark' },
    { id: 'minimal-resume', name: 'Minimal Resume', sub: 'One Page Portfolio', theme: 'theme-grey' },
    { id: 'simple-card', name: 'Simple Card', sub: 'Modern Card Layout', theme: 'theme-card' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText('https://careercraft.com/monika-yadav');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="portfolio-portal-page">
      <Header />

      <div className="portfolio-page-layout">
        {/* Main Content Area */}
        <section className="portfolio-main-content">
          {/* Header Title Banner */}
          <div className="portfolio-title-banner glass-card">
            <div className="banner-title-row">
              <Sparkles className="orange-text" size={20} />
              <h1 className="portfolio-heading">Portfolio Builder</h1>
              <Sparkles className="orange-text" size={20} />
            </div>
            <p className="portfolio-subheading">
              Build your professional portfolio in just a few steps
            </p>

            {/* 5 Steps Progress Tracker */}
            <div className="portfolio-steps-tracker">
              <div className="p-step-item active">
                <div className="p-step-badge orange-badge">
                  <FileText size={14} />
                </div>
                <span className="p-step-label orange-text">Upload Resume</span>
              </div>
              <div className="p-step-line dotted"></div>

              <div className="p-step-item">
                <div className="p-step-badge dark-badge">
                  <Briefcase size={14} />
                </div>
                <span className="p-step-label">Choose Type</span>
              </div>
              <div className="p-step-line dotted"></div>

              <div className="p-step-item">
                <div className="p-step-badge dark-badge">
                  <LayoutGrid size={14} />
                </div>
                <span className="p-step-label">Select Template</span>
              </div>
              <div className="p-step-line dotted"></div>

              <div className="p-step-item">
                <div className="p-step-badge dark-badge">
                  <Edit2 size={14} />
                </div>
                <span className="p-step-label">Customize</span>
              </div>
              <div className="p-step-line dotted"></div>

              <div className="p-step-item">
                <div className="p-step-badge dark-badge">
                  <Globe size={14} />
                </div>
                <span className="p-step-label">Build & Publish</span>
              </div>
            </div>
          </div>

          {/* Section 1: Upload Your Resume */}
          <div className="section-block glass-card">
            <h2 className="block-title">Upload Your Resume</h2>
            <p className="block-subtitle">We'll use your resume to fill your portfolio automatically.</p>

            <div className="upload-options-grid">
              {/* Drag & Drop Box */}
              <div className="upload-box dashed-border">
                <div className="upload-icon-circle">
                  <Upload size={20} />
                </div>
                <h3 className="upload-box-title">Drag & drop your resume here</h3>
                <span className="or-sub">or</span>
                <button className="btn-outline-orange browse-files-btn">Browse Files</button>
                <p className="upload-box-subtitle">PDF, DOCX (Max 10MB)</p>
              </div>

              <div className="or-divider">OR</div>

              {/* AI Create Option */}
              <div className="upload-box dark-card">
                <div className="mascot-mini-avatar">🤖</div>
                <h3 className="upload-box-title">I don't have a resume</h3>
                <p className="upload-box-subtitle">Our AI will help you create one</p>
                <button className="btn-purple-gradient create-ai-btn">
                  <Sparkles size={14} />
                  <span>Create with AI</span>
                </button>
              </div>
            </div>

            {/* Uploaded File Bar */}
            <div className="uploaded-file-bar">
              <div className="file-bar-left">
                <div className="pdf-red-icon">PDF</div>
                <div>
                  <div className="file-name">Monika_Yadav_Resume.pdf</div>
                  <div className="file-meta">Uploaded on 24 May 2025 • 2.4 MB</div>
                </div>
              </div>
              <div className="uploaded-check-badge">
                <Check size={14} />
              </div>
            </div>
          </div>

          {/* Section 2: Choose Portfolio Type */}
          <div className="section-block glass-card">
            <h2 className="block-title">Choose Portfolio Type</h2>
            <p className="block-subtitle">Select the style that best represents you</p>

            <div className="portfolio-types-grid">
              {portfolioTypes.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <div 
                    key={type.id} 
                    className={`type-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <div className={`type-icon-box ${type.color}`}>
                      <span>{type.icon}</span>
                    </div>
                    <div className="type-info">
                      <div className="type-title">{type.title}</div>
                      <div className="type-desc">{type.desc}</div>
                      <div className="type-sub">{type.sub}</div>
                    </div>
                    <div className={`radio-circle ${isSelected ? 'checked' : ''}`}>
                      {isSelected && <Check size={12} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Choose a Template */}
          <div className="section-block glass-card">
            <div className="section-top-row">
              <div>
                <h2 className="block-title">Choose a Template</h2>
                <p className="block-subtitle">Pick a template you love. You can customize it later.</p>
              </div>
              <button className="btn-outline-orange preview-all-btn">
                <span>Preview All Templates</span>
                <ExternalLink size={14} />
              </button>
            </div>

            {/* 5 Templates Carousel Grid */}
            <div className="templates-carousel-wrapper">
              <button className="carousel-arrow left" aria-label="Previous">
                <ChevronLeft size={18} />
              </button>

              <div className="templates-carousel-grid">
                {portfolioTemplates.map((tmpl) => {
                  const isSelected = selectedTemplate === tmpl.id;
                  return (
                    <div 
                      key={tmpl.id} 
                      className={`tmpl-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedTemplate(tmpl.id)}
                    >
                      <div className="tmpl-preview-box">
                        {isSelected && (
                          <div className="selected-check-badge">
                            <Check size={13} />
                          </div>
                        )}
                        <div className={`mini-portfolio-doc ${tmpl.theme}`}>
                          <div className="p-mini-hero">
                            <div className="p-mini-avatar"></div>
                            <div className="p-mini-title">Monika Yadav</div>
                          </div>
                          <div className="p-mini-body">
                            <div className="p-mini-block"></div>
                            <div className="p-mini-block"></div>
                          </div>
                        </div>
                      </div>

                      <div className="tmpl-card-body">
                        <div className={`tmpl-name ${isSelected ? 'selected-text' : ''}`}>{tmpl.name}</div>
                        <div className="tmpl-sub">{tmpl.sub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="carousel-arrow right" aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Section 4: 6 Feature Pills Bar */}
          <div className="features-pills-bar glass-card">
            <div className="pill-feature-item">
              <Smartphone size={18} className="orange-text" />
              <div>
                <div className="pill-title">Responsive</div>
                <div className="pill-sub">Mobile Friendly</div>
              </div>
            </div>

            <div className="pill-feature-item">
              <Compass size={18} className="orange-text" />
              <div>
                <div className="pill-title">SEO Optimized</div>
                <div className="pill-sub">Rank Higher</div>
              </div>
            </div>

            <div className="pill-feature-item">
              <Shield size={18} className="orange-text" />
              <div>
                <div className="pill-title">Fast & Secure</div>
                <div className="pill-sub">Blazing Fast</div>
              </div>
            </div>

            <div className="pill-feature-item">
              <Globe size={18} className="orange-text" />
              <div>
                <div className="pill-title">Custom Domain</div>
                <div className="pill-sub">Use Your Domain</div>
              </div>
            </div>

            <div className="pill-feature-item">
              <BarChart2 size={18} className="orange-text" />
              <div>
                <div className="pill-title">Analytics</div>
                <div className="pill-sub">Track Visitors</div>
              </div>
            </div>

            <div className="pill-feature-item">
              <Share2 size={18} className="orange-text" />
              <div>
                <div className="pill-title">Share & Export</div>
                <div className="pill-sub">Share Anywhere</div>
              </div>
            </div>
          </div>

          {/* Section 5: Build & Publish Your Portfolio */}
          <div className="publish-section-card glass-card glow-card-orange">
            <h2 className="block-title">Build & Publish Your Portfolio</h2>
            <p className="block-subtitle">We'll build your portfolio and generate a live link for you.</p>

            <div className="publish-content-grid">
              {/* Left Column: Progress Checklist */}
              <div className="publish-checklist-col">
                <div className="publish-check-item">
                  <div className="orange-check-icon"><Check size={12} /></div>
                  <span className="check-label">Resume data extraction</span>
                  <span className="completed-text">Completed</span>
                </div>

                <div className="publish-check-item">
                  <div className="orange-check-icon"><Check size={12} /></div>
                  <span className="check-label">Template customization</span>
                  <span className="completed-text">Completed</span>
                </div>

                <div className="publish-check-item">
                  <div className="orange-check-icon"><Check size={12} /></div>
                  <span className="check-label">Content optimization</span>
                  <span className="completed-text">Completed</span>
                </div>

                <div className="publish-check-item">
                  <div className="orange-check-icon"><Check size={12} /></div>
                  <span className="check-label">Building your portfolio</span>
                  <span className="completed-text">Completed</span>
                </div>
              </div>

              {/* Middle Column: Rocket Graphic & Status */}
              <div className="publish-rocket-col">
                <img src="/rocket.jpg" alt="Rocket Launch" className="rocket-img" />
                <h3 className="rocket-title">Your portfolio is ready!</h3>
                <p className="rocket-subtitle">
                  Your portfolio has been successfully created and is live now.
                </p>
              </div>

              {/* Right Column: Portfolio Link & Actions */}
              <div className="publish-actions-col">
                <div className="link-box-label">Your Portfolio Link</div>
                <div className="portfolio-link-bar">
                  <span className="link-text">https://careercraft.com/monika-yadav</span>
                  <button className="copy-btn" onClick={handleCopy} title="Copy Link">
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="publish-btns-row">
                  <button className="btn-orange-gradient view-live-btn">
                    <span>View Live Portfolio</span>
                    <ExternalLink size={14} />
                  </button>
                  <button className="btn-outline-orange share-btn">
                    Share Portfolio
                  </button>
                </div>

                <div className="more-options-row">
                  <span className="more-opt-label">More Options</span>
                  <div className="more-opt-btns">
                    <button className="opt-chip"><Edit2 size={12} /> Edit Portfolio</button>
                    <button className="opt-chip"><QrCode size={12} /> Download QR</button>
                    <button className="opt-chip"><Globe size={12} /> Custom Domain</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Bottom Grid (2 Cards) */}
          <div className="bottom-two-cards-grid">
            {/* AI Portfolio Assistant */}
            <div className="assistant-widget glass-card glow-card-purple">
              <div className="widget-header">
                <div className="orange-icon-box">
                  <Bot size={18} />
                </div>
                <h3 className="widget-title">AI Portfolio Assistant</h3>
                <Sparkles size={16} className="orange-text" />
              </div>
              <p className="widget-subtitle">
                Get AI suggestions to improve your portfolio
              </p>

              <div className="widget-content-row">
                <div className="action-buttons-column">
                  <button className="widget-action-item">
                    <div className="action-item-left">
                      <FileText size={14} className="action-orange-icon" />
                      <div>
                        <div className="action-main-txt">Improve Content</div>
                        <div className="action-sub-txt">Get better suggestions</div>
                      </div>
                    </div>
                  </button>

                  <button className="widget-action-item">
                    <div className="action-item-left">
                      <Compass size={14} className="action-orange-icon" />
                      <div>
                        <div className="action-main-txt">SEO Analyzer</div>
                        <div className="action-sub-txt">Optimize for search engines</div>
                      </div>
                    </div>
                  </button>

                  <button className="widget-action-item">
                    <div className="action-item-left">
                      <Globe size={14} className="action-orange-icon" />
                      <div>
                        <div className="action-main-txt">Design Suggestions</div>
                        <div className="action-sub-txt">Make your portfolio better</div>
                      </div>
                    </div>
                  </button>

                  <button className="btn-orange-gradient optimize-btn">
                    <span>Optimize My Portfolio</span>
                  </button>
                </div>

                <div className="robot-graphic-box">
                  <img src="/robot.png" alt="AI Robot Mascot" className="robot-graphic" />
                </div>
              </div>
            </div>

            {/* Portfolio Tips */}
            <div className="tips-widget glass-card glow-card-orange">
              <div className="widget-header">
                <div className="orange-icon-box">
                  <Lightbulb size={18} />
                </div>
                <h3 className="widget-title">Portfolio Tips</h3>
              </div>

              <div className="widget-content-row">
                <div className="tips-list-column">
                  <div className="tip-bullet-item">
                    <UserCheck size={16} className="tip-orange-icon" />
                    <div>
                      <div className="tip-item-title">Add a professional bio and headline</div>
                      <div className="tip-item-desc">Make a strong first impression</div>
                    </div>
                  </div>

                  <div className="tip-bullet-item">
                    <Shield size={16} className="tip-orange-icon" />
                    <div>
                      <div className="tip-item-title">Showcase your best projects</div>
                      <div className="tip-item-desc">Quality over quantity</div>
                    </div>
                  </div>

                  <div className="tip-bullet-item">
                    <Trophy size={16} className="tip-orange-icon" />
                    <div>
                      <div className="tip-item-title">Add testimonials or achievements</div>
                      <div className="tip-item-desc">Build trust and credibility</div>
                    </div>
                  </div>

                  <div className="tip-bullet-item">
                    <PhoneCall size={16} className="tip-orange-icon" />
                    <div>
                      <div className="tip-item-title">Keep your contact info visible</div>
                      <div className="tip-item-desc">Make it easy to reach you</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Widgets Section */}
        <aside className="portfolio-sidebar">
          <div className="portfolio-bottom-widgets-grid">
            {/* Upgrade to Premium Card */}
            <div className="upgrade-premium-card glass-card glow-card-orange">
              <div className="premium-header">
                <Crown size={20} className="orange-text" />
                <h4 className="premium-title">Upgrade to Premium</h4>
              </div>
              <p className="premium-sub">
                Unlock premium templates, custom domain and more features.
              </p>
              <button className="btn-orange-gradient upgrade-btn">
                Upgrade Now
              </button>
            </div>

            {/* Your Portfolio Views Widget */}
            <div className="views-widget-card glass-card">
              <h4 className="card-widget-title">Your Portfolio Views</h4>
              <div className="views-num-row">
                <span className="views-num">1,248</span>
                <span className="green-badge">↑ 23%</span>
                <span className="rate-sub">This Month</span>
              </div>

              {/* Glowing Line Graph */}
              <div className="views-graph-box">
                <svg viewBox="0 0 200 60" className="views-graph-svg">
                  <path 
                    d="M 10,50 Q 30,40 60,45 T 110,30 T 160,20 T 190,8" 
                    fill="none" 
                    stroke="#ff6b00" 
                    strokeWidth="3" 
                  />
                  <circle cx="190" cy="8" r="4" fill="#ff6b00" className="graph-dot-glow" />
                </svg>
              </div>
            </div>

            {/* Storage Used Widget */}
            <div className="storage-widget-card glass-card">
              <h4 className="card-widget-title">Storage Used</h4>
              <div className="storage-num-row">
                <span className="storage-txt">2.4 GB / 10 GB</span>
              </div>
              <div className="storage-track">
                <div className="storage-fill" style={{ width: '24%' }}></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
