import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multi-language email subject/greeting templates
const emailTemplates: Record<string, { subject: string; greeting: string; closing: string }> = {
  fr: {
    subject: 'Confirmation de votre demande - NanoProtects',
    greeting: 'Bonjour',
    closing: 'Nous vous contacterons dans les 24 heures.',
  },
  en: {
    subject: 'Confirmation of your request - NanoProtects',
    greeting: 'Hello',
    closing: 'We will contact you within 24 hours.',
  },
  es: {
    subject: 'Confirmacion de su solicitud - NanoProtects',
    greeting: 'Hola',
    closing: 'Le contactaremos dentro de las 24 horas.',
  },
  ar: {
    subject: 'تأكيد طلبك - NanoProtects',
    greeting: 'مرحبا',
    closing: 'سنتواصل معك خلال 24 ساعة.',
  },
};

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Parse JSON bodies
  app.use(express.json({ limit: '1mb' }));

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Contact form API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, materials, zones, protectionTypes, ville, message, language } = req.body;

      // Basic server-side validation
      if (!name || !email || !phone) {
        res.status(400).json({ error: "Name, email, and phone are required" });
        return;
      }

      const lang = (language && emailTemplates[language]) ? language : 'fr';
      const template = emailTemplates[lang];

      // Log the submission (in production, replace with email service like Nodemailer/SendGrid)
      console.log(`[Contact Form] New submission from ${name} (${email})`);
      console.log(`  Language: ${lang}`);
      console.log(`  Phone: ${phone}`);
      console.log(`  City: ${ville}`);
      console.log(`  Materials: ${materials?.join(', ')}`);
      console.log(`  Zones: ${zones?.join(', ')}`);
      console.log(`  Protection Types: ${protectionTypes?.join(', ')}`);
      console.log(`  Message: ${message}`);
      console.log(`  Email subject would be: ${template.subject}`);

      // TODO: Integrate with email service (Nodemailer, SendGrid, etc.)
      // For now, respond with success so the frontend flow works
      res.json({
        success: true,
        message: "Form submission received",
        emailSubject: template.subject,
      });
    } catch (error) {
      console.error("[Contact Form] Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Handle client-side routing - serve index.html for all non-API routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
