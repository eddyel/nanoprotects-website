import { useState } from 'react';
import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
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
}

export default function Contact() {
  const { t, language } = useLanguage();
  const [, setLocation] = useLocation();
  const [selectedMateriaux, setSelectedMateriaux] = useState<string[]>([]);
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const [selectedProtectionTypes, setSelectedProtectionTypes] = useState<string[]>([]);
  const [ville, setVille] = useState('');
  const [autreVille, setAutreVille] = useState('');
  const [autreMateriau, setAutreMateriau] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get material and zone translations (including new: Pisé, Stuc en Plâtre, Autre)
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

  // The last material is "Autre" - used to trigger conditional field
  const autreMaterialLabel = t.contact.material16;

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
    // Clear "autre" text if user deselects "Autre"
    if (materiau === autreMaterialLabel && selectedMateriaux.includes(materiau)) {
      setAutreMateriau('');
    }
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
    // Accept international format: country code + 9-15 digits, with optional spaces/dashes
    const phoneRegex = /^\+?\d{1,4}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,15}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ' ').trim());
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.errorNameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.errorEmailInvalid;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.contact.errorEmailInvalid;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.phoneValidationError || 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t.contact.phoneValidationError || 'Invalid phone number format (e.g. +212 6XX XXX XXX)';
    }

    // If "Autre" material is selected, the text field is required
    if (selectedMateriaux.includes(autreMaterialLabel) && !autreMateriau.trim()) {
      newErrors.autreMateriau = t.contact.errorOtherMaterialRequired || 'Please specify the material';
    }

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

    try {
      const firstName = formData.name.split(' ')[0];

      // Build materials list, replacing "Autre" label with actual text
      const finalMaterials = selectedMateriaux.map(m =>
        m === autreMaterialLabel && autreMateriau.trim()
          ? `${m}: ${autreMateriau.trim()}`
          : m
      );

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        materials: finalMaterials,
        zones: selectedZones,
        protectionTypes: selectedProtectionTypes,
        ville: ville === 'Autre' ? autreVille : ville,
        message: formData.message,
        language,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      // Store confirmation data and redirect
      const confirmationData = {
        firstName,
        email: formData.email,
        phone: formData.phone,
        materials: finalMaterials,
        zones: selectedZones,
        protectionTypes: selectedProtectionTypes,
        ville: ville === 'Autre' ? autreVille : ville,
        message: formData.message
      };

      sessionStorage.setItem('confirmationData', JSON.stringify(confirmationData));
      setLocation('/confirmation');
    } catch {
      // Fallback: store data locally and redirect even if API fails
      const firstName = formData.name.split(' ')[0];
      const confirmationData = {
        firstName,
        email: formData.email,
        phone: formData.phone,
        materials: selectedMateriaux,
        zones: selectedZones,
        protectionTypes: selectedProtectionTypes,
        ville: ville === 'Autre' ? autreVille : ville,
        message: formData.message
      };
      sessionStorage.setItem('confirmationData', JSON.stringify(confirmationData));
      setLocation('/confirmation');
    } finally {
      setIsSubmitting(false);
    }
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
                onBlur={() => {
                  if (formData.phone.trim() && !validatePhone(formData.phone)) {
                    setErrors(prev => ({
                      ...prev,
                      phone: t.contact.phoneValidationError || 'Invalid phone number format (e.g. +212 6XX XXX XXX)'
                    }));
                  }
                }}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`w-full px-4 py-3 min-h-[44px] border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder={t.contact.phonePlaceholder || '+212 6XX XXX XXX'}
              />
              {errors.phone && (
                <p id="phone-error" className="text-red-600 text-sm mt-1" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Multi-select: Nature des Materiaux */}
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

              {/* Conditional: Autre materiau text field */}
              {selectedMateriaux.includes(autreMaterialLabel) && (
                <div className="mt-3">
                  <label htmlFor="autre-materiau" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.otherMaterialLabel || 'Specify the material'}
                  </label>
                  <input
                    id="autre-materiau"
                    type="text"
                    value={autreMateriau}
                    onChange={(e) => {
                      setAutreMateriau(e.target.value);
                      if (errors.autreMateriau) {
                        setErrors(prev => ({ ...prev, autreMateriau: undefined }));
                      }
                    }}
                    required
                    aria-invalid={!!errors.autreMateriau}
                    aria-describedby={errors.autreMateriau ? 'autre-materiau-error' : undefined}
                    className={`w-full px-4 py-3 min-h-[44px] border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.autreMateriau ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder={t.contact.otherMaterialPlaceholder || 'Describe your material'}
                  />
                  {errors.autreMateriau && (
                    <p id="autre-materiau-error" className="text-red-600 text-sm mt-1" role="alert">
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
                  id="autreVille"
                  type="text"
                  value={autreVille}
                  onChange={(e) => setAutreVille(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t.contact.cityPlaceholder || 'Enter your city'}
                />
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
