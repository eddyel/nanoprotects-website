import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider }    from "./contexts/ThemeContext";
import Home                 from "./pages/Home";
import Showroom             from "./pages/Showroom";
import APropos              from "./pages/APropos";
import PourquoiNousChoisir  from "./pages/PourquoiNousChoisir";
import NotreMethode         from "./pages/NotreMethode";
import MateriauxExpertises  from "./pages/MateriauxExpertises";
import Contact              from "./pages/Contact";

const routeMap: Record<string, React.ComponentType> = {
  "/":                      Home,
  "/showroom":              Showroom,
  "/nos-realisations":      Showroom,
  "/a-propos":              APropos,
  "/pourquoi-nous-choisir": PourquoiNousChoisir,
  "/notre-methode":         NotreMethode,
  "/materiaux-expertises":  MateriauxExpertises,
  "/contact":               Contact,
};

export function render(url: string): string {
  const PageComponent = routeMap[url] ?? Home;
  const { hook } = memoryLocation({ path: url, static: true });
  return renderToString(
    <Router hook={hook}>
      <ThemeProvider>
        <LanguageProvider>
          <PageComponent />
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}
