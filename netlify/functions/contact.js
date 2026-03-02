// netlify/functions/contact.js
import nodemailer from 'nodemailer';

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  CONTACT_EMAIL,
  NOREPLY_EMAIL,
} = process.env;

let transporter = null;
if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '587'),
    secure: SMTP_PORT === '465',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

const translations = {
  fr: {
    subject: 'Confirmation - NanoProtects',
    greeting: 'Bonjour {name},',
    thanks: 'Merci pour votre demande. Nous vous répondrons dans les plus brefs délais.',
    details: 'Récapitulatif :',
    name: 'Nom', email: 'Email', phone: 'Téléphone',
    city: 'Ville', country: 'Pays',
    materials: 'Matériaux', zones: 'Zones', protections: 'Protections',
    message: 'Message',
    regards: 'Cordialement,', team: 'L\'équipe NanoProtects',
  },
  ar: {
    subject: 'تأكيد - نانو بروتيكتس',
    greeting: 'مرحبًا {name}،',
    thanks: 'شكرًا لك على طلبك. سنرد عليك في أقرب وقت.',
    details: 'ملخص طلبك:',
    name: 'الاسم', email: 'البريد', phone: 'الهاتف',
    city: 'المدينة', country: 'البلد',
    materials: 'المواد', zones: 'المناطق', protections: 'الحماية',
    message: 'رسالتك',
    regards: 'مع التحية،', team: 'فريق نانو بروتيكتس',
  },
  es: {
    subject: 'Confirmación - NanoProtects',
    greeting: 'Hola {name},',
    thanks: 'Gracias por su solicitud. Le responderemos pronto.',
    details: 'Resumen:',
    name: 'Nombre', email: 'Email', phone: 'Teléfono',
    city: 'Ciudad', country: 'País',
    materials: 'Materiales', zones: 'Zonas', protections: 'Protecciones',
    message: 'Mensaje',
    regards: 'Atentamente,', team: 'El equipo de NanoProtects',
  },
  en: {
    subject: 'Confirmation - NanoProtects',
    greeting: 'Hello {name},',
    thanks: 'Thank you for your request. We will get back to you soon.',
    details: 'Summary:',
    name: 'Name', email: 'Email', phone: 'Phone',
    city: 'City', country: 'Country',
    materials: 'Materials', zones: 'Zones', protections: 'Protections',
    message: 'Message',
    regards: 'Best regards,', team: 'The NanoProtects Team',
  },
};

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const data = JSON.parse(event.body);
    const {
      name = '', email = '', phone = '', city = '', country = '',
      materials = [], zones = [], protections = [], autreMateriau = '',
      message = '', language = 'fr',
    } = data;

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Champs requis manquants' }) };
    }

    const materialsList = Array.isArray(materials) ? materials.join(', ') : (materials || 'Aucun');
    const zonesList = Array.isArray(zones) ? zones.join(', ') : (zones || 'Aucune');
    const protectionsList = Array.isArray(protections) ? protections.join(', ') : (protections || 'Aucune');
    const t = translations[language] || translations.fr;

    const adminEmailHtml = `<!DOCTYPE html><body style="font-family:Arial;color:#333;">
      <h2 style="color:#A33215;">Nouvelle demande</h2>
      <table>${Object.entries({ name, email, phone, city, country, 'Matériaux': materialsList, Zones: zonesList, Protections: protectionsList, autreMateriau, message }).filter(([_, v]) => v).map(([k, v]) => `<tr><td style="padding:4px;background:#f5f5f5;"><strong>${k}:</strong></td><td style="padding:4px;">${v}</td></tr>`).join('')}</table>
      <p style="color:#666;">Reçu le ${new Date().toLocaleString('fr-FR')}<br>Langue: ${language}</p>
    </body>`;

    const userEmailHtml = `<!DOCTYPE html><body style="font-family:Arial;color:#333;max-width:600px;margin:0 auto;">
      <div style="background:#A33215;color:white;padding:20px;text-align:center;"><h1>NanoProtects</h1></div>
      <div style="padding:20px;"><h2 style="color:#A33215;">${t.greeting.replace('{name}', name.split(' ')[0])}</h2>
      <p>${t.thanks}</p><h3>${t.details}</h3><table>${Object.entries({ [t.name]: name, [t.email]: email, [t.phone]: phone, [t.city]: city, [t.country]: country, [t.materials]: materialsList, [t.zones]: zonesList, [t.protections]: protectionsList, 'Autre matériau': autreMateriau, [t.message]: message }).filter(([_, v]) => v).map(([k, v]) => `<tr><td style="padding:4px;background:#f5f5f5;"><strong>${k}:</strong></td><td style="padding:4px;">${v}</td></tr>`).join('')}</table>
      <p>${t.regards}<br><strong>${t.team}</strong></p></div>
      <div style="background:#f5f5f5;padding:10px;text-align:center;">&copy; ${new Date().getFullYear()} NanoProtects</div>
    </body>`;

    if (transporter) {
      const mailOptions = { from: `"NanoProtects" <${NOREPLY_EMAIL || SMTP_USER}>` };
      await transporter.sendMail({ ...mailOptions, to: CONTACT_EMAIL || SMTP_USER, subject: `Nouvelle demande - ${name}`, html: adminEmailHtml });
      await transporter.sendMail({ ...mailOptions, to: email, subject: t.subject, html: userEmailHtml });
    }

    return { statusCode: 200, body: JSON.stringify({ success: true, emailSent: !!transporter }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
