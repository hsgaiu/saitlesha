import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ServicesList } from './ServicesList';

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[700px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://img.freepik.com/premium-photo/natural-granite-background-with-corrosion-deep-crack-texture-surface_271317-2131.jpg")'
      }}
    >
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <div className="w-full max-w-5xl text-[#e2d9d1] border border-[#c4a484] p-8 rounded-lg bg-[#2c2c2c]/40 backdrop-blur-sm">
          <h1 className="text-4xl font-bold mb-8 text-shadow leading-tight">
            Мемориальные изделия <br />
            <span className="text-[#c4a484]">в Волгограде и области</span>
          </h1>
          <div className="text-xl space-y-6 mb-10">
            <p className="text-xl leading-relaxed">
              Создаем мемориальные изделия с особым вниманием к каждой детали. 
              Профессиональное изготовление изделий из натурального камня и металла.
            </p>
            <ServicesList />
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/catalog"
              className="inline-flex items-center bg-[#c4a484] text-[#2c2c2c] px-10 py-5 rounded-lg font-semibold hover:bg-[#b39374] transition-all transform hover:scale-105 text-2xl"
            >
              Перейти в каталог
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contacts"
              className="inline-flex items-center bg-transparent border-2 border-[#c4a484] text-[#c4a484] px-10 py-5 rounded-lg font-semibold hover:bg-[#c4a484]/10 transition-all text-2xl"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
