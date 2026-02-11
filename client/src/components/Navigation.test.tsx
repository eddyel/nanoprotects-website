import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

// Mock wouter
vi.mock('wouter', () => ({
  useLocation: () => ['/', vi.fn()],
  Link: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

// Mock LanguageContext
vi.mock('@/contexts/LanguageContext', () => ({
  useLanguage: () => ({
    t: {
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

describe('Navigation Component - Social Media Alt Text', () => {
  describe('Desktop Navigation', () => {
    it('should have descriptive alt text for LinkedIn icon', () => {
      render(<Navigation />);
      const linkedinImages = screen.getAllByAltText('Visit NanoProtects on LinkedIn');
      expect(linkedinImages.length).toBeGreaterThanOrEqual(1);
    });

    it('should have descriptive alt text for Facebook icon', () => {
      render(<Navigation />);
      const facebookImages = screen.getAllByAltText('Visit NanoProtects on Facebook');
      expect(facebookImages.length).toBeGreaterThanOrEqual(1);
    });

    it('should have descriptive alt text for Instagram icon', () => {
      render(<Navigation />);
      const instagramImages = screen.getAllByAltText('Visit NanoProtects on Instagram');
      expect(instagramImages.length).toBeGreaterThanOrEqual(1);
    });

    it('should not use generic alt text', () => {
      render(<Navigation />);
      expect(screen.queryByAltText('LinkedIn')).not.toBeInTheDocument();
      expect(screen.queryByAltText('Facebook')).not.toBeInTheDocument();
      expect(screen.queryByAltText('Instagram')).not.toBeInTheDocument();
    });
  });

  describe('Social Media Links - Accessibility', () => {
    it('should have proper aria-labels on all social media links', () => {
      render(<Navigation />);
      const linkedinLinks = screen.getAllByLabelText('Visit NanoProtects on LinkedIn');
      const facebookLinks = screen.getAllByLabelText('Visit NanoProtects on Facebook');
      const instagramLinks = screen.getAllByLabelText('Visit NanoProtects on Instagram');

      // Should have desktop and potentially mobile versions
      expect(linkedinLinks.length).toBeGreaterThanOrEqual(1);
      expect(facebookLinks.length).toBeGreaterThanOrEqual(1);
      expect(instagramLinks.length).toBeGreaterThanOrEqual(1);
    });

    it('should have target="_blank" and rel="noopener noreferrer" for security', () => {
      render(<Navigation />);
      const socialLinks = screen.getAllByLabelText(/Visit NanoProtects on/);

      socialLinks.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });

    it('should have correct URLs for social media platforms', () => {
      render(<Navigation />);
      const linkedinLinks = screen.getAllByLabelText('Visit NanoProtects on LinkedIn');
      const facebookLinks = screen.getAllByLabelText('Visit NanoProtects on Facebook');
      const instagramLinks = screen.getAllByLabelText('Visit NanoProtects on Instagram');

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

  describe('WCAG 2.1 AA Compliance', () => {
    it('should provide meaningful context through alt text', () => {
      render(<Navigation />);

      // Alt text should describe the action, not just the icon
      const linkedinImages = screen.getAllByAltText('Visit NanoProtects on LinkedIn');
      const facebookImages = screen.getAllByAltText('Visit NanoProtects on Facebook');
      const instagramImages = screen.getAllByAltText('Visit NanoProtects on Instagram');

      expect(linkedinImages.length).toBeGreaterThan(0);
      expect(facebookImages.length).toBeGreaterThan(0);
      expect(instagramImages.length).toBeGreaterThan(0);
    });

    it('should have redundant aria-labels for better screen reader support', () => {
      render(<Navigation />);

      // Both alt text AND aria-label should be present
      const linkedinLinks = screen.getAllByLabelText('Visit NanoProtects on LinkedIn');

      linkedinLinks.forEach(link => {
        const img = link.querySelector('img');
        expect(img).toHaveAttribute('alt', 'Visit NanoProtects on LinkedIn');
      });
    });
  });
});
