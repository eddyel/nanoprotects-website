import { useState, useRef, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const getCategoriesData = (t: any) => [
  {
    id: 'pierres',
    titleKey: 'category1Title',
    showProcessIcons: true,
    processStepsKeys: ['processStep1', 'processStep2', 'processStep3'],
    issuesKey: 'category1Issues',
    actionsKey: 'category1Actions',
    surfacesKey: 'category1Surfaces'
  },
  {
    id: 'maconnerie',
    titleKey: 'category2Title',
    showProcessIcons: true,
    processStepsKeys: ['processStep1', 'processStep2', 'processStep3'],
    issuesKey: 'category2Issues',
    actionsKey: 'category2Actions',
    surfacesKey: 'category2Surfaces'
  },
  {
    id: 'bois',
    titleKey: 'category3Title',
    showProcessIcons: true,
    processStepsKeys: ['processStep1', 'processStep2', 'processStep3'],
    issuesKey: 'category3Issues',
    actionsKey: 'category3Actions',
    surfacesKey: 'category3Surfaces'
  },
  {
    id: 'textiles',
    titleKey: 'category4Title',
    showProcessIcons: true,
    processStepsKeys: ['processStep1', 'processStep2', 'processStep3'],
    issuesKey: 'category4Issues',
    actionsKey: 'category4Actions',
    surfacesKey: 'category4Surfaces'
  },
  {
    id: 'securite',
    titleKey: 'category5Title',
    icon: 'slipping',
    issuesKey: 'category5Issues',
    actionsKey: 'category5Actions',
    surfacesKey: 'category5Surfaces'
  },
  {
    id: 'metaux',
    titleKey: 'category6Title',
    subtitleKey: 'category6Subtitle',
    issuesKey: 'category6Issues',
    actionsKey: 'category6Actions',
    surfacesKey: 'category6Surfaces'
  }
];

const processIcons: Record<string, React.ReactNode> = {
  prep: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
    </svg>
  ),
  nano: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  protect: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
};

export default function MateriauxExpertises() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeTab, setActiveTab] = useState('pierres');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const categories = getCategoriesData(t);
  const activeCategory = categories.find(cat => cat.id === activeTab);

  const checkScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => checkScroll();
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getTranslationValue = (key: string): string => {
    const keys = key.split('.');
    let value: any = t;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              {t.materials.title}
            </h1>
            <p className="text-lg text-gray-600">
              {t.materials.subtitle}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="relative mb-12">
            {showLeftArrow && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
            )}

            <div
              ref={containerRef}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
              style={{ scrollBehavior: 'smooth' }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex-shrink-0 px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    activeTab === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {getTranslationValue(`materials.${category.titleKey}`)}
                </button>
              ))}
            </div>

            {showRightArrow && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            )}
          </div>

          {/* Category Content */}
          {activeCategory && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {getTranslationValue(`materials.${activeCategory.titleKey}`)}
                </h2>
                
                {activeCategory.subtitleKey && (
                  <p className="text-gray-600 mb-6 italic">
                    {getTranslationValue(`materials.${activeCategory.subtitleKey}`)}
                  </p>
                )}

                {activeCategory.showProcessIcons && activeCategory.processStepsKeys && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                      Processus
                    </p>
                    <div className="flex gap-6">
                      {activeCategory.processStepsKeys.map((stepKey, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            {processIcons[['prep', 'nano', 'protect'][idx]] || null}
                          </div>
                          <span className="text-xs font-medium text-gray-800 text-center whitespace-nowrap">
                            {getTranslationValue(`materials.${stepKey}`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.materials.issuesLabel}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {getTranslationValue(`materials.${activeCategory.issuesKey}`)}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.materials.actionsLabel}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {getTranslationValue(`materials.${activeCategory.actionsKey}`)}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.materials.surfacesLabel}</h3>
                  <p className="text-gray-600 italic">
                    {getTranslationValue(`materials.${activeCategory.surfacesKey}`)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
