import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Check, ChevronDown, X, Search } from 'lucide-react';
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
  { id: 'de', code: "+49",  flag: "🇩🇪", name: "Allemagne", search: "allemagne germany +49", phoneDigits: 10 },
  { id: 'it', code: "+39",  flag: "🇮🇹", name: "Italie", search: "italie italy +39", phoneDigits: 10 },
  { id: 'gb', code: "+44",  flag: "🇬🇧", name: "Royaume-Uni", search: "royaume uni united kingdom uk +44", phoneDigits: 10 },
  { id: 'be', code: "+32",  flag: "🇧🇪", name: "Belgique", search: "belgique belgium +32", phoneDigits: 9 },
  { id: 'ch', code: "+41",  flag: "🇨🇭", name: "Suisse", search: "suisse switzerland +41", phoneDigits: 9 },
  { id: 'us', code: "+1",   flag: "🇺🇸", name: "États-Unis", search: "etats unis usa america +1", phoneDigits: 10 },
  { id: 'ca', code: "+1",   flag: "🇨🇦", name: "Canada", search: "canada +1", phoneDigits: 10 },
  { id: 'mx', code: "+52",  flag: "🇲🇽", name: "Mexique", search: "mexique mexico +52", phoneDigits: 10 },
  { id: 'br', code: "+55",  flag: "🇧🇷", name: "Brésil", search: "bresil brazil +55", phoneDigits: 11 },
  { id: 'ar', code: "+54",  flag: "🇦🇷", name: "Argentine", search: "argentine argentina +54", phoneDigits: 10 },
  { id: 'jp', code: "+81",  flag: "🇯🇵", name: "Japon", search: "japon japan +81", phoneDigits: 10 },
  { id: 'cn', code: "+86",  flag: "🇨🇳", name: "Chine", search: "chine china +86", phoneDigits: 11 },
  { id: 'in', code: "+91",  flag: "🇮🇳", name: "Inde", search: "inde india +91", phoneDigits: 10 },
  { id: 'au', code: "+61",  flag: "🇦🇺", name: "Australie", search: "australie australia +61", phoneDigits: 9 },
  { id: 'nz', code: "+64",  flag: "🇳🇿", name: "Nouvelle-Zélande", search: "nouvelle zelande new zealand +64", phoneDigits: 9 },
];

const VILLES = [
  'Marrakech', 'Casablanca', 'Essaouira', 'Agadir',
  'Rabat', 'El Jadida', 'Tanger', 'Fès', 'Autre'
];

// ===========================================
// COMPOSANT TOGGLE BUTTON
// ===========================================
function ToggleButton({ label, selected, onToggle }: { label: string; selected: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium flex items-center justify-center gap-1 ${
        selected
          ? 'border-primary bg-primary/10 text-primary'
          : 'border-gray-300 text-gray-700 hover:border-gray-400'
      }`}
    >
      {selected && <Check className="w-4 h-4" />}
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
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const autreVilleRef = useRef<HTMLInputElement>(null);

  // Dérivés
  const selectedCountry = countries.find(c => c.id === selectedCountryId) ?? countries[0];
  const expectedDigits = selectedCountry.phoneDigits;
  const filteredCountries = countries.filter(c =>
    c.search.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Traductions
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
    if (isDropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    if (ville === 'Autre' && autreVilleRef.current) {
      setTimeout(() => autreVilleRef.current?.focus(), 100);
    }
  }, [ville]);

  useEffect(() => {
    setFormData(prev => ({ ...prev, phone: '' }));
    setErrors(prev => ({ ...prev, phone: undefined }));
  }, [selectedCountryId]);

  // Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    if (name === 'name') {
      setErrors(prev => ({ ...prev, name: value.trim() ? undefined : 'Le nom est requis' }));
    }

    if (name === 'email') {
      if (!value.trim()) {
        setErrors(prev => ({ ...prev, email: "L'email est requis" }));
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors(prev => ({ ...prev, email: 'Format: nom@domaine.com' }));
      } else {
        setErrors(prev => ({ ...prev, email: undefined }));
      }
    }

    if (name === 'message') {
      setErrors(prev => ({ ...prev, message: value.trim() ? undefined : 'Le message est requis' }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, expectedDigits);
    const formatted = digits.replace(/(\d{3})(?=\d)/g, '$1 ').trimEnd();
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handlePhoneBlur = () => {
    setTouched(prev => ({ ...prev, phone: true }));
    if (!formData.phone.trim()) {
      setErrors(prev => ({ ...prev, phone: 'Le téléphone est requis' }));
    } else {
      const digits = formData.phone.replace(/\s/g, '');
      if (digits.length !== expectedDigits) {
        setErrors(prev => ({ ...prev, phone: `${expectedDigits} chiffres requis` }));
      } else {
        setErrors(prev => ({ ...prev, phone: undefined }));
      }
    }
  };

  const handleCountrySelect = (id: string) => {
    setSelectedCountryId(id);
    setIsDropdownOpen(false);
    setSearchQuery('');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setTouched({ name: true, email: true, phone: true, message: true });

    if (!validateForm()) {
      toast.error('Veuillez remplir tous les champs requis');
      return;
    }

    setIsSubmitting(true);

    const finalCity = ville === 'Autre' ? autreVille : ville;
    const cleanPhone = formData.phone.replace(/\s/g, '');
    const fullPhone = `${selectedCountry.code} ${cleanPhone}`;
    const materialsStr = selectedMateriaux.length ? selectedMateriaux.join(', ') : 'Aucun';
    const zonesStr = selectedZones.length ? selectedZones.join(', ') : 'Aucune';
    const protectionsStr = selectedProtectionTypes.length ? selectedProtectionTypes.join(', ') : 'Aucune';

    const payload = {
      'form-name': 'contact',
      'bot-field': '',
      name: formData.name,
      email: formData.email,
      phone: fullPhone,
      country: `${selectedCountry.flag} ${selectedCountry.name}`,
      city: finalCity,
      materials: materialsStr,
      zones: zonesStr,
      protections: protectionsStr,
      message: formData.message,
    };

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload).toString(),
      });

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
      toast.error('Erreur lors de l\'envoi');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#A33215] mb-8">{t.contact.title}</h1>
          <p className="text-center text-gray-600 text-lg mb-12">{t.contact.subtitle}</p>

          {/* Résumé d'erreurs */}
          {Object.keys(errors).length > 0 && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <h3 className="text-red-800 font-semibold mb-2">
                {Object.keys(errors).length === 1 ? '1 erreur à corriger' : `${Object.keys(errors).length} erreurs à corriger`}
              </h3>
              <ul className="list-disc list-inside text-red-700">
                {Object.entries(errors).map(([field, msg]) => (
                  <li key={field}>{msg}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden"><label>Bot: <input name="bot-field" /></label></p>

            {/* Hidden inputs pour les sélections */}
            <input type="hidden" name="city" value={ville === 'Autre' ? autreVille : ville} />
            <input type="hidden" name="materials" value={selectedMateriaux.join(', ')} />
            <input type="hidden" name="zones" value={selectedZones.join(', ')} />
            <input type="hidden" name="protections" value={selectedProtectionTypes.join(', ')} />
            <input type="hidden" name="country" value={`${selectedCountry.flag} ${selectedCountry.name}`} />

            {/* Nom */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">{t.contact.nameLabel}</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary ${
                  touched.name && errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t.contact.namePlaceholder}
              />
              {touched.name && errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
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
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary ${
                  touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t.contact.emailPlaceholder}
              />
              {touched.email && errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
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
                    <div className="absolute z-50 mt-1 w-80 bg-white border rounded-lg shadow-lg">
                      <div className="p-2 border-b">
                        <div className="relative">
                          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            ref={searchInputRef}
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Rechercher un pays..."
                            className="w-full pl-8 pr-2 py-1 text-sm border rounded focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div className="max-h-60 overflow-auto">
                        {filteredCountries.map(c => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => handleCountrySelect(c.id)}
                            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-amber-50 text-left"
                          >
                            <span className="text-xl">{c.flag}</span>
                            <span className="text-sm font-mono text-gray-600 w-12">{c.code}</span>
                            <span className="text-sm text-gray-700 flex-1">{c.name}</span>
                            {selectedCountryId === c.id && <Check className="w-4 h-4 text-primary shrink-0" />}
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
                  onBlur={handlePhoneBlur}
                  className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary ${
                    touched.phone && errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={`${expectedDigits} chiffres`}
                />
              </div>
              {touched.phone && errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              <p className="text-xs text-gray-500 mt-1">{selectedCountry.code} - {expectedDigits} chiffres</p>
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
                    onToggle={() => {
                      if (m === t.contact.material16 && selectedMateriaux.includes(m)) {
                        setFormData(prev => ({ ...prev, autreMateriau: '' }));
                      }
                      setSelectedMateriaux(prev =>
                        prev.includes(m) ? prev.filter(x => x !== m) : [...prev, m]
                      );
                    }}
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Ex: Béton ciré, Terre cuite..."
                  />
                </div>
              )}
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
                    onToggle={() => {
                      setSelectedZones(prev =>
                        prev.includes(z) ? prev.filter(x => x !== z) : [...prev, z]
                      );
                    }}
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
                    onToggle={() => {
                      setSelectedProtectionTypes(prev =>
                        prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
                      );
                    }}
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
                <option value="">Sélectionnez une ville</option>
                {VILLES.map(v => <option key={v} value={v}>{v}</option>)}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="Nom de votre ville"
                />
                {touched.autreVille && errors.autreVille && (
                  <p className="text-red-600 text-sm mt-1">{errors.autreVille}</p>
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
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary ${
                  touched.message && errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t.contact.messagePlaceholder}
              />
              {touched.message && errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>

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
