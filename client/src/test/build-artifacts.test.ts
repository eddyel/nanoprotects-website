import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Build Artifacts - Launch Preparation', () => {
  const distPath = path.resolve(process.cwd(), 'dist/public');
  const indexHtmlPath = path.join(distPath, 'index.html');
  const manifestPath = path.join(distPath, 'manifest.json');

  describe('Analytics Script Removal', () => {
    it('should have built HTML file', () => {
      const exists = fs.existsSync(indexHtmlPath);
      expect(exists).toBe(true);
    });

    it('should have analytics script commented out in built HTML', () => {
      if (fs.existsSync(indexHtmlPath)) {
        const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

        // Should have comment about analytics being commented out
        expect(htmlContent).toContain('Analytics - Commented out');

        // Check that analytics script is within HTML comment block
        const commentBlock = htmlContent.match(/<!--[\s\S]*?Analytics[\s\S]*?-->/);
        expect(commentBlock).toBeTruthy();

        if (commentBlock) {
          // The analytics script should be inside the comment
          expect(commentBlock[0]).toContain('VITE_ANALYTICS_ENDPOINT');
          expect(commentBlock[0]).toContain('umami');
        }
      }
    });

    it('should not have broken environment variable references in production', () => {
      if (fs.existsSync(indexHtmlPath)) {
        const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

        // Check if there are any uncommented references to undefined env vars
        const lines = htmlContent.split('\n');
        const uncommentedLines = lines.filter(line =>
          !line.trim().startsWith('<!--') &&
          !line.includes('-->') &&
          line.includes('%VITE_')
        );

        // All VITE_ variables should be in comments
        uncommentedLines.forEach(line => {
          if (line.includes('%VITE_')) {
            // Check if this line is within a comment block
            const beforeLine = htmlContent.substring(0, htmlContent.indexOf(line));
            const lastCommentStart = beforeLine.lastIndexOf('<!--');
            const lastCommentEnd = beforeLine.lastIndexOf('-->');

            // Should be in a comment (comment start more recent than comment end)
            expect(lastCommentStart).toBeGreaterThan(lastCommentEnd);
          }
        });
      }
    });
  });

  describe('PWA Manifest', () => {
    it('should have manifest.json in dist folder', () => {
      const exists = fs.existsSync(manifestPath);
      expect(exists).toBe(true);
    });

    it('should have valid manifest.json structure', () => {
      if (fs.existsSync(manifestPath)) {
        const manifestContent = fs.readFileSync(manifestPath, 'utf-8');
        const manifest = JSON.parse(manifestContent);

        // Required PWA manifest fields
        expect(manifest).toHaveProperty('name');
        expect(manifest).toHaveProperty('short_name');
        expect(manifest).toHaveProperty('start_url');
        expect(manifest).toHaveProperty('display');
        expect(manifest).toHaveProperty('icons');

        // Verify values
        expect(manifest.name).toBe('NanoProtects - Nettoyage & Protection Nanotechnologique');
        expect(manifest.short_name).toBe('NanoProtects');
        expect(manifest.start_url).toBe('/');
        expect(manifest.display).toBe('standalone');
      }
    });

    it('should have proper theme colors in manifest', () => {
      if (fs.existsSync(manifestPath)) {
        const manifestContent = fs.readFileSync(manifestPath, 'utf-8');
        const manifest = JSON.parse(manifestContent);

        expect(manifest.theme_color).toBe('#0066CC');
        expect(manifest.background_color).toBe('#0066CC');
      }
    });

    it('should have proper icons configuration', () => {
      if (fs.existsSync(manifestPath)) {
        const manifestContent = fs.readFileSync(manifestPath, 'utf-8');
        const manifest = JSON.parse(manifestContent);

        expect(Array.isArray(manifest.icons)).toBe(true);
        expect(manifest.icons.length).toBeGreaterThan(0);

        // Check icon structure
        manifest.icons.forEach((icon: any) => {
          expect(icon).toHaveProperty('src');
          expect(icon).toHaveProperty('sizes');
          expect(icon).toHaveProperty('type');
          expect(icon).toHaveProperty('purpose');
        });
      }
    });

    it('should have manifest link in HTML', () => {
      if (fs.existsSync(indexHtmlPath)) {
        const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');
        expect(htmlContent).toContain('<link rel="manifest" href="/manifest.json"');
      }
    });

    it('should have proper localization settings', () => {
      if (fs.existsSync(manifestPath)) {
        const manifestContent = fs.readFileSync(manifestPath, 'utf-8');
        const manifest = JSON.parse(manifestContent);

        expect(manifest.lang).toBe('fr');
        expect(manifest.dir).toBe('ltr');
      }
    });
  });

  describe('Build Integrity', () => {
    it('should have index.html in dist folder', () => {
      const exists = fs.existsSync(indexHtmlPath);
      expect(exists).toBe(true);
    });

    it('should have assets folder with JavaScript bundles', () => {
      const assetsPath = path.join(distPath, 'assets');
      const exists = fs.existsSync(assetsPath);
      expect(exists).toBe(true);

      if (exists) {
        const files = fs.readdirSync(assetsPath);
        const jsFiles = files.filter(f => f.endsWith('.js'));
        expect(jsFiles.length).toBeGreaterThan(0);
      }
    });

    it('should have CSS bundle', () => {
      const assetsPath = path.join(distPath, 'assets');
      if (fs.existsSync(assetsPath)) {
        const files = fs.readdirSync(assetsPath);
        const cssFiles = files.filter(f => f.endsWith('.css'));
        expect(cssFiles.length).toBeGreaterThan(0);
      }
    });
  });
});
