import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ConfirmationState {
  firstName: string;
  email: string;
  phone: string;
  materials: string[];
  zones: string[];
  protectionTypes: string[];
  ville: string;
  message: string;
}

export default function Confirmation() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const [confirmationData, setConfirmationData] = useState<ConfirmationState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const state = (window.history.state?.state || sessionStorage.getItem('confirmationData')) as ConfirmationState | string | null;

    let data: ConfirmationState | null = null;

    if (typeof state === 'string') {
      try {
        data = JSON.parse(state);
      } catch {
        data = null;
      }
    } else if (state && typeof state === 'object') {
      data = state as ConfirmationState;
    }

    if (data?.firstName) {
      setConfirmationData(data);
      sessionStorage.removeItem('confirmationData');
    } else {
      setTimeout(() => setLocation('/contact'), 500);
    }

    setIsLoading(false);
  }, [setLocation]);

  if (isLoading || !confirmationData) {
    return null;
  }

  const materialsText = confirmationData.materials.length > 0
    ? confirmationData.materials.join(', ')
    : t.confirmation.defaultProjectLabel;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      <Navigation />

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
              <CheckCircle2
                className="w-20 h-20 relative"
                style={{ color: '#A33215' }}
              />
            </div>
          </div>

          {/* Main Title */}
          <h1
            className="font-display text-[2rem] md:text-[3rem] font-bold text-center mb-8 leading-tight"
            style={{ color: '#A33215' }}
          >
            {t.confirmation.titlePrefix} <span className="text-primary">{confirmationData.firstName}</span> !
          </h1>

          {/* Confirmation Message */}
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-12 border border-gray-100">
            <p className="text-center text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              {t.confirmation.messagePrefix} <span className="font-semibold text-primary">{materialsText}</span>. {t.confirmation.messageSuffix}
            </p>
            <p className="text-center text-gray-600 text-base">
              {t.confirmation.responseTime}
            </p>
          </div>

          {/* Project Details Summary */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12 border border-gray-100">
            <h2 className="font-display text-xl font-bold mb-6" style={{ color: '#A33215' }}>
              {t.confirmation.summaryTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">{t.confirmation.yourInfoTitle}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">{t.confirmation.labelName}</span> {confirmationData.firstName}</p>
                  <p><span className="font-medium">{t.confirmation.labelEmail}</span> {confirmationData.email}</p>
                  <p><span className="font-medium">{t.confirmation.labelPhone}</span> {confirmationData.phone}</p>
                  <p><span className="font-medium">{t.confirmation.labelCity}</span> {confirmationData.ville}</p>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">{t.confirmation.projectDetailsTitle}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  {confirmationData.materials.length > 0 && (
                    <p>
                      <span className="font-medium">{t.confirmation.labelMaterials}</span>
                      <br />
                      {confirmationData.materials.map((m, i) => (
                        <span key={i}>
                          {m}
                          {i < confirmationData.materials.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                  )}

                  {confirmationData.zones.length > 0 && (
                    <p>
                      <span className="font-medium">{t.confirmation.labelZones}</span>
                      <br />
                      {confirmationData.zones.map((z, i) => (
                        <span key={i}>
                          {z}
                          {i < confirmationData.zones.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                  )}

                  {confirmationData.protectionTypes.length > 0 && (
                    <p>
                      <span className="font-medium">{t.confirmation.labelProtectionTypes}</span>
                      <br />
                      {confirmationData.protectionTypes.map((pt, i) => (
                        <span key={i}>
                          {pt}
                          {i < confirmationData.protectionTypes.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Message Preview */}
            {confirmationData.message && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-3">{t.confirmation.yourMessageTitle}</h3>
                <p className="text-sm text-gray-600 italic">{confirmationData.message}</p>
              </div>
            )}
          </div>

          {/* Waiting Section */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: '#2D2D2D' }}>
              {t.confirmation.waitingTitle}
            </h2>

            <div className="flex justify-center">
              <Button
                onClick={() => setLocation('/showroom')}
                size="lg"
                className="text-lg py-6 px-8 border-2 btn-brand"
              >
                {t.confirmation.showroomButton}
              </Button>
            </div>
          </div>

          {/* Further Reading Section */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: '#2D2D2D' }}>
              {t.confirmation.furtherTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => setLocation('/notre-methode')}
                className="group bg-white rounded-lg shadow-sm p-8 border border-gray-100 hover:shadow-md hover:border-primary transition-all text-left"
              >
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors" style={{ color: '#A33215' }}>
                  {t.confirmation.methodTitle}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.confirmation.methodDescription}
                </p>
                <span className="text-primary font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  {t.confirmation.learnMore} &rarr;
                </span>
              </button>

              <button
                onClick={() => setLocation('/materiaux-expertises')}
                className="group bg-white rounded-lg shadow-sm p-8 border border-gray-100 hover:shadow-md hover:border-primary transition-all text-left"
              >
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors" style={{ color: '#A33215' }}>
                  {t.confirmation.expertiseTitle}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.confirmation.expertiseDescription}
                </p>
                <span className="text-primary font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  {t.confirmation.learnMore} &rarr;
                </span>
              </button>
            </div>
          </div>

          {/* Reassurance Message */}
          <div className="text-center space-y-4">
            <p className="text-gray-700 text-lg">
              {t.confirmation.reassuranceMessage}
            </p>
            <p className="text-gray-600 text-sm">
              {t.confirmation.urgentPrefix} <a href="tel:+212661000000" className="text-primary font-semibold hover:underline">+212 661 000 000</a>
            </p>
          </div>

          {/* Back to Home Link */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setLocation('/')}
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              &larr; {t.confirmation.backHome}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
