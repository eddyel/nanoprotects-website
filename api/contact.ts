import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

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
    fr: `Bonjour ${fullName},

Nous avons bien reçu votre demande de contact. Voici un récapitulatif des informations transmises :

\u2022 Nom complet : ${fullName}
\u2022 Email : ${data.email}
\u2022 Téléphone : ${data.phone}
\u2022 Ville : ${villeDisplay}
\u2022 Matériaux : ${materialDisplay}
\u2022 Zones : ${data.zones.join(", ") || "-"}
\u2022 Types de protection : ${data.protectionTypes.join(", ") || "-"}
\u2022 Message : ${data.message || "(Aucun message)"}

Notre équipe reviendra vers vous dans les plus brefs délais (généralement sous 24-48h ouvrées).

Pour toute question urgente, n'hésitez pas à nous contacter directement : ${CONTACT_EMAIL}

Cordialement,
L'équipe NanoProtects

---
NanoProtects – Excellence en Protection Nanotechnologique
www.nanoprotects.com`,

    ar: `مرحبا ${fullName}،

لقد استلمنا طلبك. إليك ملخص المعلومات المرسلة:

• الاسم الكامل: ${fullName}
• البريد الإلكتروني: ${data.email}
• الهاتف: ${data.phone}
• المدينة: ${villeDisplay}
• المواد: ${materialDisplay}
• المناطق: ${data.zones.join("، ") || "-"}
• أنواع الحماية: ${data.protectionTypes.join("، ") || "-"}
• الرسالة: ${data.message || "(لا توجد رسالة)"}

سيعود فريقنا إليك في أقرب وقت ممكن (عادة خلال 24-48 ساعة عمل).

لأي أسئلة عاجلة، لا تتردد في الاتصال بنا مباشرة: ${CONTACT_EMAIL}

مع أطيب التحيات،
فريق NanoProtects

---
NanoProtects – التميز في الحماية بتقنية النانو
www.nanoprotects.com`,

    es: `Hola ${fullName},

Hemos recibido su solicitud de contacto. He aquí un resumen de la información enviada:

• Nombre completo: ${fullName}
• Email: ${data.email}
• Teléfono: ${data.phone}
• Ciudad: ${villeDisplay}
• Materiales: ${materialDisplay}
• Zonas: ${data.zones.join(", ") || "-"}
• Tipos de protección: ${data.protectionTypes.join(", ") || "-"}
• Mensaje: ${data.message || "(No message)"}

Nuestro equipo se pondrá en contacto con usted lo antes posible (generalmente en un plazo de 24-48 horas laborables).

Para cualquier pregunta urgente, no dude en contactarnos directamente: ${CONTACT_EMAIL}

Atentamente,
El equipo de NanoProtects

---
NanoProtects – Excelencia en Protección Nanotecnológica
www.nanoprotects.com`,

    en: `Hello ${fullName},

We have received your contact request. Here is a summary of the information you sent:

• Full name: ${fullName}
• Email: ${data.email}
• Phone: ${data.phone}
• City: ${villeDisplay}
• Materials: ${materialDisplay}
• Zones: ${data.zones.join(", ") || "-"}
• Protection types: ${data.protectionTypes.join(", ") || "-"}
• Message: ${data.message || "(No message)"}

Our team will get back to you as soon as possible (usually within 24-48 business hours).

For any urgent questions, please contact us directly: ${CONTACT_EMAIL}

Best regards,
The NanoProtects Team

---
NanoProtects – Excellence in Nanotechnology Protection
www.nanoprotects.com`,
  };
  return blocks[lang] || blocks.fr;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

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
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      try {
        await transporter.sendMail({
          from: NOREPLY_EMAIL,
          to: CONTACT_EMAIL,
          subject: `Nouvelle demande de contact - ${name}`,
          text: `Nouvelle demande de contact:\n\n${JSON.stringify(payload, null, 2)}`,
          headers: { "Content-Type": "text/plain; charset=UTF-8" },
        });
      } catch (err) {
        console.error("Failed to send notification email:", err);
      }

      try {
        await transporter.sendMail({
          from: NOREPLY_EMAIL,
          to: email,
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
}
