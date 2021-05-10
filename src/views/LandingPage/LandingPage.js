import Hero from 'views/LandingPage/sections/Hero/Hero';
import FeaturesProvider from 'context/features';
import React from 'react';
import Features from './sections/Features/Features';

const LandingPage = () => (
  <FeaturesProvider>
    <Hero />
    <Features />
  </FeaturesProvider>
);

export default LandingPage;
