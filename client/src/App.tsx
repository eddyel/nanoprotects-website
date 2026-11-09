import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "@/lib/translations";

// Lazy load page components for code splitting
const Home = lazy(() => import("./pages/Home"));
const Showroom = lazy(() => import("./pages/Showroom"));
const APropos = lazy(() => import("./pages/APropos"));
const PourquoiNousChoisir = lazy(() => import("./pages/PourquoiNousChoisir"));
const NotreMethode = lazy(() => import("./pages/NotreMethode"));
const MateriauxExpertises = lazy(() => import("./pages/MateriauxExpertises"));
const Contact = lazy(() => import("./pages/Contact"));
const Confirmation = lazy(() => import("./pages/Confirmation"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

// Pages alias : meme contenu qu'une autre page, canonical vers la page principale.
// Doit rester identique a scripts/prerender.mjs.
const canonicalTarget: Record<string, string> = {
  "/nos-realisations": "/showroom",
};

// Titre et description par page (francais).
// Ces textes doivent rester identiques a ceux de scripts/prerender.mjs.
// L'accueil et les autres langues utilisent les textes de translations.ts.
const pageSeoFr: Record<string, { title: string; description: string }> = {
  "/materiaux-expertises": {
    title: "Nettoyage Bejmat, Zellige, Pierre Taza, Marbre | NanoProtects",
    description: "Nettoyage et protection nano du bejmat, zellige, carreaux beldi, pierre de Taza et marbre. Solutions durables pour hôtels et riads à Marrakech.",
  },
  "/showroom": {
    title: "Réalisations Avant/Après Bejmat et Zellige | NanoProtects",
    description: "Galerie avant/après de nos interventions en riads et hôtels à Marrakech : bejmat, zellige, pierre de Taza, marbre. Résultats visibles, protection durable.",
  },
  "/nos-realisations": {
    title: "Réalisations Avant/Après Bejmat et Zellige | NanoProtects",
    description: "Galerie avant/après de nos interventions en riads et hôtels à Marrakech : bejmat, zellige, pierre de Taza, marbre. Résultats visibles, protection durable.",
  },
  "/notre-methode": {
    title: "Notre Méthode : Nettoyage puis Protection Nano | NanoProtects",
    description: "Diagnostic, nettoyage régénérant puis protection nanotechnologique invisible pour 3 à 5 ans. Découvrez notre méthode en trois étapes.",
  },
  "/pourquoi-nous-choisir": {
    title: "Pourquoi Choisir NanoProtects | Protection Nano Durable",
    description: "Expertise scientifique, protection invisible de 3 à 5 ans, intervention discrète et partenariat de confiance : pourquoi hôtels et riads nous choisissent.",
  },
  "/a-propos": {
    title: "À Propos de NanoProtects | Nano-Protection à Marrakech",
    description: "Fondée en 2019 à Marrakech, NanoProtects accompagne plus de 50 établissements partenaires et de nombreux particuliers au Maroc.",
  },
  "/contact": {
    title: "Diagnostic Gratuit Nano-Protection | Contact NanoProtects",
    description: "Demandez votre diagnostic gratuit et sans engagement pour vos surfaces : bejmat, zellige, marbre, pierre de Taza. Réponse sous 24 heures ouvrées.",
  },
};

// SEO Updater : met à jour le title, la description, le canonical et lang selon la langue et la route active
function SEOUpdater() {
  const { language } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    const seo = translations[language].seo;
    const baseUrl = 'https://nanoprotects.com';

    // Route normalisée (sans slash final), puis canonical avec un seul slash final.
    // Les pages alias pointent vers leur page principale.
    const route = location.replace(/\/+$/, '') || '/';
    const canonicalRoute = canonicalTarget[route] || route;
    const canonicalUrl = canonicalRoute === '/' ? `${baseUrl}/` : `${baseUrl}${canonicalRoute}/`;

    // Titre et description : propres à la page en français, génériques sinon
    const pageSeo = language === 'fr' ? pageSeoFr[route] : undefined;
    const title = pageSeo ? pageSeo.title : seo.title;
    const description = pageSeo ? pageSeo.description : seo.description;

    // Mise à jour du title
    document.title = title;

    // Mise à jour de l'attribut lang sur <html>
    document.documentElement.lang = language;

    // Mise à jour meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    // Mise à jour meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.setAttribute('content', seo.keywords);

    // Mise à jour canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', canonicalUrl);

    // Mise à jour Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    // Mise à jour Twitter
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);

  }, [language, location]);

  return null;
}

function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/showroom" component={Showroom} />
        <Route path="/nos-realisations" component={Showroom} />
        <Route path="/a-propos" component={APropos} />
        <Route path="/pourquoi-nous-choisir" component={PourquoiNousChoisir} />
        <Route path="/notre-methode" component={NotreMethode} />
        <Route path="/materiaux-expertises" component={MateriauxExpertises} />
        <Route path="/contact" component={Contact} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/merci" component={Confirmation} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <SEOUpdater />
            <Router />
            <Toaster />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
