// Netlify Function: contact
// Sends SMTP email notification to admin + confirmation email to user
// Requires env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL, NOREPLY_EMAIL

import nodemailer from 'nodemailer';

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@nanoprotects.com';
const NOREPLY_EMAIL = process.env.NOREPLY_EMAIL || 'noreply@nanoprotects.com';
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const hasSmtp = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

function buildAdminEmailText(data) {
  const materialDisplay =
    data.materials
      ? data.materials + (data.autreMateriau ? ` (${data.autreMateriau})` : '')
      : '-';

  return `Nouvelle demande de contact — NanoProtects
=========================================

• Nom        : ${data.name || '-'}
• Email      : ${data.email || '-'}
• Téléphone  : ${data.phone || '-'}
• Ville      : ${data.city || '-'}
• Matériaux  : ${materialDisplay}
• Zones      : ${data.zones || '-'}
• Protections: ${data.protections || '-'}
• Message    : ${data.message || '(aucun)'}

Reçu le : ${new Date().toLocaleString('fr-FR', { dateStyle: 'medium', timeStyle: 'short' })}
`;
}

function buildConfirmationSubject(lang) {
  const subjects = {
    fr: 'Confirmation de votre demande — NanoProtects',
    ar: 'تأكيد طلبك — NanoProtects',
    es: 'Confirmación de su solicitud — NanoProtects',
    en: 'Confirmation of your request — NanoProtects',
  };
  return subjects[lang] || subjects.fr;
}

function buildConfirmationText(lang, data) {
  const name = data.name || '';
  const materialDisplay =
    data.materials
      ? data.materials + (data.autreMateriau ? ` (${data.autreMateriau})` : '')
      : '-';

  const lines = {
    fr: `Bonjour ${name},

Nous avons bien reçu votre demande. Voici le récapitulatif :

• Nom        : ${name}
• Email      : ${data.email || '-'}
• Téléphone  : ${data.phone || '-'}
• Ville      : ${data.city || '-'}
• Matériaux  : ${materialDisplay}
• Zones      : ${data.zones || '-'}
• Protections: ${data.protections || '-'}
• Message    : ${data.message || '(aucun)'}

Notre équipe vous répondra sous 24-48h ouvrées.
Pour toute urgence : ${CONTACT_EMAIL}

Cordialement,
L'équipe NanoProtects
---
NanoProtects – Excellence en Protection Nanotechnologique
www.nanoprotects.com`,

    ar: `مرحبا ${name}،

لقد استلمنا طلبك. إليك الملخص:

• الاسم       : ${name}
• البريد       : ${data.email || '-'}
• الهاتف      : ${data.phone || '-'}
• المدينة      : ${data.city || '-'}
• المواد       : ${materialDisplay}
• المناطق      : ${data.zones || '-'}
• الحمايات     : ${data.protections || '-'}
• الرسالة      : ${data.message || '(لا توجد)'}

سيتصل بك فريقنا خلال 24-48 ساعة عمل.
لأي استفسار عاجل: ${CONTACT_EMAIL}

مع أطيب التحيات،
فريق NanoProtects`,

    es: `Hola ${name},

Hemos recibido su solicitud. Resumen:

• Nombre      : ${name}
• Email       : ${data.email || '-'}
• Teléfono    : ${data.phone || '-'}
• Ciudad      : ${data.city || '-'}
• Materiales  : ${materialDisplay}
• Zonas       : ${data.zones || '-'}
• Protecciones: ${data.protections || '-'}
• Mensaje     : ${data.message || '(ninguno)'}

Nuestro equipo le responderá en 24-48 horas hábiles.
Para urgencias: ${CONTACT_EMAIL}

Atentamente,
El equipo de NanoProtects`,

    en: `Hello ${name},

We have received your request. Summary:

• Name        : ${name}
• Email       : ${data.email || '-'}
• Phone       : ${data.phone || '-'}
• City        : ${data.city || '-'}
• Materials   : ${materialDisplay}
• Zones       : ${data.zones || '-'}
• Protections : ${data.protections || '-'}
• Message     : ${data.message || '(none)'}

Our team will reply within 24-48 business hours.
For urgent matters: ${CONTACT_EMAIL}

Best regards,
The NanoProtects Team`,
  };

  return lines[lang] || lines.fr;
}

export const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ ok: false, message: 'Method not allowed' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ ok: false, message: 'Invalid JSON' }) };
  }

  const data = {
    name: String(body.name || '').trim(),
    email: String(body.email || '').trim(),
    phone: String(body.phone || '').trim(),
    city: String(body.city || '').trim(),
    materials: String(body.materials || '').trim(),
    zones: String(body.zones || '').trim(),
    protections: String(body.protections || '').trim(),
    autreMateriau: String(body.autreMateriau || '').trim(),
    message: String(body.message || '').trim(),
    language: String(body.language || 'fr').slice(0, 2).toLowerCase(),
  };

  const lang = ['fr', 'ar', 'es', 'en'].includes(data.language) ? data.language : 'fr';

  if (!hasSmtp) {
    console.log('Contact form (no SMTP configured):', JSON.stringify(data, null, 2));
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true, message: 'Reçu (SMTP non configuré)' }),
    };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  // Send admin notification
  try {
    await transporter.sendMail({
      from: NOREPLY_EMAIL,
      to: CONTACT_EMAIL,
      subject: `Nouvelle demande — ${data.name || 'Inconnu'}`,
      text: buildAdminEmailText(data),
    });
  } catch (err) {
    console.error('Admin email failed:', err);
  }

  // Send user confirmation
  if (data.email) {
    try {
      await transporter.sendMail({
        from: NOREPLY_EMAIL,
        to: data.email,
        subject: buildConfirmationSubject(lang),
        text: buildConfirmationText(lang, data),
      });
    } catch (err) {
      console.error('Confirmation email failed:', err);
    }
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ ok: true, message: 'Emails envoyés' }),
  };
};
