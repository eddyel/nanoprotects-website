// netlify/functions/contact.js
import nodemailer from 'nodemailer';

// ===========================================
// 1. RÉCUPÉRATION FORCÉE DES VARIABLES D'ENVIRONNEMENT
// ===========================================
const NOREPLY_EMAIL = process.env.NOREPLY_EMAIL || 'contact@nanoprotects.com';
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@nanoprotects.com';
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;

// ===========================================
// 2. CONFIGURATION SMTP
// ===========================================
let transporter = null;

if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '587'),
    secure: SMTP_PORT === '465',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

// ===========================================
// 3. TRADUCTIONS POUR EMAILS MULTILINGUES
// ===========================================
const translations = {
  fr: {
    subject: 'Confirmation - NanoProtects',
    greeting: 'Bonjour {name},',
    thanks: 'Merci pour votre demande. Nous vous répondrons dans les plus brefs délais.',
    details: 'Récapitulatif :',
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    city: 'Ville',
    country: 'Pays',
    materials: 'Matériaux',
    zones: 'Zones',
    protections: 'Protections',
    message: 'Message',
    regards: 'Cordialement,',
    team: "L'équipe NanoProtects",
  },
  ar: {
    subject: 'تأكيد - نانو بروتيكتس',
    greeting: 'مرحبًا {name}،',
    thanks: 'شكرًا لك على طلبك. سنرد عليك في أقرب وقت.',
    details: 'ملخص طلبك:',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    city: 'المدينة',
    country: 'البلد',
    materials: 'المواد',
    zones: 'المناطق',
    protections: 'الحماية',
    message: 'رسالتك',
    regards: 'مع التحية،',
    team: 'فريق نانو بروتيكتس',
  },
  es: {
    subject: 'Confirmación - NanoProtects',
    greeting: 'Hola {name},',
    thanks: 'Gracias por su solicitud. Le responderemos pronto.',
    details: 'Resumen:',
    name: 'Nombre',
    email: 'Email',
    phone: 'Teléfono',
    city: 'Ciudad',
    country: 'País',
    materials: 'Materiales',
    zones: 'Zonas',
    protections: 'Protecciones',
    message: 'Mensaje',
    regards: 'Atentamente,',
    team: 'El equipo de NanoProtects',
  },
  en: {
    subject: 'Confirmation - NanoProtects',
    greeting: 'Hello {name},',
    thanks: 'Thank you for your request. We will get back to you soon.',
    details: 'Summary:',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    city: 'City',
    country: 'Country',
    materials: 'Materials',
    zones: 'Zones',
    protections: 'Protections',
    message: 'Message',
    regards: 'Best regards,',
    team: 'The NanoProtects Team',
  },
};

// ===========================================
// 4. FONCTION PRINCIPALE (HANDLER)
// ===========================================
export const handler = async (event) => {
  // Vérification de la méthode HTTP
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse du body JSON
    const data = JSON.parse(event.body);

    const {
      name = '',
      email = '',
      phone = '',
      city = '',
      country = '',
      materials = [],
      zones = [],
      protections = [],
      autreMateriau = '',
      message = '',
      language = 'fr',
    } = data;

    // Validation minimale
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Champs requis manquants' }),
      };
    }

    // Formatage des listes
    const materialsList = Array.isArray(materials) 
      ? materials.join(', ') 
      : (materials || 'Aucun');
    
    const zonesList = Array.isArray(zones) 
      ? zones.join(', ') 
      : (zones || 'Aucune');
    
    const protectionsList = Array.isArray(protections) 
      ? protections.join(', ') 
      : (protections || 'Aucune');

    // Sélection de la langue
    const t = translations[language] || translations.fr;

    // ===========================================
    // 5. CONSTRUCTION DES EMAILS
    // ===========================================
    
    // Email ADMIN (français, tous les détails)
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #A33215;">Nouvelle demande de diagnostic</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; background: #f5f5f5;"><strong>Nom :</strong></td><td style="padding: 8px;">${name}</td></tr>
            <tr><td style="padding: 8px; background: #f5f5f5;"><strong>Email :</strong></td><td style="padding: 8px;">${email}</td></tr>
            <tr><td style="padding: 8px; background: #f5f5f5;"><strong>Téléphone :</strong></td><td style="padding: 8px;">${phone}</td></tr>
            <tr><td style="padding: 8px; background: #f5f5f5;"><strong>Ville :</strong></td><td style="padding: 8px;">${city}</td></tr>
            <tr><td style="padding: 8px; background: #f5f5f5;"><strong>Pays :</strong></td><td style="padding: 8px;">${country}</td></tr>
            <tr><td style="padding: 8px; background: #f5f5f5;"><strong>Matériaux :</strong></td><td style="padding: 8px;">${materialsList}</td></tr>
            <tr><td style="padding: 8px; background: #f5f5f5;"><strong>Zones :</strong></td><td style="padding: 8px;">${zonesList}</td></tr>
            <tr><td style="padding: 8px; background: #f5f5f5;"><strong>Protections :</strong></td><td style="padding: 8px;">${protectionsList}</td></tr>
            ${autreMateriau ? `<tr><td style="padding: 8px; background: #f5f5f5;"><strong>Autre matériau :</strong></td><td style="padding: 8px;">${autreMateriau}</td></tr>` : ''}
            <tr><td style="padding: 8px; background: #f5f5f5;"><strong>Message :</strong></td><td style="padding: 8px;">${message.replace(/\n/g, '<br>')}</td></tr>
          </table>
          
          <p style="margin-top: 20px; color: #666; font-size: 0.9em;">
            Reçu le ${new Date().toLocaleString('fr-FR')}<br>
            Langue du visiteur : ${language}
          </p>
        </body>
      </html>
    `;

    // Email CLIENT (multilingue)
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background: #A33215; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">NanoProtects</h1>
          </div>
          
          <div style="padding: 30px 20px;">
            <h2 style="color: #A33215;">${t.greeting.replace('{name}', name.split(' ')[0])}</h2>
            
            <p>${t.thanks}</p>
            
            <h3 style="margin-top: 30px; color: #A33215;">${t.details}</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; background: #f5f5f5;"><strong>${t.name} :</strong></td><td style="padding: 8px;">${name}</td></tr>
              <tr><td style="padding: 8px; background: #f5f5f5;"><strong>${t.email} :</strong></td><td style="padding: 8px;">${email}</td></tr>
              <tr><td style="padding: 8px; background: #f5f5f5;"><strong>${t.phone} :</strong></td><td style="padding: 8px;">${phone}</td></tr>
              <tr><td style="padding: 8px; background: #f5f5f5;"><strong>${t.city} :</strong></td><td style="padding: 8px;">${city}</td></tr>
              <tr><td style="padding: 8px; background: #f5f5f5;"><strong>${t.country} :</strong></td><td style="padding: 8px;">${country}</td></tr>
              <tr><td style="padding: 8px; background: #f5f5f5;"><strong>${t.materials} :</strong></td><td style="padding: 8px;">${materialsList}</td></tr>
              <tr><td style="padding: 8px; background: #f5f5f5;"><strong>${t.zones} :</strong></td><td style="padding: 8px;">${zonesList}</td></tr>
              <tr><td style="padding: 8px; background: #f5f5f5;"><strong>${t.protections} :</strong></td><td style="padding: 8px;">${protectionsList}</td></tr>
              ${autreMateriau ? `<tr><td style="padding: 8px; background: #f5f5f5;"><strong>Autre matériau :</strong></td><td style="padding: 8px;">${autreMateriau}</td></tr>` : ''}
              <tr><td style="padding: 8px; background: #f5f5f5;"><strong>${t.message} :</strong></td><td style="padding: 8px;">${message.replace(/\n/g, '<br>')}</td></tr>
            </table>
            
            <p style="margin-top: 30px;">
              ${t.regards}<br>
              <strong>${t.team}</strong>
            </p>
          </div>
          
          <div style="background: #f5f5f5; padding: 15px; text-align: center; font-size: 0.8em; color: #666;">
            &copy; ${new Date().getFullYear()} NanoProtects
          </div>
        </body>
      </html>
    `;

    // ===========================================
    // 6. ENVOI DES EMAILS
    // ===========================================
    if (transporter) {
      // ✅ EXPÉDITEUR FORCÉ À NOREPLY_EMAIL
      const mailOptions = { 
        from: `"NanoProtects" <${NOREPLY_EMAIL}>`  // ← ICI LA CORRECTION
      };

      // Email à l'admin
      await transporter.sendMail({
        ...mailOptions,
        to: CONTACT_EMAIL,
        subject: `Nouvelle demande - ${name}`,
        html: adminEmailHtml,
      });

      // Email au client
      await transporter.sendMail({
        ...mailOptions,
        to: email,
        subject: t.subject,
        html: userEmailHtml,
      });

      console.log('✅ Emails envoyés avec succès');
    } else {
      console.warn('⚠️ SMTP non configuré - emails non envoyés');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        emailSent: !!transporter 
      }),
    };

  } catch (error) {
    console.error('❌ Erreur fonction contact:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Erreur lors du traitement',
        details: error.message 
      }),
    };
  }
};
