import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-stone-800 text-stone-200">
      <div className="container mx-auto px-4">
        <div className="py-2 border-b border-stone-700 flex justify-between items-center text-sm">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-stone-400" />
            <span>+7 (917) 337-31-21</span>
          </div>
          <span className="hidden md:block">Пн-Вс: 8:00 - 21:00</span>
        </div>

        <nav className="py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-stone-100">
            Гранит Волгоград
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-stone-100 transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="hover:text-stone-100 transition-colors">
              Каталог
            </Link>
            <Link to="/reviews" className="hover:text-stone-100 transition-colors">
              Отзывы
            </Link>
            <Link to="/contacts" className="hover:text-stone-100 transition-colors">
              Контакты
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-stone-100" />
            ) : (
              <Menu className="w-6 h-6 text-stone-100" />
            )}
          </button>

          {isMenuOpen && (
            <div className="fixed inset-0 bg-stone-800 z-40">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl hover:text-stone-100 transition-colors"
                >
                  Главная
                </Link>
                <Link
                  to="/catalog"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl hover:text-stone-100 transition-colors"
                >
                  Каталог
                </Link>
                <Link
                  to="/reviews"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl hover:text-stone-100 transition-colors"
                >
                  Отзывы
                </Link>
                <Link
                  to="/contacts"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl hover:text-stone-100 transition-colors"
                >
                  Контакты
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}