import { useEffect, useState, useRef, useCallback } from 'react';
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
  phoneDigits: number; // longueur exacte du numéro local selon le pays
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
// DONNÉES PAYS — avec phoneDigits adaptatifs
// ===========================================
const countries: Country[] = [
  { id: 'ma', code: "+212", flag: "🇲🇦", name: "Maroc",              search: "maroc +212",                        phoneDigits: 9  },
  { id: 'fr', code: "+33",  flag: "🇫🇷", name: "France",             search: "france +33",                        phoneDigits: 9  },
  { id: 'es', code: "+34",  flag: "🇪🇸", name: "Espagne",            search: "espagne spain +34",                 phoneDigits: 9  },
  { id: 'de', code: "+49",  flag: "🇩🇪", name: "Allemagne",          search: "allemagne germany +49",             phoneDigits: 10 },
  { id: 'it', code: "+39",  flag: "🇮🇹", name: "Italie",             search: "italie italy +39",                  phoneDigits: 10 },
  { id: 'gb', code: "+44",  flag: "🇬🇧", name: "Royaume-Uni",        search: "royaume uni united kingdom uk +44", phoneDigits: 10 },
  { id: 'be', code: "+32",  flag: "🇧🇪", name: "Belgique",           search: "belgique belgium +32",              phoneDigits: 9  },
  { id: 'ch', code: "+41",  flag: "🇨🇭", name: "Suisse",             search: "suisse switzerland +41",            phoneDigits: 9  },
  { id: 'nl', code: "+31",  flag: "🇳🇱", name: "Pays-Bas",           search: "pays bas netherlands +31",          phoneDigits: 9  },
  { id: 'pt', code: "+351", flag: "🇵🇹", name: "Portugal",           search: "portugal +351",                     phoneDigits: 9  },
  { id: 'se', code: "+46",  flag: "🇸🇪", name: "Suède",              search: "suede sweden +46",                  phoneDigits: 9  },
  { id: 'no', code: "+47",  flag: "🇳🇴", name: "Norvège",            search: "norvege norway +47",                phoneDigits: 8  },
  { id: 'dk', code: "+45",  flag: "🇩🇰", name: "Danemark",           search: "danemark denmark +45",              phoneDigits: 8  },
  { id: 'fi', code: "+358", flag: "🇫🇮", name: "Finlande",           search: "finlande finland +358",             phoneDigits: 9  },
  { id: 'at', code: "+43",  flag: "🇦🇹", name: "Autriche",           search: "autriche austria +43",              phoneDigits: 10 },
  { id: 'pl', code: "+48",  flag: "🇵🇱", name: "Pologne",            search: "pologne poland +48",                phoneDigits: 9  },
  { id: 'gr', code: "+30",  flag: "🇬🇷", name: "Grèce",              search: "grece greece +30",                  phoneDigits: 10 },
  { id: 'cz', code: "+420", flag: "🇨🇿", name: "République tchèque", search: "republique tcheque czech +420",     phoneDigits: 9  },
  { id: 'ro', code: "+40",  flag: "🇷🇴", name: "Roumanie",           search: "roumanie romania +40",              phoneDigits: 9  },
  { id: 'hu', code: "+36",  flag: "🇭🇺", name: "Hongrie",            search: "hongrie hungary +36",               phoneDigits: 9  },
  { id: 'tr', code: "+90",  flag: "🇹🇷", name: "Turquie",            search: "turquie turkey +90",                phoneDigits: 10 },
  { id: 'ru', code: "+7",   flag: "🇷🇺", name: "Russie",             search: "russie russia +7",                  phoneDigits: 10 },
  { id: 'ua', code: "+380", flag: "🇺🇦", name: "Ukraine",            search: "ukraine +380",                      phoneDigits: 9  },
  { id: 'us', code: "+1",   flag: "🇺🇸", name: "États-Unis",         search: "etats unis usa america +1",         phoneDigits: 10 },
  { id: 'ca', code: "+1",   flag: "🇨🇦", name: "Canada",             search: "canada +1",                         phoneDigits: 10 },
  { id: 'mx', code: "+52",  flag: "🇲🇽", name: "Mexique",            search: "mexique mexico +52",                phoneDigits: 10 },
  { id: 'br', code: "+55",  flag: "🇧🇷", name: "Brésil",             search: "bresil brazil +55",                 phoneDigits: 11 },
  { id: 'ar', code: "+54",  flag: "🇦🇷", name: "Argentine",          search: "argentine argentina +54",           phoneDigits: 10 },
  { id: 'co', code: "+57",  flag: "🇨🇴", name: "Colombie",           search: "colombie colombia +57",             phoneDigits: 10 },
  { id: 'cl', code: "+56",  flag: "🇨🇱", name: "Chili",              search: "chili chile +56",                   phoneDigits: 9  },
  { id: 'pe', code: "+51",  flag: "🇵🇪", name: "Pérou",              search: "perou peru +51",                    phoneDigits: 9  },
  { id: 've', code: "+58",  flag: "🇻🇪", name: "Venezuela",          search: "venezuela +58",                     phoneDigits: 10 },
  { id: 'ae', code: "+971", flag: "🇦🇪", name: "Émirats Arabes Unis",search: "emirats arabes unis uae +971",      phoneDigits: 9  },
  { id: 'sa', code: "+966", flag: "🇸🇦", name: "Arabie Saoudite",    search: "arabie saoudite saudi +966",        phoneDigits: 9  },
  { id: 'qa', code: "+974", flag: "🇶🇦", name: "Qatar",              search: "qatar +974",                        phoneDigits: 8  },
  { id: 'kw', code: "+965", flag: "🇰🇼", name: "Koweït",             search: "koweit kuwait +965",                phoneDigits: 8  },
  { id: 'bh', code: "+973", flag: "🇧🇭", name: "Bahreïn",            search: "bahrein bahrain +973",              phoneDigits: 8  },
  { id: 'om', code: "+968", flag: "🇴🇲", name: "Oman",               search: "oman +968",                         phoneDigits: 8  },
  { id: 'jo', code: "+962", flag: "🇯🇴", name: "Jordanie",           search: "jordanie jordan +962",              phoneDigits: 9  },
  { id: 'lb', code: "+961", flag: "🇱🇧", name: "Liban",              search: "liban lebanon +961",                phoneDigits: 8  },
  { id: 'iq', code: "+964", flag: "🇮🇶", name: "Irak",               search: "irak iraq +964",                    phoneDigits: 10 },
  { id: 'sy', code: "+963", flag: "🇸🇾", name: "Syrie",              search: "syrie syria +963",                  phoneDigits: 9  },
  { id: 'il', code: "+972", flag: "🇮🇱", name: "Israël",             search: "israel +972",                       phoneDigits: 9  },
  { id: 'ye', code: "+967", flag: "🇾🇪", name: "Yémen",              search: "yemen +967",                        phoneDigits: 9  },
  { id: 'ly', code: "+218", flag: "🇱🇾", name: "Libye",              search: "libye libya +218",                  phoneDigits: 9  },
  { id: 'sd', code: "+249", flag: "🇸🇩", name: "Soudan",             search: "soudan sudan +249",                 phoneDigits: 9  },
  { id: 'dz', code: "+213", flag: "🇩🇿", name: "Algérie",            search: "algerie algeria +213",              phoneDigits: 9  },
  { id: 'tn', code: "+216", flag: "🇹🇳", name: "Tunisie",            search: "tunisie tunisia +216",              phoneDigits: 8  },
  { id: 'eg', code: "+20",  flag: "🇪🇬", name: "Égypte",             search: "egypte egypt +20",                  phoneDigits: 10 },
  { id: 'sn', code: "+221", flag: "🇸🇳", name: "Sénégal",            search: "senegal +221",                      phoneDigits: 9  },
  { id: 'ci', code: "+225", flag: "🇨🇮", name: "Côte d'Ivoire",      search: "cote d ivoire +225",                phoneDigits: 10 },
  { id: 'cm', code: "+237", flag: "🇨🇲", name: "Cameroun",           search: "cameroun cameroon +237",            phoneDigits: 9  },
  { id: 'za', code: "+27",  flag: "🇿🇦", name: "Afrique du Sud",     search: "afrique du sud south africa +27",   phoneDigits: 9  },
  { id: 'ng', code: "+234", flag: "🇳🇬", name: "Nigeria",            search: "nigeria +234",                      phoneDigits: 10 },
  { id: 'ke', code: "+254", flag: "🇰🇪", name: "Kenya",              search: "kenya +254",                        phoneDigits: 9  },
  { id: 'et', code: "+251", flag: "🇪🇹", name: "Éthiopie",           search: "ethiopie ethiopia +251",            phoneDigits: 9  },
  { id: 'gh', code: "+233", flag: "🇬🇭", name: "Ghana",              search: "ghana +233",                        phoneDigits: 9  },
  { id: 'tz', code: "+255", flag: "🇹🇿", name: "Tanzanie",           search: "tanzanie tanzania +255",            phoneDigits: 9  },
  { id: 'cn', code: "+86",  flag: "🇨🇳", name: "Chine",              search: "chine china +86",                   phoneDigits: 11 },
  { id: 'jp', code: "+81",  flag: "🇯🇵", name: "Japon",              search: "japon japan +81",                   phoneDigits: 10 },
  { id: 'in', code: "+91",  flag: "🇮🇳", name: "Inde",               search: "inde india +91",                    phoneDigits: 10 },
  { id: 'kr', code: "+82",  flag: "🇰🇷", name: "Corée du Sud",       search: "coree du sud south korea +82",      phoneDigits: 10 },
  { id: 'au', code: "+61",  flag: "🇦🇺", name: "Australie",          search: "australie australia +61",           phoneDigits: 9  },
  { id: 'nz', code: "+64",  flag: "🇳🇿", name: "Nouvelle-Zélande",   search: "nouvelle zelande new zealand +64",  phoneDigits: 9  },
  { id: 'sg', code: "+65",  flag: "🇸🇬", name: "Singapour",          search: "singapour singapore +65",           phoneDigits: 8  },
  { id: 'my', code: "+60",  flag: "🇲🇾", name: "Malaisie",           search: "malaisie malaysia +60",             phoneDigits: 9  },
  { id: 'id', code: "+62",  flag: "🇮🇩", name: "Indonésie",          search: "indonesie indonesia +62",           phoneDigits: 10 },
  { id: 'th', code: "+66",  flag: "🇹🇭", name: "Thaïlande",          search: "thailande thailand +66",            phoneDigits: 9  },
  { id: 'pk', code: "+92",  flag: "🇵🇰", name: "Pakistan",           search: "pakistan +92",                      phoneDigits: 10 },
  { id: 'bd', code: "+880", flag: "🇧🇩", name: "Bangladesh",         search: "bangladesh +880",                   phoneDigits: 10 },
];

const VILLES = [
  'Marrakech', 'Casablanca', 'Essaouira', 'Agadir',
  'Rabat', 'El Jadida', 'Tanger', 'Autre',
] as const;

// ===========================================
// COMPOSANT TOGGLE BUTTON (factorisé)
// ===========================================
interface ToggleButtonProps {
  label: string;
  selected: boolean;
  onToggle: () => void;
}

function ToggleButton({ label, selected, onToggle }: ToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={`flex items-center gap-1 px-4 py-2 min-h-[44px] rounded-lg border-2 transition-all text-sm font-medium active:scale-[0.98] ${
        selected
          ? 'border-primary bg-primary/10 text-primary'
          : 'border-gray-300 text-gray-700 hover:border-gray-400'
      }`}
    >
      {selected && <Check className="w-4 h-4 shrink-0" />}
      {label}
    </button>
  );
}

// ===========================================
// COMPOSANT PRINCIPAL
// ===========================================
export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [, setLocation] = useLocation();

  // Sélections multiples
  const [selectedMateriaux, setSelectedMateriaux] = useState<string[]>([]);
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const [selectedProtectionTypes, setSelectedProtectionTypes] = useState<string[]>([]);

  // Ville
  const [ville, setVille] = useState('');
  const [autreVille, setAutreVille] = useState('');

  // Champs texte
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', message: '', autreMateriau: '',
  });

  // Téléphone — sélecteur pays
  const [selectedCountryId, setSelectedCountryId] = useState('ma');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Formulaire
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const autreVilleRef = useRef<HTMLInputElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  // Dérivés
  const selectedCountry = countries.find(c => c.id === selectedCountryId) ?? countries[0];
  const expectedDigits = selectedCountry?.phoneDigits ?? 9;
  const filteredCountries = countries.filter(c =>
    c.search.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const materiaux = [
    t.contact.material1,  t.contact.material2,  t.contact.material3,  t.contact.material4,
    t.contact.material5,  t.contact.material6,  t.contact.material7,  t.contact.material8,
    t.contact.material9,  t.contact.material10, t.contact.material11, t.contact.material12,
    t.contact.material13, t.contact.material14, t.contact.material15, t.contact.material16,
  ];
  const zones = [t.contact.zone1, t.contact.zone2, t.contact.zone3, t.contact.zone4];
  const protections = [
    t.contact.protectionWater, t.contact.protectionOil,
    t.contact.protectionMineralization, t.contact.protectionAntiSlip,
  ];

  const isAutreSelected = selectedMateriaux.includes(t.contact.material16);

  // ── Effets ──────────────────────────────────────────────────────────────────
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
    if (ville === 'Autre') setTimeout(() => autreVilleRef.current?.focus(), 100);
  }, [ville]);

  // Focus sur le résumé d'erreurs pour l'accessibilité
  useEffect(() => {
    if (Object.keys(errors).length > 0) errorSummaryRef.current?.focus();
  }, [errors]);

  // Réinitialise le téléphone au changement de pays
  useEffect(() => {
    setFormData(prev => ({ ...prev, phone: '' }));
  }, [selectedCountryId]);

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  }, []);

  // Formatage + longueur adaptés au pays sélectionné
  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, expectedDigits);
    const formatted = digits.replace(/(\d{3})(?=\d)/g, '$1 ').trimEnd();
    setFormData(prev => ({ ...prev, phone: formatted }));
    setErrors(prev => ({ ...prev, phone: undefined }));
  }, [expectedDigits]);

  const handleCountrySelect = useCallback((id: string) => {
    setSelectedCountryId(id);
    setIsDropdownOpen(false);
    setSearchQuery('');
  }, []);

  // Helper générique pour tous les groupes toggle
  const toggleItem = useCallback((
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    item: string
  ) => {
    setList(prev => prev.includes(item) ? prev.filter(x => x !== item) : [...prev, item]);
  }, []);

  // Gestion spéciale pour le matériau "Autre"
  const toggleMateriau = useCallback((materiau: string) => {
    if (materiau === t.contact.material16 && selectedMateriaux.includes(materiau)) {
      setFormData(prev => ({ ...prev, autreMateriau: '' }));
    }
    toggleItem(selectedMateriaux, setSelectedMateriaux, materiau);
  }, [selectedMateriaux, t.contact.material16, toggleItem]);

  // ── Validation ──────────────────────────────────────────────────────────────
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim())
      newErrors.name = t.contact.errorNameRequired ?? 'Le nom est requis';

    if (!formData.email.trim())
      newErrors.email = t.contact.errorEmailInvalid ?? "L'email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = t.contact.errorEmailInvalid ?? 'Format email invalide';

    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.errorPhoneInvalid ?? 'Le numéro est requis';
    } else {
      const digits = formData.phone.replace(/\s/g, '');
      if (digits.length !== expectedDigits) {
        newErrors.phone = `Le numéro doit contenir exactement ${expectedDigits} chiffres pour ${selectedCountry.name}`;
      }
    }

    if (!formData.message.trim())
      newErrors.message = t.contact.errorMessageRequired ?? 'Le message est requis';

    if (isAutreSelected) {
      if (!formData.autreMateriau.trim()) {
        newErrors.autreMateriau = t.contact.autreMateriauLabel ?? 'Veuillez préciser le matériau';
      } else if (formData.autreMateriau.trim().length < 3) {
        newErrors.autreMateriau = 'Minimum 3 caractères';
      }
    }

    if (ville === 'Autre' && !autreVille.trim())
      newErrors.autreVille = t.contact.specifyCity ?? 'Veuillez préciser votre ville';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Envoi ───────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error(t.contact.errorSubmit ?? 'Veuillez corriger les erreurs ci-dessus');
      return;
    }
    setIsSubmitting(true);

    const finalCity      = ville === 'Autre' ? autreVille : ville;
    const cleanPhone     = formData.phone.replace(/\s/g, '');
    const fullPhone      = `${selectedCountry.code} ${cleanPhone}`;
    const materialsStr   = selectedMateriaux.length       ? selectedMateriaux.join(', ')       : 'Aucun';
    const zonesStr       = selectedZones.length           ? selectedZones.join(', ')           : 'Aucune';
    const protectionsStr = selectedProtectionTypes.length ? selectedProtectionTypes.join(', ') : 'Aucune';

    // Source unique de vérité — même objet pour Netlify, webhook et sessionStorage
    const payload = {
      'form-name':   'contact',
      'bot-field':   '',
      name:          formData.name,
      email:         formData.email,
      phone:         fullPhone,
      country:       `${selectedCountry.flag} ${selectedCountry.name}`,
      city:          finalCity,
      materials:     materialsStr,
      autreMateriau: formData.autreMateriau || '',
      zones:         zonesStr,
      protections:   protectionsStr,
      message:       formData.message,
    };

    try {
      // 1. Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload).toString(),
      });
      if (!response.ok) throw new Error(`Netlify: ${response.status}`);

      // 2. Webhook Integrately — non bloquant mais erreur loggée
      const webhookUrl = import.meta.env.VITE_INTEGRATELY_WEBHOOK_URL;
      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
        } catch (webhookErr) {
          console.warn('[Webhook] Integrately failed (non-bloquant):', webhookErr);
        }
      }

      // 3. sessionStorage — TOUTES les données pour la page de confirmation
      const firstName = formData.name.trim().split(/\s+/)[0];
      sessionStorage.setItem('confirmationData', JSON.stringify({
        firstName,
        email:           formData.email,
        phone:           fullPhone,
        country:         `${selectedCountry.flag} ${selectedCountry.name}`,
        materials:       selectedMateriaux,
        autreMateriau:   formData.autreMateriau,
        zones:           selectedZones,
        protectionTypes: selectedProtectionTypes,
        ville:           finalCity,
        message:         formData.message,
        submittedAt:     new Date().toISOString(),
      }));

      setLocation('/confirmation');

    } catch (error) {
      console.error('[Contact] Erreur envoi:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer.');
      setIsSubmitting(false);
    }
  };

  // ── JSX ─────────────────────────────────────────────────────────────────────
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="min-h-screen" style={{ position: 'relative' }}>
      <div aria-hidden="true" style={{
        position: 'fixed', inset: 0, zIndex: 0,
        backgroundImage: `url('/images/BackgroundImages/bg-contact.png')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', opacity: 0.18, pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navigation />

        <section className="pt-32 pb-20">
          <div className="container max-w-3xl">
            <h1
              className="font-display text-[2.5rem] md:text-[4rem] font-bold text-left mb-8"
              style={{ color: '#A33215' }}
            >
              {t.contact.title}
            </h1>
            <p className="text-center text-gray-600 text-lg mb-12">{t.contact.subtitle}</p>

            {/* Résumé d'erreurs */}
            {hasErrors && (
              <div
                ref={errorSummaryRef}
                role="alert"
                aria-live="assertive"
                tabIndex={-1}
                className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded outline-none"
              >
                <h3 className="text-red-800 font-semibold mb-2">
                  {Object.keys(errors).length === 1
                    ? "Veuillez corriger l'erreur suivante :"
                    : `Veuillez corriger les ${Object.keys(errors).length} erreurs suivantes :`}
                </h3>
                <ul className="list-disc list-inside text-red-700 space-y-1">
                  {Object.entries(errors).map(([field, message]) => (
                    <li key={field}>
                      <a
                        href={`#${field}`}
                        onClick={e => {
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
              {/* Champs cachés Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>

              {/* Tous les champs de sélection synchronisés avec React */}
              <input type="hidden" name="country"     value={`${selectedCountry.flag} ${selectedCountry.name}`} />
              <input type="hidden" name="city"        value={ville === 'Autre' ? autreVille : ville} />
              <input type="hidden" name="materials"   value={selectedMateriaux.join(', ') || 'Aucun'} />
              <input type="hidden" name="zones"       value={selectedZones.join(', ') || 'Aucune'} />
              <input type="hidden" name="protections" value={selectedProtectionTypes.join(', ') || 'Aucune'} />

              {/* ── Nom + Email ── */}
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
                  {errors.name && <p id="name-error" className="text-red-600 text-sm mt-1" role="alert">{errors.name}</p>}
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
                  {errors.email && <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">{errors.email}</p>}
                </div>
              </div>

              {/* ── Téléphone ── */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.phoneLabel}
                </label>
                <div className="flex gap-2">
                  <div className="relative w-40" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(prev => !prev)}
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                      aria-label={`Pays : ${selectedCountry.name} ${selectedCountry.code}`}
                      className="w-full h-[44px] px-3 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-xl">{selectedCountry.flag}</span>
                        <span className="text-sm font-medium">{selectedCountry.code}</span>
                      </span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>

                    {isDropdownOpen && (
                      <div
                        role="listbox"
                        aria-label="Sélectionner un pays"
                        className="absolute z-50 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg"
                      >
                        <div className="p-2 border-b border-gray-200">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              ref={searchInputRef}
                              type="text"
                              value={searchQuery}
                              onChange={e => setSearchQuery(e.target.value)}
                              placeholder="Rechercher un pays..."
                              className="w-full pl-9 pr-8 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            {searchQuery && (
                              <button
                                type="button"
                                onClick={() => setSearchQuery('')}
                                aria-label="Effacer"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="max-h-64 overflow-y-auto">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map(country => (
                              <button
                                key={country.id}
                                type="button"
                                role="option"
                                aria-selected={selectedCountryId === country.id}
                                onClick={() => handleCountrySelect(country.id)}
                                className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-amber-50 transition-colors ${
                                  selectedCountryId === country.id ? 'bg-primary/10' : ''
                                }`}
                              >
                                <span className="text-xl">{country.flag}</span>
                                <span className="text-sm font-mono text-gray-500 w-12">{country.code}</span>
                                <span className="text-sm text-gray-700 flex-1">{country.name}</span>
                                {selectedCountryId === country.id && <Check className="w-4 h-4 text-primary shrink-0" />}
                              </button>
                            ))
                          ) : (
                            <p className="px-3 py-4 text-center text-sm text-gray-500">Aucun pays trouvé</p>
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
                    aria-describedby={`phone-hint${errors.phone ? ' phone-error' : ''}`}
                    className={`flex-1 px-4 py-3 min-h-[44px] border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder={'0'.repeat(expectedDigits)}
                  />
                </div>
                {errors.phone && <p id="phone-error" className="text-red-600 text-sm mt-1" role="alert">{errors.phone}</p>}
                <p id="phone-hint" className="text-gray-500 text-xs mt-1">
                  {selectedCountry.code} + {expectedDigits} chiffres ({selectedCountry.name})
                </p>
              </div>

              {/* ── Matériaux ── */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">{t.contact.materialNature}</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3" role="group" aria-label={t.contact.materialNature}>
                  {materiaux.map(mat => (
                    <ToggleButton
                      key={mat}
                      label={mat}
                      selected={selectedMateriaux.includes(mat)}
                      onToggle={() => toggleMateriau(mat)}
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
                      maxLength={100}
                      aria-required="true"
                      aria-invalid={!!errors.autreMateriau}
                      aria-describedby={errors.autreMateriau ? 'autreMateriau-error' : undefined}
                      className={`w-full px-4 py-3 min-h-[44px] border rounded-lg focus:ring-2 focus:ring-primary transition-all ${
                        errors.autreMateriau ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Ex: Béton ciré, Terre cuite..."
                    />
                    {errors.autreMateriau && (
                      <p id="autreMateriau-error" className="text-red-600 text-sm mt-1" role="alert">
                        {errors.autreMateriau}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* ── Zones ── */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">{t.contact.applicationZone}</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3" role="group" aria-label={t.contact.applicationZone}>
                  {zones.map(zone => (
                    <ToggleButton
                      key={zone}
                      label={zone}
                      selected={selectedZones.includes(zone)}
                      onToggle={() => toggleItem(selectedZones, setSelectedZones, zone)}
                    />
                  ))}
                </div>
              </div>

              {/* ── Protections ── */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t.contact.protectionType} ({t.contact.multipleSelection})
                </label>
                <div className="grid grid-cols-2 gap-3" role="group" aria-label={t.contact.protectionType}>
                  {protections.map(prot => (
                    <ToggleButton
                      key={prot}
                      label={prot}
                      selected={selectedProtectionTypes.includes(prot)}
                      onToggle={() => toggleItem(selectedProtectionTypes, setSelectedProtectionTypes, prot)}
                    />
                  ))}
                </div>
              </div>

              {/* ── Ville ── */}
              <div>
                <label htmlFor="city-select" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.city}
                </label>
                <select
                  id="city-select"
                  name="city"
                  value={ville}
                  onChange={e => {
                    setVille(e.target.value);
                    setAutreVille('');
                    setErrors(prev => ({ ...prev, autreVille: undefined }));
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">{t.contact.selectCityPlaceholder ?? 'Sélectionnez une ville'}</option>
                  {VILLES.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>

              {/* ── Autre ville ── */}
              {ville === 'Autre' && (
                <div>
                  <label htmlFor="autreVille" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.specifyCity ?? 'Précisez votre ville'}
                  </label>
                  <input
                    ref={autreVilleRef}
                    id="autreVille"
                    type="text"
                    name="autreVille"
                    value={autreVille}
                    onChange={e => {
                      setAutreVille(e.target.value);
                      setErrors(prev => ({ ...prev, autreVille: undefined }));
                    }}
                    aria-required="true"
                    aria-invalid={!!errors.autreVille}
                    aria-describedby={errors.autreVille ? 'autreVille-error' : undefined}
                    className={`w-full px-4 py-3 min-h-[44px] border rounded-lg focus:ring-2 focus:ring-primary transition-all ${
                      errors.autreVille ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder={t.contact.cityPlaceholder ?? 'Entrez votre ville'}
                  />
                  {errors.autreVille && (
                    <p id="autreVille-error" className="text-red-600 text-sm mt-1" role="alert">
                      {errors.autreVille}
                    </p>
                  )}
                </div>
              )}

              {/* ── Message ── */}
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

              {/* ── Submit ── */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full text-lg py-6 border-2 btn-brand disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (t.contact.submitting ?? 'Envoi en cours...') : t.contact.diagnosticButton}
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
