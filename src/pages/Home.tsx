import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturesSection } from '../components/home/FeaturesSection';

export function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}