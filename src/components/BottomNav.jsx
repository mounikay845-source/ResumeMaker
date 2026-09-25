import React from 'react';
import { Home, FileText, Globe, Briefcase } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BottomNav.css';

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/resume', label: 'Resume', icon: FileText },
    { path: '/portfolio', label: 'Portfolio', icon: Globe },
    { path: '/apply', label: 'Apply', icon: Briefcase },
  ];

  return (
    <nav className="bottom-nav-container">
      <div className="bottom-nav-inner glass-card">
        {navItems.map((item) => {
          const IconComp = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              className={`nav-tab ${isActive ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <div className="tab-icon-wrapper">
                <IconComp size={20} className="tab-icon" />
              </div>
              <span className="tab-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
