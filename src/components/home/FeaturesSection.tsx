import React from 'react';
import { Trophy, Wrench, Shield, Heart } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Trophy,
    title: 'Опыт и качество',
    description: 'Более 15 лет опыта в изготовлении памятников. Используем только проверенные материалы и современные технологии обработки.',
  },
  {
    icon: Wrench,
    title: 'Собственное производство',
    description: 'Полный цикл изготовления на собственном производстве позволяет гарантировать качество и соблюдать сроки.',
  },
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Предоставляем гарантию на все изделия и работы. Используем только качественные материалы с сертификатами.',
  },
  {
    icon: Heart,
    title: 'Индивидуальный подход',
    description: 'Учитываем все пожелания заказчика. Предлагаем различные варианты оформления и материалов.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-[#2c2c2c]/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#c4a484]">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}