/*
Design Philosophy: Moroccan Modernism with Immersive Overlay
- Mobile-first responsive design with proper rem units
- Clear hierarchy and spacing
- No text overlapping or jumbled layouts
*/

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplet, Users, TrendingUp, Microscope, SprayCan, Shield, CheckCircle } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {};
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      errors.name = t.contact.errorNameRequired || 'Name is required (min 2 characters)';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = t.contact.errorEmailInvalid || 'Please enter a valid email';
    }

    if (!message || message.trim().length < 10) {
      errors.message = t.contact.errorMessageRequired || 'Message is required (min 10 characters)';
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors({});

    const formData = new FormData(e.currentTarget);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // Focus first error field
      const firstErrorField = Object.keys(errors)[0];
      const field = e.currentTarget.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
      field?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Implement backend submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(t.contact.successMessage || 'Message sent successfully!');
      e.currentTarget.reset();
      setFormErrors({});
    } catch (error) {
      setFormErrors({ submit: t.contact.errorSubmit || 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-riad.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <div className="container relative z-20 py-32">
          <div className="max-w-4xl">
            <h1 className="font-display font-bold text-white mb-6 leading-tight text-shadow-lg text-[2rem] md:text-[3.5rem] lg:text-[5rem]">
              {t.hero.title}
            </h1>
            <p className="text-white/90 mb-8 text-shadow leading-relaxed text-[1.125rem] md:text-[1.5rem] lg:text-[1.75rem]">
              {t.hero.subtitle}
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-[1rem] md:text-[1.125rem] px-8 py-6"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section
        id="philosophy"
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-riad.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/75 z-10" />
        <div className="container relative z-20 py-32">
          <div className="max-w-4xl">
            <h2 className="font-display font-bold text-white mb-6 leading-tight text-shadow-lg text-[1.75rem] md:text-[3rem] lg:text-[4rem]">
              {t.why.title}
            </h2>
            <p className="text-white/90 leading-relaxed text-shadow text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]">
              {t.why.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* What Section - Transformation */}
      <section
        id="what"
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hotel-lobby.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/75 z-10" />
        <div className="container relative z-20 py-32">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-white mb-4 leading-tight text-shadow-lg text-[1.75rem] md:text-[3rem] lg:text-[4rem]">
              {t.what.title}
            </h2>
            <p className="text-white/90 text-shadow text-[1rem] md:text-[1.25rem]">
              {t.what.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="glass-card text-white">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 mx-auto">
                <Droplet className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-3 text-center text-[1.5rem] md:text-[2rem]">
                {t.what.benefit1Title}
              </h3>
              <p className="text-white/90 text-center leading-relaxed text-[0.875rem] md:text-[1rem]">
                {t.what.benefit1Text}
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="glass-card text-white">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-3 text-center text-[1.5rem] md:text-[2rem]">
                {t.what.benefit2Title}
              </h3>
              <p className="text-white/90 text-center leading-relaxed text-[0.875rem] md:text-[1rem]">
                {t.what.benefit2Text}
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="glass-card text-white">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 mx-auto">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-3 text-center text-[1.5rem] md:text-[2rem]">
                {t.what.benefit3Title}
              </h3>
              <p className="text-white/90 text-center leading-relaxed text-[0.875rem] md:text-[1rem]">
                {t.what.benefit3Text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Section - Two-Phase Method */}
      <section
        id="how"
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/marble-macro.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/75 z-10" />
        <div className="container relative z-20 py-32">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-white mb-4 leading-tight text-shadow-lg text-[1.75rem] md:text-[3rem] lg:text-[4rem]">
              {t.how.title}
            </h2>
            <p className="text-white/90 text-shadow text-[1rem] md:text-[1.25rem]">
              {t.how.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Phase 1: Cleaning */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="phase-badge">1</div>
                <h3 className="font-display font-bold text-white leading-tight text-[1.5rem] md:text-[2rem]">
                  {t.how.phase1Title}
                </h3>
              </div>

              <div className="glass-card text-white">
                <div className="flex items-start gap-4">
                  <Microscope className="flex-shrink-0 text-primary w-8 h-8" />
                  <div className="min-w-0">
                    <h4 className="font-semibold mb-2 text-[1.125rem] md:text-[1.25rem]">
                      {t.how.phase1Step1Title}
                    </h4>
                    <p className="text-white/90 leading-relaxed text-[0.875rem] md:text-[1rem]">
                      {t.how.phase1Step1Text}
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card text-white">
                <div className="flex items-start gap-4">
                  <SprayCan className="flex-shrink-0 text-primary w-8 h-8" />
                  <div className="min-w-0">
                    <h4 className="font-semibold mb-2 text-[1.125rem] md:text-[1.25rem]">
                      {t.how.phase1Step2Title}
                    </h4>
                    <p className="text-white/90 leading-relaxed text-[0.875rem] md:text-[1rem]">
                      {t.how.phase1Step2Text}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2: Protection */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="phase-badge">2</div>
                <h3 className="font-display font-bold text-white leading-tight text-[1.5rem] md:text-[2rem]">
                  {t.how.phase2Title}
                </h3>
              </div>

              <div className="glass-card text-white">
                <div className="flex items-start gap-4">
                  <Shield className="flex-shrink-0 text-primary w-8 h-8" />
                  <div className="min-w-0">
                    <h4 className="font-semibold mb-2 text-[1.125rem] md:text-[1.25rem]">
                      {t.how.phase2Step1Title}
                    </h4>
                    <p className="text-white/90 leading-relaxed text-[0.875rem] md:text-[1rem]">
                      {t.how.phase2Step1Text}
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card text-white">
                <div className="flex items-start gap-4">
                  <CheckCircle className="flex-shrink-0 text-primary w-8 h-8" />
                  <div className="min-w-0">
                    <h4 className="font-semibold mb-2 text-[1.125rem] md:text-[1.25rem]">
                      {t.how.phase2Step2Title}
                    </h4>
                    <p className="text-white/90 leading-relaxed text-[0.875rem] md:text-[1rem]">
                      {t.how.phase2Step2Text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary to-secondary/80"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: 'url(/images/marble-macro.jpg)',
          }} />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-white mb-6 text-[1.75rem] md:text-[3rem] lg:text-[4rem]">
              {t.contact.title}
            </h2>
            <p className="text-white/90 mb-12 text-[1rem] md:text-[1.25rem]">
              {t.contact.subtitle}
            </p>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.namePlaceholder}
                  className={`w-full px-6 py-4 min-h-[48px] rounded-lg bg-white/10 border
                             text-white placeholder-white/60 text-[1rem]
                             focus:outline-none focus:ring-2 transition-all duration-200
                             ${formErrors.name
                               ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                               : 'border-white/20 focus:ring-primary focus:border-primary'
                             }`}
                  required
                  aria-label={t.contact.namePlaceholder}
                  aria-invalid={!!formErrors.name}
                  aria-describedby={formErrors.name ? 'name-error' : undefined}
                />
                {formErrors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-400" role="alert">
                    {formErrors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={t.contact.emailPlaceholder}
                  className={`w-full px-6 py-4 min-h-[48px] rounded-lg bg-white/10 border
                             text-white placeholder-white/60 text-[1rem]
                             focus:outline-none focus:ring-2 transition-all duration-200
                             ${formErrors.email
                               ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                               : 'border-white/20 focus:ring-primary focus:border-primary'
                             }`}
                  required
                  aria-label={t.contact.emailPlaceholder}
                  aria-invalid={!!formErrors.email}
                  aria-describedby={formErrors.email ? 'email-error' : undefined}
                />
                {formErrors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-400" role="alert">
                    {formErrors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder={t.contact.messagePlaceholder}
                  rows={6}
                  className={`w-full px-6 py-4 min-h-[120px] rounded-lg bg-white/10 border
                             text-white placeholder-white/60 text-[1rem]
                             focus:outline-none focus:ring-2 transition-all duration-200
                             resize-none
                             ${formErrors.message
                               ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                               : 'border-white/20 focus:ring-primary focus:border-primary'
                             }`}
                  required
                  aria-label={t.contact.messagePlaceholder}
                  aria-invalid={!!formErrors.message}
                  aria-describedby={formErrors.message ? 'message-error' : undefined}
                />
                {formErrors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-400" role="alert">
                    {formErrors.message}
                  </p>
                )}
              </div>

              {/* Submit Error */}
              {formErrors.submit && (
                <p className="text-sm text-red-400" role="alert">
                  {formErrors.submit}
                </p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-[1rem] md:text-[1.125rem]
                           disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
              >
                {isSubmitting ? (t.contact.submitting || 'Sending...') : t.contact.submit}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/95 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/PHOTO-2026-01-25-15-41-21.jpg"
                alt="NanoProtects"
                className="h-10 w-10 object-contain"
              />
              <div>
                <div className="font-display text-xl font-semibold">NanoProtects</div>
                <div className="text-sm text-white/70">{t.footer.tagline}</div>
              </div>
            </div>
            <div className="text-sm text-white/70">
              © 2026 NanoProtects. {t.footer.rights}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
