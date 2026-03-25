import React from 'react';

const services = [
  'Изготовление памятников',
  'Художественная гравировка',
  '3D-портреты на камне',
  'Благоустройство могил',
  'Реставрация памятников',
  'Установка оград',
];

const offers = [
  'Бесплатное хранение',
  'Внесезонные скидки',
  'Дистанционная работа',
  'Скидки участникам СВО',
];

const ListColumn = ({ items }) => (
  <ul className="space-y-3 text-xl">
    {items.map((item) => (
      <li key={item} className="flex items-center">
        <div className="w-2 h-2 bg-[#c4a484] rounded-full mr-3"></div>
        {item}
      </li>
    ))}
  </ul>
);

export function ServicesList() {
  const midPointServices = Math.ceil(services.length / 2);
  const firstColumnServices = services.slice(0, midPointServices);
  const secondColumnServices = services.slice(midPointServices);
  
  const midPointOffers = Math.ceil(offers.length / 2);
  const firstColumnOffers = offers.slice(0, midPointOffers);
  const secondColumnOffers = offers.slice(midPointOffers);

  return (
    <div className="p-8 bg-[#2c2c2c]/40 rounded-lg backdrop-blur-sm border border-[#c4a484]/20">
      <h3 className="text-[#c4a484] font-semibold text-3xl mb-4">Наши услуги:</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <ListColumn items={firstColumnServices} />
        <ListColumn items={secondColumnServices} />
      </div>

      <div className="mt-8 p-8 bg-[#2c2c2c]/40 rounded-lg backdrop-blur-sm border border-[#c4a484]/20">
        <h3 className="text-[#c4a484] font-semibold text-3xl mb-4">Наши предложения:</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <ListColumn items={firstColumnOffers} />
          <ListColumn items={secondColumnOffers} />
        </div>

        <div className="text-center mt-4">
          <p className="text-xl">При заказе зимой - бесплатная установка весной</p>
        </div>
      </div>
    </div>
  );
}
