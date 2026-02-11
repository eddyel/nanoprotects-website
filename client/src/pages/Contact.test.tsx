import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

// Mock dependencies
vi.mock('wouter', () => ({
  useLocation: () => ['/', vi.fn()],
  Link: ({ children, href }: any) => <a href={href}>{children}</a>
}));

vi.mock('@/contexts/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'fr',
    setLanguage: vi.fn(),
    t: {
      contact: {
        title: 'Demande de Diagnostic Personnalisé',
        subtitle: 'Pour un patrimoine qui défie le temps',
        nameLabel: 'Nom',
        namePlaceholder: 'Votre nom',
        emailLabel: 'Email',
        emailPlaceholder: 'votre@email.com',
        phoneLabel: 'Téléphone',
        message: 'Message',
        messagePlaceholder: 'Votre message',
        city: 'Ville',
        selectCityPlaceholder: 'Sélectionnez une ville',
        specifyCity: 'Spécifiez votre ville',
        cityPlaceholder: 'Entrez votre ville',
        materialNature: 'Nature des matériaux',
        applicationZone: 'Zone d\'application',
        protectionType: 'Type de protection',
        multipleSelection: 'sélection multiple',
        diagnosticButton: 'Envoyer',
        submitting: 'Envoi en cours...',
        errorNameRequired: 'Le nom est requis',
        errorEmailInvalid: 'Email invalide',
        errorPhoneInvalid: 'Téléphone invalide',
        errorSubmit: 'Veuillez corriger les erreurs',
        autreMateriauLabel: 'Autre matériau',
        material1: 'Pierre naturelle',
        material2: 'Marbre',
        material3: 'Granit',
        material4: 'Zellige',
        material5: 'Bejmat',
        material6: 'Carreaux',
        material7: 'Tadelakt',
        material8: 'Béton',
        material9: 'Bois',
        material10: 'Métal',
        material11: 'Verre',
        material12: 'Enduit',
        material13: 'Peinture',
        material14: 'Terre cuite',
        material15: 'Pierre reconstituée',
        material16: 'Autre',
        zone1: 'Intérieur',
        zone2: 'Extérieur',
        zone3: 'Piscine',
        zone4: 'Spa',
        protectionWater: 'Hydrofuge',
        protectionOil: 'Oléofuge',
        protectionMineralization: 'Minéralisation',
        protectionAntiSlip: 'Anti-dérapant'
      },
      nav: {
        hospitality: 'Hospitalité',
        materials: 'Matériaux',
        projects: 'Projets',
        realizations: 'Réalisations',
        philosophy: 'Philosophie',
        contact: 'Contact'
      }
    }
  })
}));

vi.mock('@/components/Navigation', () => ({
  default: () => <nav>Navigation</nav>
}));

describe('Contact Form - autreVille Validation', () => {
  it('renders the contact form', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/nom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it('has "Autre" option in city select', () => {
    render(<Contact />);
    const citySelect = screen.getByLabelText(/ville/i) as HTMLSelectElement;
    const options = Array.from(citySelect.options).map(opt => opt.value);
    expect(options).toContain('Autre');
  });

  it('shows autreVille field when "Autre" city is selected', async () => {
    render(<Contact />);

    const citySelect = screen.getByLabelText(/ville/i) as HTMLSelectElement;

    // Verify autreVille field is NOT present before selection
    expect(screen.queryByRole('textbox', { name: /ville/i })).not.toBeInTheDocument();

    // Use fireEvent.change to select "Autre"
    fireEvent.change(citySelect, { target: { value: 'Autre' } });

    // autreVille field should appear - search by ID
    await waitFor(() => {
      const autreVilleInput = document.getElementById('autreVille');
      expect(autreVilleInput).toBeInTheDocument();
    });
  });

  it('validates autreVille when "Autre" is selected and field is empty', async () => {
    render(<Contact />);

    // Fill required fields except autreVille
    await userEvent.type(screen.getByLabelText(/nom/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/téléphone/i), '212 675987890');

    // Select "Autre" city
    const citySelect = screen.getByLabelText(/ville/i) as HTMLSelectElement;
    fireEvent.change(citySelect, { target: { value: 'Autre' } });

    // Wait for autreVille field to appear
    await waitFor(() => {
      expect(document.getElementById('autreVille')).toBeInTheDocument();
    });

    // Leave autreVille empty and submit
    const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);

    // Should show error
    await waitFor(() => {
      const errorElement = document.getElementById('autreVille-error');
      expect(errorElement).toBeInTheDocument();
      // The error message uses the t.contact.specifyCity translation
      expect(errorElement).toHaveTextContent(/précisez|spécifiez/i);
    });
  });

  it('allows submission when autreVille is filled', async () => {
    const mockFetch = vi.fn(() => Promise.resolve({ ok: true }));
    global.fetch = mockFetch as any;

    render(<Contact />);

    // Fill all required fields
    await userEvent.type(screen.getByLabelText(/nom/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/téléphone/i), '212 675987890');

    // Select "Autre" city
    const citySelect = screen.getByLabelText(/ville/i) as HTMLSelectElement;
    fireEvent.change(citySelect, { target: { value: 'Autre' } });

    // Wait for and fill autreVille
    await waitFor(() => {
      expect(document.getElementById('autreVille')).toBeInTheDocument();
    });

    const autreVilleInput = document.getElementById('autreVille') as HTMLInputElement;
    await userEvent.type(autreVilleInput, 'Fès');

    // Submit form
    const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
    fireEvent.click(submitButton);

    // Should not show autreVille error
    await waitFor(() => {
      const errorElement = document.getElementById('autreVille-error');
      expect(errorElement).not.toBeInTheDocument();
    });
  });

  it('displays error summary with multiple errors', async () => {
    render(<Contact />);

    // Submit form without filling any required fields
    const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
    fireEvent.click(submitButton);

    // Error summary should appear (find by distinctive text)
    await waitFor(() => {
      const errorSummary = screen.getByText(/corriger les \d+ erreurs/i);
      expect(errorSummary).toBeInTheDocument();
    });
  });

  it('error summary shows correct error count', async () => {
    render(<Contact />);

    // Submit without filling required fields
    const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
    fireEvent.click(submitButton);

    // Should show error count (name, email, phone = 3 errors)
    await waitFor(() => {
      expect(screen.getByText(/corriger les 3 erreurs/i)).toBeInTheDocument();
    });
  });

  it('error summary links navigate to error fields', async () => {
    render(<Contact />);

    // Submit without filling required fields
    const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
    fireEvent.click(submitButton);

    // Wait for error summary
    await waitFor(() => {
      expect(screen.getByText(/corriger les \d+ erreurs/i)).toBeInTheDocument();
    });

    // Find and click first error link (they have underline class)
    const errorLinks = screen.getAllByRole('link');
    expect(errorLinks.length).toBeGreaterThan(0);

    // Click first error link
    fireEvent.click(errorLinks[0]);

    // Verify focus moved to the error field
    await waitFor(() => {
      const focusedElement = document.activeElement;
      expect(focusedElement?.tagName.toLowerCase()).toBe('input');
    });
  });

  it('sets aria-invalid="true" on fields with errors', async () => {
    render(<Contact />);

    // Submit without filling required fields
    const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
    fireEvent.click(submitButton);

    // All required fields should have aria-invalid="true"
    await waitFor(() => {
      const nameInput = screen.getByLabelText(/nom/i);
      const emailInput = screen.getByLabelText(/email/i);
      const phoneInput = screen.getByLabelText(/téléphone/i);

      expect(nameInput).toHaveAttribute('aria-invalid', 'true');
      expect(emailInput).toHaveAttribute('aria-invalid', 'true');
      expect(phoneInput).toHaveAttribute('aria-invalid', 'true');
    });
  });

  it('sets aria-describedby linking errors to inputs', async () => {
    render(<Contact />);

    // Submit without filling required fields
    const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
    fireEvent.click(submitButton);

    // Check aria-describedby links to error message IDs
    await waitFor(() => {
      const nameInput = screen.getByLabelText(/nom/i);
      expect(nameInput).toHaveAttribute('aria-describedby', 'name-error');

      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('aria-describedby', 'email-error');

      const phoneInput = screen.getByLabelText(/téléphone/i);
      expect(phoneInput).toHaveAttribute('aria-describedby', 'phone-error');
    });
  });

  it('sets aria-required on autreVille when Autre is selected', async () => {
    render(<Contact />);

    const citySelect = screen.getByLabelText(/ville/i) as HTMLSelectElement;
    fireEvent.change(citySelect, { target: { value: 'Autre' } });

    await waitFor(() => {
      const autreVilleInput = document.getElementById('autreVille');
      expect(autreVilleInput).toHaveAttribute('aria-required', 'true');
    });
  });

  it('sets aria-invalid on autreVille when validation fails', async () => {
    render(<Contact />);

    // Fill required fields
    await userEvent.type(screen.getByLabelText(/nom/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/téléphone/i), '212 675987890');

    // Select "Autre" but leave autreVille empty
    const citySelect = screen.getByLabelText(/ville/i) as HTMLSelectElement;
    fireEvent.change(citySelect, { target: { value: 'Autre' } });

    await waitFor(() => {
      expect(document.getElementById('autreVille')).toBeInTheDocument();
    });

    // Submit form
    const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
    fireEvent.click(submitButton);

    // autreVille should have aria-invalid="true"
    await waitFor(() => {
      const autreVilleInput = document.getElementById('autreVille');
      expect(autreVilleInput).toHaveAttribute('aria-invalid', 'true');
      expect(autreVilleInput).toHaveAttribute('aria-describedby', 'autreVille-error');
    });
  });

  it('automatically focuses autreVille field when "Autre" is selected', async () => {
    render(<Contact />);

    const citySelect = screen.getByLabelText(/ville/i) as HTMLSelectElement;

    // Select "Autre" city
    fireEvent.change(citySelect, { target: { value: 'Autre' } });

    // Wait for autreVille field to appear and receive focus
    await waitFor(() => {
      const autreVilleInput = document.getElementById('autreVille');
      expect(autreVilleInput).toBeInTheDocument();
      expect(document.activeElement).toBe(autreVilleInput);
    }, { timeout: 200 }); // Give time for setTimeout in useEffect
  });

  it('clears autreVille error when user starts typing', async () => {
    render(<Contact />);

    // Fill required fields
    await userEvent.type(screen.getByLabelText(/nom/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/téléphone/i), '212 675987890');

    // Select "Autre" city
    const citySelect = screen.getByLabelText(/ville/i) as HTMLSelectElement;
    fireEvent.change(citySelect, { target: { value: 'Autre' } });

    // Wait for autreVille field
    await waitFor(() => {
      expect(document.getElementById('autreVille')).toBeInTheDocument();
    });

    // Submit to trigger error
    const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
    fireEvent.click(submitButton);

    // Error should appear
    await waitFor(() => {
      const errorElement = document.getElementById('autreVille-error');
      expect(errorElement).toBeInTheDocument();
    });

    // Start typing in autreVille
    const autreVilleInput = document.getElementById('autreVille') as HTMLInputElement;
    await userEvent.type(autreVilleInput, 'F');

    // Error should clear
    await waitFor(() => {
      const errorElement = document.getElementById('autreVille-error');
      expect(errorElement).not.toBeInTheDocument();
    });
  });
});
