import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-stone-100">О компании</h3>
            <p className="text-stone-300">
              Мы специализируемся на изготовлении памятников из гранита и
              мрамора, предлагая широкий выбор надгробий, крестов и мемориальных
              комплексов.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-stone-100">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-stone-400" />
                <span>г. Волгоград и Волгоградская область</span>
              </div>
              <div className="flex items-center gap-4">
              {/* ТЕЛЕФОН */}
              <a
                href="tel:+79173373121"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2 text-stone-400" />
                <span>+7 (917) 337-31-21</span>
              </a>

              {/* MAX */}
              <a
                href="max://chat/gran.volgograd"
                onClick={(e) => {
                  setTimeout(() => {
                    window.location.href = "https://max.ru/gran.volgograd";
                  }, 500);
                }}
                className="flex items-center text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 text-stone-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4 4h16v16H4z" />
                </svg>
                <span>Max</span>
              </a>
            </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-stone-400" />
                <span>Пн-Вс: 8:00 - 21:00</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-stone-100">Каталог</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/catalog/granite" className="hover:text-stone-100 transition-colors">
                Гранитные памятники
              </Link>
              <Link to="/catalog/marble" className="hover:text-stone-100 transition-colors">
                Мраморные памятники
              </Link>
              <Link to="/catalog/monument" className="hover:text-stone-100 transition-colors">
                Металические памятники
              </Link>
              <Link to="/catalog/tables" className="hover:text-stone-100 transition-colors">
                Столы
              </Link>
              <Link to="/catalog/fences" className="hover:text-stone-100 transition-colors">
                Ограды
              </Link>
              <Link to="/catalog/crosses" className="hover:text-stone-100 transition-colors">
                Кресты
              </Link>
              <Link to="/catalog/bences" className="hover:text-stone-100 transition-colors">
                Лавочки
              </Link>
              <Link to="/catalog/gravestones" className="hover:text-stone-100 transition-colors">
                Надгробия
              </Link>
              <Link to="/catalog/crosses-gravestones" className="hover:text-stone-100 transition-colors">
                Крест-Надгробие
              </Link>
              <Link to="/catalog/monuments-gravestones" className="hover:text-stone-100 transition-colors">
                Памятник-Надгробие
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-6 text-center text-stone-400">
          <p>© 2026 Гранит Волгоград. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}