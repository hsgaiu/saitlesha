import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';

const categories = [
  {
    id: 'our-works',
    title: 'Наши работы',
    image: [new URL('../images/works/A1phaCrypt.png', import.meta.url).href],
  },
  {
    id: 'granite',
    title: 'Гранитные памятники',
    image: [new URL('../images/mon_gran/A1phaCrypt.png', import.meta.url).href],
  },
  {
    id: 'marble',
    title: 'Мраморные памятники',
    image: [new URL('../images/mon_mram/A1phaCrypt.png', import.meta.url).href],
  },
  {
    id: 'monument',
    title: 'Металические памятники',
    image: [new URL('../images/monument/A1phaCrypt.png', import.meta.url).href],
  },
  {
    id: 'tables',
    title: 'Столы',
    image: new URL('../images/tables/A1phaCrypt.png', import.meta.url).href
  },
  {
    id: 'fences',
    title: 'Ограды',
    image: [new URL('../images/fences/A1phaCrypt.png', import.meta.url).href],
  },
  {
    id: 'crosses',
    title: 'Кресты',
    image: [new URL('../images/works/krest2131231231231.png', import.meta.url).href],
  },
  {
    id: 'bences',
    title: 'Лавочки',
    image: [new URL('../images/works/ByteX9.png', import.meta.url).href],
  },
  {
    id: 'gravestones',
    title: 'Надгробия',
    image: [new URL('../images/gravestones/A1phaCrypt.png', import.meta.url).href],
  },
  {
    id: 'crosses-gravestones',
    title: 'Крест-Надгробия',
    image: [new URL('../images/crosses-gravestones/A1phaCrypt.png', import.meta.url).href],
  },
  {
    id: 'monuments-gravestones',
    title: 'Памятник-Надгробия',
    image: [new URL('../images/monuments-gravestones/A1phaCrypt.png', import.meta.url).href],
  },
];

export function Catalog() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="glass-container p-8 mb-12">
          <h1 className="text-4xl font-bold mb-4">Каталог продукции</h1>
          <p className="text-gray-300 text-lg">
            Широкий выбор памятников и ритуальных изделий высокого качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/catalog/${category.id}`}
              className="glass-container group overflow-hidden"
            >
              <div className="aspect-square relative">
                <div className="absolute inset-0 product-image-bg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center text-white">
                    <Bookmark className="w-5 h-5 mr-2" />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}