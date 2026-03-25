import React from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';

export function Contacts() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="glass-container p-8 mb-12">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-gray-300 text-lg">
            Мы всегда готовы ответить на ваши вопросы и помочь с выбором
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-container p-8">
            <h2 className="text-2xl font-semibold mb-8 text-white">
              Наши контакты
            </h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Зона обслуживания</h3>
                  <p className="text-gray-300">
                    Волгоград и область в радиусе 200 км
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Способы связи</h3>

                  {/* КНОПКА MAX */}
                  <div className="mt-2">
                    <a
                      href="max://chat/gran.volgograd" // deep link (замени username)
                      onClick={(e) => {
                        // fallback если приложение не открылось
                        setTimeout(() => {
                          window.location.href = "https://max.ru/gran.volgograd";
                        }, 500);
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#6C5CE7] text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
                    >
                      {/* ИКОНКА MAX */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4 4h16v16H4z" />
                      </svg>

                      Написать в Max
                    </a>
                  </div>

                  {/* ОТДЕЛЬНО СТРОКА С ЗВОНКОМ */}
                  <div className="mt-2">
                    <a
                      href="tel:+79173373121"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Позвонить: +7 (917) 337-31-21
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Режим работы</h3>
                  <p className="text-gray-300">Пн-Вс: 8:00 - 21:00</p>
                  <p className="text-gray-300 text-sm">
                    Работаем без выходных. Выезд на замер в любой день.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-container p-8">
            <h2 className="text-2xl font-semibold mb-8 text-white">
              Зона обслуживания
            </h2>
            <div className="rounded-lg overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1087533.3982547844!2d44.51583374849518!3d48.705398950535066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1710861367144!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded text-sm text-gray-700">
                Радиус обслуживания: 200 км
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}