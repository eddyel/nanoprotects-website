import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { toast } from 'sonner';

// ===========================================
// LISTE COMPLÈTE DES PAYS
// ===========================================
const countries = [
  // Maroc en premier (défaut)
  { code: "+212", flag: "🇲🇦", name: "Maroc", search: "maroc +212" },
  
  // Europe + UK
  { code: "+33", flag: "🇫🇷", name: "France", search: "france +33" },
  { code: "+34", flag: "🇪🇸", name: "Espagne", search: "espagne spain +34" },
  { code: "+49", flag: "🇩🇪", name: "Allemagne", search: "allemagne germany +49" },
  { code: "+39", flag: "🇮🇹", name: "Italie", search: "italie italy +39" },
  { code: "+44", flag: "🇬🇧", name: "Royaume-Uni", search: "royaume uni united kingdom uk +44" },
  { code: "+32", flag: "🇧🇪", name: "Belgique", search: "belgique belgium +32" },
  { code: "+41", flag: "🇨🇭", name: "Suisse", search: "suisse switzerland +41" },
  { code: "+31", flag: "🇳🇱", name: "Pays-Bas", search: "pays bas netherlands +31" },
  { code: "+351", flag: "🇵🇹", name: "Portugal", search: "portugal +351" },
  { code: "+46", flag: "🇸🇪", name: "Suède", search: "suede sweden +46" },
  { code: "+47", flag: "🇳🇴", name: "Norvège", search: "norvege norway +47" },
  { code: "+45", flag: "🇩🇰", name: "Danemark", search: "danemark denmark +45" },
  { code: "+358", flag: "🇫🇮", name: "Finlande", search: "finlande finland +358" },
  { code: "+43", flag: "🇦🇹", name: "Autriche", search: "autriche austria +43" },
  { code: "+48", flag: "🇵🇱", name: "Pologne", search: "pologne poland +48" },
  { code: "+30", flag: "🇬🇷", name: "Grèce", search: "grece greece +30" },
  { code: "+420", flag: "🇨🇿", name: "République tchèque", search: "republique tcheque czech +420" },
  { code: "+40", flag: "🇷🇴", name: "Roumanie", search: "roumanie romania +40" },
  { code: "+36", flag: "🇭🇺", name: "Hongrie", search: "hongrie hungary +36" },
  { code: "+90", flag: "🇹🇷", name: "Turquie", search: "turquie turkey +90" },
  { code: "+7", flag: "🇷🇺", name: "Russie", search: "russie russia +7" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine", search: "ukraine +380" },
  
  // Amériques
  { code: "+1", flag: "🇺🇸", name: "États-Unis", search: "etats unis usa america +1" },
  { code: "+1", flag: "🇨🇦", name: "Canada", search: "canada +1" },
  { code: "+52", flag: "🇲🇽", name: "Mexique", search: "mexique mexico +52" },
  { code: "+55", flag: "🇧🇷", name: "Brésil", search: "bresil brazil +55" },
  { code: "+54", flag: "🇦🇷", name: "Argentine", search: "argentine argentina +54" },
  { code: "+57", flag: "🇨🇴", name: "Colombie", search: "colombie colombia +57" },
  { code: "+56", flag: "🇨🇱", name: "Chili", search: "chili chile +56" },
  { code: "+51", flag: "🇵🇪", name: "Pérou", search: "perou peru +51" },
  { code: "+58", flag: "🇻🇪", name: "Venezuela", search: "venezuela +58" },
  
  // Moyen-Orient
  { code: "+971", flag: "🇦🇪", name: "Émirats Arabes Unis", search: "emirats arabes unis uae +971" },
  { code: "+966", flag: "🇸🇦", name: "Arabie Saoudite", search: "arabie saoudite saudi +966" },
  { code: "+974", flag: "🇶🇦", name: "Qatar", search: "qatar +974" },
  { code: "+965", flag: "🇰🇼", name: "Koweït", search: "koweit kuwait +965" },
  { code: "+973", flag: "🇧🇭", name: "Bahreïn", search: "bahrein bahrain +973" },
  { code: "+968", flag: "🇴🇲", name: "Oman", search: "oman +968" },
  { code: "+962", flag: "🇯🇴", name: "Jordanie", search: "jordanie jordan +962" },
  { code: "+961", flag: "🇱🇧", name: "Liban", search: "liban lebanon +961" },
  { code: "+964", flag: "🇮🇶", name: "Irak", search: "irak iraq +964" },
  { code: "+963", flag: "🇸🇾", name: "Syrie", search: "syrie syria +963" },
  { code: "+972", flag: "🇮🇱", name: "Israël", search: "israel +972" },
  { code: "+967", flag: "🇾🇪", name: "Yémen", search: "yemen +967" },
  { code: "+218", flag: "🇱🇾", name: "Libye", search: "libye libya +218" },
  { code: "+249", flag: "🇸🇩", name: "Soudan", search: "soudan sudan +249" },
  
  // Afrique (hors Maroc déjà en tête)
  { code: "+213", flag: "🇩🇿", name: "Algérie", search: "algerie algeria +213" },
  { code: "+216", flag: "🇹🇳", name: "Tunisie", search: "tunisie tunisia +216" },
  { code: "+20", flag: "🇪🇬", name: "Égypte", search: "egypte egypt +20" },
  { code: "+221", flag: "🇸🇳", name: "Sénégal", search: "senegal +221" },
  { code: "+225", flag: "🇨🇮", name: "Côte d'Ivoire", search: "cote d ivoire +225" },
  { code: "+237", flag: "🇨🇲", name: "Cameroun", search: "cameroun cameroon +237" },
  { code: "+27", flag: "🇿🇦", name: "Afrique du Sud", search: "afrique du sud south africa +27" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria", search: "nigeria +234" },
  { code: "+254", flag: "🇰🇪", name: "Kenya", search: "kenya +254" },
  { code: "+251", flag: "🇪🇹", name: "Éthiopie", search: "ethiopie ethiopia +251" },
  { code: "+233", flag: "🇬🇭", name: "Ghana", search: "ghana +233" },
  { code: "+255", flag: "🇹🇿", name: "Tanzanie", search: "tanzanie tanzania +255" },
  
  // Asie-Pacifique
  { code: "+86", flag: "🇨🇳", name: "Chine", search: "chine china +86" },
  { code: "+81", flag: "🇯🇵", name: "Japon", search: "japon japan +81" },
  { code: "+91", flag: "🇮🇳", name: "Inde", search: "inde india +91" },
  { code: "+82", flag: "🇰🇷", name: "Corée du Sud", search: "coree du sud south korea +82" },
  { code: "+61", flag: "🇦🇺", name: "Australie", search: "australie australia +61" },
  { code: "+64", flag: "🇳🇿", name: "Nouvelle-Zélande", search: "nouvelle zelande new zealand +64" },
  { code: "+65", flag: "🇸🇬", name: "Singapour", search: "singapour singapore +65" },
  { code: "+60", flag: "🇲🇾", name: "Malaisie", search: "malaisie malaysia +60" },
  { code: "+62", flag: "🇮🇩", name: "Indonésie", search: "indonesie indonesia +62" },
  { code: "+66", flag: "🇹🇭", name: "Thaïlande", search: "thailande thailand +66" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan", search: "pakistan +92" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh", search: "bangladesh +880" },
];

const villes = [
  'Marrakech', 'Casablanca', 'Essaouira', 'Agadir', 
  'Rabat', 'El Jadida', 'Tanger', 'Autre'
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  autreMateriau?: string;
  autreVille?: string;
}

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [, setLocation] = useLocation();
  const [selectedMateriaux, setSelectedMateriaux] = useState<string[]>([]);
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const [selectedProtectionTypes, setSelectedProtectionTypes] = useState<string[]>([]);
  const [ville, setVille] = useState('');
  const [autreVille, setAutreVille] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    autreMateriau: ''
  });
  
  // États pour le champ téléphone
  const [countryCode, setCountryCode] = useState('+212');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const autreVilleRef = useRef<HTMLInputElement>(null);

  // Filtrer les pays selon la recherche
  const filteredCountries = countries.filter(country => 
    country.search.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Fermer le dropdown quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto-focus sur la recherche quand le dropdown s'ouvre
  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isDropdownOpen]);

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
    t.contact.material12,
    t.contact.material13,
    t.contact.material14,
    t.contact.material15,
    t.contact.material16,
  ];
  const isAutreSelected = selectedMateriaux.includes(t.contact.material16);

  // Focus management: auto-focus autreVille field when "Autre" city is selected
  useEffect(() => {
    if (ville === 'Autre' && autreVilleRef.current) {
      setTimeout(() => {
        autreVilleRef.current?.focus();
      }, 100);
    }
  }, [ville]);

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

  const toggleProtectionType = (type: string) => {
    setSelectedProtectionTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  // Validation functions
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.errorNameRequired || 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.errorEmailInvalid || 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = t.contact.errorEmailInvalid || 'Invalid email format';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.errorPhoneInvalid ?? 'Phone number is required';
    } else {
      const phoneRegex = /^\d{1,3}\s\d{9,15}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = t.contact.errorPhoneInvalid ?? 'Invalid phone format';
      }
    }

    if (isAutreSelected && !formData.autreMateriau.trim()) {
      newErrors.autreMateriau = t.contact.autreMateriauLabel;
    }

    if (ville === 'Autre' && !autreVille.trim()) {
      newErrors.autreVille = t.contact.specifyCity || 'Please specify your city';
    }

    // Message is optional - no validation needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ne garder que les chiffres, max 9, et formater avec espace
    const numbers = e.target.value.replace(/\D/g, '').slice(0, 9);
    const formatted = numbers.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    setFormData(prev => ({ ...prev, phone: formatted }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  const handleCountrySelect = (code: string) => {
    setCountryCode(code);
    setIsDropdownOpen(false);
    setSearchQuery('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(t.contact.errorSubmit || 'Please fix the errors above');
      return;
    }

    setIsSubmitting(true);

    const finalCity = ville === 'Autre' ? autreVille : ville;
    const materialsStr = selectedMateriaux.join(', ');
    const zonesStr = selectedZones.join(', ');
    const protectionsStr = selectedProtectionTypes.join(', ');

    try {
      // Submit to Netlify Forms
      const formBody = new URLSearchParams({
        'form-name': 'contact',
        'bot-field': '',
        name: formData.name,
        email: formData.email,
        phone: `${countryCode} ${formData.phone}`,
        city: finalCity,
        materials: materialsStr,
        autreMateriau: formData.autreMateriau,
        zones: zonesStr,
        protections: protectionsStr,
        message: formData.message,
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      // Send to Integrately webhook for Zoho CRM lead creation
      const webhookUrl = import.meta.env.VITE_INTEGRATELY_WEBHOOK_URL;
      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: `${countryCode} ${formData.phone}`,
              city: finalCity,
              materials: materialsStr,
              zones: zonesStr,
              protections: protectionsStr,
              message: formData.message,
            }),
          });
        } catch {
          // Webhook failure should not block the user experience
        }
      }

      // Store confirmation data and redirect
      const firstName = formData.name.trim().split(/\s+/)[0];
      const confirmationData = {
        firstName,
        email: formData.email,
        phone: `${countryCode} ${formData.phone}`,
        materials: selectedMateriaux,
        autreMateriau: formData.autreMateriau,
        zones: selectedZones,
        protectionTypes: selectedProtectionTypes,
        ville: finalCity,
        message: formData.message,
      };

      sessionStorage.setItem('confirmationData', JSON.stringify(confirmationData));
      setLocation('/confirmation');
    } catch {
      toast.error(t.contact.errorSubmit || 'Submission failed. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ position: 'relative' }}>
      <div aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundImage: `url('/images/BackgroundImages/bg-contact.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 0.18, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold text-left mb-8" style={{ color: '#A33215' }}>
            {t.contact.title}
          </h1>
          <p className="text-center text-gray-600 text-lg mb-12">
            {t.contact.subtitle}
          </p>

          {/* Error Summary */}
          {Object.keys(errors).length > 0 && (
            <div
              role="alert"
              aria-live="assertive"
              className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded"
            >
              <h3 className="text-red-800 font-semibold mb-2">
                {Object.keys(errors).length === 1
                  ? 'Veuillez corriger l\'erreur suivante :'
                  : `Veuillez corriger les ${Object.keys(errors).length} erreurs suivantes :`}
              </h3>
              <ul className="list-disc list-inside text-red-700 space-y-1">
                {Object.entries(errors).map(([field, message]) => (
                  <li key={field}>
                    <a
                      href={`#${field}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(field)?.focus();
                      }}
                      className="underline hover:text-red-900"
                    >
                      {message}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
            noValidate
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            
            {/* Standard Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.nameLabel}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  inputMode="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-4 py-3 min-h-[44px] border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder={t.contact.namePlaceholder}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-600 text-sm mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  inputMode="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-4 py-3 min-h-[44px] border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder={t.contact.emailPlaceholder}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Champ Téléphone avec sélecteur de pays amélioré */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                {t.contact.phoneLabel}
              </label>
              <div className="flex gap-2">
                {/* Dropdown pays personnalisé */}
                <div className="relative w-40" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full h-[44px] px-3 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xl">
                        {countries.find(c => c.code === countryCode)?.flag}
                      </span>
                      <span className="text-sm font-medium">{countryCode}</span>
                    </span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown déroulant avec recherche */}
                  {isDropdownOpen && (
                    <div className="absolute z-50 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
                      {/* Barre de recherche */}
                      <div className="p-2 border-b border-gray-200">
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                          <input
                            ref={searchInputRef}
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Rechercher un pays..."
                            className="w-full pl-9 pr-8 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                          {searchQuery && (
                            <button
                              type="button"
                              onClick={() => setSearchQuery('')}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Liste des pays */}
                      <div className="max-h-64 overflow-y-auto">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country, index) => (
                            <button
                              key={`${country.code}-${country.name}-${index}`}
                              type="button"
                              onClick={() => handleCountrySelect(country.code)}
                              className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-amber-50 transition-colors ${
                                countryCode === country.code ? 'bg-primary/10' : ''
                              }`}
                            >
                              <span className="text-xl">{country.flag}</span>
                              <span className="text-sm font-mono text-gray-500 w-12">{country.code}</span>
                              <span className="text-sm text-gray-700">{country.name}</span>
                            </button>
                          ))
                        ) : (
                          <div className="px-3 py-4 text-center text-sm text-gray-500">
                            Aucun pays trouvé
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  inputMode="tel"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className={`flex-1 px-4 py-3 min-h-[44px] border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="612 345 678"
                />
              </div>
              {errors.phone && (
                <p id="phone-error" className="text-red-600 text-sm mt-1" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Multi-select: Nature des Matériaux */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.contact.materialNature}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3" role="group" aria-label={t.contact.materialNature}>
                {materiaux.map((materiau) => (
                  <button
                    key={materiau}
                    type="button"
                    onClick={() => toggleMateriau(materiau)}
                    aria-pressed={selectedMateriaux.includes(materiau)}
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
              {isAutreSelected && (
                <div className="mt-4">
                  <label htmlFor="autreMateriau" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.autreMateriauLabel}
                  </label>
                  <input
                    id="autreMateriau"
                    type="text"
                    name="autreMateriau"
                    value={formData.autreMateriau}
                    onChange={handleInputChange}
                    maxLength={100}
                    aria-required={isAutreSelected}
                    aria-invalid={!!errors.autreMateriau}
                    className={`w-full px-4 py-3 min-h-[44px] border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.autreMateriau ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Ex: Béton ciré, Terre cuite..."
                  />
                  {errors.autreMateriau && (
                    <p className="text-red-600 text-sm mt-1" role="alert">
                      {errors.autreMateriau}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Multi-select: Zone d'Application */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.contact.applicationZone}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3" role="group" aria-label={t.contact.applicationZone}>
                {zones.map((zone) => (
                  <button
                    key={zone}
                    type="button"
                    onClick={() => toggleZone(zone)}
                    aria-pressed={selectedZones.includes(zone)}
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

            {/* Multi-select: Type de Protection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.contact.protectionType} ({t.contact.multipleSelection})
              </label>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3" role="group" aria-label={t.contact.protectionType}>
                <button
                  key="water"
                  type="button"
                  onClick={() => toggleProtectionType(t.contact.protectionWater)}
                  aria-pressed={selectedProtectionTypes.includes(t.contact.protectionWater)}
                  className={`px-4 py-2 min-h-[44px] rounded-lg border-2 transition-all text-sm font-medium active:scale-[0.98] ${
                    selectedProtectionTypes.includes(t.contact.protectionWater)
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {selectedProtectionTypes.includes(t.contact.protectionWater) && (
                    <Check className="w-4 h-4 inline mr-1" />
                  )}
                  {t.contact.protectionWater}
                </button>
                <button
                  key="oil"
                  type="button"
                  onClick={() => toggleProtectionType(t.contact.protectionOil)}
                  aria-pressed={selectedProtectionTypes.includes(t.contact.protectionOil)}
                  className={`px-4 py-2 min-h-[44px] rounded-lg border-2 transition-all text-sm font-medium active:scale-[0.98] ${
                    selectedProtectionTypes.includes(t.contact.protectionOil)
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {selectedProtectionTypes.includes(t.contact.protectionOil) && (
                    <Check className="w-4 h-4 inline mr-1" />
                  )}
                  {t.contact.protectionOil}
                </button>
                <button
                  key="mineralization"
                  type="button"
                  onClick={() => toggleProtectionType(t.contact.protectionMineralization)}
                  aria-pressed={selectedProtectionTypes.includes(t.contact.protectionMineralization)}
                  className={`px-4 py-2 min-h-[44px] rounded-lg border-2 transition-all text-sm font-medium active:scale-[0.98] ${
                    selectedProtectionTypes.includes(t.contact.protectionMineralization)
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {selectedProtectionTypes.includes(t.contact.protectionMineralization) && (
                    <Check className="w-4 h-4 inline mr-1" />
                  )}
                  {t.contact.protectionMineralization}
                </button>
                <button
                  key="antiSlip"
                  type="button"
                  onClick={() => toggleProtectionType(t.contact.protectionAntiSlip)}
                  aria-pressed={selectedProtectionTypes.includes(t.contact.protectionAntiSlip)}
                  className={`px-4 py-2 min-h-[44px] rounded-lg border-2 transition-all text-sm font-medium active:scale-[0.98] ${
                    selectedProtectionTypes.includes(t.contact.protectionAntiSlip)
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {selectedProtectionTypes.includes(t.contact.protectionAntiSlip) && (
                    <Check className="w-4 h-4 inline mr-1" />
                  )}
                  {t.contact.protectionAntiSlip}
                </button>
              </div>
            </div>

            {/* City Dropdown */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                {t.contact.city}
              </label>
              <select
                id="city"
                name="city"
                required
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t.contact.selectCityPlaceholder || 'Select a city'}</option>
                {villes.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            {/* Conditional: Autre Ville */}
            {ville === 'Autre' && (
              <div>
                <label htmlFor="autreVille" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.specifyCity || 'Specify your city'}
                </label>
                <input
                  ref={autreVilleRef}
                  id="autreVille"
                  type="text"
                  name="autreVille"
                  value={autreVille}
                  onChange={(e) => {
                    setAutreVille(e.target.value);
                    // Clear error when user starts typing
                    if (errors.autreVille) {
                      setErrors(prev => ({ ...prev, autreVille: undefined }));
                    }
                  }}
                  aria-required="true"
                  aria-invalid={!!errors.autreVille}
                  aria-describedby={errors.autreVille ? 'autreVille-error' : undefined}
                  className={`w-full px-4 py-3 min-h-[44px] border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.autreVille ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder={t.contact.cityPlaceholder || 'Enter your city'}
                />
                {errors.autreVille && (
                  <p id="autreVille-error" className="text-red-600 text-sm mt-1" role="alert">
                    {errors.autreVille}
                  </p>
                )}
              </div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                  errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder={t.contact.messagePlaceholder}
              />
              {errors.message && (
                <p id="message-error" className="text-red-600 text-sm mt-1" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full text-lg py-6 border-2 btn-brand disabled:opacity-50 disabled:cursor-not-allowed"
              aria-busy={isSubmitting}
            >
              {isSubmitting ? t.contact.submitting || 'Submitting...' : t.contact.diagnosticButton}
            </Button>
          </form>
        </div>
      </section>
      </div>
    </div>
  );
}
