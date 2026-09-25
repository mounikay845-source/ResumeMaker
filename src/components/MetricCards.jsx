import React from 'react';
import { FileText, Briefcase, Eye, Trophy } from 'lucide-react';
import './MetricCards.css';

export default function MetricCards() {
  const metrics = [
    {
      id: 'resume-strength',
      icon: FileText,
      iconBg: 'orange',
      cardGlow: 'glow-card-orange',
      value: '65%',
      label: 'Resume Strength',
      pillText: 'Good',
      pillClass: 'pill-orange'
    },
    {
      id: 'opportunities',
      icon: Briefcase,
      iconBg: 'purple',
      cardGlow: 'glow-card-purple',
      value: '12',
      label: 'Opportunities',
      pillText: 'Matches',
      pillClass: 'pill-purple'
    },
    {
      id: 'profile-views',
      icon: Eye,
      iconBg: 'cyan',
      cardGlow: 'glow-card-cyan',
      value: '58',
      label: 'Profile Views',
      pillText: 'This Month',
      pillClass: 'pill-cyan'
    },
    {
      id: 'achievements',
      icon: Trophy,
      iconBg: 'green',
      cardGlow: 'glow-card-green',
      value: '4',
      label: 'Achievements',
      pillText: 'Unlocked',
      pillClass: 'pill-green'
    }
  ];

  return (
    <div className="metric-cards-grid">
      {metrics.map((m) => {
        const IconComponent = m.icon;
        return (
          <div key={m.id} className={`metric-card glass-card ${m.cardGlow}`}>
            <div className={`metric-icon-wrapper ${m.iconBg}`}>
              <IconComponent size={20} className="metric-icon" />
            </div>

            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>

            <div className={`metric-pill ${m.pillClass}`}>
              {m.pillText}
            </div>
          </div>
        );
      })}
    </div>
  );
}
