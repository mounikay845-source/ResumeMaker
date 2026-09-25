import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { 
  X, Settings, Moon, Sun, Lock, Key, HelpCircle, Mail, MessageSquare, 
  Shield, Bell, Globe, Check, Save, Download, Eye, EyeOff, Smartphone
} from 'lucide-react';
import './SettingsModal.css';

export default function SettingsModal({ isOpen, onClose }) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Theme Mode State
  const [isLightMode, setIsLightMode] = useState(() => {
    return document.body.classList.contains('light-mode') || localStorage.getItem('theme') === 'light';
  });

  // 2FA State
  const [is2FAEnabled, setIs2FAEnabled] = useState(true);

  // Notification Toggles State
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    jobMatches: true,
    applicationUpdates: true,
    securityAlerts: true
  });

  // Public Visibility State
  const [isPublicProfile, setIsPublicProfile] = useState(true);

  if (!isOpen) return null;

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleToggleTheme = () => {
    const nextTheme = !isLightMode;
    setIsLightMode(nextTheme);
    if (nextTheme) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      triggerToast('Warm Light Mode Enabled!');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      triggerToast('Dark Mode Enabled!');
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    triggerToast('Password updated successfully!');
  };

  const handleHelpSubmit = (e) => {
    e.preventDefault();
    triggerToast('Support ticket submitted! We will respond via email.');
  };

  const handleToggleNotif = (key) => {
    const updated = { ...notifications, [key]: !notifications[key] };
    setNotifications(updated);
    triggerToast('Notification preferences updated!');
  };

  const handleToggle2FA = () => {
    const nextVal = !is2FAEnabled;
    setIs2FAEnabled(nextVal);
    triggerToast(nextVal ? 'Two-Factor Authentication Enabled!' : 'Two-Factor Authentication Disabled!');
  };

  const handleToggleVisibility = () => {
    const nextVal = !isPublicProfile;
    setIsPublicProfile(nextVal);
    triggerToast(nextVal ? 'Profile set to Public' : 'Profile set to Private');
  };

  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      user: "Monika Yadav",
      email: "monika.yadav@example.com",
      exportedAt: new Date().toISOString()
    }));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "profile_data_archive.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    triggerToast('Profile Data Archive downloaded!');
  };

  return ReactDOM.createPortal(
    <div className="settings-modal-overlay" onClick={onClose}>
      <div className="settings-modal-container animated-pane" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Top Header */}
        <div className="settings-modal-header">
          <div className="modal-header-title">
            <Settings className="orange-text" size={22} />
            <div>
              <h3>Website & Account Settings</h3>
              <p className="modal-header-sub">Manage theme, password, notifications, and security options</p>
            </div>
          </div>
          <button className="settings-modal-close-btn" onClick={onClose} aria-label="Close Settings">
            <X size={18} />
          </button>
        </div>

        {/* Toast Alert */}
        {showToast && (
          <div className="settings-toast-banner">
            <Check size={16} />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="settings-modal-body">

          {/* 1. Theme Mode Settings */}
          <div className="settings-block-card">
            <div className="settings-block-head">
              {isLightMode ? <Sun size={20} className="orange-text" /> : <Moon size={20} className="purple-text" />}
              <div>
                <h4 className="block-setting-title">Appearance & Theme Mode</h4>
                <p className="block-setting-sub">Switch between Dark Mode and Warm Light Mode.</p>
              </div>
            </div>
            <button className="btn-outline-orange theme-toggle-setting-btn" onClick={handleToggleTheme}>
              {isLightMode ? <Sun size={15} /> : <Moon size={15} />}
              <span>{isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</span>
            </button>
          </div>

          {/* 2. Change Password */}
          <div className="settings-block-card">
            <div className="settings-block-head">
              <Lock size={20} className="orange-text" />
              <div>
                <h4 className="block-setting-title">Change Password</h4>
                <p className="block-setting-sub">Update your account login password to stay secure.</p>
              </div>
            </div>

            <form onSubmit={handlePasswordSubmit} className="settings-form-grid">
              <div className="settings-form-field">
                <label><Lock size={13} /> Current Password</label>
                <input type="password" required placeholder="Enter current password" className="adv-input" />
              </div>
              <div className="settings-form-field">
                <label><Key size={13} /> New Password</label>
                <input type="password" required placeholder="New password (min 8 chars)" className="adv-input" />
              </div>
              <div className="settings-form-field">
                <label><Key size={13} /> Confirm Password</label>
                <input type="password" required placeholder="Re-enter new password" className="adv-input" />
              </div>
              <button type="submit" className="btn-orange-gradient update-pwd-btn">
                <Save size={15} /> Update Password
              </button>
            </form>
          </div>



          {/* 4. Help & Support Center */}
          <div className="settings-block-card">
            <div className="settings-block-head">
              <HelpCircle size={20} className="cyan-text" />
              <div>
                <h4 className="block-setting-title">Help & Support Center</h4>
                <p className="block-setting-sub">Need assistance? Send a message to our support team.</p>
              </div>
            </div>

            <form onSubmit={handleHelpSubmit} className="settings-form-grid">
              <div className="settings-form-field">
                <label><HelpCircle size={13} /> Support Topic</label>
                <select className="adv-input select-input-field">
                  <option>Resume Builder & ATS Queries</option>
                  <option>Job Applications & Tracking</option>
                  <option>Portfolio Builder Help</option>
                  <option>Account & Technical Issue</option>
                </select>
              </div>
              <div className="settings-form-field">
                <label><Mail size={13} /> Your Email Address</label>
                <input type="email" required defaultValue="monika.yadav@example.com" className="adv-input" />
              </div>
              <div className="settings-form-field full-width">
                <label><MessageSquare size={13} /> Message / Description</label>
                <textarea rows={3} required placeholder="Describe your question or issue in detail..." className="adv-textarea" />
              </div>
              <button type="submit" className="btn-purple-gradient help-submit-btn">
                <HelpCircle size={15} /> Submit Support Inquiry
              </button>
            </form>
          </div>

          {/* 5. Two-Factor Authentication (2FA) */}
          <div className="settings-block-card">
            <div className="settings-block-head">
              <Shield size={20} className="green-text" />
              <div>
                <h4 className="block-setting-title">Two-Factor Authentication (2FA)</h4>
                <p className="block-setting-sub">Add SMS or Authenticator app security to your account.</p>
              </div>
            </div>
            <div className="sec-toggle-action-row">
              <span className={`status-tag-badge ${is2FAEnabled ? 'active' : 'disabled'}`}>
                {is2FAEnabled ? '2FA Active & Protected' : '2FA Disabled'}
              </span>
              <button className="btn-outline-orange toggle-2fa-btn" onClick={handleToggle2FA}>
                <Smartphone size={14} />
                <span>{is2FAEnabled ? 'Disable 2FA' : 'Enable 2FA'}</span>
              </button>
            </div>
          </div>

          {/* 6. Data & Privacy Controls */}
          <div className="settings-block-card">
            <div className="settings-block-head">
              <Globe size={20} className="orange-text" />
              <div>
                <h4 className="block-setting-title">Account Data & Privacy</h4>
                <p className="block-setting-sub">Download your profile data archive or toggle search visibility.</p>
              </div>
            </div>
            <div className="data-privacy-actions-row">
              <button className="btn-outline-orange" onClick={handleToggleVisibility}>
                {isPublicProfile ? <Eye size={14} /> : <EyeOff size={14} />}
                <span>{isPublicProfile ? 'Public Profile: Visible' : 'Public Profile: Hidden'}</span>
              </button>
              <button className="btn-orange-gradient" onClick={handleExportData}>
                <Download size={14} />
                <span>Export Profile JSON</span>
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="settings-modal-footer">
          <button className="btn-secondary-modal" onClick={onClose}>
            Close Settings
          </button>
        </div>

      </div>
    </div>,
    document.body
  );
}
