import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

// Mock wouter
vi.mock('wouter', () => ({
  useLocation: () => ['/', vi.fn()],
  Link: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

// Mock LanguageContext
vi.mock('@/contexts/LanguageContext', () => ({
  useLanguage: () => ({
    t: {
      hero: {
        title: 'Test Title',
        subtitle: 'Test Subtitle',
        realizationsButton: 'Realizations',
        cta: 'Contact',
      },
      nav: {
        hospitality: 'Hospitality',
        materials: 'Materials',
        projects: 'Projects',
        realizations: 'Realizations',
        philosophy: 'Philosophy',
        contact: 'Contact',
      },
    },
    language: 'fr',
    setLanguage: vi.fn(),
  }),
}));

describe('Home Page - Social Media Alt Text', () => {
  it('should have descriptive alt text for LinkedIn icon', () => {
    render(<Home />);
    const linkedinImages = screen.getAllByAltText('Visit NanoProtects on LinkedIn');
    expect(linkedinImages.length).toBeGreaterThan(0);
    expect(linkedinImages[0]).toBeInTheDocument();
  });

  it('should have descriptive alt text for Facebook icon', () => {
    render(<Home />);
    const facebookImages = screen.getAllByAltText('Visit NanoProtects on Facebook');
    expect(facebookImages.length).toBeGreaterThan(0);
    expect(facebookImages[0]).toBeInTheDocument();
  });

  it('should have descriptive alt text for Instagram icon', () => {
    render(<Home />);
    const instagramImages = screen.getAllByAltText('Visit NanoProtects on Instagram');
    expect(instagramImages.length).toBeGreaterThan(0);
    expect(instagramImages[0]).toBeInTheDocument();
  });

  it('should not use generic alt text like "LinkedIn"', () => {
    render(<Home />);
    const genericLinkedIn = screen.queryByAltText('LinkedIn');
    expect(genericLinkedIn).not.toBeInTheDocument();
  });

  it('should not use generic alt text like "Facebook"', () => {
    render(<Home />);
    const genericFacebook = screen.queryByAltText('Facebook');
    expect(genericFacebook).not.toBeInTheDocument();
  });

  it('should not use generic alt text like "Instagram"', () => {
    render(<Home />);
    const genericInstagram = screen.queryByAltText('Instagram');
    expect(genericInstagram).not.toBeInTheDocument();
  });

  it('should have proper aria-labels on social media links', () => {
    render(<Home />);
    const linkedinLinks = screen.getAllByLabelText('Visit NanoProtects on LinkedIn');
    const facebookLinks = screen.getAllByLabelText('Visit NanoProtects on Facebook');
    const instagramLinks = screen.getAllByLabelText('Visit NanoProtects on Instagram');

    // Should have at least one of each (may have multiple due to Navigation component)
    expect(linkedinLinks.length).toBeGreaterThan(0);
    expect(facebookLinks.length).toBeGreaterThan(0);
    expect(instagramLinks.length).toBeGreaterThan(0);

    expect(linkedinLinks[0]).toBeInTheDocument();
    expect(facebookLinks[0]).toBeInTheDocument();
    expect(instagramLinks[0]).toBeInTheDocument();
  });

  it('should have correct social media URLs', () => {
    render(<Home />);
    const linkedinLinks = screen.getAllByLabelText('Visit NanoProtects on LinkedIn');
    const facebookLinks = screen.getAllByLabelText('Visit NanoProtects on Facebook');
    const instagramLinks = screen.getAllByLabelText('Visit NanoProtects on Instagram');

    // Check URLs for links in Home component (filter by opacity class to identify hero section)
    linkedinLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://www.linkedin.com/company/nanoprotects');
    });

    facebookLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://web.facebook.com/NanoProtects');
    });

    instagramLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://www.instagram.com/nanoprotects');
    });
  });
});
