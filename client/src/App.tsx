import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
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

// SEO Updater — met à jour le title, description et lang automatiquement selon la langue active
function SEOUpdater() {
  const { language } = useLanguage();

  useEffect(() => {
    const seo = translations[language].seo;

    // Mise à jour du title
    document.title = seo.title;

    // Mise à jour de l'attribut lang sur <html>
    document.documentElement.lang = language;

    // Mise à jour meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', seo.description);

    // Mise à jour meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.setAttribute('content', seo.keywords);

    // Mise à jour Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    // Mise à jour Twitter
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', seo.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', seo.description);
  }, [language]);

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

// Update page titles for SEO
function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | NanoProtects`;
  }, [title]);
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - Then manage colors palette with CSS variables in client/src/index.css instead of hard-coding to keep global consistency.
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
