import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { 
  User, ArrowLeft, Camera, Save, Mail, Phone, MapPin, Briefcase, 
  GraduationCap, Globe, Sparkles, Plus, Trash2, Edit3, X,
  Shield, Lock, Check, Award, FileText, Share2, 
  Trophy, Users, Moon, Sun, Settings, HelpCircle, Bell, Key, MessageSquare
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProfilePage.css';

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(() => {
    if (location.pathname === '/settings' || location.pathname === '/help') {
      return 'settings';
    }
    return 'personal';
  });

  useEffect(() => {
    if (location.pathname === '/settings' || location.pathname === '/help') {
      setActiveTab('settings');
    }
  }, [location.pathname]);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('Profile changes saved successfully!');

  // Theme Mode State
  const [isLightMode, setIsLightMode] = useState(() => {
    return document.body.classList.contains('light-mode') || localStorage.getItem('theme') === 'light';
  });

  const handleToggleTheme = () => {
    const nextTheme = !isLightMode;
    setIsLightMode(nextTheme);
    if (nextTheme) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      triggerToast('Warm Light Mode enabled!');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      triggerToast('Dark Mode enabled!');
    }
  };

  // Skill tags state
  const [skills, setSkills] = useState([
    'React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Node.js', 
    'REST APIs', 'Git & GitHub', 'UI/UX Design', 'Tailwind CSS'
  ]);
  const [newSkill, setNewSkill] = useState('');

  // Education State (Editable)
  const [educationList, setEducationList] = useState([
    {
      id: 1,
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'APJ Abdul Kalam Technological University',
      year: '2022 - 2026',
      grade: 'CGPA: 8.9 / 10',
      desc: 'Core Focus: Data Structures, Web Development, Software Engineering, Database Systems.'
    },
    {
      id: 2,
      degree: 'Higher Secondary Education (12th Class)',
      institution: 'CBSE Board • Science Stream',
      year: '2020 - 2022',
      grade: 'Score: 94.2%',
      desc: 'Focus: Physics, Chemistry, Mathematics, and Computer Science.'
    }
  ]);

  // Achievements State (Editable)
  const [achievementsList, setAchievementsList] = useState([
    {
      id: 1,
      title: '🏆 1st Place - TechNavi National Hackathon 2025',
      issuer: 'TechNavi Organization',
      date: 'March 2025',
      desc: 'Built an AI-driven resume keyword parser and interactive ATS builder platform.'
    },
    {
      id: 2,
      title: '⭐ Certified Web Developer Specialist',
      issuer: 'Web Dev Alliance',
      date: 'Jan 2025',
      desc: 'Achieved 98% score in advanced frontend architecture & React ecosystem.'
    },
    {
      id: 3,
      title: '🥇 Global CodeSprint Finalist',
      issuer: 'CodeSprint Global',
      date: 'Nov 2024',
      desc: 'Ranked top 50 among 5,000+ participating university engineering candidates.'
    }
  ]);

  // Extracurricular Activities State (Editable)
  const [activitiesList, setActivitiesList] = useState([
    {
      id: 1,
      role: 'Lead Student Coordinator',
      org: 'Computer Science Student Society',
      duration: '2024 - Present',
      desc: 'Organized national coding workshops, hackathons, and tech sessions for 500+ student attendees.'
    },
    {
      id: 2,
      role: 'Open Source Contributor & Mentor',
      org: 'GitHub Open Source Community',
      duration: '2023 - Present',
      desc: 'Contributed reusable glassmorphism UI components and mentored junior developers in React.'
    }
  ]);

  // Modal Dialog State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' | 'edit'
  const [modalCategory, setModalCategory] = useState('education'); // 'education' | 'achievement' | 'activity'
  const [editingId, setEditingId] = useState(null);

  // Modal Form Inputs State
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    meta: '',
    badge: '',
    desc: ''
  });

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
      triggerToast('Skill added successfully!');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(s => s !== skillToRemove));
    triggerToast('Skill removed.');
  };

  const handleSave = () => {
    triggerToast('Profile changes saved successfully!');
  };

  // Modal Handlers
  const openAddModal = (category) => {
    setModalCategory(category);
    setModalMode('add');
    setEditingId(null);
    setFormData({ title: '', subtitle: '', meta: '', badge: '', desc: '' });
    setIsModalOpen(true);
  };

  const openEditModal = (category, item) => {
    setModalCategory(category);
    setModalMode('edit');
    setEditingId(item.id);
    if (category === 'education') {
      setFormData({
        title: item.degree,
        subtitle: item.institution,
        meta: item.year,
        badge: item.grade,
        desc: item.desc
      });
    } else if (category === 'achievement') {
      setFormData({
        title: item.title,
        subtitle: item.issuer,
        meta: item.date,
        badge: '',
        desc: item.desc
      });
    } else if (category === 'activity') {
      setFormData({
        title: item.role,
        subtitle: item.org,
        meta: item.duration,
        badge: '',
        desc: item.desc
      });
    }
    setIsModalOpen(true);
  };

  const handleSaveModal = (e) => {
    e.preventDefault();
    if (modalCategory === 'password') {
      triggerToast('Password updated successfully!');
      setIsModalOpen(false);
      return;
    }
    if (modalCategory === 'help') {
      triggerToast('Support ticket submitted! We will respond via email.');
      setIsModalOpen(false);
      return;
    }
    if (!formData.title.trim()) return;

    if (modalCategory === 'education') {
      if (modalMode === 'add') {
        const newItem = {
          id: Date.now(),
          degree: formData.title,
          institution: formData.subtitle,
          year: formData.meta || '2024 - Present',
          grade: formData.badge || 'CGPA: 8.5 / 10',
          desc: formData.desc
        };
        setEducationList([...educationList, newItem]);
        triggerToast('Education entry added!');
      } else {
        setEducationList(educationList.map(item => item.id === editingId ? {
          ...item,
          degree: formData.title,
          institution: formData.subtitle,
          year: formData.meta,
          grade: formData.badge,
          desc: formData.desc
        } : item));
        triggerToast('Education entry updated!');
      }
    } else if (modalCategory === 'achievement') {
      if (modalMode === 'add') {
        const newItem = {
          id: Date.now(),
          title: formData.title,
          issuer: formData.subtitle,
          date: formData.meta || '2025',
          desc: formData.desc
        };
        setAchievementsList([...achievementsList, newItem]);
        triggerToast('Achievement added!');
      } else {
        setAchievementsList(achievementsList.map(item => item.id === editingId ? {
          ...item,
          title: formData.title,
          issuer: formData.subtitle,
          date: formData.meta,
          desc: formData.desc
        } : item));
        triggerToast('Achievement updated!');
      }
    } else if (modalCategory === 'activity') {
      if (modalMode === 'add') {
        const newItem = {
          id: Date.now(),
          role: formData.title,
          org: formData.subtitle,
          duration: formData.meta || '2024 - Present',
          desc: formData.desc
        };
        setActivitiesList([...activitiesList, newItem]);
        triggerToast('Extracurricular activity added!');
      } else {
        setActivitiesList(activitiesList.map(item => item.id === editingId ? {
          ...item,
          role: formData.title,
          org: formData.subtitle,
          duration: formData.meta,
          desc: formData.desc
        } : item));
        triggerToast('Extracurricular activity updated!');
      }
    }

    setIsModalOpen(false);
  };

  const handleDeleteEducation = (id) => {
    setEducationList(educationList.filter(item => item.id !== id));
    triggerToast('Education entry deleted.');
  };

  const handleDeleteAchievement = (id) => {
    setAchievementsList(achievementsList.filter(item => item.id !== id));
    triggerToast('Achievement deleted.');
  };

  const handleDeleteActivity = (id) => {
    setActivitiesList(activitiesList.filter(item => item.id !== id));
    triggerToast('Extracurricular activity deleted.');
  };

  return (
    <main className="advanced-profile-page">
      <Header />

      {/* Toast Notification */}
      {showToast && (
        <div className="save-toast-banner">
          <Check size={18} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Page Header Bar */}
      <div className="profile-page-topbar">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          <span>Dashboard</span>
        </button>
        <div className="topbar-right">
          <button className="btn-orange-gradient save-profile-btn" onClick={handleSave}>
            <Save size={16} />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      {/* Hero Profile Banner Header */}
      <div className="profile-hero-banner glass-card glow-card-orange">
        <div className="hero-cover-bg"></div>
        <div className="hero-user-content">
          <div className="hero-avatar-wrapper">
            <img src="/avatar.jpg" alt="Monika Yadav" className="hero-avatar" />
            <button className="hero-cam-btn" title="Change Photo">
              <Camera size={14} />
            </button>
            <div className="online-indicator" title="Active Now"></div>
          </div>

          <div className="hero-user-info">
            <div className="hero-name-row">
              <h1 className="user-full-name">Monika Yadav</h1>
              <span className="verified-badge">
                <Check size={12} /> Verified Candidate
              </span>
            </div>
            <p className="user-title">B.Tech Computer Science Engineering Student • Full Stack Web Developer</p>
            <div className="user-meta-pills">
              <span><MapPin size={13} /> New Delhi, India</span>
              <span><Mail size={13} /> monika.yadav@example.com</span>
              <span><Phone size={13} /> +91 9876543210</span>
            </div>
          </div>

          <div className="hero-completeness-card">
            <div className="completeness-circle-box">
              <svg viewBox="0 0 100 100" className="completeness-svg">
                <circle className="completeness-bg" cx="50" cy="50" r="40" />
                <circle 
                  className="completeness-fill" 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  style={{ strokeDasharray: 251, strokeDashoffset: 251 - (251 * 85) / 100 }}
                />
              </svg>
              <div className="completeness-text">
                <span className="pct-num">85%</span>
                <span className="pct-lbl">Complete</span>
              </div>
            </div>
            <div className="completeness-info">
              <span className="strength-status">Profile Strength: Strong</span>
              <span className="strength-sub">Add 2 more skills to reach 100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Profile Navigation Tabs */}
      <div className="profile-nav-tabs glass-card">
        <button 
          className={`tab-item ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          <User size={16} />
          <span>Personal Info</span>
        </button>

        <button 
          className={`tab-item ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          <GraduationCap size={16} />
          <span>Education & Background</span>
        </button>

        <button 
          className={`tab-item ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          <Sparkles size={16} />
          <span>Skills & Expertise</span>
        </button>

        <button 
          className={`tab-item ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          <Trophy size={16} />
          <span>Achievements & Activities</span>
        </button>
      </div>

      {/* Tab Content Section */}
      <div className="profile-content-area">

        {/* Tab 1: Personal Information */}
        {activeTab === 'personal' && (
          <div className="tab-pane-card glass-card glow-card-orange animated-pane">
            <div className="pane-header">
              <div>
                <h2 className="pane-title">Personal Information</h2>
                <p className="pane-sub">Update your personal details and contact information visible to recruiters.</p>
              </div>
              <User className="orange-text" size={24} />
            </div>

            <div className="form-grid-layout">
              <div className="form-field">
                <label><User size={14} /> Full Name</label>
                <input type="text" defaultValue="Monika Yadav" className="adv-input" placeholder="Enter full name" />
              </div>

              <div className="form-field">
                <label><Mail size={14} /> Email Address</label>
                <input type="email" defaultValue="monika.yadav@example.com" className="adv-input" placeholder="Enter email address" />
              </div>

              <div className="form-field">
                <label><Phone size={14} /> Phone Number</label>
                <input type="text" defaultValue="+91 9876543210" className="adv-input" placeholder="Enter phone number" />
              </div>

              <div className="form-field">
                <label><MapPin size={14} /> Current Location</label>
                <input type="text" defaultValue="New Delhi, India" className="adv-input" placeholder="City, Country" />
              </div>

              <div className="form-field full-width">
                <label><Briefcase size={14} /> Professional Headline</label>
                <input 
                  type="text" 
                  defaultValue="Full Stack Web Developer & B.Tech Computer Science Engineering Student" 
                  className="adv-input" 
                  placeholder="e.g. Senior Software Engineer"
                />
              </div>

              <div className="form-field full-width">
                <label><FileText size={14} /> Professional Summary / Bio</label>
                <textarea 
                  rows={4} 
                  defaultValue="Enthusiastic Computer Science & Engineering student with strong hands-on expertise in building high-performance, modern React applications, clean CSS glassmorphism UIs, and full-stack web solutions." 
                  className="adv-textarea" 
                  placeholder="Write a brief intro about yourself..."
                />
              </div>

              {/* Social Profiles */}
              <div className="form-field">
                <label><Globe size={14} /> LinkedIn Profile URL</label>
                <input type="text" defaultValue="https://linkedin.com/in/monikayadav" className="adv-input" />
              </div>

              <div className="form-field">
                <label><Share2 size={14} /> GitHub Profile URL</label>
                <input type="text" defaultValue="https://github.com/monikayadav" className="adv-input" />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Education & Background */}
        {activeTab === 'education' && (
          <div className="tab-pane-card glass-card glow-card-purple animated-pane">
            <div className="pane-header">
              <div>
                <h2 className="pane-title">Education & Qualifications</h2>
                <p className="pane-sub">Manage and correct your academic degree, university details, and grade metrics.</p>
              </div>
              <GraduationCap className="purple-text" size={24} />
            </div>

            <div className="timeline-section">
              {educationList.map((item) => (
                <div key={item.id} className="timeline-item-card glass-card">
                  <div className="item-head">
                    <div className="head-left">
                      <GraduationCap className="orange-text" size={20} />
                      <div>
                        <h3 className="degree-title">{item.degree}</h3>
                        <p className="college-name">{item.institution}</p>
                      </div>
                    </div>
                    <div className="item-head-actions">
                      <span className="year-badge">{item.year}</span>
                      <button 
                        className="card-action-icon edit" 
                        title="Edit Education"
                        onClick={() => openEditModal('education', item)}
                      >
                        <Edit3 size={15} />
                      </button>
                      <button 
                        className="card-action-icon delete" 
                        title="Delete Entry"
                        onClick={() => handleDeleteEducation(item.id)}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                  <div className="item-body">
                    {item.grade && <span className="grade-pill">{item.grade}</span>}
                    {item.desc && <p className="item-desc">{item.desc}</p>}
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-outline-orange add-item-btn" onClick={() => openAddModal('education')}>
              <Plus size={16} />
              <span>Add Education Entry</span>
            </button>
          </div>
        )}

        {/* Tab 3: Skills & Expertise */}
        {activeTab === 'skills' && (
          <div className="tab-pane-card glass-card glow-card-cyan animated-pane">
            <div className="pane-header">
              <div>
                <h2 className="pane-title">Skills & Technical Expertise</h2>
                <p className="pane-sub">Add skills to boost your ATS match score on resume and portfolio builders.</p>
              </div>
              <Sparkles className="cyan-text" size={24} />
            </div>

            <form onSubmit={handleAddSkill} className="add-skill-form">
              <input 
                type="text" 
                value={newSkill} 
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Type a skill (e.g. Next.js, Python, Figma) and press Enter..."
                className="adv-input"
              />
              <button type="submit" className="btn-orange-gradient add-skill-btn">
                <Plus size={16} /> Add Skill
              </button>
            </form>

            <div className="skill-tags-grid">
              {skills.map((skill, index) => (
                <div key={index} className="interactive-skill-chip">
                  <Sparkles size={12} className="chip-spark" />
                  <span>{skill}</span>
                  <button className="remove-chip-btn" onClick={() => handleRemoveSkill(skill)} title="Remove Skill">
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Achievements & Extracurricular Activities */}
        {activeTab === 'achievements' && (
          <div className="tab-pane-card glass-card glow-card-orange animated-pane">
            <div className="pane-header">
              <div>
                <h2 className="pane-title">Achievements & Extracurricular Activities</h2>
                <p className="pane-sub">Showcase your awards, hackathons, certifications, and leadership roles.</p>
              </div>
              <Trophy className="orange-text" size={24} />
            </div>

            {/* Section 1: Honors & Achievements */}
            <div className="sub-section-group">
              <h3 className="sub-group-title"><Trophy size={18} className="orange-text" /> Honors, Awards & Certifications</h3>

              <div className="achievements-cards-list">
                {achievementsList.map((item) => (
                  <div key={item.id} className="achievement-item-card glass-card">
                    <div className="achieve-head">
                      <h4 className="achieve-item-title">{item.title}</h4>
                      <div className="item-head-actions">
                        <span className="achieve-date">{item.date}</span>
                        <button 
                          className="card-action-icon edit" 
                          title="Edit Achievement"
                          onClick={() => openEditModal('achievement', item)}
                        >
                          <Edit3 size={14} />
                        </button>
                        <button 
                          className="card-action-icon delete" 
                          title="Delete Achievement"
                          onClick={() => handleDeleteAchievement(item.id)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    {item.issuer && <p className="achieve-issuer"><Award size={13} /> {item.issuer}</p>}
                    {item.desc && <p className="achieve-desc">{item.desc}</p>}
                  </div>
                ))}
              </div>

              <button className="btn-outline-orange add-item-btn margin-top-sm" onClick={() => openAddModal('achievement')}>
                <Plus size={16} /> Add Achievement or Award
              </button>
            </div>

            {/* Section 2: Extracurricular Activities */}
            <div className="sub-section-group margin-top-lg">
              <h3 className="sub-group-title"><Users size={18} className="purple-text" /> Extracurricular Activities & Leadership</h3>

              <div className="activities-cards-list">
                {activitiesList.map((item) => (
                  <div key={item.id} className="activity-item-card glass-card">
                    <div className="activity-head">
                      <div>
                        <h4 className="activity-role">{item.role}</h4>
                        {item.org && <p className="activity-org"><Globe size={13} /> {item.org}</p>}
                      </div>
                      <div className="item-head-actions">
                        <span className="year-badge">{item.duration}</span>
                        <button 
                          className="card-action-icon edit" 
                          title="Edit Activity"
                          onClick={() => openEditModal('activity', item)}
                        >
                          <Edit3 size={14} />
                        </button>
                        <button 
                          className="card-action-icon delete" 
                          title="Delete Activity"
                          onClick={() => handleDeleteActivity(item.id)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    {item.desc && <p className="activity-desc">{item.desc}</p>}
                  </div>
                ))}
              </div>

              <button className="btn-outline-orange add-item-btn margin-top-sm" onClick={() => openAddModal('activity')}>
                <Plus size={16} /> Add Extracurricular Activity
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Universal Dynamic Profile Edit / Add / Settings Modal */}
      {isModalOpen && (
        <div className="profile-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="profile-modal-card glass-card animated-pane" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {modalCategory === 'password' && 'Change Account Password'}
                {modalCategory === 'help' && 'Help & Support Center'}
                {modalCategory === 'education' && (modalMode === 'add' ? 'Add Education Entry' : 'Edit Education Entry')}
                {modalCategory === 'achievement' && (modalMode === 'add' ? 'Add Achievement or Award' : 'Edit Achievement')}
                {modalCategory === 'activity' && (modalMode === 'add' ? 'Add Extracurricular Activity' : 'Edit Activity')}
              </h3>
              <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="modal-form-body">
              {modalCategory === 'password' && (
                <>
                  <div className="form-field">
                    <label><Lock size={14} /> Current Password *</label>
                    <input type="password" required placeholder="Enter current password" className="adv-input" />
                  </div>
                  <div className="form-field">
                    <label><Key size={14} /> New Password *</label>
                    <input type="password" required placeholder="Enter new password (min. 8 characters)" className="adv-input" />
                  </div>
                  <div className="form-field">
                    <label><Key size={14} /> Confirm New Password *</label>
                    <input type="password" required placeholder="Re-enter new password" className="adv-input" />
                  </div>
                </>
              )}

              {modalCategory === 'help' && (
                <>
                  <div className="form-field">
                    <label><HelpCircle size={14} /> Support Topic</label>
                    <input type="text" defaultValue="Resume Builder / ATS Score Query" className="adv-input" />
                  </div>
                  <div className="form-field">
                    <label><Mail size={14} /> Reply Email Address *</label>
                    <input type="email" required defaultValue="monika.yadav@example.com" className="adv-input" />
                  </div>
                  <div className="form-field full-width">
                    <label><MessageSquare size={14} /> How can we help you? *</label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="Describe your issue or question in detail..." 
                      className="adv-textarea" 
                    />
                  </div>
                </>
              )}

              {modalCategory !== 'password' && modalCategory !== 'help' && (
                <>
                  <div className="form-field">
                    <label>
                      {modalCategory === 'education' && 'Degree / Course Title *'}
                      {modalCategory === 'achievement' && 'Achievement / Award Title *'}
                      {modalCategory === 'activity' && 'Role / Position *'}
                    </label>
                    <input 
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder={
                        modalCategory === 'education' ? 'e.g. B.Tech in Computer Science & Engineering' :
                        modalCategory === 'achievement' ? 'e.g. 🏆 1st Place National Hackathon' :
                        'e.g. Lead Student Coordinator'
                      }
                      className="adv-input"
                    />
                  </div>

                  <div className="form-field">
                    <label>
                      {modalCategory === 'education' && 'College / Institution / Board'}
                      {modalCategory === 'achievement' && 'Issuing Organization / Host'}
                      {modalCategory === 'activity' && 'Organization / Club Name'}
                    </label>
                    <input 
                      type="text"
                      value={formData.subtitle}
                      onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                      placeholder={
                        modalCategory === 'education' ? 'e.g. APJ Abdul Kalam Technological University' :
                        modalCategory === 'achievement' ? 'e.g. TechNavi Organization' :
                        'e.g. Computer Science Student Society'
                      }
                      className="adv-input"
                    />
                  </div>

                  <div className="form-grid-layout">
                    <div className="form-field">
                      <label>
                        {modalCategory === 'education' && 'Year / Duration'}
                        {modalCategory === 'achievement' && 'Date / Year'}
                        {modalCategory === 'activity' && 'Duration / Period'}
                      </label>
                      <input 
                        type="text"
                        value={formData.meta}
                        onChange={(e) => setFormData({ ...formData, meta: e.target.value })}
                        placeholder="e.g. 2022 - 2026 or March 2025"
                        className="adv-input"
                      />
                    </div>

                    {modalCategory === 'education' && (
                      <div className="form-field">
                        <label>Grade / CGPA / Score</label>
                        <input 
                          type="text"
                          value={formData.badge}
                          onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                          placeholder="e.g. CGPA: 8.9 / 10 or 94.2%"
                          className="adv-input"
                        />
                      </div>
                    )}
                  </div>

                  <div className="form-field full-width">
                    <label>Description / Key Highlights</label>
                    <textarea 
                      rows={3}
                      value={formData.desc}
                      onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                      placeholder="Describe key responsibilities, achievements, or project highlights..."
                      className="adv-textarea"
                    />
                  </div>
                </>
              )}

              <div className="modal-actions-row">
                <button type="button" className="btn-secondary-modal" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-orange-gradient modal-save-btn">
                  <Save size={15} />
                  <span>
                    {modalCategory === 'password' && 'Update Password'}
                    {modalCategory === 'help' && 'Submit Support Request'}
                    {modalCategory !== 'password' && modalCategory !== 'help' && (modalMode === 'add' ? 'Add Item' : 'Save Changes')}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
