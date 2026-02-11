import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { toast } from 'sonner';

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
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const autreVilleRef = useRef<HTMLInputElement>(null);

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
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{1,3}\s\d{9,15}$/;
    return phoneRegex.test(phone.trim());
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.errorNameRequired || 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.errorEmailInvalid || 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.contact.errorEmailInvalid || 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.errorPhoneInvalid ?? 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t.contact.errorPhoneInvalid ?? 'Invalid phone format';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(t.contact.errorSubmit || 'Please fix the errors above');
      return;
    }

    setIsSubmitting(true);

    const firstName = formData.name.trim().split(/\s+/)[0];
    const confirmationData = {
      firstName,
      email: formData.email,
      phone: formData.phone,
      materials: selectedMateriaux,
      autreMateriau: formData.autreMateriau,
      zones: selectedZones,
      protectionTypes: selectedProtectionTypes,
      ville: ville || autreVille,
      message: formData.message
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          materials: selectedMateriaux,
          autreMateriau: formData.autreMateriau || undefined,
          zones: selectedZones,
          protectionTypes: selectedProtectionTypes,
          ville: ville || autreVille,
          message: formData.message,
          language
        })
      });

      if (res.ok) {
        toast.success(
          t.contact.confirmationEmailSent?.replace('{email}', formData.email) ??
            `Un email de confirmation vous sera envoyé à : ${formData.email}`
        );
      }
    } catch (_err) {
      // Network or other error: still redirect, form data stored below
    }

    sessionStorage.setItem('confirmationData', JSON.stringify(confirmationData));
    setLocation('/confirmation');
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

          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
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

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                {t.contact.phoneLabel}
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                inputMode="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`w-full px-4 py-3 min-h-[44px] border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Ex: 212 675987890"
              />
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
  );
}
