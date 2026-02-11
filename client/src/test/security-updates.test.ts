import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Security Updates - Package Versions', () => {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json');
  const lockFilePath = path.resolve(process.cwd(), 'pnpm-lock.yaml');

  describe('package.json Security Updates', () => {
    it('should have package.json file', () => {
      const exists = fs.existsSync(packageJsonPath);
      expect(exists).toBe(true);
    });

    it('should have axios updated to 1.13.5 or higher (fixes HIGH severity DoS)', () => {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      const axiosVersion = packageJson.dependencies?.axios;

      expect(axiosVersion).toBeDefined();

      // Extract version number (remove ^ or ~)
      const version = axiosVersion.replace(/[\^~]/, '');
      const [major, minor, patch] = version.split('.').map(Number);

      // Should be >= 1.13.5
      expect(major).toBeGreaterThanOrEqual(1);
      if (major === 1) {
        expect(minor).toBeGreaterThanOrEqual(13);
        if (minor === 13) {
          expect(patch).toBeGreaterThanOrEqual(5);
        }
      }
    });

    it('should have pnpm updated to 10.28.2 or higher (fixes MODERATE path traversal)', () => {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      const pnpmVersion = packageJson.devDependencies?.pnpm;

      expect(pnpmVersion).toBeDefined();

      // Extract version number (remove ^ or ~)
      const version = pnpmVersion.replace(/[\^~]/, '');
      const [major, minor, patch] = version.split('.').map(Number);

      // Should be >= 10.28.2
      expect(major).toBeGreaterThanOrEqual(10);
      if (major === 10) {
        expect(minor).toBeGreaterThanOrEqual(28);
        if (minor === 28) {
          expect(patch).toBeGreaterThanOrEqual(2);
        }
      }
    });
  });

  describe('Installed Versions Verification', () => {
    it('should have pnpm-lock.yaml for version pinning', () => {
      const exists = fs.existsSync(lockFilePath);
      expect(exists).toBe(true);
    });

    it('should have updated lock file with new package versions', () => {
      const exists = fs.existsSync(lockFilePath);
      expect(exists).toBe(true);

      if (exists) {
        const lockContent = fs.readFileSync(lockFilePath, 'utf-8');

        // Check for axios 1.13.5 or higher in lock file
        expect(lockContent).toMatch(/axios[@/]1\.13\.[5-9]|axios[@/]1\.1[4-9]\.|axios[@/]1\.[2-9]\d\.|axios[@/][2-9]\./);
      }
    });
  });

  describe('Security Vulnerability Mitigation', () => {
    it('should not have HIGH severity vulnerabilities in critical dependencies', () => {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

      // axios should be patched (>=1.13.5)
      const axiosVersion = packageJson.dependencies?.axios?.replace(/[\^~]/, '');
      const [major, minor, patch] = axiosVersion.split('.').map(Number);

      const isAxiosPatched =
        major > 1 ||
        (major === 1 && minor > 13) ||
        (major === 1 && minor === 13 && patch >= 5);

      expect(isAxiosPatched).toBe(true);
    });

    it('should have critical dev dependencies updated', () => {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

      // pnpm should be patched (>=10.28.2)
      const pnpmVersion = packageJson.devDependencies?.pnpm?.replace(/[\^~]/, '');
      const [major, minor, patch] = pnpmVersion.split('.').map(Number);

      const isPnpmPatched =
        major > 10 ||
        (major === 10 && minor > 28) ||
        (major === 10 && minor === 28 && patch >= 2);

      expect(isPnpmPatched).toBe(true);
    });
  });

  describe('Deferred Updates Documentation', () => {
    it('should document that streamdown and vitest updates are deferred', () => {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

      // These should NOT be updated yet (deferred as per plan)
      const streamdownVersion = packageJson.dependencies?.streamdown;
      const vitestVersion = packageJson.devDependencies?.vitest;

      // streamdown should still be 1.x (not 2.x)
      expect(streamdownVersion).toMatch(/^[\^~]?1\./);

      // vitest should still be 2.x (not 4.x)
      expect(vitestVersion).toMatch(/^[\^~]?2\./);
    });
  });
});
