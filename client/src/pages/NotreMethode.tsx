import Navigation from '@/components/Navigation';
import { Sparkles, Shield, CheckCircle, Clock, TrendingUp, Handshake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function NotreMethode() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container max-w-6xl">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold text-left mb-8" style={{ color: '#A33215' }}>
            {t.method.title}
          </h1>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-20">
            {/* Subtitle removed as per new design */}
          </p>
          
          {/* Three Phases */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 auto-rows-fr">
            {/* Phase 1: Diagnostic */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-display text-3xl font-bold shadow-lg">
                1
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 rounded-2xl p-10 pt-16 h-full" style={{ borderColor: '#A75C16' }}>
                <div className="flex items-center gap-4 mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                  <h2 className="font-display text-[1.75rem] font-bold text-secondary">
                    {t.method.phase1Title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.method.phase1Description}
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase1Point1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase1Point2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase1Point3}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2: Révéler */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-display text-3xl font-bold shadow-lg">
                2
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 rounded-2xl p-10 pt-16 h-full" style={{ borderColor: '#A75C16' }}>
                <div className="flex items-center gap-4 mb-6">
                  <Sparkles className="w-10 h-10 text-primary" />
                  <h2 className="font-display text-[1.75rem] font-bold text-secondary">
                    {t.method.phase2Title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.method.phase2Description}
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase2Point1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase2Point2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase2Point3}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3: Protéger */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-display text-3xl font-bold shadow-lg">
                3
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 rounded-2xl p-10 pt-16 h-full" style={{ borderColor: '#A75C16' }}>
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-10 h-10 text-primary" />
                  <h2 className="font-display text-[1.75rem] font-bold text-secondary">
                    {t.method.phase3Title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.method.phase3Description}
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase3Point1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase3Point2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase3Point3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Three Metrics */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-5xl font-bold text-primary mb-2">60%</div>
              <p className="text-gray-700 font-semibold mb-2">Temps Libéré</p>
              <p className="text-sm text-gray-600">
                Optimisation des processus de nettoyage pour votre personnel
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-5xl font-bold text-primary mb-2">12-18</div>
              <p className="text-gray-700 font-semibold mb-2">mois</p>
              <p className="text-sm text-gray-600">
                Retour d'investissement prouvé grâce aux économies de coûts
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-4xl font-bold text-primary mb-2">Partenariat</div>
              <p className="text-gray-700 font-semibold mb-2">Durable</p>
              <p className="text-sm text-gray-600">
                Accompagnement continu et dialogue systématique
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
