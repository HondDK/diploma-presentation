import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera, Shield, Cpu, Zap, TrendingUp, Users, Award, Rocket } from 'lucide-react';

const FaceIDPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Система распознавания лиц для турникетов",
      subtitle: "Дипломный проект",
      content: "Разработка на базе FACE ID",
      author: "Коноваленко Данил Алексеевич",
      icon: <Camera className="w-20 h-20 mb-6 text-blue-500" />
    },
    {
      id: 2,
      title: "Актуальность проекта",
      points: [
        "Повышение безопасности кампуса",
        "Автоматизация контроля доступа",
        "Современные биометрические технологии",
        "Экономическая эффективность"
      ],
      icon: <Shield className="w-16 h-16 mb-4 text-indigo-500" />
    },
    {
      id: 3,
      title: "Архитектура системы",
      components: [
        { name: "Raspberry Pi 5", desc: "Центральный модуль" },
        { name: "HD веб-камера", desc: "Захват изображения" },
        { name: "7\" сенсорный дисплей", desc: "Интерфейс" },
        { name: "RFID-считыватель", desc: "Альтернативный доступ" }
      ],
      icon: <Cpu className="w-16 h-16 mb-4 text-purple-500" />
    },
    {
      id: 4,
      title: "Алгоритмы распознавания",
      features: [
        "HOG + SVM для обнаружения лиц",
        "CNN для точной идентификации",
        "128-мерный вектор признаков",
        "Защита от спуфинг-атак"
      ],
      icon: <Zap className="w-16 h-16 mb-4 text-yellow-500" />
    },
    {
      id: 5,
      title: "Результаты тестирования",
      stats: [
        { label: "Точность распознавания", value: "99.2%" },
        { label: "Время отклика", value: "184 мс" },
        { label: "Защита от подделок", value: "98.5%" },
        { label: "Энергопотребление", value: "4.8 Вт" }
      ],
      icon: <TrendingUp className="w-16 h-16 mb-4 text-green-500" />
    },
    {
      id: 6,
      title: "Производительность системы",
      metrics: [
        "До 12 проходов в минуту",
        "Работа с базой до 10 000 пользователей",
        "15 часов автономной работы",
        "Надежность 99.4%"
      ],
      icon: <Users className="w-16 h-16 mb-4 text-blue-500" />
    },
    {
      id: 7,
      title: "Экономическая эффективность",
      benefits: [
        { label: "Стоимость разработки", value: "367 000 ₸" },
        { label: "Экономия в год", value: "1 370 000 ₸" },
        { label: "Срок окупаемости", value: "3.2 месяца" },
        { label: "Экономия за 5 лет", value: "6 383 000 ₸" }
      ],
      icon: <Award className="w-16 h-16 mb-4 text-amber-500" />
    },
    {
      id: 8,
      title: "Сравнение с аналогами",
      comparison: [
        "В 2-3 раза дешевле коммерческих решений",
        "Энергопотребление ниже на 60%",
        "Открытая архитектура",
        "Возможность модификации"
      ],
      icon: <TrendingUp className="w-16 h-16 mb-4 text-teal-500" />
    },
    {
      id: 9,
      title: "Перспективы развития",
      future: [
        "Интеграция с системами видеонаблюдения",
        "Мобильное приложение",
        "Облачная синхронизация",
        "Расширенная аналитика"
      ],
      icon: <Rocket className="w-16 h-16 mb-4 text-indigo-500" />
    },
    {
      id: 10,
      title: "Заключение",
      summary: "Разработана эффективная система контроля доступа с высокой точностью распознавания, низким энергопотреблением и быстрой окупаемостью",
      thanks: "Спасибо за внимание!",
      icon: <Award className="w-20 h-20 mb-6 text-purple-500" />
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isAnimating]);

  const renderSlide = (slide) => {
    const fadeInClass = "animate-fadeIn";
    const slideUpClass = "animate-slideUp";

    switch (slide.id) {
      case 1:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className={fadeInClass}>
              {slide.icon}
            </div>
            <h1 className={`text-5xl font-bold mb-4 text-gray-800 ${slideUpClass}`}>
              {slide.title}
            </h1>
            <p className={`text-2xl text-gray-600 mb-2 ${slideUpClass} animation-delay-200`}>
              {slide.subtitle}
            </p>
            <p className={`text-xl text-gray-500 mb-8 ${slideUpClass} animation-delay-400`}>
              {slide.content}
            </p>
            <p className={`text-lg text-gray-400 ${slideUpClass} animation-delay-600`}>
              {slide.author}
            </p>
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className={fadeInClass}>
              {slide.icon}
            </div>
            <h2 className={`text-4xl font-bold mb-8 text-gray-800 ${slideUpClass}`}>
              {slide.title}
            </h2>
            <div className="space-y-4">
              {slide.points.map((point, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 ${slideUpClass} animation-delay-${(index + 1) * 200}`}
                >
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <p className="text-xl text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className={fadeInClass}>
              {slide.icon}
            </div>
            <h2 className={`text-4xl font-bold mb-8 text-gray-800 ${slideUpClass}`}>
              {slide.title}
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {slide.components.map((comp, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-lg ${fadeInClass} animation-delay-${(index + 1) * 200}`}
                >
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">{comp.name}</h3>
                  <p className="text-gray-600">{comp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className={fadeInClass}>
              {slide.icon}
            </div>
            <h2 className={`text-4xl font-bold mb-8 text-gray-800 ${slideUpClass}`}>
              {slide.title}
            </h2>
            <div className="space-y-4 max-w-2xl">
              {slide.features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg ${slideUpClass} animation-delay-${(index + 1) * 200}`}
                >
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className={fadeInClass}>
              {slide.icon}
            </div>
            <h2 className={`text-4xl font-bold mb-8 text-gray-800 ${slideUpClass}`}>
              {slide.title}
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {slide.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center ${fadeInClass} animation-delay-${(index + 1) * 200}`}
                >
                  <p className="text-5xl font-bold text-green-500 mb-2">{stat.value}</p>
                  <p className="text-lg text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className={fadeInClass}>
              {slide.icon}
            </div>
            <h2 className={`text-4xl font-bold mb-8 text-gray-800 ${slideUpClass}`}>
              {slide.title}
            </h2>
            <div className="space-y-4">
              {slide.metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 ${slideUpClass} animation-delay-${(index + 1) * 200}`}
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <p className="text-xl text-gray-700">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className={fadeInClass}>
              {slide.icon}
            </div>
            <h2 className={`text-4xl font-bold mb-8 text-gray-800 ${slideUpClass}`}>
              {slide.title}
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {slide.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-lg shadow-md ${fadeInClass} animation-delay-${(index + 1) * 200}`}
                >
                  <p className="text-sm text-gray-600 mb-1">{benefit.label}</p>
                  <p className="text-2xl font-bold text-amber-600">{benefit.value}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 8:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className={fadeInClass}>
              {slide.icon}
            </div>
            <h2 className={`text-4xl font-bold mb-8 text-gray-800 ${slideUpClass}`}>
              {slide.title}
            </h2>
            <div className="space-y-4 max-w-2xl">
              {slide.comparison.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 ${slideUpClass} animation-delay-${(index + 1) * 200}`}
                >
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <p className="text-xl text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className={fadeInClass}>
              {slide.icon}
            </div>
            <h2 className={`text-4xl font-bold mb-8 text-gray-800 ${slideUpClass}`}>
              {slide.title}
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {slide.future.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform ${fadeInClass} animation-delay-${(index + 1) * 200}`}
                >
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 10:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className={fadeInClass}>
              {slide.icon}
            </div>
            <h2 className={`text-4xl font-bold mb-6 text-gray-800 ${slideUpClass}`}>
              {slide.title}
            </h2>
            <p className={`text-xl text-gray-600 mb-8 max-w-3xl ${slideUpClass} animation-delay-200`}>
              {slide.summary}
            </p>
            <p className={`text-3xl font-semibold text-purple-600 ${slideUpClass} animation-delay-400`}>
              {slide.thanks}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }

        .slide-transition {
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
      `}</style>

      {/* Navigation */}
      <div className="absolute top-4 right-4 text-gray-500 text-sm">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Slide Content */}
      <div className={`h-full w-full flex items-center justify-center p-16 slide-transition ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {renderSlide(slides[currentSlide])}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className={`absolute left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
        disabled={currentSlide === 0}
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all ${currentSlide === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
        disabled={currentSlide === slides.length - 1}
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-purple-500' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FaceIDPresentation;