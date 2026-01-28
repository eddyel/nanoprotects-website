import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';

export default function PourquoiNousChoisir() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const reasons = [
    {
      number: 1,
      titleKey: 'reason1Title',
      descriptionKey: 'reason1Description',
      icon: 'network'
    },
    {
      number: 2,
      titleKey: 'reason2Title',
      descriptionKey: 'reason2Description',
      icon: 'shield'
    },
    {
      number: 3,
      titleKey: 'reason3Title',
      descriptionKey: 'reason3Description',
      icon: 'balance'
    },
    {
      number: 4,
      titleKey: 'reason4Title',
      descriptionKey: 'reason4Description',
      icon: 'chart'
    }
  ];

  // Scroll animation setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    }, observerOptions);

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.reason-card');
      cards.forEach((card, index) => {
        card.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-600');
        (card as HTMLElement).style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  // SVG icon renderer
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'network':
        return (
          <svg className="w-12 h-12 stroke-primary group-hover:stroke-accent transition-colors duration-300" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="24" cy="12" r="4"/>
            <circle cx="18" cy="22" r="4"/>
            <circle cx="30" cy="22" r="4"/>
            <circle cx="24" cy="32" r="4"/>
            <line x1="24" y1="16" x2="24" y2="28"/>
            <line x1="21" y1="20" x2="20" y2="24"/>
            <line x1="27" y1="20" x2="28" y2="24"/>
            <path d="M20 36L28 36M24 36L24 42M18 42L30 42"/>
          </svg>
        );
      case 'shield':
        return (
          <svg className="w-12 h-12 stroke-primary group-hover:stroke-accent transition-colors duration-300" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 6L12 12V22C12 30 18 36 24 42C30 36 36 30 36 22V12L24 6Z"/>
            <path d="M24 18C21 18 19 20 19 23C19 25 20 26 21.5 27.5L24 30L26.5 27.5C28 26 29 25 29 23C29 20 27 18 24 18Z" strokeWidth="1.5"/>
            <path d="M19 28C19 28 21 30 24 30C27 30 29 28 29 28" strokeLinecap="round"/>
          </svg>
        );
      case 'balance':
        return (
          <svg className="w-12 h-12 stroke-primary group-hover:stroke-accent transition-colors duration-300" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="24" r="7"/>
            <circle cx="30" cy="24" r="7"/>
            <line x1="18" y1="17" x2="30" y2="17" strokeWidth="1.5"/>
            <line x1="18" y1="31" x2="30" y2="31" strokeWidth="1.5"/>
            <path d="M12 24L6 24M42 24L36 24" strokeLinecap="round" strokeWidth="2"/>
            <path d="M24 12L24 6M24 42L24 36" strokeLinecap="round" strokeWidth="2"/>
            <circle cx="18" cy="24" r="2.5" fill="currentColor"/>
            <circle cx="30" cy="24" r="2.5" fill="currentColor"/>
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-12 h-12 stroke-primary group-hover:stroke-accent transition-colors duration-300" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 24L16 16L24 24L32 16L40 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 32L16 28L20 32M28 32L32 28L36 32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="16" cy="16" r="2" fill="currentColor"/>
            <circle cx="24" cy="24" r="2" fill="currentColor"/>
            <circle cx="32" cy="16" r="2" fill="currentColor"/>
            <line x1="8" y1="40" x2="40" y2="40" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container max-w-6xl">
          {/* Page Title */}
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold text-left text-secondary mb-20">
            {t.why.title}
          </h1>
          
          {/* 4-column grid on desktop, 2 on tablet, 1 on mobile */}
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <article 
                key={index}
                className="reason-card relative bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
              >
                {/* Top border animation on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-lg" />

                {/* Icon wrapper */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  {renderIcon(reason.icon)}
                </div>

                {/* Title with number */}
                <h2 className="text-lg font-semibold text-secondary mb-4 leading-snug">
                  <span className="text-primary font-bold">{reason.number}.</span> {t.why[reason.titleKey as keyof typeof t.why]}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.why[reason.descriptionKey as keyof typeof t.why]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
