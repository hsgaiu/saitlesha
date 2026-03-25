import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="glass-container p-8 text-center group hover:transform hover:scale-105 transition-all">
      <div className="w-20 h-20 mx-auto mb-6 bg-[#c4a484] text-[#2c2c2c] rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-all">
        <Icon className="w-10 h-10" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-[#e2d9d1]">{title}</h3>
      <p className="text-[#e2d9d1]/80">{description}</p>
    </div>
  );
}