import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Check, ChevronDown, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { toast } from 'sonner';

// ===========================================
// TYPES
// ===========================================
interface Country {
  id: string;
  code: string;
  flag: string;
  name: string;
  search: string;
  phoneDigits: number;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  autreMateriau: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  autreMateriau?: string;
  autreVille?: string;
}

// ===========================================
// DONNÉES PAYS
// ===========================================
const countries: Country[] = [
  { id: 'ma', code: "+212", flag: "🇲🇦", name: "Maroc", search: "maroc +212", phoneDigits: 9 },
  { id: 'fr', code: "+33",  flag: "🇫🇷", name: "France", search: "france +33", phoneDigits: 9 },
  { id: 'es', code: "+34",  flag: "🇪🇸", name: "Espagne", search: "espagne spain +34", phoneDigits: 9 },
  { id: 'us', code: "+1",   flag: "🇺🇸", name: "États-Unis", search: "etats unis usa america +1", phoneDigits: 10 },
  { id: 'ca', code: "+1",   flag: "🇨🇦", name: "Canada", search: "canada +1", phoneDigits: 10 },
];

const VILLES = ['Marrakech', 'Casablanca', 'Essaouira', 'Agadir', 'Rabat', 'El Jadida', 'Tanger', 'Autre'];

// ===========================================
// COMPOSANT TOGGLE BUTTON
// ===========================================
function ToggleButton({ label, selected, onToggle }: { label: string; selected: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
        selected
          ? 'border-primary bg-primary/10 text-primary'
          : 'border-gray-300 text-gray-700 hover:border-gray-400'
      }`}
    >
      {selected && <Check className="w-4 h-4 inline mr-1" />}
      {label}
    </button>
  );
}

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [, setLocation] = useLocation();

  // États
  const [selectedMateriaux, setSelectedMateriaux] = useState<string[]>([]);
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const [selectedProtectionTypes, setSelectedProtectionTypes] = useState<string[]>([]);
  const [ville, setVille] = useState('');
  const [autreVille, setAutreVille] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    autreMateriau: '',
  });

  // Téléphone
  const [selectedCountryId, setSelectedCountryId] = useState('ma');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // Formulaire
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const autreVilleRef = useRef<HTMLInputElement>(null);

  // Dérivés
  const selectedCountry = countries.find(c => c.id === selectedCountryId) ?? countries[0];
  const expectedDigits = selectedCountry.phoneDigits;
  const filteredCountries = countries.filter(c =>
    c.search.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const materiaux = [
    t.contact.material1, t.contact.material2, t.contact.material3, t.contact.material4,
    t.contact.material5, t.contact.material6, t.contact.material7, t.contact.material8,
    t.contact.material9, t.contact.material10, t.contact.material11, t.contact.material12,
    t.contact.material13, t.contact.material14, t.contact.material15, t.contact.material16,
  ];
  const zones = [t.contact.zone1, t.contact.zone2, t.contact.zone3, t.contact.zone4];
  const protections = [
    t.contact.protectionWater, t.contact.protectionOil,
    t.contact.protectionMineralization, t.contact.protectionAntiSlip,
  ];
  const isAutreSelected = selectedMateriaux.includes(t.contact.material16);

  // Effets
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isDropdownOpen) searchInputRef.current?.focus();
  }, [isDropdownOpen]);

  useEffect(() => {
    if (ville === 'Autre' && autreVilleRef.current) {
      setTimeout(() => autreVilleRef.current?.focus(), 100);
    }
  }, [ville]);

  useEffect(() => {
    setFormData(prev => ({ ...prev, phone: '' }));
  }, [selectedCountryId]);

  // Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, expectedDigits);
    const formatted = digits.replace(/(\d{3})(?=\d)/g, '$1 ').trimEnd();
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleCountrySelect = (id: string) => {
    setSelectedCountryId(id);
    setIsDropdownOpen(false);
    setSearchQuery('');
  };

  const toggleMateriau = (materiau: string) => {
    setSelectedMateriaux(prev =>
      prev.includes(materiau) ? prev.filter(x => x !== materiau) : [...prev, materiau]
    );
  };

  const toggleZone = (zone: string) => {
    setSelectedZones(prev =>
      prev.includes(zone) ? prev.filter(x => x !== zone) : [...prev, zone]
    );
  };

  const toggleProtection = (prot: string) => {
    setSelectedProtectionTypes(prev =>
      prev.includes(prot) ? prev.filter(x => x !== prot) : [...prev, prot]
    );
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email invalide';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else {
      const digits = formData.phone.replace(/\s/g, '');
      if (digits.length !== expectedDigits) {
        newErrors.phone = `${expectedDigits} chiffres requis`;
      }
    }

    if (!formData.message.trim()) newErrors.message = 'Le message est requis';

    if (isAutreSelected && !formData.autreMateriau.trim()) {
      newErrors.autreMateriau = 'Précisez le matériau';
    }

    if (ville === 'Autre' && !autreVille.trim()) {
      newErrors.autreVille = 'Précisez la ville';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ===========================================
  // HANDLE SUBMIT CORRIGÉ AVEC APPEL À LA FONCTION
  // ===========================================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateForm()) {
      toast.error('Veuillez corriger les erreurs');
      return;
    }

    setIsSubmitting(true);

    // Préparation des données
    const finalCity = ville === 'Autre' ? autreVille : ville;
    const cleanPhone = formData.phone.replace(/\s/g, '');
    const fullPhone = `${selectedCountry.code} ${cleanPhone}`;
    const materialsStr = selectedMateriaux.length ? selectedMateriaux.join(', ') : 'Aucun';
    const zonesStr = selectedZones.length ? selectedZones.join(', ') : 'Aucune';
    const protectionsStr = selectedProtectionTypes.length ? selectedProtectionTypes.join(', ') : 'Aucune';

    // ===========================================
    // 1. ENVOI À NETLIFY FORMS
    // ===========================================
    const formDataToSend = new FormData();
    formDataToSend.append('form-name', 'contact');
    formDataToSend.append('bot-field', '');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', fullPhone);
    formDataToSend.append('city', finalCity);
    formDataToSend.append('country', `${selectedCountry.flag} ${selectedCountry.name}`);
    formDataToSend.append('materials', materialsStr);
    formDataToSend.append('zones', zonesStr);
    formDataToSend.append('protections', protectionsStr);
    formDataToSend.append('autreMateriau', formData.autreMateriau || '');
    formDataToSend.append('message', formData.message);

    try {
      // Envoi à Netlify Forms
      await fetch('/', {
        method: 'POST',
        body: formDataToSend,
      });

      // ===========================================
      // 2. ENVOI À LA FONCTION NETLIFY POUR LES EMAILS
      // ===========================================
      console.log('📧 Envoi à la fonction contact...');
      
      const functionResponse = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: fullPhone,
          city: finalCity,
          country: `${selectedCountry.flag} ${selectedCountry.name}`,
          materials: selectedMateriaux,      // Tableau
          zones: selectedZones,              // Tableau
          protections: selectedProtectionTypes, // Tableau
          autreMateriau: formData.autreMateriau || '',
          message: formData.message,
          language: language,
        }),
      });

      const result = await functionResponse.json();
      console.log('✅ Résultat fonction:', result);

      // ===========================================
      // 3. REDIRECTION VERS CONFIRMATION
      // ===========================================
      const firstName = formData.name.trim().split(/\s+/)[0];
      sessionStorage.setItem('confirmationData', JSON.stringify({
        firstName,
        email: formData.email,
        phone: fullPhone,
        materials: selectedMateriaux,
        zones: selectedZones,
        protectionTypes: selectedProtectionTypes,
        ville: finalCity,
        message: formData.message,
      }));

      setLocation('/confirmation');
      
    } catch (error) {
      console.error('❌ Erreur soumission:', error);
      toast.error('Erreur lors de l\'envoi du formulaire');
      setIsSubmitting(false);
    }
  };

  const errorCount = Object.keys(errors).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#A33215] mb-8">{t.contact.title}</h1>
          <p className="text-center text-gray-600 text-lg mb-12">{t.contact.subtitle}</p>

          {submitted && errorCount > 0 && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <h3 className="text-red-800 font-semibold mb-2">
                {errorCount === 1 ? '1 erreur à corriger' : `${errorCount} erreurs à corriger`}
              </h3>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
            noValidate
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            {/* Nom */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">{t.contact.nameLabel}</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary ${
                  submitted && errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t.contact.namePlaceholder}
                required
              />
              {submitted && errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">{t.contact.emailLabel}</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary ${
                  submitted && errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t.contact.emailPlaceholder}
                required
              />
              {submitted && errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">{t.contact.phoneLabel}</label>
              <div className="flex gap-2">
                <div className="relative w-32" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full h-[44px] px-3 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-1">
                      <span className="text-xl">{selectedCountry.flag}</span>
                      <span className="text-sm">{selectedCountry.code}</span>
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute z-50 mt-1 w-64 bg-white border rounded-lg shadow-lg">
                      <div className="p-2 border-b">
                        <div className="relative">
                          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            ref={searchInputRef}
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Rechercher..."
                            className="w-full pl-8 pr-2 py-1 text-sm border rounded"
                          />
                        </div>
                      </div>
                      <div className="max-h-60 overflow-auto">
                        {filteredCountries.map(c => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => handleCountrySelect(c.id)}
                            className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 text-left"
                          >
                            <span className="text-xl">{c.flag}</span>
                            <span className="text-sm text-gray-600 w-12">{c.code}</span>
                            <span className="text-sm">{c.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary ${
                    submitted && errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={`${expectedDigits} chiffres`}
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">{selectedCountry.code} - {expectedDigits} chiffres</p>
              {submitted && errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Matériaux */}
            <div>
              <label className="block text-sm font-medium mb-3">{t.contact.materialNature}</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {materiaux.map(m => (
                  <ToggleButton
                    key={m}
                    label={m}
                    selected={selectedMateriaux.includes(m)}
                    onToggle={() => toggleMateriau(m)}
                  />
                ))}
              </div>
            </div>

            {/* Zones */}
            <div>
              <label className="block text-sm font-medium mb-3">{t.contact.applicationZone}</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {zones.map(z => (
                  <ToggleButton
                    key={z}
                    label={z}
                    selected={selectedZones.includes(z)}
                    onToggle={() => toggleZone(z)}
                  />
                ))}
              </div>
            </div>

            {/* Protections */}
            <div>
              <label className="block text-sm font-medium mb-3">{t.contact.protectionType}</label>
              <div className="grid grid-cols-2 gap-3">
                {protections.map(p => (
                  <ToggleButton
                    key={p}
                    label={p}
                    selected={selectedProtectionTypes.includes(p)}
                    onToggle={() => toggleProtection(p)}
                  />
                ))}
              </div>
            </div>

            {/* Ville */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-2">{t.contact.city}</label>
              <select
                id="city"
                name="city"
                value={ville}
                onChange={e => setVille(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
              >
                <option value="">Sélectionnez</option>
                {VILLES.map(v => <option key={v}>{v}</option>)}
              </select>
            </div>

            {/* Autre ville */}
            {ville === 'Autre' && (
              <div>
                <label htmlFor="autreVille" className="block text-sm font-medium mb-2">
                  {t.contact.specifyCity ?? 'Précisez votre ville'}
                </label>
                <input
                  ref={autreVilleRef}
                  id="autreVille"
                  type="text"
                  name="autreVille"
                  value={autreVille}
                  onChange={e => setAutreVille(e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary ${
                    submitted && errors.autreVille ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nom de votre ville"
                />
                {submitted && errors.autreVille && (
                  <p className="mt-1 text-sm text-red-500">{errors.autreVille}</p>
                )}
              </div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary ${
                  submitted && errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t.contact.messagePlaceholder}
                required
              />
              {submitted && errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Bouton de soumission */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full py-4 text-lg bg-[#A33215] hover:bg-[#A33215]/90 text-white"
            >
              {isSubmitting ? 'Envoi en cours...' : t.contact.diagnosticButton}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
