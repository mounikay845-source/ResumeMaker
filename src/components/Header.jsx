import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, Bell, MoreVertical, Layers, LogIn, LogOut, HelpCircle, Settings, 
  Home, FileText, Globe, Briefcase, User 
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import SettingsModal from './SettingsModal';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  const [notificationsList, setNotificationsList] = useState([
    {
      id: 1,
      title: '🎯 High Job Match Alert',
      desc: 'New Senior Full Stack Engineer role matches 94% of your profile skills at Google Tech.',
      time: '2 mins ago',
      unread: true
    },
    {
      id: 2,
      title: '📄 ATS Resume Score Updated',
      desc: 'Your resume "FullStack-2025.pdf" match score increased to 92/100.',
      time: '1 hr ago',
      unread: true
    },
    {
      id: 3,
      title: '🏆 Verified Candidate Badge',
      desc: 'Congratulations! You earned the Verified React Specialist candidate badge.',
      time: '1 day ago',
      unread: true
    }
  ]);

  const markAllRead = () => {
    setNotificationsList(notificationsList.map(item => ({ ...item, unread: false })));
    setUnreadCount(0);
  };
  const location = useLocation();
  const navigate = useNavigate();

  const [isLightMode, setIsLightMode] = useState(() => {
    return document.body.classList.contains('light-mode') || localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    if (location.pathname === '/settings' || location.pathname === '/help') {
      setIsSettingsOpen(true);
    }
  }, [location.pathname]);

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
    if (location.pathname === '/settings' || location.pathname === '/help') {
      navigate('/profile');
    }
  };

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(prev => !prev);
  };

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/resume', label: 'Resume Builder', icon: FileText },
    { path: '/portfolio', label: 'Portfolio', icon: Globe },
    { path: '/apply', label: 'Job Applications', icon: Briefcase },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <header className="header-bar">
      {/* Brand Logo */}
      <div className="header-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <div className="logo-icon-box">
          <Layers className="logo-icon" size={22} />
        </div>
        <div className="logo-text-group">
          <span className="logo-text">CareerCraft</span>
          <span className="logo-badge">PRO</span>
        </div>
      </div>

      {/* Desktop Top Navigation Bar (Hidden on Mobile) */}
      <nav className="desktop-nav-menu">
        {navItems.map((item) => {
          const IconComp = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              className={`desktop-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <IconComp size={16} className="desktop-nav-icon" />
              <span>{item.label}</span>
              {isActive && <div className="active-dot" />}
            </button>
          );
        })}
      </nav>

      {/* Header Actions */}
      <div className="header-actions">
        <div className="menu-dropdown-wrapper">
          <button 
            className={`icon-btn notification-btn ${isNotifOpen ? 'active-menu-btn' : ''}`} 
            aria-label="Notifications"
            onClick={() => {
              setIsNotifOpen(!isNotifOpen);
              setIsMenuOpen(false);
            }}
          >
            <Bell size={18} />
            {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
          </button>

          {isNotifOpen && (
            <div className="notif-dropdown-card glass-card glow-card-orange dropdown-menu-animated">
              <div className="notif-card-header">
                <div className="notif-header-title">
                  <Bell size={16} className="orange-text" />
                  <span>Notifications</span>
                  {unreadCount > 0 && <span className="notif-count-pill">{unreadCount} New</span>}
                </div>
                {unreadCount > 0 && (
                  <button className="notif-mark-read-btn" onClick={markAllRead}>
                    Mark all read
                  </button>
                )}
              </div>

              <div className="notif-card-body">
                {notificationsList.map(item => (
                  <div key={item.id} className={`notif-card-item ${item.unread ? 'unread' : ''}`}>
                    <div className="notif-item-top">
                      <span className="notif-title-text">{item.title}</span>
                      <span className="notif-time-text">{item.time}</span>
                    </div>
                    <p className="notif-desc-text">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Quick Avatar Button for Desktop */}
        <button 
          className="desktop-profile-btn" 
          onClick={() => navigate('/profile')}
          title="Go to Profile"
        >
          <img src="/avatar.jpg" alt="Monika Yadav" className="header-avatar" />
          <span className="header-user-name">Monika</span>
        </button>

        <div className="menu-dropdown-wrapper">
          <button 
            className={`icon-btn ${isMenuOpen ? 'active-menu-btn' : ''}`} 
            aria-label="More options"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MoreVertical size={18} />
          </button>

          {isMenuOpen && (
            <div className="quick-menu-card glass-card glow-card-orange dropdown-menu-animated">
              <button className="menu-item" onClick={() => { setIsMenuOpen(false); navigate('/profile'); }}>
                <User size={16} className="menu-icon" />
                <span>My Profile</span>
              </button>
              <button className="menu-item" onClick={() => { setIsMenuOpen(false); navigate('/login'); }}>
                <LogIn size={16} className="menu-icon" />
                <span>Login</span>
              </button>
              <button className="menu-item" onClick={() => { setIsMenuOpen(false); setIsSettingsOpen(true); }}>
                <HelpCircle size={16} className="menu-icon" />
                <span>Help & Support</span>
              </button>
              <button className="menu-item" onClick={() => { setIsMenuOpen(false); setIsSettingsOpen(true); }}>
                <Settings size={16} className="menu-icon" />
                <span>Settings</span>
              </button>
              <button className="menu-item" onClick={() => { setIsMenuOpen(false); navigate('/login'); }}>
                <LogOut size={16} className="menu-icon" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Universal Settings & Help Modal */}
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={handleCloseSettings} 
      />
    </header>
  );
}
