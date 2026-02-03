import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

const villes = [
  'Marrakech', 'Casablanca', 'Essaouira', 'Agadir', 
  'Rabat', 'El Jadida', 'Tanger', 'Autre'
];

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedMateriaux, setSelectedMateriaux] = useState<string[]>([]);
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const [ville, setVille] = useState('');
  const [autreVille, setAutreVille] = useState('');

  // Get material and zone translations
  const materiaux = [
    t.contact.material1,
    t.contact.material2,
    t.contact.material3,
    t.contact.material4,
    t.contact.material5,
    t.contact.material6,
    t.contact.material7,
    t.contact.material8,
    t.contact.material9,
    t.contact.material10,
    t.contact.material11,
  ];

  const zones = [
    t.contact.zone1,
    t.contact.zone2,
    t.contact.zone3,
    t.contact.zone4,
  ];

  const toggleMateriau = (materiau: string) => {
    setSelectedMateriaux(prev =>
      prev.includes(materiau)
        ? prev.filter(m => m !== materiau)
        : [...prev, materiau]
    );
  };

  const toggleZone = (zone: string) => {
    setSelectedZones(prev =>
      prev.includes(zone)
        ? prev.filter(z => z !== zone)
        : [...prev, zone]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulaire soumis ! (Fonctionnalité backend à implémenter)');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold text-left mb-8" style={{ color: '#A33215' }}>
            {t.contact.title}
          </h1>
          <p className="text-center text-gray-600 text-lg mb-12">
            {t.contact.subtitle}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Standard Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  inputMode="text"
                  required
                  className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  inputMode="email"
                  required
                  className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.contact.phoneLabel}
              </label>
              <input
                type="tel"
                inputMode="tel"
                required
                className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+212 6XX XXX XXX"
              />
            </div>

            {/* Multi-select: Nature des Matériaux */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.contact.materialNature}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {materiaux.map((materiau) => (
                  <button
                    key={materiau}
                    type="button"
                    onClick={() => toggleMateriau(materiau)}
                    className={`px-4 py-2 min-h-[44px] rounded-lg border-2 transition-all text-sm font-medium active:scale-[0.98] ${
                      selectedMateriaux.includes(materiau)
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {selectedMateriaux.includes(materiau) && (
                      <Check className="w-4 h-4 inline mr-1" />
                    )}
                    {materiau}
                  </button>
                ))}
              </div>
            </div>

            {/* Multi-select: Zone d'Application */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.contact.applicationZone}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {zones.map((zone) => (
                  <button
                    key={zone}
                    type="button"
                    onClick={() => toggleZone(zone)}
                    className={`px-4 py-2 min-h-[44px] rounded-lg border-2 transition-all text-sm font-medium active:scale-[0.98] ${
                      selectedZones.includes(zone)
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {selectedZones.includes(zone) && (
                      <Check className="w-4 h-4 inline mr-1" />
                    )}
                    {zone}
                  </button>
                ))}
              </div>
            </div>

            {/* City Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.contact.city}
              </label>
              <select
                required
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t.contact.selectCityPlaceholder}</option>
                {villes.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            {/* Conditional: Autre Ville */}
            {ville === 'Autre' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.specifyCity}
                </label>
                <input
                  type="text"
                  value={autreVille}
                  onChange={(e) => setAutreVille(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t.contact.cityPlaceholder}
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.contact.message}
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-lg py-6 border-2 btn-brand"
            >
              {t.contact.sendRequest}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
