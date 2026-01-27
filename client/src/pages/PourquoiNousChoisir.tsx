import Navigation from '@/components/Navigation';
import { Check } from 'lucide-react';

export default function PourquoiNousChoisir() {
  const advantages = [
    "Nettoyage régénérant qui restaure l'éclat d'origine de vos surfaces",
    "Protection nanotechnologique durable (3-5 ans)",
    "Processus ultra-efficient et discret, sans perturbation de votre exploitation",
    "Diagnostic précis et personnalisé pour chaque matériau",
    "Agents écologiques et protocoles scientifiques",
    "Réduction drastique des coûts de maintenance à long terme",
    "Équipes hautement qualifiées et formées aux techniques de pointe",
    "Dialogue systématique et partenariat de confiance",
    "Intervention agile et fiable, adaptée à vos contraintes",
    "Discrétion protectrice pour préserver votre image de marque"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold text-right text-secondary mb-16">
            Pourquoi Nous Choisir ?
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {advantage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
