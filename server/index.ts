import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@nanoprotects.com";
const NOREPLY_EMAIL = process.env.NOREPLY_EMAIL || "noreply@nanoprotects.com";
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const hasSmtp = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

function buildConfirmationSubject(lang: string): string {
  const subjects: Record<string, string> = {
    fr: "Confirmation de votre demande - NanoProtects",
    ar: "تأكيد طلبك - NanoProtects",
    es: "Confirmación de su solicitud - NanoProtects",
    en: "Confirmation of your request - NanoProtects",
  };
  return subjects[lang] || subjects.fr;
}

function buildConfirmationBody(
  lang: string,
  data: {
    name: string;
    email: string;
    phone: string;
    materials: string[];
    autreMateriau?: string;
    zones: string[];
    protectionTypes: string[];
    ville: string;
    message: string;
    submittedAt: string;
  }
): string {
  const fullName = data.name.trim();
  const materialDisplay =
    data.materials.length > 0
      ? data.materials.join(", ") + (data.autreMateriau ? ` (${data.autreMateriau})` : "")
      : "-";
  const villeDisplay = data.ville || "-";

  const blocks: Record<string, string> = {
    fr: `
Bonjour ${fullName},

Nous avons bien reçu votre demande de contact. Voici un récapitulatif des informations transmises :

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RÉCAPITULATIF DE VOTRE DEMANDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Date : ${data.submittedAt}

👤 VOS COORDONNÉES
  • Nom complet : ${fullName}
  • Email : ${data.email}
  • Téléphone : ${data.phone}

📍 LOCALISATION
  • Ville : ${villeDisplay}

🏗️ PROJET
  • Type de matériau : ${materialDisplay}
  • Description :
${data.message || "(Aucun message)"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Notre équipe reviendra vers vous dans les plus brefs délais (généralement sous 24-48h ouvrées).

Pour toute question urgente, n'hésitez pas à nous contacter directement :
📧 Email : ${CONTACT_EMAIL}

Cordialement,
L'équipe NanoProtects

---
NanoProtects - Excellence en Protection Nanotechnologique
www.nanoprotects.com
`,
    en: `
Hello ${fullName},

We have received your contact request. Here is a summary of the information you sent:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUMMARY OF YOUR REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Date: ${data.submittedAt}

👤 YOUR DETAILS
  • Full name: ${fullName}
  • Email: ${data.email}
  • Phone: ${data.phone}

📍 LOCATION
  • City: ${villeDisplay}

🏗️ PROJECT
  • Material type: ${materialDisplay}
  • Description:
${data.message || "(No message)"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Our team will get back to you as soon as possible (usually within 24-48 business hours).

For any urgent questions, please contact us directly:
📧 Email: ${CONTACT_EMAIL}

Best regards,
The NanoProtects Team

---
NanoProtects - Excellence in Nanotechnology Protection
www.nanoprotects.com
`,
    es: `
Hola ${fullName},

Hemos recibido su solicitud de contacto. Aquí tiene un resumen de la información enviada:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESUMEN DE SU SOLICITUD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Fecha: ${data.submittedAt}

👤 SUS DATOS
  • Nombre completo: ${fullName}
  • Email: ${data.email}
  • Teléfono: ${data.phone}

📍 UBICACIÓN
  • Ciudad: ${villeDisplay}

🏗️ PROYECTO
  • Tipo de material: ${materialDisplay}
  • Descripción:
${data.message || "(Sin mensaje)"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nuestro equipo le responderá lo antes posible (normalmente en 24-48 horas laborables).

Para cualquier consulta urgente, contáctenos directamente:
📧 Email: ${CONTACT_EMAIL}

Atentamente,
El equipo NanoProtects

---
NanoProtects - Excelencia en Protección Nanotecnológica
www.nanoprotects.com
`,
    ar: `
مرحبا ${fullName},

لقد استلمنا طلب الاتصال الخاص بك. إليك ملخص المعلومات المرسلة:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ملخص طلبك
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 التاريخ: ${data.submittedAt}

👤 بياناتك
  • الاسم الكامل: ${fullName}
  • البريد الإلكتروني: ${data.email}
  • الهاتف: ${data.phone}

📍 الموقع
  • المدينة: ${villeDisplay}

🏗️ المشروع
  • نوع المادة: ${materialDisplay}
  • الوصف:
${data.message || "(لا يوجد رسالة)"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

سيعود فريقنا إليك في أقرب وقت ممكن (عادة خلال 24-48 ساعة عمل).

لأي استفسارات عاجلة، يرجى الاتصال بنا مباشرة:
📧 البريد الإلكتروني: ${CONTACT_EMAIL}

مع أطيب التحيات،
فريق NanoProtects

---
NanoProtects - التميز في الحماية النانوية
www.nanoprotects.com
`,
  };
  return (blocks[lang] || blocks.fr).trim();
}

function buildAdminNotificationBody(data: {
  name: string;
  email: string;
  phone: string;
  materials: string[];
  autreMateriau?: string;
  zones: string[];
  protectionTypes: string[];
  ville: string;
  message: string;
  submittedAt: string;
}): string {
  const materialDisplay =
    data.materials.length > 0
      ? data.materials.join(", ") + (data.autreMateriau ? ` (Autre: ${data.autreMateriau})` : "")
      : "-";
  return `
New contact form submission - ${data.submittedAt}

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
City: ${data.ville}
Materials: ${materialDisplay}
Zones: ${data.zones.join(", ") || "-"}
Protection types: ${data.protectionTypes.join(", ") || "-"}

Message:
${data.message || "(none)"}
`.trim();
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.json());
  app.use(express.static(staticPath));

  app.post("/api/contact", async (req, res) => {
    try {
      const body = req.body as {
        name?: string;
        email?: string;
        phone?: string;
        materials?: string[];
        autreMateriau?: string;
        zones?: string[];
        protectionTypes?: string[];
        ville?: string;
        message?: string;
        language?: string;
      };
      const name = String(body.name ?? "").trim();
      const email = String(body.email ?? "").trim();
      const phone = String(body.phone ?? "").trim();
      const materials = Array.isArray(body.materials) ? body.materials : [];
      const autreMateriau = body.autreMateriau != null ? String(body.autreMateriau).trim() : "";
      const zones = Array.isArray(body.zones) ? body.zones : [];
      const protectionTypes = Array.isArray(body.protectionTypes) ? body.protectionTypes : [];
      const ville = String(body.ville ?? "").trim();
      const message = String(body.message ?? "").trim();
      const language = String(body.language ?? "fr").toLowerCase().slice(0, 2);
      const lang = ["fr", "ar", "es", "en"].includes(language) ? language : "fr";

      const submittedAt = new Date().toLocaleString("fr-FR", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      const payload = {
        name,
        email,
        phone,
        materials,
        autreMateriau,
        zones,
        protectionTypes,
        ville,
        message,
        submittedAt,
      };

      if (hasSmtp) {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: SMTP_PORT,
          secure: SMTP_PORT === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        // 1. Email to NanoProtects
        await transporter.sendMail({
          from: NOREPLY_EMAIL,
          to: CONTACT_EMAIL,
          replyTo: email || undefined,
          subject: `Nouvelle demande de contact - ${name}`,
          text: buildAdminNotificationBody(payload),
        });

        // 2. Confirmation email to user (do not block on failure)
        try {
          await transporter.sendMail({
            from: `NanoProtects <${NOREPLY_EMAIL}>`,
            to: email,
            replyTo: CONTACT_EMAIL,
            subject: buildConfirmationSubject(lang),
            text: buildConfirmationBody(lang, payload),
            headers: { "Content-Type": "text/plain; charset=UTF-8" },
          });
        } catch (err) {
          console.error("Failed to send confirmation email to user:", err);
        }
      } else {
        console.log("Contact form submission (no SMTP):", JSON.stringify(payload, null, 2));
      }

      res.status(200).json({ ok: true, message: "Demande envoyée" });
    } catch (err) {
      console.error("Contact API error:", err);
      res.status(500).json({ ok: false, message: "Erreur serveur" });
    }
  });

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
