import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  Briefcase, GraduationCap, LayoutGrid, FileText, Globe, 
  Bookmark, Settings, Crown, TrendingUp, Sparkles, ArrowRight, Calendar, 
  MapPin, Clock, ShieldCheck, Rocket, CheckCircle2, ChevronRight,
  Search, Bell, User, Filter, Check, X, Plus, ChevronDown, Pause, Play,
  Sliders, PieChart, Zap, Award, ArrowLeft, ExternalLink, Edit2, Info,
  Home, RefreshCw, CheckCircle, AlertCircle, FileCheck, Layers, Menu, Save
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ApplyPage.css';

export default function Apply() {
  const navigate = useNavigate();

  // Active Tab:
  // 'jobs' | 'job_recommended' | 'job_saved' | 'job_settings' | 'job_progress' | 
  // 'internships' | 'internship_recommended' | 'internship_saved' | 'internship_settings' | 'internship_progress' |
  // 'tracker' | 'insights'
  const [activeTab, setActiveTab] = useState('jobs');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Application Mode
  const [appMode, setAppMode] = useState('manual');
  const [autoApplyOn, setAutoApplyOn] = useState(true);

  // Tracker Filter Mode: 'all' | 'jobs' | 'internships'
  const [trackerMode, setTrackerMode] = useState('all');

  // Insights Filter Mode: 'jobs' | 'internships'
  const [insightsMode, setInsightsMode] = useState('jobs');

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [workModeFilter, setWorkModeFilter] = useState('All');
  const [durationFilter, setDurationFilter] = useState('All');
  const [stipendFilter, setStipendFilter] = useState('All');

  // Settings State
  const [minMatch, setMinMatch] = useState(80);
  const [jobRoles, setJobRoles] = useState(['Full Stack Developer', 'Frontend Developer', 'React Developer', 'Java Developer', 'Software Engineer']);
  const [internshipRoles, setInternshipRoles] = useState([
    'Software Developer Intern', 'Web Development Intern', 'Full Stack Intern',
    'Frontend Developer Intern', 'Backend Developer Intern', 'Java Developer Intern', 'Python Developer Intern'
  ]);
  const [locations, setLocations] = useState(['Remote', 'Hyderabad', 'Bangalore', 'Chennai', 'Pune']);
  const [jobTypes, setJobTypes] = useState({ fullTime: true, internship: true, partTime: false });
  const [workModes, setWorkModes] = useState({ remote: true, hybrid: true, onsite: true });

  // Modals State
  const [reviewModal, setReviewModal] = useState(false);
  const [submittedModal, setSubmittedModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [reviewStep, setReviewStep] = useState(1);
  const [detailsTab, setDetailsTab] = useState('overview');

  // Saved Items
  const [savedJobs, setSavedJobs] = useState([1, 2]);
  const [savedInternships, setSavedInternships] = useState([1, 2]);

  // Master Jobs Data
  const jobsList = [
    {
      id: 1,
      category: 'job',
      company: 'Tata Consultancy Services',
      shortCompany: 'TCS',
      logoText: 'tcs',
      logoBg: '#e11d48',
      role: 'Full Stack Developer',
      location: 'Hyderabad, India',
      type: 'Full Time',
      exp: '0-2 years',
      stipend: '7-12 LPA',
      match: 92,
      tags: ['Java', 'React', 'Node.js', 'SQL', 'Git'],
      appliedDate: '20 Sep 2026, 10:42 AM',
      method: 'Auto Apply',
      status: 'Applied',
      statusClass: 'status-applied'
    },
    {
      id: 2,
      category: 'job',
      company: 'Infosys',
      shortCompany: 'Infosys',
      logoText: 'Infosys',
      logoBg: '#0284c7',
      role: 'React Developer',
      location: 'Mysore, India',
      type: 'On-site',
      exp: '1-3 years',
      stipend: '6-9 LPA',
      match: 88,
      tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Git'],
      appliedDate: '18 Sep 2026',
      method: 'Auto Apply',
      status: 'Under Review',
      statusClass: 'status-review'
    },
    {
      id: 3,
      category: 'job',
      company: 'Accenture',
      shortCompany: 'Accenture',
      logoText: 'Accenture',
      logoBg: '#7c3aed',
      role: 'Frontend Developer',
      location: 'Bangalore, India',
      type: 'Full Time',
      exp: '0-2 years',
      stipend: '6-10 LPA',
      match: 85,
      tags: ['JavaScript', 'React', 'HTML', 'CSS'],
      appliedDate: '15 Sep 2026',
      method: 'Auto Apply',
      status: 'Interview',
      statusClass: 'status-interview'
    }
  ];

  // Master Internships Data
  const internshipsList = [
    {
      id: 101,
      category: 'internship',
      company: 'Google',
      shortCompany: 'Google',
      logoText: 'G',
      logoBg: '#4285F4',
      role: 'Software Engineering Intern',
      location: 'Bangalore, India',
      mode: 'Hybrid',
      duration: '3-6 Months',
      stipend: '₹25,000/month',
      match: 92,
      tags: ['Java', 'Python', 'React', 'SQL', 'Git'],
      appliedDate: '20 Sep 2026, 10:42 AM',
      method: 'AI Auto Apply',
      status: 'Applied',
      statusClass: 'status-applied',
      eligibility: 'B.Tech CSE (2026 - 2028)',
      openings: 5,
      deadline: '30 Sep 2026'
    },
    {
      id: 102,
      category: 'internship',
      company: 'Microsoft',
      shortCompany: 'Microsoft',
      logoText: 'MS',
      logoBg: '#00A4EF',
      role: 'Frontend Developer Intern',
      location: 'Hyderabad, India',
      mode: 'Remote',
      duration: '6 Months',
      stipend: '₹30,000/month',
      match: 89,
      tags: ['React', 'JavaScript', 'HTML', 'CSS'],
      appliedDate: '18 Sep 2026',
      method: 'Manual',
      status: 'Under Review',
      statusClass: 'status-review',
      eligibility: 'B.Tech / B.E. (2026 - 2028)',
      openings: 3,
      deadline: '28 Sep 2026'
    },
    {
      id: 103,
      category: 'internship',
      company: 'TCS',
      shortCompany: 'TCS',
      logoText: 'tcs',
      logoBg: '#e11d48',
      role: 'Full Stack Development Intern',
      location: 'Remote',
      mode: 'Remote',
      duration: '3 Months',
      stipend: '₹15,000/month',
      match: 84,
      tags: ['React', 'Node.js', 'SQL', 'Git'],
      appliedDate: '15 Sep 2026',
      method: 'AI Auto Apply',
      status: 'Interview',
      statusClass: 'status-interview',
      eligibility: 'B.Tech / B.Sc (2026 - 2028)',
      openings: 10,
      deadline: '25 Sep 2026'
    }
  ];

  // Feed Activity
  const autoActivities = [
    { company: 'Google', role: 'Software Engineering Intern', match: 92, status: 'Applied successfully', time: '2 mins ago', type: 'success' },
    { company: 'Microsoft', role: 'Frontend Developer Intern', match: 89, status: 'Applied successfully', time: '5 mins ago', type: 'success' },
    { company: 'TCS', role: 'Full Stack Developer', match: 85, status: 'Processing...', time: '8 mins ago', type: 'pending' },
    { company: 'Wipro', role: 'Java Developer', match: 82, status: 'Skipped - Below min match', time: '12 mins ago', type: 'skipped' }
  ];

  const toggleSaveJob = (id) => {
    if (savedJobs.includes(id)) {
      setSavedJobs(savedJobs.filter(item => item !== id));
    } else {
      setSavedJobs([...savedJobs, id]);
    }
  };

  const toggleSaveInternship = (id) => {
    if (savedInternships.includes(id)) {
      setSavedInternships(savedInternships.filter(item => item !== id));
    } else {
      setSavedInternships([...savedInternships, id]);
    }
  };

  const handleApplyClick = (item) => {
    setActiveItem(item);
    setReviewStep(1);
    setReviewModal(true);
  };

  const handleConfirmSubmit = () => {
    setReviewModal(false);
    setSubmittedModal(true);
  };

  const handleOpenDetails = (item) => {
    setActiveItem(item);
    setDetailsTab('overview');
    setDetailsModal(true);
  };

  const renderNavLinks = () => (
    <div className="cb-nav-section">
      {/* Jobs Group */}
      <div className="cb-nav-group">
        <button 
          className={`cb-nav-item ${['jobs', 'job_recommended', 'job_saved', 'job_settings', 'job_progress'].includes(activeTab) ? 'active' : ''}`}
          onClick={() => { setActiveTab('jobs'); setMobileMenuOpen(false); }}
        >
          <Briefcase size={18} /><span>Jobs</span>
        </button>

        <div className="cb-nav-sub-list">
          <button 
            className={`cb-sub-item ${activeTab === 'job_recommended' ? 'active' : ''}`}
            onClick={() => { setActiveTab('job_recommended'); setMobileMenuOpen(false); }}
          >
            <span className="cb-dot">•</span> Recommended
          </button>
          <button 
            className={`cb-sub-item ${activeTab === 'jobs' ? 'active' : ''}`}
            onClick={() => { setActiveTab('jobs'); setMobileMenuOpen(false); }}
          >
            <span className="cb-dot">•</span> All Jobs
          </button>
          <button 
            className={`cb-sub-item ${activeTab === 'job_saved' ? 'active' : ''}`}
            onClick={() => { setActiveTab('job_saved'); setMobileMenuOpen(false); }}
          >
            <span className="cb-dot">•</span> Saved Jobs
          </button>
          <button 
            className={`cb-sub-item ${['job_settings', 'job_progress'].includes(activeTab) ? 'active' : ''}`}
            onClick={() => { setActiveTab('job_settings'); setMobileMenuOpen(false); }}
          >
            <span className="cb-dot">•</span> Auto Apply
          </button>
        </div>
      </div>

      {/* Internships Group */}
      <div className="cb-nav-group">
        <button 
          className={`cb-nav-item ${['internships', 'internship_recommended', 'internship_saved', 'internship_settings', 'internship_progress'].includes(activeTab) ? 'active' : ''}`}
          onClick={() => { setActiveTab('internships'); setMobileMenuOpen(false); }}
        >
          <GraduationCap size={18} /><span>Internships</span>
        </button>

        <div className="cb-nav-sub-list">
          <button 
            className={`cb-sub-item ${activeTab === 'internship_recommended' ? 'active' : ''}`}
            onClick={() => { setActiveTab('internship_recommended'); setMobileMenuOpen(false); }}
          >
            <span className="cb-dot">•</span> Recommended
          </button>
          <button 
            className={`cb-sub-item ${activeTab === 'internships' ? 'active' : ''}`}
            onClick={() => { setActiveTab('internships'); setMobileMenuOpen(false); }}
          >
            <span className="cb-dot">•</span> All Internships
          </button>
          <button 
            className={`cb-sub-item ${activeTab === 'internship_saved' ? 'active' : ''}`}
            onClick={() => { setActiveTab('internship_saved'); setMobileMenuOpen(false); }}
          >
            <span className="cb-dot">•</span> Saved Internships
          </button>
          <button 
            className={`cb-sub-item ${['internship_settings', 'internship_progress'].includes(activeTab) ? 'active' : ''}`}
            onClick={() => { setActiveTab('internship_settings'); setMobileMenuOpen(false); }}
          >
            <span className="cb-dot">•</span> Auto Apply
          </button>
        </div>
      </div>

      <button 
        className={`cb-nav-item ${activeTab === 'tracker' ? 'active' : ''}`}
        onClick={() => { setActiveTab('tracker'); setMobileMenuOpen(false); }}
      >
        <FileCheck size={18} /><span>Applications</span>
      </button>

      <button 
        className={`cb-nav-item ${activeTab === 'insights' ? 'active' : ''}`}
        onClick={() => { setActiveTab('insights'); setMobileMenuOpen(false); }}
      >
        <PieChart size={18} /><span>Matching Insights</span>
      </button>

      <button className={`cb-nav-item`} onClick={() => { setMobileMenuOpen(false); navigate('/profile'); }}>
        <User size={18} /><span>Profile</span>
      </button>
    </div>
  );

  return (
    <div className="cb-apply-wrapper">
      <Header />

      <div className="cb-apply-container">
        {/* Mobile Menu Bar */}
        <div className="cb-mobile-menu-bar">
          <button 
            className={`cb-mobile-toggle-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="cb-toggle-left">
              <Menu size={18} />
              <span>
                {activeTab === 'jobs' ? 'Jobs' :
                 activeTab === 'job_recommended' ? 'Recommended Jobs' :
                 activeTab === 'job_saved' ? 'Saved Jobs' :
                 activeTab === 'internships' ? 'Find Your Next Internship' :
                 activeTab === 'internship_recommended' ? 'Recommended Internships' :
                 activeTab === 'internship_saved' ? 'Saved Internships' :
                 activeTab === 'tracker' ? 'Applications Tracker' :
                 activeTab === 'insights' ? 'Matching Insights' : 'Apply Menu'}
              </span>
            </div>
            <ChevronDown size={16} className={`cb-chevron ${mobileMenuOpen ? 'open' : ''}`} />
          </button>

          {mobileMenuOpen && (
            <div className="cb-mobile-menu-drawer">
              {renderNavLinks()}
            </div>
          )}
        </div>

        {/* 2-Column Layout */}
        <div className="cb-layout-grid">
          <aside className="cb-sidebar cb-desktop-sidebar">
            {renderNavLinks()}
            <div className="cb-sidebar-promo-card">
              <div className="cb-promo-icon-bg"><Sparkles size={18} color="#ea580c" /></div>
              <p className="cb-promo-text">Your next opportunity is just a click away!</p>
            </div>
          </aside>

          <main className="cb-main-panel">
            {/* VIEW: ALL JOBS */}
            {activeTab === 'jobs' && (
              <div className="cb-view-container">
                <div className="cb-page-header-row">
                  <div>
                    <h1 className="cb-view-title">Jobs</h1>
                    <p className="cb-view-subtitle">Find the best opportunities based on your resume and preferences.</p>
                  </div>
                </div>

                <div className="cb-job-cards-list">
                  {jobsList.map((job) => (
                    <div key={job.id} className="cb-job-card">
                      <div className="cb-job-card-header">
                        <div className="cb-company-logo-box" style={{ backgroundColor: job.logoBg }}><span>{job.logoText}</span></div>
                        <div className="cb-job-title-info">
                          <h3 className="cb-job-title">{job.company}</h3>
                          <h4 className="cb-role-name">{job.role}</h4>
                          <div className="cb-job-meta-row"><span>📍 {job.location}</span><span>• {job.type}</span></div>
                        </div>
                        <div className="cb-match-badge green-mint"><Sparkles size={13} /><span>{job.match}% Match</span></div>
                      </div>
                      <div className="cb-job-tags-row">
                        {job.tags.map((t, i) => <span key={i} className="cb-tag-pill">{t}</span>)}
                      </div>
                      <div className="cb-job-card-footer">
                        <button className={`cb-bookmark-icon-btn ${savedJobs.includes(job.id) ? 'saved' : ''}`} onClick={() => toggleSaveJob(job.id)}>
                          <Bookmark size={16} fill={savedJobs.includes(job.id) ? "#ff6b00" : "none"} /><span>Save</span>
                        </button>
                        <button className="cb-btn-orange-solid" onClick={() => handleApplyClick(job)}>Apply Now</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW: RECOMMENDED JOBS */}
            {activeTab === 'job_recommended' && (
              <div className="cb-view-container">
                <div className="cb-page-header-row">
                  <div>
                    <h1 className="cb-view-title">Recommended Jobs</h1>
                    <p className="cb-view-subtitle">AI has matched these jobs based on your skills and high match percentage.</p>
                  </div>
                </div>

                <div className="cb-job-cards-list">
                  {jobsList.filter(j => j.match >= 85).map((job) => (
                    <div key={job.id} className="cb-job-card">
                      <div className="cb-job-card-header">
                        <div className="cb-company-logo-box" style={{ backgroundColor: job.logoBg }}><span>{job.logoText}</span></div>
                        <div className="cb-job-title-info">
                          <h3 className="cb-job-title">{job.company}</h3>
                          <h4 className="cb-role-name">{job.role}</h4>
                          <div className="cb-job-meta-row"><span>📍 {job.location}</span><span>• {job.type}</span></div>
                        </div>
                        <div className="cb-match-badge green-mint"><Sparkles size={13} /><span>{job.match}% Match</span></div>
                      </div>
                      <div className="cb-job-tags-row">
                        {job.tags.map((t, i) => <span key={i} className="cb-tag-pill">{t}</span>)}
                      </div>
                      <div className="cb-job-card-footer">
                        <button className={`cb-bookmark-icon-btn ${savedJobs.includes(job.id) ? 'saved' : ''}`} onClick={() => toggleSaveJob(job.id)}>
                          <Bookmark size={16} fill={savedJobs.includes(job.id) ? "#ff6b00" : "none"} /><span>Save</span>
                        </button>
                        <button className="cb-btn-orange-solid" onClick={() => handleApplyClick(job)}>Apply Now</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW: SAVED JOBS */}
            {activeTab === 'job_saved' && (
              <div className="cb-view-container">
                <div className="cb-page-header-row">
                  <div>
                    <h1 className="cb-view-title">Saved Jobs</h1>
                    <p className="cb-view-subtitle">Jobs you have bookmarked for quick access and application.</p>
                  </div>
                </div>

                {jobsList.filter(j => savedJobs.includes(j.id)).length > 0 ? (
                  <div className="cb-job-cards-list">
                    {jobsList.filter(j => savedJobs.includes(j.id)).map((job) => (
                      <div key={job.id} className="cb-job-card">
                        <div className="cb-job-card-header">
                          <div className="cb-company-logo-box" style={{ backgroundColor: job.logoBg }}><span>{job.logoText}</span></div>
                          <div className="cb-job-title-info">
                            <h3 className="cb-job-title">{job.company}</h3>
                            <h4 className="cb-role-name">{job.role}</h4>
                            <div className="cb-job-meta-row"><span>📍 {job.location}</span><span>• {job.type}</span></div>
                          </div>
                          <div className="cb-match-badge green-mint"><Sparkles size={13} /><span>{job.match}% Match</span></div>
                        </div>
                        <div className="cb-job-tags-row">
                          {job.tags.map((t, i) => <span key={i} className="cb-tag-pill">{t}</span>)}
                        </div>
                        <div className="cb-job-card-footer">
                          <button className="cb-bookmark-icon-btn saved" onClick={() => toggleSaveJob(job.id)}>
                            <Bookmark size={16} fill="#ff6b00" /><span>Saved</span>
                          </button>
                          <button className="cb-btn-orange-solid" onClick={() => handleApplyClick(job)}>Apply Now</button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="cb-card-box center-text padding-40">
                    <Bookmark size={36} color="#ff6b00" className="mb-12" />
                    <h3 className="cb-card-heading">No Saved Jobs Yet</h3>
                    <p className="text-gray font-small mt-6 mb-16">Bookmark jobs to save them here for easy access later.</p>
                    <button className="cb-btn-orange-solid" onClick={() => setActiveTab('jobs')}>Browse Jobs</button>
                  </div>
                )}
              </div>
            )}

            {/* VIEW: ALL INTERNSHIPS */}
            {activeTab === 'internships' && (
              <div className="cb-view-container">
                <div className="cb-page-header-row">
                  <div>
                    <h1 className="cb-view-title">Find Your Next Internship</h1>
                    <p className="cb-view-subtitle">Discover internships matched to your resume, skills, education and preferences.</p>
                  </div>
                </div>

                <div className="cb-job-cards-list">
                  {internshipsList.map((item) => (
                    <div key={item.id} className="cb-job-card">
                      <div className="cb-job-card-header">
                        <div className="cb-company-logo-box" style={{ backgroundColor: item.logoBg }}><span>{item.logoText}</span></div>
                        <div className="cb-job-title-info">
                          <h3 className="cb-job-title">{item.company}</h3>
                          <h4 className="cb-role-name">{item.role}</h4>
                          <div className="cb-job-meta-row"><span>📍 {item.location}</span><span>• {item.mode}</span><span className="orange-text font-semibold">• {item.stipend}</span></div>
                        </div>
                        <div className="cb-match-badge green-mint"><Sparkles size={13} /><span>{item.match}% Match</span></div>
                      </div>
                      <div className="cb-job-tags-row">
                        {item.tags.map((t, idx) => <span key={idx} className="cb-tag-pill">{t}</span>)}
                      </div>
                      <div className="cb-job-card-footer">
                        <button className={`cb-bookmark-icon-btn ${savedInternships.includes(item.id) ? 'saved' : ''}`} onClick={() => toggleSaveInternship(item.id)}>
                          <Bookmark size={16} fill={savedInternships.includes(item.id) ? "#ff6b00" : "none"} /><span>Save</span>
                        </button>
                        <button className="cb-btn-orange-solid" onClick={() => handleApplyClick(item)}>Apply Now</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW: RECOMMENDED INTERNSHIPS */}
            {activeTab === 'internship_recommended' && (
              <div className="cb-view-container">
                <div className="cb-page-header-row">
                  <div>
                    <h1 className="cb-view-title">Recommended Internships</h1>
                    <p className="cb-view-subtitle">AI matched these top internship opportunities based on your skills & profile.</p>
                  </div>
                </div>

                <div className="cb-job-cards-list">
                  {internshipsList.filter(item => item.match >= 85).map((item) => (
                    <div key={item.id} className="cb-job-card">
                      <div className="cb-job-card-header">
                        <div className="cb-company-logo-box" style={{ backgroundColor: item.logoBg }}><span>{item.logoText}</span></div>
                        <div className="cb-job-title-info">
                          <h3 className="cb-job-title">{item.company}</h3>
                          <h4 className="cb-role-name">{item.role}</h4>
                          <div className="cb-job-meta-row"><span>📍 {item.location}</span><span>• {item.mode}</span><span className="orange-text font-semibold">• {item.stipend}</span></div>
                        </div>
                        <div className="cb-match-badge green-mint"><Sparkles size={13} /><span>{item.match}% Match</span></div>
                      </div>
                      <div className="cb-job-tags-row">
                        {item.tags.map((t, idx) => <span key={idx} className="cb-tag-pill">{t}</span>)}
                      </div>
                      <div className="cb-job-card-footer">
                        <button className={`cb-bookmark-icon-btn ${savedInternships.includes(item.id) ? 'saved' : ''}`} onClick={() => toggleSaveInternship(item.id)}>
                          <Bookmark size={16} fill={savedInternships.includes(item.id) ? "#ff6b00" : "none"} /><span>Save</span>
                        </button>
                        <button className="cb-btn-orange-solid" onClick={() => handleApplyClick(item)}>Apply Now</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW: SAVED INTERNSHIPS */}
            {activeTab === 'internship_saved' && (
              <div className="cb-view-container">
                <div className="cb-page-header-row">
                  <div>
                    <h1 className="cb-view-title">Saved Internships</h1>
                    <p className="cb-view-subtitle">Internships you have saved for later review and application.</p>
                  </div>
                </div>

                {internshipsList.filter(item => savedInternships.includes(item.id)).length > 0 ? (
                  <div className="cb-job-cards-list">
                    {internshipsList.filter(item => savedInternships.includes(item.id)).map((item) => (
                      <div key={item.id} className="cb-job-card">
                        <div className="cb-job-card-header">
                          <div className="cb-company-logo-box" style={{ backgroundColor: item.logoBg }}><span>{item.logoText}</span></div>
                          <div className="cb-job-title-info">
                            <h3 className="cb-job-title">{item.company}</h3>
                            <h4 className="cb-role-name">{item.role}</h4>
                            <div className="cb-job-meta-row"><span>📍 {item.location}</span><span>• {item.mode}</span><span className="orange-text font-semibold">• {item.stipend}</span></div>
                          </div>
                          <div className="cb-match-badge green-mint"><Sparkles size={13} /><span>{item.match}% Match</span></div>
                        </div>
                        <div className="cb-job-tags-row">
                          {item.tags.map((t, idx) => <span key={idx} className="cb-tag-pill">{t}</span>)}
                        </div>
                        <div className="cb-job-card-footer">
                          <button className="cb-bookmark-icon-btn saved" onClick={() => toggleSaveInternship(item.id)}>
                            <Bookmark size={16} fill="#ff6b00" /><span>Saved</span>
                          </button>
                          <button className="cb-btn-orange-solid" onClick={() => handleApplyClick(item)}>Apply Now</button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="cb-card-box center-text padding-40">
                    <Bookmark size={36} color="#ff6b00" className="mb-12" />
                    <h3 className="cb-card-heading">No Saved Internships Yet</h3>
                    <p className="text-gray font-small mt-6 mb-16">Bookmark internships to save them here for easy access later.</p>
                    <button className="cb-btn-orange-solid" onClick={() => setActiveTab('internships')}>Browse Internships</button>
                  </div>
                )}
              </div>
            )}

            {/* VIEW: AUTO APPLY SETTINGS & PROGRESS */}
            {(activeTab === 'job_settings' || activeTab === 'internship_settings' || activeTab === 'job_progress' || activeTab === 'internship_progress') && (
              <div className="cb-view-container">
                <div className="cb-sub-tab-bar">
                  <button className={`cb-tab-pill active`}>Auto Apply Settings</button>
                </div>
                <div className="cb-card-box">
                  <h2 className="cb-card-heading">Auto Apply Preferences</h2>
                  <p className="cb-card-subheading mb-16">Set minimum match score and preferred roles.</p>
                  <button className="cb-btn-orange-solid">Save Settings</button>
                </div>
              </div>
            )}

            {/* VIEW: APPLICATIONS TRACKER */}
            {activeTab === 'tracker' && (
              <div className="cb-view-container">
                <div className="cb-page-header-row">
                  <div>
                    <h1 className="cb-view-title">My Applications</h1>
                    <p className="cb-view-subtitle">Track and manage all your job and internship applications.</p>
                  </div>
                </div>

                <div className="cb-card-box table-card">
                  <table className="cb-tracker-table">
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th>Role</th>
                        <th>Match %</th>
                        <th>Method</th>
                        <th>Status</th>
                        <th>Applied On</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...jobsList, ...internshipsList].map((row) => (
                        <tr key={row.id}>
                          <td>
                            <div className="cb-table-company-cell">
                              <span className="mini-logo" style={{ backgroundColor: row.logoBg }}>{row.logoText}</span>
                              <span className="company-name">{row.company}</span>
                            </div>
                          </td>
                          <td className="font-semibold">{row.role}</td>
                          <td><span className="cb-table-match-badge">{row.match}%</span></td>
                          <td><span className="cb-method-pill auto">{row.method}</span></td>
                          <td><span className={`cb-status-pill ${row.statusClass}`}>{row.status}</span></td>
                          <td className="text-gray">{row.appliedDate}</td>
                          <td>
                            <button className="cb-table-action-btn" onClick={() => handleOpenDetails(row)}>
                              View <ChevronDown size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* VIEW: MATCHING INSIGHTS */}
            {activeTab === 'insights' && (
              <div className="cb-view-container">
                <div className="cb-page-header-row">
                  <div>
                    <h1 className="cb-view-title">Matching Insights</h1>
                    <p className="cb-view-subtitle">Based on your resume and target profiles.</p>
                  </div>
                </div>

                <div className="cb-insights-grid">
                  <div className="cb-card-box">
                    <div className="cb-gauge-chart-container">
                      <svg viewBox="0 0 160 160" className="cb-gauge-svg">
                        <circle cx="80" cy="80" r="65" stroke="rgba(255,255,255,0.08)" strokeWidth="16" fill="none" />
                        <circle cx="80" cy="80" r="65" stroke="#10b981" strokeWidth="16" fill="none" strokeDasharray="408" strokeDashoffset="53" />
                      </svg>
                      <div className="cb-gauge-text">
                        <span className="percent">87%</span>
                        <span className="label">Overall Match</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* REVIEW MODAL */}
      {reviewModal && activeItem && (
        <div className="cb-modal-overlay">
          <div className="cb-modal-container review-modal">
            <div className="cb-modal-header">
              <div>
                <h2 className="cb-modal-title">Review Application</h2>
                <p className="cb-modal-subtitle">Review details for {activeItem.role} at {activeItem.company}.</p>
              </div>
              <button className="cb-modal-close-btn" onClick={() => setReviewModal(false)}><X size={18} /></button>
            </div>
            <div className="cb-modal-footer">
              <button className="cb-btn-outline-orange" onClick={() => setReviewModal(false)}>Cancel</button>
              <button className="cb-btn-orange-solid" onClick={handleConfirmSubmit}>Submit Application</button>
            </div>
          </div>
        </div>
      )}

      {/* SUBMITTED MODAL */}
      {submittedModal && activeItem && (
        <div className="cb-modal-overlay">
          <div className="cb-modal-container submitted-modal center-text">
            <div className="cb-success-checkmark-wrapper">
              <div className="cb-checkmark-circle"><Check size={40} color="#ffffff" strokeWidth={3} /></div>
            </div>
            <h2 className="cb-submitted-heading mt-16">Application Submitted!</h2>
            <p className="cb-submitted-subtext mt-6">Submitted to <strong>{activeItem.company}</strong>.</p>
            <div className="cb-modal-footer center-footer mt-24">
              <button className="cb-btn-orange-solid" onClick={() => setSubmittedModal(false)}>Done</button>
            </div>
          </div>
        </div>
      )}

      {/* DETAILS MODAL */}
      {detailsModal && activeItem && (
        <div className="cb-modal-overlay">
          <div className="cb-modal-container details-modal">
            <div className="cb-modal-header">
              <h3 className="cb-modal-title">{activeItem.role} - {activeItem.company}</h3>
              <button className="cb-modal-close-btn" onClick={() => setDetailsModal(false)}><X size={18} /></button>
            </div>
            <div className="cb-modal-footer">
              <button className="cb-btn-orange-solid" onClick={() => { setDetailsModal(false); handleApplyClick(activeItem); }}>Apply Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
