import React from 'react';
import Header from '../components/Header';
import ProfileHeader from '../components/ProfileHeader';
import ProfileCompletionCard from '../components/ProfileCompletionCard';
import MetricCards from '../components/MetricCards';
import CompleteProfileBanner from '../components/CompleteProfileBanner';
import FeatureCards from '../components/FeatureCards';
import CareerAssistantAndTips from '../components/CareerAssistantAndTips';

export default function Home() {
  return (
    <main className="home-page">
      <Header />
      <ProfileHeader />
      <ProfileCompletionCard percentage={72} />
      <MetricCards />
      <CompleteProfileBanner />
      <FeatureCards />
      <CareerAssistantAndTips />
    </main>
  );
}
